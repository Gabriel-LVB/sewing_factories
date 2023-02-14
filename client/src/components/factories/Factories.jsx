import axios from "axios";
import { useEffect, useState } from "react";
import AllFactories from "./AllFactories";

function Factories() {
  const [factories, setFactories] = useState("carregando...");

  useEffect(() => {
    axios
      .get("/api/factories")
      .then((response) => response.data.result)
      .then((data) => {
        setFactories(data);
      });
  }, []);

  return <AllFactories></AllFactories>;
}

export default Factories;
