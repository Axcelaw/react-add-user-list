import classes from "./Button.module.css";

const Button = ({ buttonText, buttonType }) => {
  return (
    <button className={classes.button} type={buttonType}>
      {buttonText}
    </button>
  );
};

export default Button;
