import CardModal from "./CardModal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
const Cards = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-1 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
        <div className="card h-100 ">
          <img src={props.img} className="card-img-top" alt="spagetti maker" />
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <p className="card-text">Price: {props.price}</p>
          {/* This should popup on new window inside modal when clicked */}
          <button className="btn btn-info" onClick={handleShow}>
            More Information
          </button>
          {/* Not working */}

          <Modal show={show} onHide={handleClose}>
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>{props.desc}</p>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={handleClose} variant="primary">
                  Okay, Close
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Cards;
