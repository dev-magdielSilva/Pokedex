import { createGlobalStyle } from "styled-components"
import styledComponentsCjs from "styled-components"
import { styled } from "@mui/system"
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'

export const Styled = createGlobalStyle `
body{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    background-color: yellow;
}
`
//----------Styled CardPokedex

export const Container = styledComponentsCjs.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
    margin: 30px;

    @media screen and (min-device-width: 200px) and (max-device-width: 667px) {
      display: flex;
      flex-direction: column;
    }
`

//----------Styled Footer

export const StyledFooter = styledComponentsCjs.div`
    background-color: #ffffff;
    font-family: "Roboto";
    text-decoration: none;
    .page-wrap:after{
      height: 20vh
    }

`
export const StyledLogo = styledComponentsCjs.img`
    width: 15vw;

    @media screen and (min-device-width: 200px) and (max-device-width: 667px) {
      width: 30vw;
    }
`
//---------- AboutPage

export const CardAbout = styledComponentsCjs.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 50px;
    border-radius: 0.3rem;
    background-color: #ffffff;
    text-align: justify;
    width: 20vw;
    margin:30px;
    font-family: "Roboto";
    padding:30px;

    @media screen and (min-device-width: 200px) and (max-device-width: 667px) {
      width: 14rem;
      margin: 0.5rem;
`
export const ContainerAbout = styledComponentsCjs.div`
    display: flex;
    justify-content:space-between;
    gap: 40px;
    margin: 20px;

    @media screen and (min-device-width: 200px) and (max-device-width: 667px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`
export const ImageAbout = styledComponentsCjs.div`
    display:flex;
    justify-content:center;
    margin-bottom:20px;
`

export const AlignContact = styledComponentsCjs.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
//---------- CardPokeDex

export const AlignPhotos = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const UpperCase = styled(Typography)(({ theme }) => ({
    textTransform: 'capitalize',
    textAlign: 'center'
}))


export const AlignButtons = styled(CardActions)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent: 'center',
  
}))


export const UpperCaseTypes = styled(Typography)(({ theme }) => ({
  textTransform: 'capitalize',
  textAlign: 'center'
}))


export const PokePhoto = styled(CardMedia)(({ theme }) => ({
  padding: '0.5rem'
}))