import { useState } from "react";

import axios from "axios";

const EnquiryControlledOptimized = () => {
  const initFormFields = {
    name: "",
    mobNo: "",
    message: "",
    enquiryDept: "",
    otherEnquiryDept: "",
  };
  const [enquiryFormFields, setEnquiryFormFields] = useState(initFormFields);

  const [nameError, setNameError] = useState(false);

  const onNameChange = (e) => {
    // console.log("on name field change", e.target.value);
    // Max 12 chars are allowed
    if (e.target.value.length <= 12) {
      // console.log("Less than 12 chars in name");
      // setName(e.target.value);
      setEnquiryFormFields({
        ...enquiryFormFields,
        name: e.target.value,
      });
      setNameError(false);
    } else {
      // console.log("More than 12 chars in name");
      // Store error here
      setNameError(true);
    }
  };

  const onInputChange = (e) => {
    console.log(e.target.id);
    const isValid = validateField(e.target.id, e.target.value);
    // if (isValid) {
    if (true) {
      setEnquiryFormFields({
        ...enquiryFormFields,
        [e.target.id]: e.target.value,
      });
    }
  };

  const validateField = (fieldName, fieldValue) => {
    //Todo: Write your validations here
    if (fieldName === "name") {
      // Validation for name
    } else if (fieldName === "mobNo") {
      // Validation for mob no
    }
  };

  const onEnquiryDeptChange = (e) => {
    // console.log("On enquiry dept change", e.target.value);
    setEnquiryFormFields({
      ...enquiryFormFields,
      enquiryDept: e.target.value,
    });
  };

  const onOtherDeptNameChange = (e) => {
    setEnquiryFormFields({
      ...enquiryFormFields,
      otherEnquiryDept: e.target.value,
    });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(enquiryFormFields);
    // Todo : Call the API to send the collected data

    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(res.data);
    

    // try {
    //   const res = await axios.post(
    //     "https://jsonplaceholder.typicode.com/posts",
    //     enquiryFormFields,
    //     {
    //       headers: {
    //         Client_id: "ABCD12345",
    //       },
    //     }
    //   );
    //   console.log(res.data);
    //   alert(
    //     "Enquiry submitted successfully, our team will reach out to you soon."
    //   );
    //   setEnquiryFormFields(initFormFields);
    // } catch (err) {
    //   console.log("Error calling API", err);
    // }

    axios
      .post("https://jsonplaceholder.typicode.com/posts", enquiryFormFields)
      .then((res) => {
        alert(
          "Enquiry submitted successfully, our team will reach out to you soon."
        );
        setEnquiryFormFields(initFormFields);
      }) // Response body
      .catch((err) => console.log("Error calling API", err));

    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: JSON.stringify(enquiryFormFields), // Req body
    //   headers: {
    //     // Req headers
    //     CLIENT_ID: "ABCD1234",
    //   },
    // })
    //   .then((res) => {
    //     // console.log(res);
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data); // API is giving success response
    //     alert(
    //       "Enquiry submitted successfully, our team will reach out to you soon."
    //     );
    //     setEnquiryFormFields(initFormFields);
    //   })
    //   .catch((err) => {
    //     console.log("ERROR OCCURED WHILE CALLING API", err);
    //   });
  };

  return (
    <div>
      <h3>Controlled enquiry Form - optimized </h3>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            value={enquiryFormFields.name}
            onChange={onInputChange}
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
            value={enquiryFormFields.mobNo}
            onChange={onInputChange}
            name="mobNo"
            id="mobNo"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            value={enquiryFormFields.message}
            onChange={onInputChange}
            name="message"
            id="message"
          />
        </div>
        <div>
          <label htmlFor="enquiryDept">Enquiry Department</label>
          <select onChange={onEnquiryDeptChange} id="enquiryDept">
            <option value="TECH">Technical</option>
            <option value="SALES">Sales</option>
            <option value="OTHERS">Other (Please specify)</option>
          </select>
        </div>
        {enquiryFormFields.enquiryDept === "OTHERS" && (
          <div>
            <input
              onChange={onOtherDeptNameChange}
              type="text"
              placeholder="Enter Dept name"
            />
          </div>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default EnquiryControlledOptimized;
