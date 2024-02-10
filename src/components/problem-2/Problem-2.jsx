import { useState } from "react";
import ModalA from "./components/ModalA";
import ModalB from "./components/ModalB";
import { Link } from "react-router-dom";

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);

  const openModalA = () => {
    setShowModalA(true);
    setShowModalB(false);
    console.log("click A");
  };
  const openModalB = () => {
    setShowModalA(false);
    setShowModalB(true);
    console.log("click B");
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/problem-2/all-contacts">
            <button
              className="btn btn-lg btn-outline-primary"
              onClick={openModalA}
            >
              All Contacts
            </button>
          </Link>
          <Link to="/problem-2/us-contacts">
            <button
              className="btn btn-lg btn-outline-warning"
              onClick={openModalB}
            >
              US Contacts
            </button>
          </Link>
        </div>
      </div>
      {showModalA && <ModalA closeModal={() => setShowModalA(false)} />}
      {showModalB && <ModalB closeModal={() => setShowModalB(false)} />}
    </div>
  );
};

export default Problem2;
