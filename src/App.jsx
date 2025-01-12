import { useState, useEffect } from "react";
import { fetchDataFromAPi } from "./utils/api";

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = async () => {
    try {
      const res = await fetchDataFromAPi("/movie/popular");
      const { results } = res;
      console.log(results[10].id); // Logs the ID at index 10
      setResults(results); // Update state with fetched results
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div>This is Movix App</div>
    </>
  );
}

export default App;
