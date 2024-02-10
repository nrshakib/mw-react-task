import { useState } from "react";
import ModalC from "./ModalC";
import useContacts from "../hooks/useContacts";
import { Link } from "react-router-dom";

const ModalB = () => {
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
      </div>
    </div>
  );
};

export default ModalB;
