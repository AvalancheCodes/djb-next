import Image from "next/image";
import { FC } from "react";

interface IProps {
  title: string;
  avatar: string;
  text: string;
  name: string;
}

const TestimonialItem: FC<IProps> = ({ title, avatar, text, name }) => {
  return (
    <div className="item px-3 px-md-6">
      <div
        className="position-absolute top-50 start-50 translate-middle display-1
                                    text-body z-index-n9 opacity-1"
      >
        <i className="fas fa-quote-left"></i>
      </div>
      <div className="avatar">
        <Image
          className="avatar-img rounded-circle"
          src={avatar}
          alt="avatar"
          width={100}
          height={100}
        />
      </div>
      <p className="lead">{text}</p>
      <h6 className="mb-0 mt-3">{name}</h6>
      <span className="small">{title}</span>
    </div>
  );
};

export default TestimonialItem;
