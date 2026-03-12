import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  console.log('oi');

  return (
    <>
      <Heading className="heading">Ola mundo do app</Heading>
      <div>
        <h1>Ola mundo do app</h1>
      </div>
    </>
  );
}
