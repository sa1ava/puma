import { formatTime } from "../utils/utils.ts";
import type { progress } from "../types/progress";

interface PlayerProgressBarProps {
  progress: progress;
  duration: number;
}

export const PlayerProgressBar = ({ progress, duration}: PlayerProgressBarProps) => {
  return (
    <div>
      <div        
        style={{
          width: "100%",
          height: "6px",
          backgroundColor: "#e0e0e0",
          borderRadius: "3px",
          overflow: "hidden",
          cursor: "pointer",
      }}>
        <div style={{
          width: `${progress.played * 100}%`,
          height: "100%",
          backgroundColor: "#007bff",
          transition: "width 0.1s ease",
        }} />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: "14px",
        color: "#666",
        marginBottom: "8px",
      }}>
        <span>{formatTime(progress.playedSeconds)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  )
}