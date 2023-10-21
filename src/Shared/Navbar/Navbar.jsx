import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <nav className="navbar  md:w-11/12 md:mx-auto flex-col items-center   md:flex-row md:justify-between md:bg-base-100 ">
        <div className="navbar-start">
          <h2 className="text-3xl text-blue-600 font-bold">Excellence Trainings</h2>
        </div>
        <div className="navbar-center ">
          <ul className=" flex flex-col md:flex-row  gap-2 menu-horizontal px-1 pt-5">
            {nav}
          </ul>
        </div>
       
      </nav>
    </div>
  );
};

export default Navbar;
