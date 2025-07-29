import React, { useEffect, useState } from "react";
import axios from "axios";

const Datafetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get("https://api.example.com/data", { cancelToken: source.token })
      .then((res) => setData(res.data))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Request canceled:", err.message);
        } else {
          console.error("Fetch error:", err);
        }
      });

    // Cleanup on unmount
    return () => {
      source.cancel("Fetch canceled by component unmount.");
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Data Fetcher</h2>
      <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>
    </div>
  );
};

export default Datafetch;
