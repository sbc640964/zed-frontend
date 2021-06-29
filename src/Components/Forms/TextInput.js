import Description from "../typography/Description";

function TextInput(props)
{
    const {
        label,
        description,
        placeholder,
        errors,
    } = props;

    return(
        <>
            <label className="font-medium text-gray-700 text-sm">
                {label}
                <input
                    {...props}
                    type="text"
                    placeholder={placeholder}
                    className="mt-1 relative rounded-md shadow-sm border-gray-300 block w-full placeholder-gray-400 transition duration-150 ease-in-out text-sm focus:ring-primary-200 focus:ring-2 focus:border-0 focus:border-primary-300"/>
            </label>
            {errors &&
                <p className="text-error-400 text-sm mt-1">{errors}</p>
            }
            <Description>{description}</Description>
        </>
    )
}

export default TextInput;