import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music, X, GripVertical } from 'lucide-react';

// ... (Your imports remain the same) ...

const MusicPlayer = () => {
  // ... (Your existing state setup remains the same) ...
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 100 }); 
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const wrapperRef = useRef(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  // --- CLICK OUTSIDE LOGIC (Same as before) ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isOpen) return;
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); // Add touch listener here too
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // --- UPDATED DRAG HANDLERS (Mobile + Desktop) ---
  
  // 1. Unified Start Handler
  const handleDragStart = (e) => {
    // Prevent default browser scrolling only for touch
    if (e.type === 'touchstart') {
      // We don't prevent default here immediately or buttons might break, 
      // but strictly on the grip handle, it's safer to just set the flag.
    }
    
    setIsDragging(true);
    
    // Get correct client coordinates (Touch or Mouse)
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    dragStartRef.current = { 
      x: clientX - position.x, 
      y: clientY - position.y 
    };
  };

  // 2. Unified Move & End Logic in useEffect
  useEffect(() => {
    const handleMove = (e) => {
      if (!isDragging) return;
      
      // On mobile, dragging usually scrolls the page. We must stop that.
      if (e.preventDefault) e.preventDefault(); 

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const newX = clientX - dragStartRef.current.x;
      const newY = clientY - dragStartRef.current.y;
      
      const maxX = window.innerWidth - 50; 
      const maxY = window.innerHeight - 50;
      
      setPosition({ x: newX, y: Math.max(0, Math.min(maxY, newY)) });
    };

    const handleEnd = () => setIsDragging(false);

    if (isDragging) {
      // Add Mouse Events
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleEnd);
      
      // Add Touch Events (passive: false is crucial for preventing scroll)
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

  // --- AUDIO LOGIC (Same as before) ---
  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };
  // ... (rest of audio logic) ...
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

      {/* --- UPDATED DRAG HANDLE --- */}
      {/* Added onTouchStart and touch-action-none */}
      <div 
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        className="bg-gray-800 text-gray-400 p-2 rounded-l-lg cursor-grab hover:text-white flex items-center justify-center h-10 shadow-lg border-r border-gray-700 touch-none"
        style={{ touchAction: 'none' }} // Crucial for mobile performance
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

      {/* OPEN STATE (Same as before) */}
      {isOpen && (
        <div className="bg-gray-900 text-white rounded-r-xl shadow-2xl w-80 border border-gray-800 overflow-hidden">
             {/* ... (Existing Playlist & Player UI Code) ... */}
             {/* Note: Ensure you include the playlist/controls JSX here as in your original code */}
             <div className="bg-gray-800/50 p-3 max-h-60 overflow-y-auto border-b border-gray-700 custom-scrollbar">
                {/* ... existing map ... */}
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
                <input type="range" min="0" max={duration} value={currentTime} onChange={(e) => { audioRef.current.currentTime = e.target.value; setCurrentTime(e.target.value); }} className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500 mb-1" />
                <div className="flex justify-between items-center gap-6">
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