const Modal1 = () => {
  return (
    <>
      <button
        className="button_1"
        onClick={() => document.getElementById("modal_1").showModal()}
      >
        Modal
      </button>

    <div className="box">
    <dialog id="modal_1" className="modal_1">
        <div className="modal_box_1">
          <h3 className="modal_title_1">Hello!</h3>
          <p className="modal_paragraph_1">
            Chiqish uchun close tugmasini bosing.
          </p>
          <form method="dialog">
            <button className="modal_button_1">close</button>
          </form>
        </div>
      </dialog>
    </div>
    </>
  );
};

export default Modal1;


