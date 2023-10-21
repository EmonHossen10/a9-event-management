import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signInUSer, GoogleSignIn } = useContext(AuthContext);

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // reset
    setError("");
    setSuccess("");

    signInUSer(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Successfully Login.");
        toast("Successfully Login.");
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);

        console.error(error.message);
      });
  };

  /// google
  const handleGoogleLogin = () => {
    setError("");
    setSuccess("");
    GoogleSignIn()
      .then((result) => {
        console.log(result.user);
        setSuccess("Successfully Login.");
        toast("Successfully Login.");
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero font-roboto min-h-screen bg-base-200">
        <div className="hero-content flex-col  ">
          <h2 className="text-4xl font-bold">Please Login !!!</h2>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                Do not have an Account ?
                <Link to="/register" className="text-blue-600 font-bold">
                  {" "}
                  Register{" "}
                </Link>
              </p>
              <h2 onClick={handleGoogleLogin} className="btn btn-accent mt-4">
                Google Login
              </h2>
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
