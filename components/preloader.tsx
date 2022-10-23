import { FC, useEffect } from "react";

const Preloader: FC = () => {
  // init preloader
  useEffect(() => {
    const preloader = document.querySelector(".preloader");
    if (preloader && typeof preloader !== "undefined") {
      preloader.classList.add("animate__animated", "animate__fadeOut");
      setTimeout(() => {
        preloader.classList.add("d-none");
      }, 1000);
    }
  }, []);

  return (
    <div className="preloader">
      <img
        className="preloader-item"
        src="/images/loader/02.gif"
        alt="Loading"
      />
    </div>
  );
};

export default Preloader;
