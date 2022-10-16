/* eslint-disable no-unused-vars */
import React from 'react'
import {TitleStyled, Wrapper, TextStyled, ItemsWrapper, ConditionsBlock, ContactsBlock, LangBlock, TextStyled2, TextStyled3, VkLabel} from './FooterStyle'
import vk from '../../materials/VK.png'
import telega from '../../materials/Telegram.png'
import whatsapp from '../../materials/Whatsapp.png'
import planet from '../../materials/planet.png'


export const Footer = () => {
    return (
        <Wrapper>
            <TitleStyled>QPICK</TitleStyled>
            <ItemsWrapper>
                <TextStyled>Избранное</TextStyled> 
                <TextStyled>Корзина</TextStyled> 
                <TextStyled>Контакты</TextStyled>
            </ItemsWrapper>
            <ConditionsBlock>
                <TextStyled>Условия сервиса</TextStyled>
                <LangBlock>
                    <img src={planet} alt=''></img>
                    <TextStyled2>Каз</TextStyled2>
                    <TextStyled3>Рус</TextStyled3>
                    <TextStyled2>Eng</TextStyled2>
                </LangBlock>
            </ConditionsBlock>
            <ContactsBlock>
                <VkLabel src={vk} alt=''></VkLabel>
                <img src={telega} alt=''></img>
                <img src={whatsapp} alt=''></img>
            </ContactsBlock>
        </Wrapper>
    )
}