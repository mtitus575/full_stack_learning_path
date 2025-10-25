import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  function goNext() {
    navigate(1);
  }
  function goBack() {
    navigate(-1);
  }

  const btnStyles = {
    border: "1px solid grey",
    borderRadius: "5px",
  };

  return (
    <div style={{ position: "fixed", bottom: 0 }}>
      <button onClick={goBack} style={btnStyles}>
        Back
      </button>
      <button onClick={goNext} style={btnStyles}>
        Next
      </button>
    </div>
  );
}

export default Footer;
