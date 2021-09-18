import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);

    const getData = async (abortController) => {
        const response = await fetch(url, {signal: abortController.signal});
        const jsonData = await response.json();
        setData(jsonData);
    }

    useEffect(() => {
        const abortController = new AbortController();
        getData(abortController);
        return () => abortController.abort();
    });

    return {data};
}

export default useFetch;