import PropTypes from 'prop-types';

const Input = (props:any) => {

    return (
        <div>
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                className={props.className}
                defaultValue={props.defaultValue}
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