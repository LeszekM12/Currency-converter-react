import axios from "axios";
import { useEffect, useState } from "react";

export const useJsonData = () => {
   const [ currency, setCurrency ] = useState(new Promise());
    useEffect(async () => {
        try {
            const currency = await axios.get("currencies.json");
            setCurrency(currency.data)
        } catch (error) {
            console.error("Podłącz internet");
        }
    })();

    axios.post('/currencies', {currency})
    .then(currency => currency.data)
    .catch(error => error);
};



