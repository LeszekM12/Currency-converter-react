import axios from "axios";
import { useEffect, useState } from "react";

export const useJsonData = () => {
   const [ currencies, setCurrencies ] = useState(new Promise());
    useEffect(async () => {
        try {
            const currecnies = await axios.get("currencies.json");
            setCurrencies(currecnies.data)
        } catch (error) {
            console.error("Podłącz internet");
        }
    })();

    axios.post('/From/index.js', {currencies})
    .then(currencies => currencies.data)
    .catch(error => error);
};



