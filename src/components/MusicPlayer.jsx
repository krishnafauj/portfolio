import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music, X, GripVertical } from 'lucide-react';

// IMPORTANT: Ensure these paths are correct in your project
import song1 from '../assets/songs/song1.mp3'; 
import song2 from '../assets/songs/song2.mp3';
import song3 from '../assets/songs/song3.mp3';

import image1 from '../assets/images/image1.png'; 
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';

const playlist = [
  { title: "Destiny", artist: "Unknown", src: song1, img: image1 },
  { title: "Choo lo", artist: "Local Train", src: song2, img: image2 },
  { title: "River Flows in You", artist: "Yiruma", src: song3, img: image3 },
];

const MusicPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 100 }); 
  const [isDragging, setIsDragging] = useState(false);
  
  // Refs
  const dragStartRef = useRef({ x: 0, y: 0 });
  const wrapperRef = useRef(null);
  const audioRef = useRef(null);

  // Audio State
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // --- BOUNDARY CHECK (Fixes the "Merged inside screen" issue) ---
  const adjustPositionWithinBounds = () => {
    if (!wrapperRef.current) return;

    const { innerWidth, innerHeight } = window;
    const { offsetWidth, offsetHeight } = wrapperRef.current;

    setPosition((prev) => {
      let newX = prev.x;
      let newY = prev.y;

      // Check Right Edge: Ensure it doesn't go off screen
      if (newX + offsetWidth > innerWidth) {
        newX = innerWidth - offsetWidth - 10; 
      }
      // Check Bottom Edge
      if (newY + offsetHeight > innerHeight) {
        newY = innerHeight - offsetHeight - 10;
      }
      // Check Left/Top Edge
      if (newX < 0) newX = 10;
      if (newY < 0) newY = 10;

      return { x: newX, y: newY };
    });
  };

  // Run boundary check whenever it opens or window resizes
  useEffect(() => {
    adjustPositionWithinBounds();
    window.addEventListener('resize', adjustPositionWithinBounds);
    return () => window.removeEventListener('resize', adjustPositionWithinBounds);
  }, [isOpen]); 

  // --- CLICK OUTSIDE LOGIC ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isOpen) return;
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // --- DRAG HANDLERS ---
  const handleDragStart = (e) => {
    setIsDragging(true);
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    dragStartRef.current = { 
      x: clientX - position.x, 
      y: clientY - position.y 
    };
  };

  useEffect(() => {
    const handleMove = (e) => {
      if (!isDragging || !wrapperRef.current) return;
      if (e.preventDefault) e.preventDefault(); 

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const newX = clientX - dragStartRef.current.x;
      const newY = clientY - dragStartRef.current.y;
      
      const elWidth = wrapperRef.current.offsetWidth;
      const elHeight = wrapperRef.current.offsetHeight;
      const maxX = window.innerWidth - elWidth; 
      const maxY = window.innerHeight - elHeight;
      
      setPosition({ 
        x: Math.max(0, Math.min(maxX, newX)), 
        y: Math.max(0, Math.min(maxY, newY)) 
      });
    };

    const handleEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleMove, { passive: false });
      window.addEventListener('touchend', handleEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  // --- AUDIO LOGIC ---
  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const playPrev = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
        audioRef.current.play().catch(e => console.log(e));
    }
  }, [currentSongIndex]);

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div 
      ref={wrapperRef}
      className="fixed z-50 flex items-start select-none"
      // Added max-width and dynamic positioning check in useEffect
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`, 
        cursor: isDragging ? 'grabbing' : 'auto',
        maxWidth: '95vw'
      }}
    >
      <audio 
        ref={audioRef} 
        src={playlist[currentSongIndex].src} 
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)} 
        onLoadedMetadata={() => setDuration(audioRef.current.duration)} 
        onEnded={playNext} 
      />

      {/* DRAG HANDLE */}
      <div 
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        className="bg-gray-800 text-gray-400 p-2 rounded-l-lg cursor-grab hover:text-white flex items-center justify-center h-10 border-r border-gray-700 touch-none shadow-lg"
        style={{ touchAction: 'none' }} 
      >
        <GripVertical size={18} />
      </div>

      {/* CLOSED STATE - RESTORED HOVER EFFECT */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          // 'group' class enables the hover effect on children
          className="bg-blue-600 h-10 text-white px-3 rounded-r-md flex items-center group shadow-md hover:bg-blue-700 transition-all overflow-hidden"
        >
          {isPlaying ? (
             <div className="flex gap-1 items-end h-3 mr-1">
               <div className="w-1 bg-white animate-bounce h-full"></div>
               <div className="w-1 bg-white animate-bounce h-2" style={{animationDelay: '0.2s'}}></div>
             </div>
          ) : <Music size={16} />}
          
          {/* This span width grows from 0 to 200px on hover */}
          <span className="max-w-0 group-hover:max-w-[200px] overflow-hidden transition-all duration-500 ease-in-out whitespace-nowrap text-sm ml-0 group-hover:ml-2">
            Soundtrack your visit
          </span>
        </button>
      )}

      {/* OPEN STATE */}
      {isOpen && (
        <div className="bg-gray-900 text-white rounded-r-xl shadow-2xl w-80 border border-gray-800 overflow-hidden flex flex-col">
             
             {/* Playlist Area */}
             <div className="bg-gray-800/50 p-3 max-h-60 overflow-y-auto border-b border-gray-700 custom-scrollbar">
                {playlist.map((song, index) => (
                    <div key={index} onClick={() => { setCurrentSongIndex(index); setIsPlaying(true); }} className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors ${currentSongIndex === index ? 'bg-blue-600/20 border border-blue-500/30' : 'hover:bg-gray-700'}`}>
                        <img src={song.img} alt="art" className={`w-8 h-8 rounded object-cover ${currentSongIndex === index ? 'opacity-100' : 'opacity-70'}`} />
                        <div className="flex-1 truncate">
                            <p className={`text-xs truncate ${currentSongIndex === index ? 'text-blue-400 font-bold' : 'text-gray-200'}`}>{song.title}</p>
                            <p className="text-[10px] text-gray-500 truncate">{song.artist}</p>
                        </div>
                    </div>
                ))}
             </div>
             
             {/* Controls Area */}
             <div className="p-4">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <img src={playlist[currentSongIndex].img} alt="Current" className="w-12 h-12 rounded-md object-cover shadow-lg border border-gray-700" />
                        <div className="truncate">
                            <h3 className="font-bold text-sm truncate">{playlist[currentSongIndex].title}</h3>
                            <p className="text-gray-400 text-[11px]">{playlist[currentSongIndex].artist}</p>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors"><X size={16} /></button>
                </div>

                <div className="mb-4">
                    <input 
                        type="range" 
                        min="0" 
                        max={duration} 
                        value={currentTime} 
                        onChange={(e) => { audioRef.current.currentTime = e.target.value; setCurrentTime(e.target.value); }} 
                        className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer mb-1"
                        style={{
                            background: `linear-gradient(to right, #2563eb ${progressPercent}%, #374151 ${progressPercent}%)`
                        }}
                    />
                    <div className="flex justify-between text-[10px] text-gray-400 font-medium font-mono">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>

                <div className="flex justify-between items-center gap-6 px-2">
                    <button onClick={playPrev}><SkipBack size={20} className="text-gray-400 hover:text-white transition-transform active:scale-95" /></button>
                    <button onClick={togglePlay} className="bg-blue-600 p-3 rounded-full hover:bg-blue-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/30">
                        {isPlaying ? <Pause size={20} fill="white" /> : <Play size={20} fill="white" className="ml-0.5" />}
                    </button>
                    <button onClick={playNext}><SkipForward size={20} className="text-gray-400 hover:text-white transition-transform active:scale-95" /></button>
                </div>
             </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;