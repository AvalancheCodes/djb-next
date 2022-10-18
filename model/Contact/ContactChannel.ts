export enum EAction {
  Call = "call",
  Email = "email",
  SMS = "sms",
  WhatsApp = "whatsapp",
  Skype = "skype",
}

export interface IContactChannel {
  icon: string;
  action: EAction;
  actionValue: string;
  description?: string;
  url?: string;
}
