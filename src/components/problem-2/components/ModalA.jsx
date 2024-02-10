import { useState } from "react";
import ModalC from "./ModalC.jsx";
import useContacts from "../hooks/useContacts.jsx";
import { Link } from "react-router-dom";

const ModalA = ({ closeModal }) => {
  const [showModalC, setShowModalC] = useState(false);
  const [checkEven, setCheckEven] = useState(false);
  const [contacts] = useContacts([]);

  const filterEven = (e) => {
    setCheckEven(e.target.checked);
  };
  const filteredContacts = checkEven
    ? contacts.filter((contact) => contact.id % 2 === 0)
    : contacts;
  const openModalC = () => {
    setShowModalC(true);
  };

  return (
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
      <h2 style={{ textAlign: "center" }}>All Contacts</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Country</th>
            <th scope="col">Contact</th>
          </tr>
        </thead>
        {filteredContacts.map((contact) => {
          return (
            <tbody key={contact.id}>
              <tr>
                <td>{contact.id}</td>
                <td>{contact.country.name}</td>
                <td>{contact.phone}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      {showModalC && <ModalC closeModal={() => setShowModalC(false)} />}
      <div className="modal-buttons d-flex justify-content-center gap-3">
        <div className="d-flex gap-1 align-items-center">
          <input
            type="checkbox"
            id="even"
            checked={checkEven}
            onChange={filterEven}
          />
          <label htmlFor="even">Only Even</label>
        </div>
        <Link to="/problem-2/all-contacts">
          <button
            className="btn btn-lg"
            style={{
              backgroundColor: "#46139f",
              borderColor: "46139f",
              color: "white",
            }}
          >
            All Contacts
          </button>
        </Link>
        <Link to="/problem-2/us-contacts">
          <button
            className="btn btn-lg "
            style={{
              backgroundColor: "#ff7f50",
              borderColor: "white",
              color: "white",
            }}
          >
            US Contacts
          </button>
        </Link>
        <Link to="/problem-2">
          <button
            className="btn btn-lg"
            style={{
              backgroundColor: "#46139f",
              borderColor: "46139f",
              color: "white",
            }}
            onClick={closeModal}
          >
            Close
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ModalA;
