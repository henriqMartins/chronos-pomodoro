import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Cycles } from './Cycles';
import { Footer } from './components/Footer';

import './styles/global.css';
import './styles/theme.css';
import { DefaultInput } from './components/DefaultInput';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Heading } from './components/Heading';
import { useState } from 'react';

export function App() {

  // const [numero, setNumero] = useState(() => {
  //   console.log('Inicializando o estado');
  //   return 0;
  // });

  const [numero, setNumero] = useState(0);

  function handleClick() {
    // setNumero(prevState => prevState + 1);
    setNumero(numero + 1);
  }
  
  return (
    <>
      <Heading>Número: {numero}</Heading>
      <button onClick={handleClick}>Aumenta</button>

      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form">
          <div className="formRow">
            <DefaultInput
              id="meuInput"
              type="text"
              labeltext={numero.toString()}
              placeholder="Escreve ai"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles/>
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon/>} color='red'/>
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
