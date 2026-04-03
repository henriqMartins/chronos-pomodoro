import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  //tips
  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime} min</span>,
    breakTime: <span>Descanse por {state.config.breakTime} min</span>,
    longBreakTime: <span>Descaso Longo {state.config.longBreakTime}</span>,
  };

  const tipsForNoActiveTask = {
    workTime: <span>Próximo ciclo é Foco de {state.config.workTime} min</span>,
    breakTime: (
      <span>Próximo ciclo é descanso de {state.config.breakTime} min</span>
    ),
    longBreakTime: (
      <span>Próximo ciclo é descanso de {state.config.longBreakTime} min</span>
    ),
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
