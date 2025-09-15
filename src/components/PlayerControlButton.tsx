
interface PlayerControlButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  size?: string;
  titleText?: string;
}

export const PlayerControlButton = ({ onClick, children, size = "w-15 h-15", titleText }: PlayerControlButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center justify-center
        backdrop-blur bg-white/10 border-0 rounded-full
        ${size}
        cursor-pointer transition-all duration-300 ease-in-out
        hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl
      `}
      {...(titleText ? { title: titleText } : {})}
    >
      {children}
    </div>
  );
}
