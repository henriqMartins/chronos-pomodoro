import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Heading>
        Ola mundo do app
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <div>
        <h1>Ola mundo do app</h1>
      </div>
    </>
  );
}
