import { StyledForm, Header, Field, Label, Button } from "./styled";
import { useState } from "react";
import { Result } from "./Result";
import { useJsonData } from "../useJsonData"; 

export const Form = () => {
  const [result, setResult] = useState(null);
  const ratesData = useJsonData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.data[currency].value;

      setResult({
        sourceAmount: +amount,
        targetAmount: amount / rate,
        currency,
      });
  }
  const [currency, setCurrency] = useState("EUR");
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
            {Object.keys(ratesData.data || {}).map((currency) => (
              <option 
                key={currency} 
                value={currency}
              >
                {currency}
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
