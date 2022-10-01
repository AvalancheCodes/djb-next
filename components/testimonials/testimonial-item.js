import React from 'react';
import Image from "next/image";

const TestimonialItem = ({title, key, avatar, text, name}) => {
    return (
        <div className="item px-3 px-md-6" key={key}>
            <div
                className="position-absolute top-50 start-50 translate-middle display-1
                                    text-body z-index-n9 opacity-1">
                <i className="fas fa-quote-left"></i></div>
            <div className="avatar">
                <Image className="avatar-img rounded-circle"
                     src={avatar}
                     alt="avatar" /></div>
            <p className="lead">{text}</p>
            <h6 className="mb-0 mt-3">{name}</h6>
            <span className="small">{title}</span>
        </div>
    );
};

export default TestimonialItem;