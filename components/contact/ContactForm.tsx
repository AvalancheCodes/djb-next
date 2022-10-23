import { FormEventHandler, useState, ChangeEventHandler, FC } from "react";

const ContactForm: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange: ChangeEventHandler = ({ currentTarget }) => {
    setFormData((curr) => ({
      ...curr,
      [currentTarget.nodeName]: currentTarget.nodeValue,
    }));
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form
      className="contact-form form-dark form-line mt-5"
      id="contact-form"
      name="contactform"
      method="POST"
      onSubmit={handleSubmit}
      // action={process.env.NEXT_PUBLIC_API_URL + "/contact"}
    >
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3 position-relative">
            <input
              id="con-name"
              name="name"
              className="form-control"
              required
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={onChange}
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
              value={formData.email}
              onChange={onChange}
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
              value={formData.subject}
              onChange={onChange}
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
              value={formData.message}
              onChange={onChange}
            />
            <span className="focus-border"></span>
          </div>
        </div>
        <div className="col-md-12 text-start">
          <button className="btn btn-primary btn-line" type="submit">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
