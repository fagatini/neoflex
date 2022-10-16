import styled from 'styled-components'

export const TextStyled = styled.div`
align-self:center;
width:1110px;
padding-top:13px;
padding-bottom:9px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;

color: #838383;
`

export const Wrapper = styled.div`
display:flex;
align-items:center;
flex-direction:column;
justify-content:space-between;

min-height:100vh;

background-color:#EAEAEA;
`

export const ContentWrapper = styled.div`
display:flex;
align-items:center;
flex-direction:column;
justify-content:start;
flex-grow:1;

background-color:#EAEAEA;
`

export const BlockWrapper = styled.div`
display:grid;
grid-template-columns:repeat(3, 380px);
align-items:center;
grid-auto-rows: 438px;
`

export const CartMainBlock = styled.div`
width: 1110px;

display:flex;
justify-content:space-between;
flex-direction:row;
`

export const CartBlock = styled.div`
display:flex;
justify-content:space-between;
flex-direction:column;
`

export const TextStyled2 = styled.div`
align-self:center;
width:1110px;
padding-top:29px;
padding-bottom:13px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;

color: #1C1C27;
`