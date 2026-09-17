import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, CheckCircle2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreCourses: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onExploreCourses,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);
  const [activeChapter, setActiveChapter] = useState(1);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Simulate video playback progress
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsPlaying(false);
          return 100;
        }
        return prev + 1;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const chapters = [
    { id: 1, time: '0:00', label: 'Why Theory is Not Enough in 2026' },
    { id: 2, time: '0:45', label: 'The 3 Pillars: LLMs, Agents, RAG' },
    { id: 3, time: '1:20', label: 'Inside the 1:1 Advisory Model' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#093530] border border-white/15 rounded-2xl shadow-2xl overflow-y-auto max-h-[92vh] text-white flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#062622]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c6f135] animate-pulse" />
            <h2 className="text-base font-semibold text-white">
              Watch Intro: Mastering Practical AI with Zack (2:00)
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Screen Area */}
        <div className="relative aspect-video bg-black/90 flex items-center justify-center overflow-hidden group">
          {/* Simulated Video Frame */}
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
            alt="Zack AI Masterclass Intro"
            className="w-full h-full object-cover filter brightness-75 transition-all"
            referrerPolicy="no-referrer"
          />

          {/* Overlay Dark Tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          {/* Center Play/Pause Overlay Icon */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-10 w-20 h-20 rounded-full bg-[#c6f135]/90 hover:bg-[#c6f135] text-[#0d2e29] flex items-center justify-center shadow-2xl transition-transform transform hover:scale-110 active:scale-95 focus:outline-none"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 fill-[#0d2e29]" />
            ) : (
              <Play className="w-8 h-8 fill-[#0d2e29] ml-1" />
            )}
          </button>

          {/* Presenter info floating badge */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="font-semibold text-white">Zack</span>
            <span className="text-white/60">• AI Practitioner & Instructor</span>
          </div>

          {/* Bottom Player Controls */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/95 to-transparent space-y-2">
            {/* Progress Bar */}
            <div 
              className="w-full h-2 bg-white/20 rounded-full overflow-hidden cursor-pointer relative"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newProgress = Math.round((clickX / rect.width) * 100);
                setProgress(newProgress);
              }}
            >
              <div 
                className="h-full bg-[#c6f135] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Time and Toggles */}
            <div className="flex items-center justify-between text-xs text-white/80">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-white"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span>{Math.floor((progress * 1.2) / 60)}:{(Math.floor((progress * 1.2) % 60)).toString().padStart(2, '0')} / 2:00</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider text-[#c6f135]">
                  1080p 60fps
                </span>
                <Maximize2 className="w-4 h-4 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Video Description & Chapter Jumps */}
        <div className="p-6 bg-[#093530] flex flex-col sm:flex-row gap-6 items-start justify-between">
          <div className="space-y-2 flex-1">
            <h3 className="text-base font-bold text-white">
              Building for Real-World AI Impact
            </h3>
            <p className="text-sm text-emerald-100/80 leading-relaxed">
              In this 2-minute overview, Zack explains why prompt snippets alone aren’t enough. Learn how to architect end-to-end AI applications, deploy self-healing autonomous agents, and leverage 1:1 consulting to fast-track production systems.
            </p>

            {/* Chapters */}
            <div className="pt-2 flex flex-wrap gap-2">
              {chapters.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    setActiveChapter(ch.id);
                    setProgress(ch.id === 1 ? 5 : ch.id === 2 ? 40 : 75);
                  }}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-colors flex items-center gap-1.5 ${
                    activeChapter === ch.id
                      ? 'bg-[#c6f135] text-[#0d2e29] border-[#c6f135] font-bold'
                      : 'bg-white/5 text-white/80 border-white/15 hover:bg-white/10'
                  }`}
                >
                  <span className="opacity-70">{ch.time}</span>
                  <span>{ch.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onExploreCourses();
              }}
              className="bg-[#c6f135] hover:bg-[#b8eb2a] text-[#0d2e29] font-bold text-sm px-6 py-3 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Explore All Courses</span>
            </button>
            <div className="text-[11px] text-emerald-200/70 text-center flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#c6f135]" />
              <span>30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
