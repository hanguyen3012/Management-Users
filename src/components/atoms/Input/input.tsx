import PropTypes from 'prop-types';
import { useRef } from 'react';

const Input = (props:any) => {

    return (
        <div>
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                className={'${props.className}'}
                defaultValue={props.defaultValues}
                onChange={props.onChange}/>          
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    defaultValues: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
    placeholder: '',
    name: '',
    className: '',
    defaultValues: '',
    onChange: '',
    defaultValue: '',
};

export default Input;