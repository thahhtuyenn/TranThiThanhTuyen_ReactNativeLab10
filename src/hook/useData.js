import { useState } from "react";
import axios from "axios";

export const useData = ({url}) => {
    const [bikes, setBikes] = useState([]);
    
    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setBikes(response.data);
            console.log(response.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    const filterData = (category) => {
        if (category.name === "All") {
            fetchData();
        } else {
            axios.get(`${url}?type=${category.name}`)
            .then((response) => {
                setBikes(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }


    return {bikes, fetchData, filterData};

}