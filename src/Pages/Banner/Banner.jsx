const Banner = () => {
  return (
    <>
      <section className="flex justify-between min-h-screen font-roboto items-center p-16 flex-col-reverse  lg:flex-row gap-5 bg-base-200">
        {/* Text part */}
        <div className="  lg:w-6/12 md:mx-auto">
          <h3 className="lg:text-5xl font-roboto text-3xl  font-bold lg:leading-snug ">
            <span className="font-bold text-blue-500">
              Best Training Programs
            </span>{" "}
            <br />
            in the Country
          </h3>

          <p className="text-4xl font-semibold mt-5">
            Get <span className="text-green-500">40% discount</span>{" "}
          </p>

          <p className="text-sm lg:w-9/12 my-3">
            A well-rounded training program incorporates several crucial
            elements to enhance its effectiveness and provide valuable learning
            experiences. Clear objectives, at the programs core, help
            participants understand what they can expect to achieve. Engaging
            content, presented through a variety of methods like multimedia,
            practical exercises, and real-world examples{" "}
          </p>
        </div>
        {/* image part */}
        <div className=" lg:w-5/12 mx-auto  ">
          <img
            src="https://i.ibb.co/1KH0xSF/istockphoto-1366428092-612x612.jpg"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Banner;
