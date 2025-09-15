import { useMemo, useState } from "react";
import { Player } from "./components/Player";
import { PlaylistSelector } from "./components/PlaylistSelector";
import { PlayerProgressBar } from "./components/PlayerProgressBar";
import { PlayerControls } from "./components/PlayerControls";
import Tracks from "./assets/tracks.json";
import type { track } from "./types/track";
import type { progress } from "./types/progress";

const App = () => {
  const tracks = useMemo(() => {
    const data = Tracks as track[];

    if (!Array.isArray(data)) return [];
    return data.filter((t: track) => t && t.title && t.videoId);
  }, []);

  // 再生する動画の状態管理
  const [currentIndex, setCurrentIndex] = useState<number>(0);  
  const currentVideoId = tracks[currentIndex].videoId;

  // 再生状態の管理
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // 動画音量の管理
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);

  // 動画進捗の管理
  const [progress, setProgress] = useState<progress>({
    played: 0,
    playedSeconds: 0,
    loaded: 0,
    loadedSeconds: 0
  });
  const [duration, setDuration] = useState<number>(0); 
  
  // オーバーレイの管理
  const [showOverlay, setShowOverlay] = useState<boolean>(true);

  // Player から動画の終了通知
  const handleVideoEnded = () => {
    const nextIndex = currentIndex >= tracks.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  // PlaylistSelector からの動画選択通知
  const handleVideoSelect = (videoId: string) => {    
    const selectedIndex = tracks.findIndex((t: track) => t.videoId === videoId);

    if (selectedIndex !== -1) {
      setCurrentIndex(selectedIndex);
      setIsPlaying(true);
    }
  }

  // 動画の再生・停止
  const handlePlayVideo = () => {
    setIsPlaying(!isPlaying);
  }
  // 前の動画を再生
  const handlePlayPrevVideo = () => {
    const prevIndex = currentIndex === 0 ? tracks.length - 1 : currentIndex - 1;    
    setCurrentIndex(prevIndex);
  }
  // 次の動画を再生
  const handlePlayNextVideo = () => {
    const nextIndex = currentIndex >= tracks.length - 1 ? 0 : currentIndex + 1;    
    setCurrentIndex(nextIndex);
  }
  // 動画のミュートを切り替え
  const handleMuteVideo = () => {    
    setIsMuted(!isMuted);
  }
  // 動画の音量（デフォルト0.5）
  const handleVideoVolume = (value: number) => {
    if (value < 0 || value > 1) {
      value = 0.5;
    }
    setVolume(value);
  }
  // 動画の進捗更新
  const handleProgress = (progressData: progress) => {        
    setProgress(progressData);    
  }

  // 動画の総時間の取得
  const handleDuration = (duration: number) => {    
    setDuration(duration);
  }

  // 動画オーバーレイの切り替え
  const handleOverlay = () => {
    setShowOverlay(!showOverlay);
  }

  return (
    <div className="player-container flex flex-col lg:flex-row h-full backdrop-blur-2xl bg-white/5 shadow-2xl border border-white/10 rounded-2xl">
      <div className="left-panel
        w-full h-1/2 
        lg:w-1/2 lg:h-full 
        overflow-y-auto
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-neutral-700
        [&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <PlaylistSelector 
          tracks={tracks} 
          selectedVideoId={currentVideoId} 
          onSelect={handleVideoSelect} 
        />
      </div>
      <div className="right-panel w-full h-1/2 lg:w-1/2 lg:h-full flex flex-col">
        <div className="flex-1">
        <Player 
          isPlaying={isPlaying}
          isMuted={isMuted}
          volume={volume}
          videoId={currentVideoId}
          showOverlay={showOverlay}
          onVideoEnded={handleVideoEnded} 
          onVideoProgress={handleProgress}
          onVideoDuration={handleDuration}      
        />
        </div>
        <PlayerProgressBar
          progress={progress}
          duration={duration}
        />
        <PlayerControls 
          isPlaying={isPlaying} 
          play={handlePlayVideo} 
          isMuted={isMuted}
          mute={handleMuteVideo}
          volume={volume}
          showOverlay={showOverlay}
          toggleOverlay={handleOverlay}
          setVolume={handleVideoVolume}
          playPrev={handlePlayPrevVideo} 
          playNext={handlePlayNextVideo}          
         />
      </div>
    </div>
  );
};

export default App;
