import { Container } from './components/Container';
import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <button>rela no meu butão</button>
      </Container>

      <Container>
        <Heading>Olá, mundo!</Heading>
      </Container>
    </>
  );
}
