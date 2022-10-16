/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context'
import { CartNumberStyled, ImageStyled, HeartNumberStyled, TitleStyled, Wrapper, RelativeDiv } from './HeaderStyle'
import cart from '../../materials/cart.png'
import heart from '../../materials/heart.png'

const Header = ()=> {
    const context = useContext(CartContext)
    const [CartItemCount, setCartItemCount] = useState(0)
    let navigate = useNavigate()

    useEffect(()=>{
        const itemCount = context.cart.reduce(
            (itemCount,item) => itemCount + item.count, 0
        );
        setCartItemCount(itemCount)
        },[context]);
    
    const onQpickClick = () => {
        navigate('/')
    }
    
    const onCartClick = () => {
        navigate('/cart')
    }

    return (
        <Wrapper>
            <TitleStyled onClick={(e) => onQpickClick(e)}>QPICK</TitleStyled>
            <RelativeDiv>
                <ImageStyled src={heart} alt=''></ImageStyled>
                <HeartNumberStyled>2</HeartNumberStyled>
                <ImageStyled src={cart} onClick={(e) => onCartClick(e)} alt=''></ImageStyled>
                <CartNumberStyled onClick={(e) => onCartClick(e)}>{CartItemCount}</CartNumberStyled>
            </RelativeDiv>
        </Wrapper>
    )
}
export default Header