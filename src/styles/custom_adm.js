import styled from "styled-components";


export const Container = styled.section`
  margin: 0px auto;
  width: 960px;
  max-width: 960px;

`

export const ConteudoTitulo = styled.section`
  display: flex;
  justify-content: space-between;

`
export const BotaoAcao = styled.section`
  margin: 5px;

`

export const Titulo = styled.h1`
  font-size: 23px;
  font-family: sans-serif;
  margin: 10px 15px;
  color: #1D1E1E
`

export const BotaoAntProx = styled.section`
  display: flex;
  justify-content:space-between;
  border-top: 1px solid #C1C1C1;
  padding-top: 15px;

`


export const ButtonSuccess = styled.button`
  background-color: #FFFFFF;
  color: #198754;
  padding: 5px 8px;
  border: 1px solid #198754;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background-color: #198754;
    color: #FFF
  }
`

export const ButtonPrimary = styled.button`
  background-color: #FFFFFF;
  color: #0D6EFD;
  padding: 5px 8px;
  border: 1px solid #0D6EFD;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background-color: #0D6EFD;
    color: #FFFFFF
  }
`


export const TabelaValores = styled.table`
  margin-top: 15px;
  width: 100%;
  th{
    background-color: #007281;
    color: #F1F1F1;
    padding: 10px;
  }
  td{
    background-color: #F6F6F6;
    color: #3E3E3E;
    padding: 8px;

  }

`

export const TextDanger = styled.span`
  color: #EC2121;
`

export const TextSuccess = styled.span`
  color: #198754;

`
export const TextPendente = styled.span`
  color: #EC2121;
`

export const TextPago = styled.span`
  color: #198754;

`
