import { useEffect, useState } from "react";

import { Container, ConteudoTitulo,
      Titulo, ButtonSuccess, BotaoAcao, 
      BotaoAntProx, ButtonPrimary, 
      TabelaValores, TextDanger,
      TextSuccess } 
      from '../../styles/custom_adm'

export const Home = () => {
  var dataAtual = new Date();
  var ano = dataAtual.getFullYear();
  var mes = dataAtual.getMonth()+1;

  const [dataView, setDataView] = useState({ano, mes});
  const [data, setData] = useState([]);

  const anterior = async () => {
    if (dataView.mes === 1) {
      setDataView({
        ano: dataView.ano -1,
        mes: 12
      }) ;
    } else {
      setDataView({
        ano: dataView.ano,
        mes: dataView.mes -1

      });
    }

  }

  const posterior = async () => {
    if (dataView.mes === 12) {
      setDataView({
        ano: dataView.ano + 1,
        mes: 1
      }) ;
    } else {
      setDataView({
        ano: dataView.ano,
        mes: dataView.mes +1

      });
    }

  }

  const listarExtrato = async e => {
    var valores = [
      {
        "id": 3,
        "nome": "Água",
        "valor": 250,
        "tipo": 1,
        "situacao": "Pago"
      },
      {
        "id": 2,
        "nome": "Luz",
        "valor": 347,
        "tipo": 1,
        "situacao": "Pendente"
      },
      {
        "id": 1,
        "nome": "Salário",
        "valor": 1100,
        "tipo": 2,
        "situacao": ""
      }

    ]
    setData(valores);

  }


  useEffect(() => {
    listarExtrato();
  })


  return (
    <Container>
      <ConteudoTitulo>
        <Titulo>Listar Situação Financeira</Titulo>
        <BotaoAcao>
          <ButtonSuccess>Cadastrar</ButtonSuccess>
          </BotaoAcao>
      </ConteudoTitulo>


      <BotaoAntProx>
        <ButtonPrimary type="button" onClick={() => anterior()} >Anterior</ButtonPrimary>
        <span>{dataView.mes + "/" + dataView.ano}</span>
        <ButtonPrimary type="button" onClick={() => posterior()} >Posterior</ButtonPrimary>
      </BotaoAntProx>
      {/* <p> Ano Atual: {dataView.ano}</p>
      <p> Mês Atual: {dataView.mes}</p>
      <br/>
      <h2>Ano: {dataView.ano} Mês: {dataView.mes}</h2> */}

      <TabelaValores >
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Situação</th>
            <th>Valor</th>
          </tr>

        </thead>
        <tbody>
          { data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.tipo === 1 ? <TextDanger>Pagamento</TextDanger>:
               <TextSuccess>Recebimento</TextSuccess>}</td>
              <td>{item.situacao}</td>
              <td>{item.valor}</td>
            </tr>
          ))}

        </tbody>
          <tr >
              <td>Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td>800</td>
            </tr>
        <tfoot>


        </tfoot>

      </TabelaValores>
    </Container>
  )
}