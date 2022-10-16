import React from 'react'
import { Footer } from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ItemFrame from '../components/ItemFrame/ItemFrame'
import { WireEars, WirelessEars } from '../const'
import { BlockWrapper, TextStyled, Wrapper } from './PagesStyle'

const MainPage = ()=> {
    return (
        <Wrapper>
            <Header/>

            <TextStyled>Наушники</TextStyled>
            <BlockWrapper>
                {WireEars.map((item, index)=>{
                    return (<ItemFrame key={item.id} data={item}/>)
                })}
            </BlockWrapper>

            <TextStyled>Беспроводные наушники</TextStyled>
            <BlockWrapper>
                {WirelessEars.map((item, index)=>{
                    return (<ItemFrame key={item.id} data={item}/>)
                })}
            </BlockWrapper>

            <Footer/>
        </Wrapper>
    )
}
export default MainPage