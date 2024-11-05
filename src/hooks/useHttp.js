import { useEffect, useState, useCallback } from 'react';
import { FaUserLargeSlash } from 'react-icons/fa6';

async function sendHttpRequest(url) {
    const response = await fetch(url);

    console.log("url", url)


    const resData = await response.json();
    console.log('resData', resData)


    if(!response.ok) {
        console.log('It works???')
        throw new Error(resData.message || 'Something went wrong, failed to send request.');
    };

    return resData;
};

export const useHttp = (url, initialValue) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialValue);

    console.log("Before sendRequest", url)

    const sendRequest = useCallback(async function sendRequest() {
        console.log('Inside sendRequest', url)
        if (!url) return;
        setIsLoading(true);
        setError(null);
        try {
            const resData = await sendHttpRequest(url);
            setFetchedData(resData);
            console.log("Res", resData)
        } catch(error) {
            console.log("Is it work")
            setError(error.message ||'Something went wrong');
            console.log("error.message",error.message )
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
        setFetchedData,
    }
};