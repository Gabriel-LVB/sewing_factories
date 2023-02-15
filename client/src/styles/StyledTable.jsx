import styled from "styled-components";

const StyledTable = styled.table`
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;

    td {
        border: 1px solid #ddd;
        padding: 8px;
        &:hover {
            cursor: pointer;
        }
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }

    tr:hover {
        background-color: #c6c6c6;
    }

    th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #010f35;
        color: white;
        padding: 8px;
        border: 1px solid #ddd;
    }
`;

export default StyledTable;
