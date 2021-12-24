import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { categoriesThunkAC } from '../../redux/Nav/actionsNav';

import { StyledNav } from '../styled/Nav.styled';


export const Nav = () => {
const categories = useSelector(state => state.categories);
const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(categoriesThunkAC())
    },[dispatch])
    return (
        <StyledNav display={categories.status ? 'flex' : 'none'}>
           {categories.status ? categories.categories.map(item => {
              return <li key={item.id}>{item.title}</li>
           }) : null} 
        </StyledNav>
    )
}


