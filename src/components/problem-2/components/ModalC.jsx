const ModalC = ({ closeModal }) => {
  return (
    <div className="">
      <h2>Contact Details</h2>
      <div>
        <p>Modal C</p>
      </div>
      <div className="modal-buttons">
        <button
          className="btn btn-lg btn-outline-primary"
          onClick={() => console.log("Modal Button A")}
        >
          All Contacts
        </button>
        <button onClick={() => console.log("Modal Button B")}>
          US Contacts
        </button>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default ModalC;
