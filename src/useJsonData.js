import axios from "axios";
import { useEffect, useState } from "react";
import { currencies } from "./currencies";

export const useJsonDate = () => {
   const [ currencies, setCurrencies ] = useState(new Promise());
    useEffect(async () => {
        try {
            const currecnies = await axios.get("currencies.json");
            setCurrencies(currecnies.data)
        } catch (error) {
            console.error("Podłącz internet");
        }
    })();

    axios.post('/currecies', {currencies})
    .then(currencies => currencies.data)
    .catch(error => error);
};



