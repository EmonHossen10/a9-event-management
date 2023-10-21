import { Link } from "react-router-dom";

 
const SingleService = ({ service }) => {
  const { id, name, image, price, description } = service;
  return (
    <div className="card  font-roboto bg-sky-100 shadow-xl ">
      <figure>
        <img
        className="h-[300px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title  text-2xl">{name}</h2>
        <p> {description.length>200 ? description.slice(0,100) : description} ...</p>
        <div className="card-actions justify-end">
            <p className="font-bold ">Price: ${price}</p>
         <Link to={`service/${id}`} > <button className="btn  btn-info ">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
