import styled from "styled-components";

export const StyledInfoCategoriesMarker = styled.div`
  display: ${({ extendNavigation }) => (extendNavigation ? "none" : "block")};
  position: absolute;
  bottom: 70px;
  left: 6.5px;
  font-size: 3.6rem;
  color: rgba(0, 0, 0, 0.6);
  transition: all 0.25s;
  animation: ${({ active }) =>
    active ? "active .25s alternate infinite" : "null"};

  @keyframes active {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0.9;
      transform: scale(0.9);
    }
  }

  &:hover {
    cursor: pointer;
    transform: ${({ active }) => (!active ? "scale(0.9)" : "null")};
    opacity: ${({ active }) => (!active ? "0.9" : "null")};
  }
`;

export const StyledInfoCategories = styled.div`
  display: ${({ showInfoCategories, extendNavigation }) =>
    showInfoCategories || extendNavigation ? "none" : "block"};
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

  & h2 {
    text-align: center;
  }

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
