import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import Card from "../../Components/Cards/Card";
import Table from "../../Components/Table/Table";
import Heading1 from "../../Components/typography/Heading1";

function Companies (props)
{
    return(
        <>
            <div className="flex justify-between">
                <Heading1>Companies</Heading1>
                <div>
                    <PrimaryButton to="/companies/new">
                        Create Company
                    </PrimaryButton>
                </div>
            </div>
            <Card>
                <Table
                    options={{
                        selectedRows: false,
                        perPage: 25,
                    }}
                    columns={[
                        {label: 'ID', selector: 'id'},
                        {label: 'Company', selector: 'company', sortable: true},
                        {label: 'Users', selector: 'users'},
                        {label: 'Roles & Permissions', selector: 'permissions'},
                        {label: 'Collections', selector: 'collections'},
                        {label: 'Records', selector: 'records'},
                        {label: 'Last Activity', selector: 'last_activity'},
                        {label: 'Active', selector: 'active', type: 'active', sortable: true, options : {withText: false}}
                    ]}
                    rows={[
                        {id: 1, company: 'A', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 2, company: 'B', users: 36, permissions: 12, collections: 14, records: 471, active: false},
                        {id: 3, company: 'G', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 4, company: 'E', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 5, company: 'F', users: 36, permissions: 12, collections: 14, records: 471, active: false},
                        {id: 6, company: 'J', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                        {id: 7, company: 'H', users: 36, permissions: 12, collections: 14, records: 471, active: true},
                    ].map((v, i) => {v.id = i+1; return v;})}
                />
            </Card>
        </>
    )
}

export default Companies;