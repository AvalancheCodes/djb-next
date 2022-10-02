import React from 'react';

const FeatureItem = ({
    title, shortDescription, icon}) => {
    const iconClass = `display-6 text-primary ${icon}`;
    return (
        <div className="col-sm-6 mb-5">
            <i className={iconClass}></i>
            <h5 className="text-white my-3">{title}</h5>
            <p className="text-secondary">{shortDescription}</p>
        </div>
    );
};

export default FeatureItem;