
const Navbar= ({ coins }) => {
  return (
    <header>
      <div className="navbar bg-base-100">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content font-bold text-xl bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Fixture</a></li>
              <li><a href="#services">Teams</a></li>
              <li><a href="#contact">Schedules</a></li>
            </ul>
          </div>
          <a>
            <img src="asset/logo.png" alt="Site Logo" />
          </a>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2">
          <div className="hidden font-bold lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="border-pu font-bold p-2 bg-slate-300 rounded-lg">
            <a className="flex gap-1 text-xl">
              <span>{coins}</span> $coins
              <img className="w-6 h-6" src="asset/coins.png" alt="Coins Icon" />

            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
