// Adapted from [1] Hamedani, M. (2023). The Ultimate React Native Series. CodeWithMosh. [Accessed] August, 2023. [Available] codewithmosh.com.

import { useState } from "react";



export default useApi = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        setLoading(true);
        const response = await apiFunc(...args);
        setLoading(false);

        setError(!response.ok);
        setData(response.data);
        return response;
    };

    return { data, error, loading, request };
};

