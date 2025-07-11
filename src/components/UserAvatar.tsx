interface UserAvatarProps {
  src: string;
}

const UserAvatar = ({ src }: UserAvatarProps) => {
  return (
    <img
      src={src}
      alt="User Avatar"
      className="w-10 h-10 rounded-full border-2 border-white"
    />
  );
};

export default UserAvatar;
