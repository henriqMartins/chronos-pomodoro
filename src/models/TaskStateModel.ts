import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
    tasks: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCycle: number; // 1 a 8
    config: {
        workTime: number; // em segundos
        breakTime: number; // em segundos
        longBreakTime: number; // em segundos
    }
} 