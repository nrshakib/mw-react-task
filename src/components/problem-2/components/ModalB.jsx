import { Link } from "react-router-dom";
import useContacts from "../hooks/useContacts";

const ModalB = ({ closeModal }) => {
  const [contacts] = useContacts([]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{ textAlign: "center" }}>US Contacts</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Country</th>
            <th scope="col">Contact</th>
          </tr>
        </thead>
        {contacts.map((contact) => {
          if (contact.country.name === "United States") {
            return (
              <tbody key={contact.id}>
                <tr>
                  <td>{contact.id}</td>
                  <td>{contact.country.name}</td>
                  <td>{contact.phone}</td>
                </tr>
              </tbody>
            );
          }
        })}
      </table>
      <div className="modal-buttons d-flex justify-content-center gap-3">
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
            className="btn btn-lg "
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

export default ModalB;
