import styled from 'styled-components'

export const TitleStyled = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 30px;

margin-top:15px;
margin-bottom:15px;

color: #101010;
cursor: pointer;
`

export const Wrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;

width:1135px;
height:60px;

margin-bottom:15px;
`

export const ImageStyled = styled.img`
margin:20px 25px 20px 20px;
width: 22px;
height: 20px;

cursor: pointer;
`

export const HeartNumberStyled = styled.div`
position:absolute;
top:11px;
right:81px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 18px;
text-align: center;

color: #FFFFFF;

width: 17.4px;
height: 17.4px;
border-radius: 50%;
background-color: orange;
border:none;
`

export const CartNumberStyled = styled.div`
position:absolute;

top:12px;
right:16px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 18px;
text-align: center;

cursor: pointer;
color: #FFFFFF;

width: 17.4px;
height: 17.4px;
border-radius: 50%;
background-color: orange;
border:none;
`

export const RelativeDiv = styled.div`
position:relative
`