export interface progress {
  // 再生済み割合
  played: number;
  // 再生済み秒数
  playedSeconds: number;
  // 読み込み済み割合
  loaded: number;
  // 読み込み済み秒数
  loadedSeconds: number;
}