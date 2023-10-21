import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import TrainingServices from "../Service/TrainingServices";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <TrainingServices></TrainingServices>
      <Footer></Footer>
    </div>
  );
};

export default Home;
