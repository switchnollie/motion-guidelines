import styled from "styled-components";

const TwoColGrid = styled.div`
  display: flex;
  align-items: center;
`;

export const RightColumn = styled.div`
  width: 128px;
`;

export const LeftColumn = styled.div`
  flex: 1;
  padding: 0 25px 0 0;
`;

export default TwoColGrid;
