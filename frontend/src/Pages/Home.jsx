import "./Home.css";
import Cards from "../components/Cards";
import Data from "../backend/Data";
const Home = () => {
  return (
    <div className="container">
      <h3 className="text-center mt-5 text-uppercase">Spaghetti makers</h3>
      <div className="container py-4">
        <div className="row">
          {Data.products.map((item, index) => {
            return <Cards img={item.img} title={item.title} desc={item.desc} price={item.price}/>;
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
