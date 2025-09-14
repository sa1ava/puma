
// 動画の経過時間や総時間を表示するための時間フォーマット
export const formatTime = (seconds: number): string => {
  if (!seconds || Number.isNaN(seconds)) return '0:00';

  const totalSeconds = Math.floor(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSecods = totalSeconds % 60;

  return `${minutes}:${remainingSecods.toString().padStart(2, '0')}`;
}