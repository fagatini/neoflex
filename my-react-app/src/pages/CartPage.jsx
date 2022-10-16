import React from 'react'
import { useContext } from 'react'
import CartFrame from '../components/CartFrame/CartFrame'
import { Footer } from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Result from '../components/Result/Result'
import { CartContext } from '../context'
import { CartBlock, CartMainBlock, ContentWrapper, TextStyled2, Wrapper } from './PagesStyle'

const CartPage = ()=> {
    const context = useContext(CartContext)
    return (
        <Wrapper>
            <Header></Header>

            <ContentWrapper>
            <TextStyled2>Корзина</TextStyled2>
            <CartMainBlock>
                <CartBlock>
                    {(context.cart).map((item, index)=>{
                        return (<CartFrame key={item.id} data={item}/>)
                    })}
                </CartBlock>
                <Result></Result>
            </CartMainBlock>
            </ContentWrapper>

            <Footer></Footer>
        </Wrapper>
    )
}
export default CartPage