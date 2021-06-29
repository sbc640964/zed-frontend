import Card from "../../Components/Cards/Card";
import Heading1 from "../../Components/typography/Heading1";
import Heading3 from "../../Components/typography/Heading3";
import Description from "../../Components/typography/Description";
import FormElements from "../../Components/Forms";
import {useState} from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";

function NewCompany(props)
{

    const [newCompany, setNewCompany] = useState({
        active: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

    const handleChange = e => {
        const name = e.target ? e.target.name : e.name;
        newCompany[name] = (e.value ?? e.checked) ?? e.target.value;
        setNewCompany({...newCompany})
    }

    return(
        <div>
            <div>
                <Heading1>Create New Company</Heading1>
            </div>
            <form onSubmit={handleSubmit}>
                <Card>
                    <div className="grid grid-cols-3 gap-6 py-4 px-5">
                        <div className="col-span-1">
                            <Heading3>Company details</Heading3>
                            <Description>The information of company</Description>
                        </div>
                        <div className="col-span-2 flex flex-col space-y-6">
                            <div>
                                <FormElements.text
                                    label="Name"
                                    placeholder="Name"
                                    description="The name of company"
                                    value={newCompany.name ?? ''}
                                    onChange={handleChange}
                                    name="name"
                                />
                            </div>
                            <div>
                                <FormElements.text
                                    label="Subdomain"
                                    placeholder="Subdomain"
                                    description="A subdomain that will serve as a prelude to the site"
                                    value={newCompany.subdomain ?? ''}
                                    onChange={handleChange}
                                    name="subdomain"
                                />
                            </div>
                            <div>
                                <FormElements.textarea
                                    label="Description"
                                    placeholder="Description"
                                    value={newCompany.description ?? ''}
                                    onChange={handleChange}
                                    name="description"
                                    rows={4}
                                />
                            </div>
                            <div>
                                <FormElements.switcher
                                    checked={newCompany.active}
                                    onChange={handleChange}
                                    enabledLabel="The company is activated"
                                    disabledLabel="The company is disabled"
                                    label="Active"
                                    name="active"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="px-5 py-3.5 bg-gray-100 flex justify-end space-s-4">
                        <SecondaryButton to="/companies">
                            Cancel
                        </SecondaryButton>
                        <PrimaryButton noClick>
                            Create Company
                        </PrimaryButton>
                    </div>
                </Card>
            </form>
        </div>
    )
}

export default NewCompany;