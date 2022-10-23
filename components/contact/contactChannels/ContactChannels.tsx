import { contactChannelsData } from "./contactChannelsData";
import ContactChannelInfo from "./ContactChannelInfo";
import { FC } from "react";

const channels = contactChannelsData;

const ContactChannels: FC = () => {
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
