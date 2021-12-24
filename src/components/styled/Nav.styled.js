import styled from "styled-components";

export const StyledNav = styled.ul`
  display: ${({ display }) => display};
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px;
  margin: 0px;
  background: rgba(0, 0, 0, 0.9);
  list-style-type: none;
  font-size: 1.4rem;
  color: rgb(222, 222, 222);

  & li {
    margin: 5px 0;
  }
  & li:not(:last-child) {
    margin-right: 10px;
  }

  & li:hover {
    color: rgb(100, 100, 100);
    cursor: pointer;
  }
`;


