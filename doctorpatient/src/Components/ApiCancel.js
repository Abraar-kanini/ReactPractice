import React, { useEffect, useState } from "react";

export default function ApiCancel() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    let fetchData = async () => {
      try {
        let getData = await fetch("https://localhost:7043/api/Doctor", {
          signal,
        });
        let response = await getData.json();
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [count]);

  let handleButton = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      hii this is apicancel request
      <br />
      <button onClick={handleButton}>submit</button>
    </div>
  );
}
