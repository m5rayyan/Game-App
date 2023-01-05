import { useNavigate } from "react-router-dom";

function Btn({ children, isValid, link, inValid }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(link);
  }

  return (
    <button
      className="btn"
      onClick={isValid ? handleClick : inValid}
      type="submit"
    >
      {children}
    </button>
  );
}
export default Btn;
