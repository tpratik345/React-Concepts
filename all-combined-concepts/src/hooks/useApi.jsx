import axios from "axios";
import { useCallback, useEffect, useState } from "react";


function useApi() {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const callApi = useCallback(async (url) => {
        if (!url) return;

        setLoading(true);

        try {
            const data = await axios.get(url);
            setResponse(data.data)
            setError('');
            return data.data;
        } catch (e) {
            setResponse([]);
            setError(e.message)
            return e.message;
        } finally {
            setLoading(false);
        }

    }, [])


    return { response, error, loading, callApi };
}

export default useApi;