import Navbar from "../Navbar/Navbar";

const UpcomingCourse = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="font-roboto w-10/12 mx-auto mt-8">
        <h2 className="text-3xl  font-bold mb-5 ">
          Here will be added Our up coming Programs
        </h2>
        <img
          src="https://i.ibb.co/JyMMmRx/Best-C-Programming-Courses-For-Beginners.png"
          alt=""
        />
        <p className="mt-2 text-2xl text-orange-400">
          Be ready to buy the course{" "}
        </p>
      </section>
    </div>
  );
};

export default UpcomingCourse;
