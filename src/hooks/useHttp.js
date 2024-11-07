import { useEffect, useState, useCallback } from 'react';

async function sendHttpRequest(url) {
    const response = await fetch(url);
    const resData = await response.json();

    if(!response.ok) {
        throw new Error(resData.message || 'Something went wrong, failed to send request.');
    };

    return resData;
};

export const useHttp = (url, initialValue) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialValue);

    const sendRequest = useCallback(async function sendRequest() {
        if (!url) return;
        setIsLoading(true);
        setError(null);
        try {
            const resData = await sendHttpRequest(url);
            setFetchedData(resData);
        } catch(error) {
            setError(error.message ||'Something went wrong');
        } finally {
            setIsLoading(false);
        }

    }, [url]);

    useEffect(()=> {
        sendRequest();
    }, [sendRequest])


    return {
        isLoading,
        error,
        fetchedData,
    }
};