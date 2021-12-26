import styled from 'styled-components';

export const StyledNotFound = styled.div`
    display: ${({hidden})=> hidden ? 'none' : 'block'};
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    width:300px;
    height: 90px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    text-align: center;
    color: rgb(222, 222, 222); 
    font-size: 2rem;
    padding: 30px 0;
`

export const StyledButtonNotFound = styled.div`
    position: absolute;
    top:5px;
    right: 5px;
    font-size: 2.5rem;
    cursor: pointer;
    transition: all .25s;

    &:hover {
        opacity: .9;
        transform: scale(.9)
    }
`