import styled from '@emotion/styled'
import React from 'react'
import Error from './error'
import { useState } from 'react'
import { useEffect } from 'react'
import { coins } from '../data/coins'
import useSelectCoins from '../hooks/useSelectCoins'


const InputSubmit = styled.input`
  background-color: #F806CC;
  border: none;
  text-align: center;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 30px;
 font-size: 20px;
 border-radius: 5px;
 transition: background-color .3s ease;
 &:hover{
     background-color: #A91079;
     cursor: pointer;
 }
`

const Formulario = ({ setCoins }) => {
    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)


    const [coin, SelectCoin] = useSelectCoins('Escolha a moeda', coins);
    const [criptocoin, SelectCriptoCoin] = useSelectCoins('Escolha a criptomoeda', criptos);


    useEffect(() => {
        const consultarAPI = async () => {
            const url = " https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const response = await fetch(url)
            const result = await response.json()

            const arrayCriptos = result.Data.map(cripto => {

                const obj = {
                    id: cripto.CoinInfo.Name,
                    number: cripto.CoinInfo.FullName
                }
                return obj
            })
            setCriptos(arrayCriptos)
        }
        consultarAPI();
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        if ([coin, criptocoin].includes('')) {
            setError(true)
            return
        }

        setError(false)
        setCoins({
            coin,
            criptocoin
        })
    }

    return (
        <>
            {error && <Error>Preencha todos os campos</Error>}

            <form
                onSubmit={handleSubmit}
            >
                <SelectCoin />
                <SelectCriptoCoin />

                <InputSubmit
                    type="submit"
                    value="Cotação"
                />
            </form>
        </>
    )
}

export default Formulario

