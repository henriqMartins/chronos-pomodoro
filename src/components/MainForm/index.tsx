import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { secToMin } from '../../utils/secToMin';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: secToMin(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleStopTask() {

    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map(task => {
          if (prevState.activeTask && task.id === task.id) {
          return {...task, interruptDate: Date.now() };
          }
          return task;
        })
      };
    });
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form">
      <div className="formRow">
        <DefaultInput
          id="meuInput"
          type="text"
          labeltext="task"
          placeholder="Escreve ai"
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 25 min</p>
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask && (
          <DefaultButton
            aria-label="iniciar nova tarefa"
            title="inciar nova tarefa"
            type="submit"
            icon={<PlayCircleIcon />}
            key='submit button'
          />
        )} 
        
        {!!state.activeTask && (
          <DefaultButton
            aria-label="parar nova tarefa"
            title="parar nova tarefa"
            type="button"
            color="red"
            icon={<StopCircleIcon />}
            onClick={handleStopTask}
            key="action button(doesn't send form"
          />
        )}
      </div>
    </form>
  );
}
