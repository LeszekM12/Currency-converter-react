import axios from "axios";
import { useEffect, useState } from "react";

export const useJsonData = () => {
   const [ ratesData, setRatesData ] = useState({status: "loading",});

    useEffect(() => {
        const axiosRates = async () => {
            try {
                const response = await axios.get("currencies.json");
                setRatesData(response.data);
            } catch (error) {
                setRatesData({satus: "error",})
                console.error(error);
            }
        };
        setTimeout(axiosRates, 2*1000);
    }, []);
    
    return ratesData;
};



