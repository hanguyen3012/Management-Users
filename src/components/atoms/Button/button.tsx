import PropTypes from "prop-types";
import React, { useState, useRef } from "react";

const Button = (props: any) => {
  return (
    <div>
      <button className={props.className} onClick={props.onSubmitFormLogin}>
        {props.button}
      </button>
    </div>
  );
};

Button.propTypes = {
  onSubmitFormLogin: PropTypes.func.isRequired,
  button: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  onSubmitFormLogin: "",
  button: "",
  className: "",
};

export default Button;
