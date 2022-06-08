import { useState } from 'react'
import styled from '@emotion/styled'
import ImageCripto from './img/business-3d-golden-bitcoin-front.png'
import Formulario from './components/Formulario'
import { useEffect } from 'react'
import Result from './components/Result'
import Spinner from './components/Spinner'

const Content = styled.div`
 max-width: 900px;
 margin: 0 auto;
 width: 90%;
 padding-bottom: 2rem;
 @media (min-width: 992px){
  padding-bottom: 0;
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 gap: 2rem;

 }
`

const Image = styled.img`
max-width: 400px;
width: 80%;
margin: 80px auto 0 auto;
display: block;
@media (min-width: 992px){
max-width: 400px;
width: 80%;
margin: 150px auto 0 auto;
display: block;
 }
`

const Heading = styled.h1`
 font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 color: #fff;
 text-align: center;
 font-weight: 700;
 margin-top: 80px;
 margin-bottom: 50px;
 font-size: 34px;

 &::after{
   content: " ";
   width: 100px;
   height: 6px;
   background-color: #66a2fe;
   margin: 10px auto auto;
 }

`


function App() {

  const [coins, setCoins] = useState({})
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (Object.keys(coins).length > 0) {

      const cryptocurrencyQuote = async () => {
        setLoading(true)
        setResult({})
        const { coin, criptocoin } = coins
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptocoin}&tsyms=${coin}`


        const response = await fetch(url)
        const result = await response.json()

        setResult(result.DISPLAY[criptocoin][coin])

        setLoading(false)
      }
      cryptocurrencyQuote()
    }
  }, [coins])

  return (
    <Content>
      <Image src={ImageCripto} alt="Cripto Image" />

      <div>
        <Heading>Cotação Criptomoedas</Heading>
        <Formulario setCoins={setCoins} />
        {loading && <Spinner/>}
        {result.PRICE && <Result result={result} />}
      </div>


    </Content>
  )
}

export default App
