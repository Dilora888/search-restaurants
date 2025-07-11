import Logo from "./Logo";
import UserAvatar from "./UserAvatar";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <Logo />
      <UserAvatar src="images.jpeg" />
    </header>
  );
};

export default Header;
