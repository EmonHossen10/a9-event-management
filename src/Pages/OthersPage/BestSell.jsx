import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";

const BestSell = () => {
  const data = useLoaderData();

  const show = data.filter((item) => item.id % 2 === 0);
  console.log(show)
    

  return (
    <div className="font-roboto" >

        <h2 className="text-5xl text-center mb-10 font-bold ">Our Best Selling Programme</h2>
      <Marquee  pauseOnHover speed={120} direction="left">
        {show.map((item) => (
          <div
            key={item.id}
            style={{ display: "inline-block", margin: "0 50px" }}
          >
           <Link to={`/service/${item.id}`} >
           <img
              className="w-[300px] h-[200px] mb-3"
              src={item.image}
              alt={item.text}
              width="100"
              height="100"
            />
           </Link>
            <p>{item.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BestSell;