import React from "react";

const Newsletter = () => {
  return (
    <>
            <h5 className="mb-4 text-white">Stay in touch</h5>
            <form>
                <label className="form-label">Subscribe to our newsletter to receive updates.</label>
                <div className="mb-3 pe-8">
                    <input className="form-control" type="email" placeholder="Enter email..." />
                </div>
                <div className="mb-3">
                    <button type="submit" value="Subscribe" className="btn btn-primary mb-0">Subscribe
                    </button>
                </div>
            </form>
    </>
  );
};

export default Newsletter;