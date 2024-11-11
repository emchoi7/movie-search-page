import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

export function useApi() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const submit = useCallback(async (url, options) => {
        setIsLoading(true);

        try {
            const response = await axios(url, options);
            setData(response.data);
        } catch (error) {
            setError(error);
        }

        setIsLoading(false);
    }, []);

    return [data, isLoading, error, submit]
}