import { useContext } from "react";
import PageHeader from "../../components/pageHeader/PageHeader";
import "./About.scss";
import MsgContext from "../../context/MsgContext";

const About = () => {
  const { msg, setMsg } = useContext(MsgContext);

  return (
    <>
      <PageHeader title="About" />
      <div className="container about-container">
        <h1>About</h1>
        <hr />
        <div className="msg">
          <input
            type="text"
            placeholder="MSG"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <hr />
          <h1>{msg}</h1>
        </div>
      </div>
    </>
  );
};

export default About;
