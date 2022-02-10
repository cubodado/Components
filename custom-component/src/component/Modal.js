import './Common.css';
import './Modal.css';

function Modal() {
  const openModal = () => {
    const modal = document.querySelector(".modal-popup");
    modal.classList.remove("hidden");
  };

  const closeModal = () => {
    const modal = document.querySelector(".modal-popup");
    modal.classList.add("hidden");
  };

  return (
    <div className="modal">
      <section className="title">
        <h1>Modal</h1>
      </section>
      <section className="border-box">
        <button className="modal-btn" onClick={ openModal }>Open Modal</button>
        <section className="modal-popup hidden">
          {/* 모달 밖 클릭할 때도 창 종료할 경우에는 아래 코드로 변경/실행 */}
          {/* <div className="modal-background" onClick={ closeModal }></div> */}
          <div className="modal-background"></div>
          <div className="modal-popup-content">
            <button className="close-btn" onClick={ closeModal }>X</button>
            <p id="modal-text">HELLO CODESTATES!</p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Modal;