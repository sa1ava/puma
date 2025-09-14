import type { track } from "../types/track";


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
    <div>
      <h3>Tracks</h3>
      <div>
        {tracks.map((t: track) => (
          <div key={t.index} onClick={() => handleVideoIdChange(t.videoId)}>
            <span>{t.title}</span>
            {selectedVideoId === t.videoId && <span>再生中</span>}
          </div>
        ))}
      </div>
    </div>
  );
}