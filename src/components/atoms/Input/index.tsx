import PropTypes from "prop-types";
import React, { useState, Fragment, useEffect } from "react";
import { Controller } from "react-hook-form";
import { forwardRef } from "react";
import { InputTypes } from "../../../types";

interface InterfaceInput extends InputTypes {
//   type: string;
  options?: any;
  onChange?: any;
  value:any,
  ref:any
}

interface InterfaceRadioGroup extends Omit<InputTypes, "control"> {
  control: any;
  options?: any;
  value: any;
  onChange: any;

}
const Input = (
  props: any,
  { ref, control, name, errors = {}, options, ...inputProps }: InterfaceInput
) => {
//   const [isType, setIsType] = useState("");

//   useEffect(() => {
//     if (type === "password") {
//       setIsType(type);
//     }
//   }, [type]);

//   const onClickType = () => {
//     if (isType === "password") {
//       setIsType("text");
//     } else {
//       setIsType("password");
//     }
//   };
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value , ref} }) => {
        //   if (type === "password") {
        //     return (
        //       <div className="form-password">
        //         <input
        //           type={isType}
        //           {...inputProps}
        //           value={value || ""}
        //           onChange={(e) => onChange(e.target.value)}
        //           onBlur={() =>
        //             typeof value === "string" && onChange(value.trim())
        //           }
        //         />
        //       </div>
        //     );
        //   }
          return (
            <div>
              <input
                ref={ref}
                name={props.name}
                placeholder={props.placeholder}
                className={props.className}
                type={props.type}
                {...inputProps}
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
              />
            </div>
          );
        }}
      />
    </div>
  );
};

Input.propTypes = {
    type:PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  name: "",
  placeholder: "",
  className: "",
};

export default Input;

// const Input = (props:any) => {

//     return (
//         <div>
//             <input
//                 type={props.type}
//                 name={props.name}
//                 placeholder={props.placeholder}
//                 className={'${props.className}'}
//                 defaultValue={props.defaultValues}
//                 onChange={props.onChange}/>
//         </div>
//     )
// }

// Input.propTypes = {
//     type: PropTypes.string,
//     name: PropTypes.string,
//     placeholder: PropTypes.string,
//     className: PropTypes.string,
//     onChange: PropTypes.func,
//     defaultValues: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// };

// Input.defaultProps = {
//     placeholder: '',
//     name: '',
//     className: '',
//     defaultValues: '',
//     onChange: '',
//     defaultValue: '',
// };

// export default Input;
