import axios from "axios";
import { useEffect, useState } from "react";

export const useJsonData = () => {
   const [ ratesData, setRatesData ] = useState({status: "loading",});

    useEffect(() => {
        const axiosRates = async () => {
            try {
                const response = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_ipczFcXW1F0EkRVxiXkN1rNTrts8OwZXz73t0MQx");
                setRatesData(response.data)
            } catch (error) {
                setRatesData({satus: "error"})
                console.error(error);
            }
        };
        setTimeout(axiosRates, 3*1000);
    }, []);
    
    return ratesData;
};



