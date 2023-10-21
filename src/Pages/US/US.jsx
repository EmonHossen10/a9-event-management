import Navbar from "../Navbar/Navbar";

const US = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="font-roboto my-10 w-10/12 mx-auto">
        <h2 className="text-4xl font-bold mb-3 ">About Our Training Website</h2>
        <p>
          Welcome to{" "}
          <span className="text-2xl font-bold text-orange-400">
            Excellence Trainings
          </span>{" "}
          , your go-to destination for high-quality training and professional
          development. At [Your Website Name], we are passionate about helping
          individuals and organizations reach their full potential through
          comprehensive training programs designed to enhance skills, boost
          knowledge, and drive success.
        </p>
      </section>
      <section className="font-roboto my-10 w-10/12 mx-auto">
        <h2 className="text-4xl font-bold mb-3 ">Our Mission:</h2>
        <p>
          Our mission is to empower individuals and businesses with the
          knowledge and skills they need to excel in their respective fields. We
          believe in the transformative power of education and its ability to
          unlock new opportunities, enhance careers, and drive innovation.
        </p>
      </section>

      <section className="font-roboto my-10 w-10/12 mx-auto">
        <h2 className="text-4xl font-bold mb-3 ">
          Why Choose Excellence Trainings :
        </h2>

        <li>
          Our courses are led by experienced instructors who are experts in
          their fields, ensuring you receive top-notch training.
        </li>
        <li>
          Explore a wide range of courses, from technical skills to soft skills,
          tailored to meet the evolving demands of today's workforce.
        </li>
        <li>
          Our interactive learning approach ensures that you are engaged and
          actively involved in the learning process.
        </li>
        <li>
          We offer flexible schedules and formats, allowing you to learn at your
          own pace and convenience.
        </li>
        <li>
          Many of our graduates have gone on to achieve great success in their
          careers, and their stories inspire us every day.
        </li>
      </section>

      <section className="font-roboto my-10 w-10/12 mx-auto">
        <h2 className="text-4xl font-bold mb-3 ">
          Join Us in Your Learning Journey:
        </h2>
        <p>
          We invite you to explore our course offerings, get to know our
          passionate instructors, and embark on a learning journey that can
          transform your career. Whether you are an individual looking to
          upskill or a business seeking tailored training solutions, [Your
          Website Name] is here to support your goals.
        </p>
      </section>
    </div>
  );
};

export default US;
