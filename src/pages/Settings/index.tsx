import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { useEffect, useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function Settings() {
  const { state, dispatch } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const breakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
        document.title = "Configurações"
      }, []);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();

    const formErrors = [];

    const workTime = Number(workTimeInput.current?.value);
    const breakTime = Number(breakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    if (isNaN(workTime) || isNaN(breakTime) || isNaN(longBreakTime)) {
      formErrors.push('Por favor, insira valores numéricos válidos.');
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push('Digite valores entre 1 e 99 para foco');
    }

    if (breakTime < 1 || breakTime > 30) {
      formErrors.push('Digite valores entre 1 e 30 para descanso curto');
    }

    if (breakTime < 1 || breakTime > 60) {
      formErrors.push('Digite valores entre 1 e 60 para descanso longo');
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => {
        showMessage.erro(error);
      });

      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_CONFIG,
      payload: {
        workTime,
        breakTime,
        longBreakTime,
      },
    });
    showMessage.success('Configurações salvas com sucesso!');
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: 'center' }}>
          Modifique as configurações para tempo de foco, descanso curso e
          descanso longo.
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action="" className="form">
          <div className="formRow">
            <DefaultInput
              id="workTime"
              labeltext="Foco"
              ref={workTimeInput}
              defaultValue={state.config.workTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="shortBreakTime"
              labeltext="Descanso curto"
              ref={breakTimeInput}
              defaultValue={state.config.breakTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="longBreakTime"
              labeltext="Descanso longo"
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultButton
              icon={<SaveIcon />}
              aria-Label="Salvar configurações"
              title="Salvar Configurações"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
