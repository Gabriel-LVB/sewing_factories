import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./Table";

function capitalize(string) {
    return string
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

function FactoriesTables() {
    useEffect(() => {
        axios
            .get("/api/factories")
            .then((response) => response.data.result)
            .then((data) => {
                setFactoriesData(data);
                setFactoriesColumns(
                    Object.keys(data[0])
                        .filter((key) => key !== "id")
                        .map((key) => {
                            return {
                                Header: capitalize(key.replaceAll("_", " ")),
                                accessor: key,
                            };
                        })
                );
            });
    }, []);

    const [factoriesData, setFactoriesData] = useState([]);
    const [factoriesColumns, setFactoriesColumns] = useState([]);

    return <Table columns={factoriesColumns} data={factoriesData}></Table>;
}

export default FactoriesTables;
