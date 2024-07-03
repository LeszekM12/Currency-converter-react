import { StyledForm, Header, Field, Label, Button } from "./styled";
import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <Header>Kalkulator walut</Header>
      <p>
        <label>
          <Label>Kwota PLN:</Label>
          <Field
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
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
          <Label>Waluta:</Label>
          <Field
            as="select"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option 
                key={currency.short} 
                value={currency.short}
              >
                {currency.name}
              </option>
            ))}
          </Field>
        </label>
      </p>
      <p>
        <Button>Przelicz!</Button>
      </p>

      <Result result={result}/>
    </StyledForm>
  );
};
