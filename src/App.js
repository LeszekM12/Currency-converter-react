import { useState } from 'react';
import './Container';
import { currencies } from './currencies';
import { Container } from './Container';

function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

      setResult({
        sourceAmount: +amount,
        targetAmount: amount / rate,
        currency,
      });
  }
  return (
    <div>elo</div>
  );
}

export default App;
