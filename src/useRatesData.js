import axios from "axios";
import { useEffect, useState } from "react";

export const getApiData = async () => {
    const response = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_ipczFcXW1F0EkRVxiXkN1rNTrts8OwZXz73t0MQx&currencies=&base_currency=PLN");
    return response;
};

export const useRatesData = () => {
   const [ ratesData, setRatesData ] = useState({status: "loading",});

    useEffect(() => {
        const axiosRates = async () => {
            try {
                const response = await getApiData();
                setRatesData({ 
                    data: response.data.data,
                    date: response.data.meta.last_updated_at,
                    status: "downloaded",});
            } catch (error) {
                setRatesData({
                    status: "error",
                    log: console.log(error),
                })
            }
        };
        setTimeout(axiosRates, 2*1000);
    }, []);
    
    return ratesData;
};



