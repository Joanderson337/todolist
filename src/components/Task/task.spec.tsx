import { fireEvent, render, screen } from '@testing-library/react';
import { Task } from '.';

describe('Task', () => {
  it('aciona o retorno de chamada onChangeIsComplete quando a caixa de seleção é clicada', () => {
    let changedId = '';
    const onChangeIsComplete = (id: string) => {
      changedId = id;
    };
    const onDeleteTask = (id: string) => {};
    render(
      <Task
        id="123"
        title="Test task"
        isCompleted={false}
        onChangeIsComplete={onChangeIsComplete}
        onDeleteTask={onDeleteTask}
      />
    );
    const checkbox = screen.getByTitle('checkbox');
    fireEvent.click(checkbox);
    expect(changedId).toBe('123');
  });
});
