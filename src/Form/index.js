import "./style.css";
import { useState } from "react";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState()
    const [amount, setAmount] = useState("");
}

const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
};

return (
    <form className="form" onSubmit={onSubmit}>
        <h1 className=" form_header">
            Kalkulator walut
        </h1>
        <p>
            <label>
                <span className="form_labelText">
                    Kwota PLN:
                </span>
                <input
                value={amount}
                className="form__field"
                type="number"
                min="0.01" 
                step="any" 
                required
                />
            </label>
        </p>
    </form>
)