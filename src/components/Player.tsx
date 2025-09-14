import ReactPlayer from "react-player";
import type { progress } from '../types/progress';

export interface PlayerProps {  
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  videoId: string;
  onVideoEnded: () => void; 
  onVideoProgress: (progress: progress) => void;
  onVideoDuration: (duration: number) => void;
};

export const Player = ({ isPlaying, isMuted, volume, videoId, 
  onVideoEnded, onVideoProgress, onVideoDuration }: PlayerProps) => {

  return (
    <div>
      <ReactPlayer
        src={`https://www.youtube.com/watch?v=${videoId}`} 
        width="280px"
        height="280px"
        controls={true}
        playing={isPlaying}
        muted={isMuted}
        volume={volume}        
        onEnded={() => {
          onVideoEnded();
        }}
        onTimeUpdate={(e: any) => {          
          onVideoProgress({
            played: e.target.currentTime / e.target.duration,
            playedSeconds: e.target.currentTime,
            loaded: 0,
            loadedSeconds: 0,
          })
        }}
        onDurationChange={(e: any) => {          
          onVideoDuration(e.target.duration);
        }}
      />
    </div>
  );
}