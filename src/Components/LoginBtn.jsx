import { useNavigate } from "react-router-dom";

//image
import GoogleLogo from "../assets/image/google-login.svg";

function LogInBtn() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/logIn");
  }

  return (
    <button className="login-btn" onClick={handleClick} type="button">
      <img src={GoogleLogo} alt="logo" />

      <span>login</span>
    </button>
  );
}

export default LogInBtn;
