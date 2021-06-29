import {NavLink, useLocation} from "react-router-dom";

function NavItem(props)
{
    const {
        label,
        icon : Icon,
        to,
        strict,
    } = props;

    const pathName = useLocation().pathname;

    const active = strict ? pathName == to : pathName.includes(to);

    return(
        <li className={`font-semibold group relative ${active ? 'bg-primary-50' : ''}`}>
            {active &&
                <span className="w-1 bg-primary-700 h-4/5 top-1/2 rounded-e-md transform -translate-y-1/2 block absolute"></span>
            }
            <NavLink to={to}>
                <div className={`p-3 ps-6 flex items-center space-s-3 transition ${ active ? 'text-primary-700' : 'text-gray-700 group-hover:text-primary-500'}`}>
                    <span className={`transition ${active ? 'text-primary-700' : 'text-gray-400 group-hover:text-primary-500'}`}><Icon/></span>
                    <span>{label}</span>
                </div>
            </NavLink>
        </li>
    )
}

export default NavItem;