import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [data, setdata] = useState (null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {

        const abortCount = new AbortController();

        fetch(url, { signal: abortCount.signal })
            .then(response => {
                if(!response.ok){
                    throw Error ('Could not fetch the data for that resource');
                }
                return response.json();
            })
            .then (data => {
                console.log(data);
                setdata(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === 'AbortError'){
                    console.log ('fetch aborted');
                } else {
                setIsPending(false);
                setError(err.message);
                }
            })
            return () => abortCount.abort();
    }, [url]);
return {data, isPending, error}
}

export default useFetch;