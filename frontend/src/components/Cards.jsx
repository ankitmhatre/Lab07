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
      <div  style={{
 marginBottom :'8px',
 marginTop :'8px'
      }}
        className="col-1 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
        <div className="card h-100 ">
          <img src={props.img} className="card-img-top" alt="spagetti maker" />

          <div style={{
        padding :'24px'
      }}
      >
          <h5 className="card-title">
          <span style={{ 
           lineClamp: 2,
           fontWeight :'bold'
            }}>{props.title}</span></h5>
          <p className="card-text">
          <span style={{fontWeight :'normal', letterSpacing :'-1px'}}>

          {props.tagline}
          </span></p>
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
           
              <img src={props.img} className="card-img-top" alt="spagetti maker" />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleClose} className="btn-success" variant="primary">
                  Buy for {props.price}
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal>
        </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
