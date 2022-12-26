import { useCallback, useState } from "react";

export default function useFetch(options) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(false);
      setError(null);

      const res = await fetch("http://localhost:8001/api/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(options.body),
      });
      if (res.ok) {
        const data = await res.json();
        setData(data.data);
        // cb && cb()
      } else {
        throw new Error("数据获取失败");
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    data,
    fetchData,
  };
}


//   const { fetchData,data, loading } = useFetch({});
