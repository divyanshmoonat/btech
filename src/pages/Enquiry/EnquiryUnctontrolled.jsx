import { useRef } from "react";

const EnquiryUncontrolled = () => {
  return (
    <div>
      <h3>Uncontrolled enquiry Form - refs</h3>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" type="text" />
        </div>
        <div>
          <label htmlFor="mobNo">Mobile No</label>
          <input name="mobNo" id="mobNo" type="text" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default EnquiryUncontrolled;
