import PropTypes from "prop-types";

const Button = (props: any) => {
  return (
    <div>
      <button className={props.className} onClick={props.onSubmitFormLogin} type={props.type}>
        {props.button}
      </button>
    </div>
  );
};

Button.propTypes = {
  onSubmitFormLogin: PropTypes.func.isRequired,
  button: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string
};

Button.defaultProps = {
  onSubmitFormLogin: "",
  button: "",
  className: "",
  type:""
};

export default Button;
