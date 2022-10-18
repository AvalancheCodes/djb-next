import React from "react";
import { contact } from "../../../model/Contact";
import Link from "next/link";

const ContactChannelInfo: React.FC<contact.IContactChannel> = (props) => {
  const { action, description, actionValue, icon, url } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="d-flex flex-row align-items-center mb-3">
            <span className="text-primary display-8 me-3">
              <i className={icon}></i>
            </span>
            <h6 className="mt-2">
              <Link href={url}>
                <a style={{ textTransform: "capitalize" }}>
                  {action}:{actionValue}
                </a>
              </Link>
            </h6>
          </div>
          <p>{description} </p>
        </div>
      </div>
    </div>
  );
};

export default ContactChannelInfo;
