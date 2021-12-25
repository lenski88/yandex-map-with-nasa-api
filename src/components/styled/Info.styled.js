import styled from "styled-components";

export const StyledInfoCategoriesMarker = styled.div`
  display: ${({ extendNavigation }) => (extendNavigation ? "none" : "block")};
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
  display: ${({ isShow, extendNavigation }) => isShow || extendNavigation ? 'none' : 'block'};
  position: absolute;
  width: 80%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  font-size: 1.4rem;
  color: rgb(222, 222, 222);
  border-radius: 10px;
  padding: 10px;
  text-align: justify;
  overflow: auto;
  word-wrap: break-word;

  & span {
    font-weight: 800;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;

    background: rgba(222, 222, 222, 0.2);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(222, 222, 222, 0.4);
  }
`;
