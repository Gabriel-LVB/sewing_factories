import StyledContainer from "../../styles/ContainerStyled";
import styled from "styled-components";

const StyledAllFactories = styled(StyledContainer)`
  width: 70vw;
  height: 70vh;
`;

function AllFactories() {
  return (
    <StyledAllFactories>
      <div className="title">Minhas fábricas</div>
    </StyledAllFactories>
  );
}

export default AllFactories;
