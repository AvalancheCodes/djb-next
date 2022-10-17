import React from "react";
import logoItemData from "../../public/config/logo-item-data";

const LogoBanner = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <h2 className="display-5 mb-3">Technology I use.. </h2>
          <p>
            Rooms oh fully taken by worse do. Points afraid but may end law
            lasted. Was out laughter raptures returned outweigh.
          </p>
        </div>
        {/*     LOGOS    */}
        <div className="col-lg-8">
          <div className="row">
            {logoItemData.map((logo, index) => {
              return (
                <div className="col-6 col-sm-4 col-lg-3" key={index}>
                  <div className={logo.classList}>
                    <img src={logo.src} alt={logo.alt} />
                  </div>
                </div>
              );
            })}
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default LogoBanner;
