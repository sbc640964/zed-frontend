
function ActiveColumn (props)
{
    const {
        col,
        row,
        globalOptions,
    } = props;

    if(!col.selector || row[col.selector] === undefined) return '';

    const color = row[col.selector] ? 'success' : 'error';

    const withText = col.options && col.options.withText;

    return(
        <span className="flex items-center w-full justify-center">
            <span className={`bg-${color}-${withText ? '200' : '300'} text-${color}-700 font-bold text-xs rounded-full leading-3 p-2 ${withText ? 'py-1' : ''}`}>
                {withText &&
                    <>{row[col.selector] ? (col.options.activeText ?? 'Active') : (col.options.noActiveText ?? 'No Active')}</>
                }
            </span>
        </span>
    );
}

export default ActiveColumn;