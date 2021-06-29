import TextInput from "./TextInput";
import Switcher from "./Switcher";
import Textarea from "./Textarea";

function FormElements (){
    return(
        'select component'
    )
}

FormElements.text = TextInput
FormElements.switcher = Switcher
FormElements.textarea = Textarea

export default FormElements;

