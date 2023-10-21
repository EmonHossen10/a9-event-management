import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    // reset
    setError("");
    setSuccess("");

   
     

    // validation
    if (password.length < 6) {
        setError("Password should be at least 6 characters or longer");
        toast.error("Password should be at least 6 characters or longer")
        return;
      } else if (!/[A-Z]/.test(password)) {
        setError("Your password should have at least one upper Case");
        toast.error("Your password should have at least one upper Case")
        return;
      }else if ( !/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
        setError("Your password should have at least one Special character");
        toast.error("Your password should have at least one Special character")
        return;
      }
    

    // register function
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Successfully registered.");
        toast("Successfully registered.")
      })
      .catch((error) => {
        setError(error.message);
        console.error(error.message);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero font-roboto min-h-screen bg-base-200">
        <div className="hero-content flex-col  ">
          <h2 className="text-4xl font-bold">Please Register !!!</h2>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                Already have an account ?
                <Link to="/login" className="text-blue-600 font-bold">
                  {" "}
                  Login{" "}
                </Link>
              </p>
            </form>
            {error ? (
              <p className="text-red-600 p-5 text-xl font-semibold">{error}</p>
            ) : (
              <p className="text-green-600 p-5 text-xl font-semibold">
                {success}
              </p>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
