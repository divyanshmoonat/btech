const Enquiry = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const enquiryData = {
        name: e.target.name.value,
        mobNo: e.target.mobNo.value,
        message: e.target.message.value
    }
    console.log(enquiryData);
    // Call the API to send the data to the server
  };

  return (
    <div>
      <h3>Enquiry Form - events</h3>
      <form onSubmit={onFormSubmit}>
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

export default Enquiry;
