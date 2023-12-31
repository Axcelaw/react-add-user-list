import classes from "./Button.module.css";

const Button = ({ buttonType, children, onClick }) => {
  return (
    <button
      className={classes.button}
      type={buttonType || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
