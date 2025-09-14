import ReactPlayer from "react-player";
import { BsMusicNoteBeamed } from "react-icons/bs"
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
    <div className="album-art-container relative w-full h-[200px] overflow-hidden rounded-2xl p-8">
      <div className="album-art
        w-full h-full
        relative overflow-hidden
        cursor-pointer
        bg-gradient-to-br from-red-400 to-teal-400       
        rounded-2xl
      ">
        <ReactPlayer
          className="absolute top-0 left-0 w-full rounded-2xl opacity-0"
          src={`https://www.youtube.com/watch?v=${videoId}`} 
          width="100%"          
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
        <div className="album-overlay flex items-center justify-center h-full">
          <BsMusicNoteBeamed size={40} color="white" />
        </div>
      </div>
    </div>
  );
}