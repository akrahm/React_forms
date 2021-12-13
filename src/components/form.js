import { NAME_LENGTH, DESC_LENGTH, } from "../utils/helper";
import { validatetext, validateemail, validatedropdown } from "../utils/helper";

export default function formData() {
    let Arr = [
        {
            id: "name",
            heading: "Name",
            placeholder: "Username",
            value: "",
            type: "text",
            validateFunc: (value, label, minLength) => validatetext(value, label, minLength),
            validateMaxLen: NAME_LENGTH,
            required:true,
            error: false,
            errorMsg: "",
            width: "full",
            Msg:[
                "name cannot be empty",
                `Minimum length must be ${NAME_LENGTH}`,
            ]
        },
        {
            id: "email",
            heading: "Email",
            placeholder: "Email",
            value: "",
            type: "text",
            validateFunc:(value,label,minLength)=> validateemail(value,label,minLength),
            validateMaxLen: NAME_LENGTH,
            error: false,
            required:true,
            errorMsg: "",
            width: "full"
        },
        {
            id: "number",
            heading: "Phone no.",
            placeholder: "Phone no.",
            value: "",
            type: "text",
            validateFunc: (value, label, minLength) => validatetext(value, label, minLength),
            validateMaxLen: DESC_LENGTH,
            required:true,
            error: false,
            errorMsg: "",
            width: "full",
            Msg:[
                "Phone no. cannot be empty",
                `Minimum length must be ${DESC_LENGTH}`,
            ]
        },
        {
            id: "country",
            heading: "Country",
            placeholder: "Select a country",
            value: "",
            label: "",
            type: "dropdown",
            validateFunc:(value,label,minLength)=> validatedropdown(value,label,minLength),
            validateMaxLen: NAME_LENGTH,
            error: false,
            required:true,
            errorMsg: "",
            width: "full"
        },
    ];
    return Arr;
}