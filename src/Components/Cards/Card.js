
function Card(props)
{
    return(
        <div className="bg-white border shadow-sm rounded-lg">
            {props.children}
        </div>
    )
}

export default Card;