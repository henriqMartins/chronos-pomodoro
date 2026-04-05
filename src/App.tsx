import { Home } from './pages/home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

import './styles/global.css';
import './styles/theme.css';
import { MessagesContainer } from './components/MessagesContainer';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <Home />
      </MessagesContainer>
      <Home />
    </TaskContextProvider>
  );
}
