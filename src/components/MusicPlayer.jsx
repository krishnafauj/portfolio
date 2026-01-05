import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music, X, GripVertical } from 'lucide-react';

// 1. IMPORT YOUR SONGS
import song1 from '../assets/songs/song1.mp3'; 
import song2 from '../assets/songs/song2.mp3';
import song3 from '../assets/songs/song3.mp3';

// 2. IMPORT YOUR IMAGES (Make sure these paths exist)
import image1 from '../assets/images/image1.png'; 
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';

// 3. UPDATE PLAYLIST OBJECT
const playlist = [
  { title: "Destiny", artist: "Unknown", src: song1, img: image1 },
  { title: "Choo lo", artist: "Local Train", src: song2, img: image2 },
  { title: "River Flows in You", artist: "Yiruma", src: song3, img: image3 },
];

const MusicPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // --- DRAG STATE ---
  const [position, setPosition] = useState({ x: 20, y: 100 }); 
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  // --- REF FOR CLICK OUTSIDE DETECTION ---
  const wrapperRef = useRef(null);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  // --- CLICK OUTSIDE LOGIC ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isOpen) return;
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // --- DRAG HANDLERS ---
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const newX = e.clientX - dragStartRef.current.x;
      const newY = e.clientY - dragStartRef.current.y;
      const maxX = window.innerWidth - 50; 
      const maxY = window.innerHeight - 50;
      setPosition({ x: newX, y: Math.max(0, Math.min(maxY, newY)) });
    };
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
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

  return (
    <div 
      ref={wrapperRef}
      className="fixed z-50 flex items-start select-none"
      style={{ left: `${position.x}px`, top: `${position.y}px`, cursor: isDragging ? 'grabbing' : 'auto' }}
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
        onMouseDown={handleMouseDown}
        className="bg-gray-800 text-gray-400 p-2 rounded-l-lg cursor-grab hover:text-white flex items-center justify-center h-10 shadow-lg border-r border-gray-700"
      >
        <GripVertical size={18} />
      </div>

      {/* CLOSED STATE */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 h-10 text-white px-3 rounded-r-md flex items-center group shadow-md hover:bg-blue-700 transition-all"
        >
          {isPlaying ? (
             <div className="flex gap-1 items-end h-3 mr-2">
               <div className="w-1 bg-white animate-bounce h-full"></div>
               <div className="w-1 bg-white animate-bounce h-2" style={{animationDelay: '0.2s'}}></div>
             </div>
          ) : <Music size={16} />}
          
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all text-xs whitespace-nowrap">
            {isPlaying ? "Now Playing..." : "Music Player"}
          </span>
        </button>
      )}

      {/* OPEN STATE (Player + Playlist) */}
      {isOpen && (
        <div className="bg-gray-900 text-white rounded-r-xl shadow-2xl w-80 border border-gray-800 overflow-hidden">
          
          {/* PLAYLIST SECTION */}
          <div className="bg-gray-800/50 p-3 max-h-60 overflow-y-auto border-b border-gray-700 custom-scrollbar">
            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Up Next</p>
            <div className="space-y-1">
              {playlist.map((song, index) => (
                <div 
                  key={index}
                  onClick={() => { setCurrentSongIndex(index); setIsPlaying(true); }}
                  className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors ${
                    currentSongIndex === index ? 'bg-blue-600/20 border border-blue-500/30' : 'hover:bg-gray-700'
                  }`}
                >
                  {/* 4. NEW: Small Image in Playlist */}
                  <img 
                    src={song.img} 
                    alt="art" 
                    className={`w-8 h-8 rounded object-cover ${currentSongIndex === index ? 'opacity-100' : 'opacity-70'}`} 
                  />
                  
                  <div className="flex-1 truncate">
                    <p className={`text-xs truncate ${currentSongIndex === index ? 'text-blue-400 font-bold' : 'text-gray-200'}`}>
                      {song.title}
                    </p>
                    <p className="text-[10px] text-gray-500 truncate">{song.artist}</p>
                  </div>
                  
                  {currentSongIndex === index && isPlaying && (
                      <div className="flex gap-0.5 items-end h-3">
                          <div className="w-0.5 bg-blue-500 animate-bounce" style={{animationDuration: '0.5s'}}></div>
                          <div className="w-0.5 bg-blue-500 animate-bounce" style={{animationDuration: '0.8s'}}></div>
                          <div className="w-0.5 bg-blue-500 animate-bounce" style={{animationDuration: '0.6s'}}></div>
                      </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* PLAYER CONTROLS SECTION */}
          <div className="p-4">
            {/* 5. NEW: Header with Large Image */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <img 
                    src={playlist[currentSongIndex].img} 
                    alt="Current" 
                    className="w-12 h-12 rounded-md object-cover shadow-lg border border-gray-700" 
                />
                <div className="truncate">
                    <h3 className="font-bold text-sm truncate">{playlist[currentSongIndex].title}</h3>
                    <p className="text-gray-400 text-[11px]">{playlist[currentSongIndex].artist}</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>

            <input 
              type="range" min="0" max={duration} value={currentTime} 
              onChange={(e) => { audioRef.current.currentTime = e.target.value; setCurrentTime(e.target.value); }}
              className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500 mb-1"
            />
            <div className="flex justify-between text-[9px] text-gray-500 mb-4">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            <div className="flex justify-center items-center gap-6">
              <button onClick={playPrev}><SkipBack size={18} className="text-gray-400 hover:text-white" /></button>
              <button onClick={togglePlay} className="bg-blue-600 p-2.5 rounded-full hover:scale-110 transition active:scale-95 shadow-lg shadow-blue-900/20">
                {isPlaying ? <Pause size={18} fill="white" /> : <Play size={18} fill="white" />}
              </button>
              <button onClick={playNext}><SkipForward size={18} className="text-gray-400 hover:text-white" /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;