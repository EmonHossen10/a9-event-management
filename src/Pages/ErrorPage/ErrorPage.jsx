import { Link } from "react-router-dom";
 

const ErrorPage = () => {
    return (
        <div>
             <h2 className="font-roboto text-center font-bold mt-10 text-4xl text-red-600">This is not The correct Route</h2>
            <div className="flex flex-col md:flex-col lg:flex-row gap-5  items-center">
            <img className="mt-5 " src="https://i.ibb.co/3srzkM7/b8fb705699100d965d1ede440f63bd35.jpg" alt="" />
            <Link to="/" ><button className="btn btn-outline btn-info">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;