import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("loading...");
  useEffect(() => {
    axios
      .get("./api/factories", { crossdomain: true })
      .then((response) => setData(JSON.stringify(response.data.result[1])));
  }, []);
  return <div className="content">{data}</div>;
}

export default App;
