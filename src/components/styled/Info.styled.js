import styled from "styled-components";

export const StyledInfoCategoriesMarker = styled.div`
  position: absolute;
  bottom: 70px;
  left: 6.5px;
  font-size: 3.6rem;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    cursor: pointer;
    transform: scale(0.9);
    opacity: 0.9;
  }
`;

export const StyledInfoCategories = styled.div`
  display: ${({ display }) => display};
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  font-size: 1.4rem;
  color: rgb(222, 222, 222);
  border-radius: 10px;
  padding: 10px;
  text-align: justify;

  & span {
    font-weight: 800;
  }
`;
