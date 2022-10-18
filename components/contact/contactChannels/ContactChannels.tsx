import React from "react";
import contactChannelsData from "../../../pages/contact/contactChannelsData";
import ContactChannelInfo from "./ContactChannelInfo";

const channels = contactChannelsData;

const ContactChannels = () => {
  const items = channels.map((channel, index) => (
    <ContactChannelInfo
      key={index}
      action={channel.action}
      description={channel.description}
      actionValue={channel.actionValue}
      icon={channel.icon}
      url={channel.url}
    />
  ));
  return <>{items}</>;
};

export default ContactChannels;
