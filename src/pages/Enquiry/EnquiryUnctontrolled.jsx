import { useRef } from "react";

const EnquiryUncontrolled = () => {

  const nameRef = useRef();
  const mobNoRef = useRef();
  const messageRef = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(nameRef.current.value)
    console.log(nameRef.current);
    const enquiryData = {
        name: nameRef.current.value,
        mobNo: mobNoRef.current.value,
        message: messageRef.current.value
    };
    // nameRef.current.style.backgroundColor = "blue";
    console.log(enquiryData);
  };

  return (
    <div>
      <h3>Uncontrolled enquiry Form - refs</h3>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input ref={nameRef} name="name" id="name" type="text" />
        </div>
        <div>
          <label htmlFor="mobNo">Mobile No</label>
          <input ref={mobNoRef} name="mobNo" id="mobNo" type="text" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea ref={messageRef} name="message" id="message" />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default EnquiryUncontrolled;
