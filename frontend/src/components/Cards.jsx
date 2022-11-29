import CardModal from "./CardModal";

const Cards = (props) => {
  return (
    <>
      <div className="col-1 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
        <div className="card h-100 ">
          <img
            src={props.img}
            className="card-img-top"
            alt="spagetti maker"
          />
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <p className="card-text">Price: {props.price}</p>
          {/* This should popup on new window inside modal when clicked */}
          <button className="btn btn-info">More Information</button>
            {/* Not working */}
          < CardModal />
        </div>
      </div>
    </>
  );
};

export default Cards;
