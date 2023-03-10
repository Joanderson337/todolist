import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { PlusCircle } from 'phosphor-react';
import { Task } from '../Task';
import { ButtonTask, ContentInput, Counter, CounterTwo, NoTasks, Overview, OverviewBox, TaskForm, TasksContainer } from './styled';

export interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface TaskListProps {
  tasks: TaskProps[];
  onChangeIsComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TaskList() {

  const [completedTasks, setCompletedTasks] = useState(Number);
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [textTask, setTaskText] = useState('');

  const createNewTask = (event: FormEvent) => {
    event.preventDefault();

    if (!textTask) {
      alert('O campo não pode ser vazio.');
      return;
    }

    const newTask =
    {
      id: uuidv4(),
      title: textTask,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);

    setTaskText('');
  };

  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value);
  }

  function handleCompletedTasks() {
    let count = 0;
    tasks.filter(task => {
      if (task.isCompleted === true) {
        count++;
      }
    });
    setCompletedTasks(count);
  }

  function changeIsComplete(id: string) {
    tasks.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
    });
    handleCompletedTasks();
  }

  function handleDeleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== id;
    });
    tasks.map(task => {
      if (task.id === id && task.isCompleted === true) {
        changeIsComplete(id);
      }
    });

    setTasks(tasksWithoutDeletedOne);
  }


  return (
    <main>
      <TaskForm>
        <form onSubmit={createNewTask}>
          <ContentInput
            name="task"
            type='text'
            placeholder='Adicione uma nova tarefa'
            value={textTask}
            onChange={handleTextChange}
          />
          <ButtonTask
            type="submit"
          >
            Criar
            <PlusCircle
            />
          </ButtonTask>
        </form>
      </TaskForm>

      <OverviewBox>
        <Overview>
          <Counter>
            <p>Tarefas criadas</p>
            <span>{tasks.length}</span>
          </Counter>
          <CounterTwo>
            <p>Concluídas</p>
            <span>{completedTasks}</span>
          </CounterTwo>
        </Overview>
      </OverviewBox>
      {
        tasks.length > 0 ? (
          tasks.map(task => {
            return (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                onChangeIsComplete={changeIsComplete}
                onDeleteTask={handleDeleteTask}
                isCompleted={task.isCompleted}
              />
            );
          })
        ) : (
          <NoTasks>
            <TasksContainer>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </TasksContainer>
          </NoTasks>

        )
      }
    </main>
  );
}

