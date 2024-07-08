import axios from "axios";
import { useEffect, useState } from "react";

export const useJsonData = () => {
   const [ ratesData, setRatesData ] = useState({status: "loading",});

    useEffect(() => {
        const axiosRates = async () => {
            try {
                const response = await axios.get("currencies.json");
                setRatesData({ 
                    data: response.data.data,
                    date: response.data.meta.last_updated_at,
                    status: "downloaded",});
            } catch (error) {
                setRatesData({satus: "error",})
                console.error(error);
            }
        };
        setTimeout(axiosRates, 2*1000);
    }, []);
    
    return ratesData;
};



