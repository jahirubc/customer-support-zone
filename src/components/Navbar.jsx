const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      {/* LEFT SIDE */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Tickets</a></li>
            <li><a>Dashboard</a></li>
          </ul>
        </div>
        <a className="text-xl font-bold text-primary">
          Customer Support Zone
        </a>
      </div>
      {/* CENTER MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Tickets</a></li>
          <li><a>Dashboard</a></li>
        </ul>
      </div>
      {/* RIGHT SIDE BUTTON */}
      <div className="navbar-end">
        <button className="btn btn-primary">
          New Ticket
        </button>
      </div>
    </div>
  );
};

export default Navbar;