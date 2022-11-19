import React from "react";
import { ImFacebook2,ImTumblr2,ImLinkedin,ImWhatsapp } from "react-icons/im";
const Head3 = () => {
  return (
    <div className="col-4">
      <ul className="navbar-nav sm-icons mr-0 d-block float-right text-end">
        <li className="float-left d-inline-block m-3">
          <i className="fa fa-facebook-f text-white">
            <ImFacebook2 color="#FFFFFF" size={24} />
          </i>
        </li>
        <li className="float-left d-inline-block m-3">
          <i className="fa fa-facebook-f text-white">
            <ImTumblr2 color="#FFFFFF" size={24} />
          </i>
        </li>
        <li className="float-left d-inline-block m-3">
          <i className="fa fa-facebook-f text-white">
            <ImLinkedin color="#FFFFFF" size={24} />
          </i>
        </li>
        <li className="float-left d-inline-block m-3">
          <i className="fa fa-facebook-f text-white">
            <ImWhatsapp color="#FFFFFF" size={24} />
          </i>
        </li>
      </ul>
    </div>
  );
};

export default Head3;
