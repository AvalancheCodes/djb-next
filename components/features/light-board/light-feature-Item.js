import React from 'react';
import Link from "next/link";

const LightFeatureItem = (props) => {
    const { title, description, iconClass, subServices} = props;
    return (
        <div className="col-md-6 col-lg-4">
            <div className="mb-6">
                <span className="text-primary display-6">
                    <i className={iconClass}></i></span>
                <h4 className="mt-4 mb-4"><a href="#">{title}</a></h4>
                <p>{description}</p>
                <div className="list-group list-group-borderless list-unstyled">
                    {subServices.map((subService, index) => {
                        return (
                            <Link href={subService.url} key={index}>
                                <a className="list-group-item list-group-item-action">{subService.title}</a>
                            </Link>
                        )
                    })}
                    {/*<a href="#" className="list-group-item bg-transparent">Art Direction</a>*/}
                    {/*<a href="#" className="list-group-item bg-transparent">Visual Design</a>*/}
                </div>
            </div>
        </div>
    );
};

export default LightFeatureItem;