/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context'
import { CostsStyled, CountBlock, CountStyled, DeleteCostsBlock, DeleteStyled, ImageButtonStyled, ImageCountBlock, ImageStyled, InformationBlock, PriceStyled, TitlePriceBlock, TitleStyled, Wrapper } from './CartFrameStyle'
import minus from '../../materials/minus.png'
import plus from '../../materials/plus.png'
import deletePick from '../../materials/delete.png'


const CartFrame = ({data})=> {
    const context = useContext(CartContext)
    const [count, setCount] = useState(data.count || 1)

    const [sum,setSum] = useState(0)

    useEffect(()=>{
        const sum = data.count * data.price
        setSum(sum)
        },[count]);


    const onPlusClick = () => {
        setCount(count + 1)
        context.addToCart({...data, count: count + 1})
    }

    const onMinusClick = () => {
        setCount(count - 1)
        context.addToCart({...data, count: count - 1})
    }

    const onDeleteClick = () => {
        context.setCart(context.cart.filter((elem) => elem.id !== data.id))
    }

    return (
        <Wrapper>
            <ImageCountBlock>
                <ImageStyled src = {data.img} alt=''></ImageStyled>
                <CountBlock>
                    <ImageButtonStyled src={minus} onClick={(e)=>onMinusClick()} alt=''></ImageButtonStyled>
                    <CountStyled>{count}</CountStyled>
                    <ImageButtonStyled src={plus} onClick={(e)=>onPlusClick()} alt=''></ImageButtonStyled>
                </CountBlock>
            </ImageCountBlock>
            <InformationBlock>
                <TitlePriceBlock>
                    <TitleStyled>{data.title}</TitleStyled>
                    <PriceStyled>{data.price} ₽</PriceStyled>
                </TitlePriceBlock>
                <DeleteCostsBlock>
                    <DeleteStyled src={deletePick} onClick={(e)=>onDeleteClick()} alt=''></DeleteStyled>
                    <CostsStyled>{sum} ₽</CostsStyled>
                </DeleteCostsBlock>
            </InformationBlock>
        </Wrapper>
    )
}
export default CartFrame