import { Home } from './pages/home';
import { TaskContextProvider } from './contexts/TaskContext';

import './styles/global.css';
import './styles/theme.css';

export function App() {

  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  )
}
