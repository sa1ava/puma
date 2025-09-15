import { formatTime } from "../utils/utils";
import type { track } from "../types/track";
import { BsMusicNote } from "react-icons/bs";

interface PlaylistSelectorProps {
  tracks: track[];
  selectedVideoId: string;
  onSelect: (playlistId: string) => void;
};

export const PlaylistSelector = ({ tracks, selectedVideoId, onSelect }: PlaylistSelectorProps) => {  
  const handleVideoIdChange = (trackId: string) => {
    onSelect(trackId);
  }

  return (
    <div className="playlist-selector p-8">
      <div className="playlist-header flex justify-between items-center mb-[20px] pb-[15px] border-b border-white/10">
        <div className="playlist-title text-lg font-bold text-[white]">プレイリスト</div>
        <div className="playlist-count text-sm text-white/60 bg-white/10 px-3 py-1 rounded-full">{tracks.length}曲</div>
      </div>
      <div className="playlist-container">
        {tracks.map((t: track) => (
          <div 
            className={`playlist-item
              ${selectedVideoId === t.videoId 
                ? "active bg-gradient-to-br from-red-400/30 to-teal-400/30 border border-white/30" 
                : "bg-white/5"} 
              flex items-center
              p-3 mb-2
               rounded-xl
              cursor-pointer
              transition-all duration-300 ease-in-out
              border border-transparent
              hover:bg-white/10 hover:translate-x-1 hover:border-white/20              
              `}            
            key={t.index} 
            onClick={() => handleVideoIdChange(t.videoId)}           
            >          
            <div className="
              playlist-item-thumbnail
              w-10 h-10 
              rounded-lg
              flex items-center justify-center
              flex-shrink-0 
              mr-3 
              overflow-hidden 
              bg-gradient-to-br from-red-400 to-teal-400
            ">           
              <BsMusicNote size={20} color="white"/> 
            </div>
              <div className="playlist-item-info flex-1 min-w-0">
                <div className="playlist-item-title text-sm font-medium text-white text-ellipsis whitespace-nowrap mb-1 overflow-hidden">{t.title}</div>
                <div className="playlist-item-artist text-xs text-white/60 text-ellipsis whitespace-nowrap overflow-hidden">{t.artist}</div>
              </div>
              <div className="playlist-item-duration text-xs text-white/50 font-mono ml-2">{formatTime(t.duration)}</div>
            </div>          
        ))}
      </div>    
    </div>
  );
}