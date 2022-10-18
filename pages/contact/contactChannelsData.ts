import { contact } from "../../model/Contact";

export const contactChannelsData: contact.IContactChannel[] = [
  {
    icon: "bi bi-headset",
    action: contact.EAction.Call,
    actionValue: "+1 555 555 5555",
    description: "Call me on this number to discuss your project",
    url: "/",
  },
  {
    icon: "bi bi-envelope",
    action: contact.EAction.Email,
    actionValue: "Click here to send me an email",
    description: "Do you prefer email? ",
    url: "/",
  },
  {
    icon: "bi bi-person-plus",
    action: contact.EAction.WhatsApp,
    actionValue: "+1 555 555 5555",
    description: "WhatsApp me for a quick response",
    url: "https://wa.me/15555555555",
  },
];
