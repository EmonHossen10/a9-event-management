import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ServiceDetails = () => {
  const { id } = useParams();
  const allData = useLoaderData();
  console.log(id, allData);
  const single = allData.find((item) => item.id == id);

  const { name, image, price, description } = single;

  return (
    <div>
      <Navbar></Navbar>

      <div className="card w-10/12 my-10  mx-auto bg-base-100 shadow-xl image-full">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title md:text-3xl text-orange-300 mb-5 lg:text-5xl font-bold">
            {name}
          </h2>
          <p className="text-sm">{description}</p>
          <p className="md:text-3xl font-bold text-green-400">Price: ${price}</p>
          <div className="card-actions justify-end">
            <button  className="btn  btn-info">Enroll</button> 
         <Link to="/" > <button className="btn btn-accent">Go Home</button></Link>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ServiceDetails;
