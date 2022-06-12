import CurrencyFormatSwitcher from "../../../Components/currencyFormatSwitcher";
import AddExpense from "./AddExpense";
import MarkReceived from "./MarkReceived";
import EditIconModal from "./EditIconModal";
import UpdateProductStatusAndExpenses from "./UpdateProductStatusAndExpenses";

function Child (props)
{
    const {
        product,
        child,
        setProduct
    } = props;

    return(
        <div className="border rounded-lg p-4 col-span-4 text-center text-gray-800 flex justify-between items-center">
            {child.description}
            <div className="text-sm font-semibold text-gray-500">
                {child.payment_units} {product.name.units_labels[0]}
            </div>
            <div className="text-sm font-semibold text-gray-500">
                <span className="me-1 font-normal">
                  מחיר ל{product.name.children.labels[1]}:
                </span>
                <span>
                  <CurrencyFormatSwitcher>{child.cost}</CurrencyFormatSwitcher>
                </span>
            </div>
            <div className="flex justify-between">
                <EditIconModal>
                    <UpdateProductStatusAndExpenses
                        product={child}
                        parent={product}
                        setProduct={setProduct}
                    />
                </EditIconModal>
            </div>
        </div>
    )
}

export default Child;