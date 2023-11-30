import { Link } from "react-router-dom";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import "./Topbar.scss";

import { useContext } from "react";
import MsgContext from "../../context/MsgContext";

const Topbar = () => {
  const { msg } = useContext(MsgContext);

  return (
    <div className="top-bar">
      <div className="container top-bar-container">
        <div className="top-bar-left">
          <ul>
            <li>
              <FaPhone style={{ color: "#d5b05a" }} />
              +8801889972995
            </li>
            <li>
              <FaPhoneAlt style={{ color: "#d5b05a" }} />
              +8801889972999
            </li>
            <li>
              <MdOutlineEmail style={{ color: "#d5b05a" }} />
              info@sorobindu.com
            </li>
          </ul>
        </div>

        <div>
          <h2>{msg}</h2>
        </div>
        <div className="top-bar-right">
          <Link>Log in</Link>
          <Link>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
