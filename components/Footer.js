import React from "react";

const Footer = () => {
  return (
    <div className="text-center">
      <div className="flex-col md:flex-row md:justify-around py-7 border-t-2">
        <p className="text-blue-500">
          <a href="https://www.hupsooncheong.com.sg/">
            Hup Soon Cheong Services Pte Ltd
          </a>
          &copy; 2022
        </p>
        <p>
          <span>
            <a
              href="https://www.hupsooncheong.com.sg/privacy"
              className="text-blue-500"
            >
              Terms and policy{" "}
            </a>
            |
            <a href="mailto:appsupport@hsc.sg" className="text-blue-500">
              {" "}
              appsupport@hsc.sg
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
