

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex w-full p-2 bg-white shadow-md">
      <div className="flex flex-grow items-center justify-between px-2 py-2 shadow-2 md:px-6 2xl:px-11">
        <div className="hidden sm:block ">
          <h2 className="font-bold text-lg">Welcome to Dashboard</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
