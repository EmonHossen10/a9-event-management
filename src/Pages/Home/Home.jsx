import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import BestSell from "../OthersPage/BestSell";
import ClientReview from "../OthersPage/ClientReview";
import TrainingServices from "../Service/TrainingServices";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <TrainingServices></TrainingServices>
      <BestSell></BestSell>
      <ClientReview></ClientReview>
      <Footer></Footer>
    </div>
  );
};

export default Home;
