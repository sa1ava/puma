import { formatTime } from "../utils/utils.ts";
import type { progress } from "../types/progress";

interface PlayerProgressBarProps {
  progress: progress;
  duration: number;
}

export const PlayerProgressBar = ({ progress, duration}: PlayerProgressBarProps) => {
  return (
    <div className="progress-section px-8">
      <div className="progress-bar w-full h-[8px] rounded-sm relative cursor-pointer bg-black/10">
        <div 
          className="
            h-full 
            rounded-sm relative            
            bg-gradient-to-br from-red-400 to-teal-400
            transition-[width] duration-100 ease-in-out          
          "            
        style={{width: `${progress.played * 100}%`}} />
      </div>
      <div 
        className="time-info flex flex-between text-sm text-black/60 font-mono"
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "14px",
          color: "#666",
          marginBottom: "8px",
        }}>
        <span className="current-time">{formatTime(progress.playedSeconds)}</span>
        <span className="duration">{formatTime(duration)}</span>
      </div>
    </div>
  )
}