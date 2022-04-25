import PropTypes from 'prop-types';
import React from 'react';
import { forwardRef } from 'react';

const Input = React.forwardRef((props:any, ref) =>{
    const input = React.useRef<HTMLInputElement>(null);
    
    return (
        <div>
            <input
                ref={input}
                type={props.type}
                placeholder={props.placeholder}
                className={props.className}
                defaultValue={props.defaultValue}
                onChange={props.onChange}/>        
        </div>
    )
});

Input.propTypes = {

    type: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
    placeholder: '',
    name: '',
    className: '',
    onChange: '',
    defaultValue: '',
};

export default Input;