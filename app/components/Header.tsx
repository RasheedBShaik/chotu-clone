import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <header className=" bg-[#B90F1A] text-white py-3 px-6 flex justify-between items-center shadow-md">
        <div></div>
      <div className="flex items-center space-x-2">
        <img className="h-8 w-auto" src="/images/logo.png" alt="Logo" />
        <h1 className="text-2xl font-bold tracking-tight">chotu</h1>
      </div>
      <div className="flex items-center">
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;