import React from "react";

const ContactForm = () => {
  // On submit, send the form data to the backend
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(document.querySelector("#contact-form"));
    const value = Object.fromEntries(data.entries());
    console.log(value);
  };
  return (
    <form
      className="contact-form form-dark form-line mt-5"
      id="contact-form"
      name="contactform"
      method="POST"
      // action={process.env.NEXT_PUBLIC_API_URL + "/contact"}
    >
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3 position-relative">
            <input
              required
              id="con-name"
              name="name"
              type="text"
              className="form-control"
              placeholder="Name"
            />
            <span className="focus-border"></span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3 position-relative">
            <input
              required
              id="con-email"
              name="email"
              type="email"
              className="form-control"
              placeholder="E-mail"
            />
            <span className="focus-border"></span>
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3 position-relative">
            <input
              required
              id="con-subject"
              name="subject"
              type="text"
              className="form-control"
              placeholder="Subject"
            />
            <span className="focus-border"></span>
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3 position-relative">
            <textarea
              required
              id="con-message"
              name="message"
              cols={40}
              rows={6}
              className="form-control"
              placeholder="Message"
            ></textarea>
            <span className="focus-border"></span>
          </div>
        </div>
        <div className="col-md-12 text-start">
          <button
            className="btn btn-primary btn-line"
            onClick={handleSubmit}
            type="submit"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
