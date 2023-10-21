import { useLoaderData } from "react-router-dom";
import SingleService from "./SingleService";

const TrainingServices = () => {
  const services = useLoaderData();
  // console.log(services)
  return (
    <div>
      <h2 className="md:text-5xl text-2xl font-bold font-roboto  text-center  my-5 md:my-10">
        Our Training Services{" "}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:my-16
      w-10/12 mx-auto gap-8
      ">
        {services &&
          services.map((service) => (
            <SingleService 
            key={service.id}
             service={service}
             ></SingleService>
          ))}
      </div>
    </div>
  );
};

export default TrainingServices;
