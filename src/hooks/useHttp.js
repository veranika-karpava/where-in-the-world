import { useEffect, useState } from 'react';

export const useHttp = (fetchFn, initialValue) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialValue);

    useEffect(()=> {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetchFn();
                setFetchedData(response);
            } catch(error) {
                setError({message: error.message || 'Failed to fetch data.'})
            }

            setIsLoading(false);
        };

        fetchData();
    }, [fetchFn])


    return {
        isLoading,
        error,
        fetchedData
    }
};