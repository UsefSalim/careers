import axios from 'axios';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
const fetcher = (url) => axios.get(url).then((res) => res.data);

const useSwr = (url, name, initialData) => {
  const [res, setRes] = useState(initialData);
  const { data, error } = useSWR(url, fetcher, {
    initialData,
  });
  useEffect(() => {
    const newData = data ? data[name] || data : initialData;
    setRes(newData);
  }, [data, name, initialData]);

  return { res, error };
};
export default useSwr;
