import { BsFillPlayFill, BsFillPauseFill, BsSkipBackwardFill, BsSkipForwardFill, BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";

interface PlayerControlsProps {
  isPlaying: boolean;
  play: () => void;
  isMuted: boolean;
  mute: () => void;
  volume: number;
  setVolume: (value: number) => void;
  playPrev: () => void;
  playNext: () => void;
};

export const PlayerControls = ({ 
  isPlaying, play, 
  isMuted, mute,
  volume, setVolume,
  playPrev, 
  playNext 
}: PlayerControlsProps) => {

  return (
    <div>
      <div className="control-prev" onClick={() => playPrev()}>
        <BsSkipBackwardFill size={50} />
      </div>
      <div className="control-play" onClick={() => play()}>
        {isPlaying ? <BsFillPauseFill size={50} /> : <BsFillPlayFill size={50} />}
      </div>
      <div className="control-next" onClick={() => playNext()}>
        <BsSkipForwardFill size={50} />      
      </div>
      <div className="control-mute" onClick={() => mute()}>
        {isMuted ? <BsFillVolumeMuteFill size={50} /> : <BsFillVolumeUpFill size={50} /> }
      </div>
      <div>
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={volume}
          onChange={(event) => {setVolume(event.target.valueAsNumber)}}
        />
        <span>{volume}</span>
      </div>

    </div>
  );
}