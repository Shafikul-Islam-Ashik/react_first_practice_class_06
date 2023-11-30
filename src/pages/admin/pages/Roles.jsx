import { useContext } from "react";
import MsgContext from "../../../context/MsgContext";

const Roles = () => {
  const { msg, setMsg } = useContext(MsgContext);

  return (
    <d>
      <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
    </d>
  );
};

export default Roles;
