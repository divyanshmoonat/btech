import ReactDom from "react-dom";

const Modal = (props) => {
  console.log(props);
  return (
    <>
      {ReactDom.createPortal(
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "2px solid black",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={props.onClose}
            >
              X
            </span>
          </div>
          {props.children}
        </div>,
        document.getElementById("portal")
      )}
    </>
  );
};

export default Modal;
