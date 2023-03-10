import { Trash } from 'phosphor-react';
import { TaskButton, TaskCheckbox, TaskWrapper, TodoItem, TodoWrapper } from './styled';

export interface TodosProps {
  id: string;
  title: string;
  isCompleted: boolean;
  onChangeIsComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ id, title, isCompleted, onChangeIsComplete, onDeleteTask }: TodosProps) {

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleChangeIsComplete() {
    onChangeIsComplete(id);
  }

  return (
    <TodoItem key={id}>
      <TodoWrapper>
        <TaskWrapper>
          <TaskCheckbox
            title='checkbox'
            type="checkbox"
            id={id}
            onClick={handleChangeIsComplete}
            checked={isCompleted}
          />
          <label>
            <p>{title}</p>
          </label>
          <TaskButton
            type='button'
            title='delete'
            onClick={handleDeleteTask}
          >
            <Trash size={24} color="#000"/>
          </TaskButton>
        </TaskWrapper>
      </TodoWrapper>
    </TodoItem>
  );
}
