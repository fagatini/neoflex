/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context'
import { TitleStyled, ImageStyled, Wrapper, CostStyled,RateStyled, StarStyled, BuyStyled,StarBlockStyled, InformationWrapper, ItemWrapper } from './ItemFrameStyle'
import star from '../../materials/star.png'

const ItemFrame = ({data})=> {
    const context = useContext(CartContext)
    let navigate = useNavigate()

    const onBuyClick = (e)=>{
        context.addToCart({...data, count: 1})
        navigate(`/cart`)
    }

    return (
        <Wrapper>
            <ImageStyled src={data.img} alt=''></ImageStyled>
            <InformationWrapper>
                <ItemWrapper>
                    <TitleStyled>{data.title}</TitleStyled>
                    <StarBlockStyled>
                        <StarStyled src={star} alt=''></StarStyled>
                        <RateStyled>{data.rate}</RateStyled>
                    </StarBlockStyled>
                </ItemWrapper>
                <ItemWrapper>
                    <CostStyled>{data.price} ₽</CostStyled>
                    <BuyStyled onClick={(e)=>onBuyClick(e)}>Купить</BuyStyled>
                </ItemWrapper>
            </InformationWrapper>
        </Wrapper>
    )
}
export default ItemFrame