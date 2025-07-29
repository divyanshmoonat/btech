import { useState } from "react";

const EnquiryControlled = () => {
  const [name, setName] = useState("");
  const [mobNo, setMobileNo] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);

  const onNameChange = (e) => {
    console.log("on name field change", e.target.value);
    // Max 12 chars are allowed
    if (e.target.value.length <= 12) {
      console.log("Less than 12 chars in name");
      setName(e.target.value);
      setNameError(false);
    } else {
      console.log("More than 12 chars in name");
      // Store error here
      setNameError(true);
    }
  };

  const onMobNoChange = (e) => {
    console.log("MobNo", e.target.value);
    setMobileNo(e.target.value);
  };
  const onMessageChange = (e) => {
    console.log("Message", e.target.value);
    setMessage(e.target.value);
  };

  return (
    <div>
      <h3>Controlled enquiry Form </h3>
      <form onSubmit={() => {}}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={onNameChange}
            name="name"
            id="name"
            type="text"
          />
          {nameError && (
            <span style={{ color: "red" }}>Name must contain max 12 chars</span>
          )}
        </div>
        <div>
          <label htmlFor="mobNo">Mobile No</label>
          <input
            value={mobNo}
            onChange={onMobNoChange}
            name="mobNo"
            id="mobNo"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            value={message}
            onChange={onMessageChange}
            name="message"
            id="message"
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default EnquiryControlled;
