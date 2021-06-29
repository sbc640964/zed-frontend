import ActiveColumn from "./ActiveColumn";

function Column(props)
{
    const {
        row,
        col,
        globalOptions
    } = props;

    const type = col.type ?? 'regular';

    const getContentColumn = function () {

        let _return;

        switch(col.type){

            case 'cal' :
                _return = col.cal(row, col, globalOptions);
                break;

            case 'active' :
                _return = <ActiveColumn {...props}/>;
                break;

            default :
                _return = row[col.selector] ?? '';
                break;
        }

        return _return;
    }

    return(
        <div className="flex w-full">
            {getContentColumn()}
        </div>
    )
}

export default Column