import {
    Switch,
    Route,
} from 'react-router-dom'

import Companies from "./Pages/Companies/companies";
import NewCompany from "./Pages/Companies/NewCompany";


function Router()
{
    return(
        <Switch>
            <Route path="/companies/new">
                <NewCompany/>
            </Route>
            <Route path="/companies">
                <Companies/>
            </Route>
        </Switch>
    )
}

export default Router;