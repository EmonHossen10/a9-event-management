import { useEffect, useState } from "react";
import SingleClient from "./SingleClient";

const ClientReview = () => {
  const [client, setClient] = useState([]);

  useEffect(() => {
    fetch("client.json")
      .then((res) => res.json())
      .then((data) => setClient(data));
  }, []);
  return (
    <div className="font-roboto">
      <h2 className="md:text-5xl text-2xl text-center md:my-10 my-5 font-bold ">
        Clients Review
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:gap-20 md:gap-10 w-10/12  md:w-8/12 mx-auto">
        {client.map((item) => (
          <SingleClient key={item.id} item={item}></SingleClient>
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
