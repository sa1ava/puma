import { BsFillPlayFill, BsFillPauseFill, BsFillSkipStartFill, BsFillSkipEndFill, BsFillVolumeUpFill, BsFillVolumeMuteFill, BsGithub, BsEyeFill, BsEyeSlashFill, BsMusicNoteList } from "react-icons/bs";
import { PlayerControlButton } from "./PlayerControlButton";
import { TRACKS_JSON_URL, GITHUB_REPOSITORY_URL } from "../utils/constants";

interface PlayerControlsProps {
  isPlaying: boolean;
  play: () => void;
  isMuted: boolean;
  mute: () => void;
  volume: number;
  setVolume: (value: number) => void;
  playPrev: () => void;
  playNext: () => void;
  showOverlay: boolean;
  toggleOverlay: () => void;
};

export const PlayerControls = ({ 
  isPlaying, play, 
  isMuted, mute,
  volume, setVolume,
  playPrev, 
  playNext,
  showOverlay,
  toggleOverlay
}: PlayerControlsProps) => {

  const controlIconSize = 25;
  const controlIconColor = "white";

  return (
    <div className="control-container px-8 mb-10">
    <div className="main-controls flex justify-center items-center gap-10 mb-6">      
      <PlayerControlButton
        onClick={playPrev}
        titleText="前の曲を再生">
        <BsFillSkipStartFill size={controlIconSize} color={controlIconColor} />      
      </PlayerControlButton>
      <PlayerControlButton 
        onClick={play}
        titleText={isPlaying ? "停止" : "再生"}>
        {isPlaying 
          ? <BsFillPauseFill size={controlIconSize} color={controlIconColor} />
          : <BsFillPlayFill size={controlIconSize} color={controlIconColor} />}
      </PlayerControlButton>
      <PlayerControlButton
        onClick={playNext}
        titleText="次の曲を再生">
        <BsFillSkipEndFill  size={controlIconSize} color={controlIconColor} />      
      </PlayerControlButton>
    </div>
    <div className="bottom-controls flex justify-between items-center">
      <div className="left-controls flex gap-5 items-center">
        <div className="control-mute" onClick={() => mute()}>
          {isMuted 
            ? <BsFillVolumeMuteFill size={controlIconSize} color="grey" /> 
            : <BsFillVolumeUpFill size={controlIconSize}  color="grey" /> }
        </div>
        <div className="flex items-center">
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={volume}
            onChange={(event) => {setVolume(event.target.valueAsNumber)}}
            className="w-30 h-1.5 bg-white/10 rounded-full outline-none cursor-pointer transition-all duration-200 appearance-none"
            title={`${volume}`}
          />          
        </div>      
      </div>
      <div className="right-controls flex gap-4">        
        <PlayerControlButton 
          onClick={toggleOverlay}
          size="w-8 h-8" 
          titleText={showOverlay ? "オーバーレイを非表示" : "オーバーレイを表示"}>        
          {showOverlay
            ? <BsEyeFill size={15} color={controlIconColor} />
            : <BsEyeSlashFill size={15} color={controlIconColor} />
          }          
        </PlayerControlButton>
        <PlayerControlButton 
          onClick={() => window.open(TRACKS_JSON_URL, "_blank")} 
          size="w-8 h-8"
          titleText="プレイリストの一覧">
          <BsMusicNoteList size={15} color={controlIconColor} />
        </PlayerControlButton>
        <PlayerControlButton 
          onClick={() => window.open(GITHUB_REPOSITORY_URL, "_blank")} 
          size="w-8 h-8"
          titleText="GitHub">
          <BsGithub size={15} color={controlIconColor} />
        </PlayerControlButton>
      </div>
    </div>
    </div>
  );
}