import Heading3 from "../../../Components/typography/Heading3";
import FormElements from "../../../Components/Forms";
import SecondaryButton from "../../../Components/Buttons/SecondaryButton";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import _ from "lodash";
import {useState} from "react";
import {useToasts} from "react-toast-notifications";
import axios from "axios";
import Description from "../../../Components/typography/Description";

function AddExpenseForm(props)
{
    const {
        product,
        closeModal,
        setProduct,
        parent = null,
    } = props;

    const [newExpense, setNewExpense] = useState({
        immediatePayment: false,
    });

    const {addToast} = useToasts();

    const [errors, setErrors] = useState({});

    const handleChange = (e, type = null, name = null) => {
        name = name ?? (e.target ? e.target.name : e.name);

        let value;

        if(type && type === 'select'){
            value = e;
        }else{
            value = (e.value ?? e.checked) ?? e.target.value;
        }

        if(name === 'type'){
            newExpense.forSeller = value.toSeller;
        }

        newExpense[name] = value;
        setNewExpense({...newExpense});

        const errorsKeys = [name];

        setErrors(_.pickBy(errors, (v, k) => {
            return !_.includes(errorsKeys, k)
        }));
    }

    const handleSubmit = e =>
    {
        const send = axios.post(window.baseApiPath+`/products/${product.id}/expense`, newExpense);

        send.then(function (res) {
            // let p = parent ?? product;
            // p.expense.push(res.data);
            setProduct(res.data);
            closeModal();
        })
            .catch(function (err) {
                if (err.response.status === 422) {
                    setErrors(err.response.data.errors);
                    addToast(err.response.data.message, {
                        type: 'error',
                        autoDismiss: true,
                    });
                } else {
                    addToast(err.message, {
                        type: 'error',
                        autoDismiss: true,
                    });
                }
            })

        e.preventDefault();
    }

    /*
    ------->  $table->foreignId('product_id')->constrained()->nullable();
    ------->  $table->float('exchange_rates');
     */


    /*
    TODO: ???????? ?????? ???????????? ?????? ?????? ???? ???????????? ????????????
     */

    const renderQueryRolesUrl = () =>
    {
        if(newExpense.type) {
            return newExpense.type.roles.map(v => `roles[]=${v}&`);
        }
        return ''
    }

    return(
        <form
            className="bg-white rounded-lg w-96 shadow-2xl"
            onSubmit={handleSubmit}
        >
            <div className="p-6">
                <Heading3>?????????? ??????????/?????? ??????</Heading3>
                <Description>????????: {product.id}, {product.name.label ? product.name.label : product.description}</Description>
                <br/>
                <div>
                    <FormElements.Select2
                        label="?????? ??????????"
                        placeholder="?????? ?????? ??????????"
                        selectorView={i => i?.label ?? ''}
                        onChange={handleChange}
                        name="type"
                        search={false}
                        errors={errors.type}
                        value={newExpense.type ?? ''}
                        urlOptions={`${window.baseApiPath}/lists-data/expensesTypes`}
                    />
                </div>
                {newExpense.type?.toSeller &&
                    <div className="col-span-4 pt-2">
                        <FormElements.Switcher
                            label="?????????? ???? ?????????? ???????????"
                            checked={newExpense.forSeller ?? false}
                            onChange={handleChange}
                            name="forSeller"
                            disabledLabel="????"
                            enabledLabel="????"
                            errors={errors.forSeller}
                        />
                    </div>
                }
                {newExpense.type && newExpense.type.value !== 1 &&
                <div>
                    <FormElements.Select2
                        label="??????"
                        placeholder="???????? ?????????? 3 ???????? ???????????? ??????"
                        onChange={handleChange}
                        name="to"
                        search={true}
                        errors={errors.to}
                        urlOptions={`${window.baseApiPath}/profiles?${renderQueryRolesUrl()}`}
                        value={newExpense.to ?? ''}
                        selectorView={i => i.full_name}
                    />
                </div>
                }
                <div>
                    <FormElements.Textarea
                        label="????????"
                        placeholder="?????? ?????? ??????..."
                        value={newExpense.note ?? ''}
                        onChange={handleChange}
                        name="note"
                        rows={4}
                        errors={errors.note}
                    />
                </div>
                <div>
                    <FormElements.Number
                        label="????????"
                        placeholder="????????"
                        value={newExpense.amount ?? ''}
                        onChange={handleChange}
                        name="amount"
                        errors={errors.amount}
                    />
                </div>
                <div className="col-span-4">
                    <FormElements.Select
                        label="????????"
                        placeholder="?????? ????????"
                        value={newExpense.currency?.label ?? ''}
                        onChange={handleChange}
                        name="currency"
                        errors={errors.currency}
                        options={[
                            {value: 'USD', label: '????????'},
                            {value: 'ILS', label: '??"??'},
                        ]}
                    />
                </div>
                <div className="col-span-4 pt-2">
                    <FormElements.Switcher
                        label="???????????? ???????????"
                        checked={newExpense.immediatePayment ?? false}
                        onChange={handleChange}
                        name="immediatePayment"
                        disabledLabel="????"
                        enabledLabel="????"
                        errors={errors.immediatePayment}
                    />
                </div>
                {newExpense.immediatePayment &&
                <div className="col-span-4">
                    <FormElements.Select
                        label="?????????? ??????????"
                        placeholder="?????? ?????????? ?????????? (????????????????)"
                        value={newExpense.method?.label ?? ''}
                        onChange={handleChange}
                        name="method"
                        errors={errors.method}
                        options={[
                            {value: '??????????', label: '??????????'},
                            {value: '??????????', label: '??????????'},
                            {value: '????\'??', label: '????\'??'},
                            {value: '?????????? ????????????', label: '?????????? ????????????'},
                            {value: '??????', label: '??????'},
                        ]}
                    />
                </div>
                }
            </div>
            <div className="px-5 py-3.5 bg-gray-100 flex justify-end space-s-4 rounded-b-lg">
                <SecondaryButton tag="a" onClick={closeModal}>
                    ??????????
                </SecondaryButton>
                <PrimaryButton disabled={!_.isEmpty(errors)}>
                    ???????? ??????????
                </PrimaryButton>
            </div>
        </form>
    )
}

export default AddExpenseForm;