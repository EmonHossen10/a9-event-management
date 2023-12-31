import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast("User LogOut Successfully"))
      .catch((error) => console.error(error));
  };

  const nav = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-gray-200  font-semibold text-green-400 "
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-gray-200  font-semibold text-green-400 "
              : ""
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-gray-200  font-semibold text-green-400 "
              : ""
          }
          to="/upcoming"
        >
          Up Coming
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-lg ">
      <div className="navbar-start pt-[150px] md:pt-0 lg:pt-0 ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case md:text-xl text-sm ">
          Excellence Trainings
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-5 font-semibold px-1">{nav}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <section>
              <div className="flex flex-col">
                <span className="mr-5">{user.email}</span>
                <span>{user.displayName}</span>
              </div>
              <div className="avatar">
                <div className="w-10 mr-2 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
            </section>

            <button onClick={handleLogOut} className="btn btn-primary btn-sm">
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary btn-sm">Login</button>
          </Link>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
