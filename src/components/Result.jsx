import React from 'react'
import styled from '@emotion/styled'


const Container = styled.div`
color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 3rem;
margin-top: 30px;
text-align: center;
@media (min-width: 992px){
flex-direction: row;
text-align: left;
 }
`

const Image = styled.img`
display: block;
width: 100px;

`

const Text = styled.p`
font-size: 16px;

span{
  font-weight: 700;
}


`
const Price = styled.p`
font-size: 25px;
span{
  font-weight: 700;
}


`


const Resultado = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result

  return (
    <Container>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="image cripto" />
      <div>
        <Price>Preço: <span>{PRICE}</span></Price>
        <Text>Preço mais alto do dia: <span>{HIGHDAY}</span></Text>
        <Text>Preço do dia: <span>{LOWDAY}</span></Text>
        <Text>Verificação nas últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Text>
        <Text>Ultima atualização: <span>{LASTUPDATE}</span></Text></div>
    </Container>
  )
}

export default Resultado