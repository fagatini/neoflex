import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { CartContext } from '../../context'
import { BlackBlock, ResultBlock, TextStyled, WhiteText, Wrapper } from './ResultStyle'

const Result = ()=> {
    const [sum,setSum] = useState(0)
    const context = useContext(CartContext)

    useEffect(()=>{
        const sum = context.cart.reduce(
            (sum, item) => sum + item.price*item.count, 0
        );
        setSum(sum)
        },[context]);

    return (
        <Wrapper>
            <ResultBlock>
                <TextStyled>ИТОГО</TextStyled>
                <TextStyled>₽ {sum}</TextStyled>
            </ResultBlock>
            <BlackBlock>
                <WhiteText>Перейти к оформлению</WhiteText>
            </BlackBlock>
        </Wrapper>
    )
}
export default Result