import StyledContainer from "../../styles/ContainerStyled";
import styled from "styled-components";
import FactoriesTables from "./FactoriesTable";

const StyledFactories = styled(StyledContainer)`
    width: 75vw;
    height: 90vh;
    padding: 10px 15px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 10px;
        &-track {
            background-color: #979797;
            border-radius: 20px;
        }
        &-thumb {
            background-color: black;
            border-radius: 20px;
        }
    }

    .title {
        margin-bottom: 10px;
    }
`;

function Factories() {
    return (
        <StyledFactories>
            <div className="title">Minhas fábricas</div>
            <FactoriesTables />
        </StyledFactories>
    );
}

export default Factories;
