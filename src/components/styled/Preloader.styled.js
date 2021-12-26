import styled from 'styled-components';
import preloader from '../../img/preloader.png'

export const StyledPreloader = styled.div`
padding:0;
margin:0;
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, 0.7);
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

& div {
    width:300px;
    height: 300px;
    background: url(${preloader}) no-repeat;
    background-size: contain;
    animation: logo 1s alternate infinite;
}

@keyframes logo {
    from {
        transform: scale(1)
    } to {
        transform: scale(.8);
    }
}

& h2 {
    color: rgb(222, 222, 222);
    
}

`