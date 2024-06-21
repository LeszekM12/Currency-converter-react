import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <h1 className="form_header">
                Kalkulator walut
            </h1>
            <p>
                <label>
                    <span className="form_labelText">
                        Kwota PLN:
                    </span>
                    <input
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    className="form__field"
                    placeholder="Wpisz kwotę PLN"
                    type="number"
                    min="0.01" 
                    step="any" 
                    required
                    />
                </label>
            </p>
            <p>
                <label>
                    <span className="form_labelText">
                        Waluta:
                    </span>
                    <select
                    className="form_field"
                    value={currency}
                    onChange={
                        ({ target }) => setCurrency(target.value)
                    }
                    >
                        {currencies.map((currency => (
                            <option
                            key={currency.short}
                            vlaue={currency.short}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </select>
                </label>
            </p>
        </form>
    )
}

