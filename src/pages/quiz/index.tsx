import './styleQuiz.css'
import {useState} from 'react';
import { Button, Container, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface Perguntas{
  pergunta: string;
  opcoes: string[];
  respostaCorreta: number;
}

const perguntas: Perguntas[] = [
  {
    pergunta: 'James Webb foi desenvolvido para responder quais questionamentos?',
    opcoes: ['A existência de planetas habitáveis', 'A evolução de galáxias', 'Sistemas planetários', 'Todas as alternativas'],
    respostaCorreta: 3,
  },
  {
    pergunta: 'James Webb está localizado a aproximadamente quantos quilômetros da Terra?',
    opcoes: ['2.500.000', '2.000.000', '1.500.000', '1.000.000'],
    respostaCorreta: 2,
  },
  {
    pergunta: 'Qual seu ano de lançamento?',
    opcoes: ['2007', '2014', '2021', '2016'],
    respostaCorreta: 2,
  },
  {
    pergunta: 'Em que ano o Telescópio Espacial James Webb foi concluído?',
    opcoes: ['2021', '2014', '2016', '2007'],
    respostaCorreta: 1,
  },
  {
    pergunta: 'O Telescópio Espacial James Webb foi lançado a bordo de qual foguete?',
    opcoes: ['Ariane 5', 'Ariane 3', 'Ariane 1', 'Ariane 7'],
    respostaCorreta: 0,
  },
  {
    pergunta: 'Onde ocorreu seu lançamento?',
    opcoes: ['Agência Espacial Europeia', 'Centro Espacial de Kourou', 'Agência Espacial Canadiana', 'NASA'],
    respostaCorreta: 1,
  }
]

const PerguntasContainer= styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  height:'76.5vh',
})

const PerguntasPaper = styled(Paper)({
  padding: "20px",
  maxWidth: "500px",
  width: "100%",
  textAlign: "center",
  background: '#fff'
});

export default function Quiz():JSX.Element{
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [mostrarPontuacao, setMostrarPontuacao] = useState(false);

  const tratarRespostaBotao = (opcaoSelecionada: number) => {
    if (opcaoSelecionada === perguntas[perguntaAtual].respostaCorreta){
      setPontuacao(pontuacao + 1);
    }

    const proximaPergunta = perguntaAtual + 1;
    if(proximaPergunta < perguntas.length){
      setPerguntaAtual(proximaPergunta)
    }else{
      setMostrarPontuacao(true);
    }
  }

  const reiniciar = () => {
    setPerguntaAtual(0);
    setPontuacao(0);
    setMostrarPontuacao(false);
  }
  return(
    <PerguntasContainer className='divMain'>
      {mostrarPontuacao ? (
        <>
          <Typography variant='h6' component='div'>
            Você acertou {pontuacao} de {perguntas.length} perguntas! 
          </Typography>
          <Button variant="outlined" onClick={reiniciar} sx={{marginTop: "10px", bgcolor: '#2E3D67', color: '#fff','&:hover':{bgcolor:'#739890', border:'none'}}}>
            Reiniciar Quiz
          </Button>
        </>
      ) : ( 
      <PerguntasPaper elevation={3}>
        <Typography>
          Pergunta {perguntaAtual + 1}
        </Typography>
        <Typography variant='body1' gutterBottom>
          {perguntas[perguntaAtual].pergunta}
        </Typography>
        <div className='buttonQuiz'>
          {perguntas[perguntaAtual].opcoes.map((opcao, index) => (
            <Button key={index} variant='outlined' onClick={() => tratarRespostaBotao(index)} sx={{display:'flex', flexDirection: 'column', width:'100%', marginTop: "10px", bgcolor: '#2E3D67', color: '#fff','&:hover':{bgcolor:'#739890', border:'none'}}}>
              {opcao}
            </Button>
          )
          )}
        </div>
      </PerguntasPaper>)
      }
    </PerguntasContainer>
  )
}