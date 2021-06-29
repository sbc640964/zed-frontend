import _ from 'lodash';
import {useHistory} from 'react-router-dom'

function Button (props)
{
    const {
        className,
        size,
        to,
        onClick,
    } = props;

    const history = useHistory();

    const sizeClasses = {
        xs: 'p-1.5 px-3.5 text-xs',
        sm: 'p-1.5 px-3.5 text-sm',
        base: 'p-2 px-4 text-sm',
        lg: 'p-3 px-5 text-sm',
    }[size ?? 'base'];

    const handleClick = () => {
        if(to !== undefined && _.isString(to)){
            return history.push(to)
        }else{
            if(typeof onClick == "function") onClick();
        }
    }

    const defaultClassName = 'rounded-lg font-semibold';

    return (
        <button
            className={className + ' ' + defaultClassName + ' ' + sizeClasses}
            onClick={handleClick}
        >
            {props.children}
        </button>
    )
}

export default Button;
