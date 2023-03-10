import { fireEvent, render, screen } from '@testing-library/react';
import { TaskList } from '.';

describe('TaskList', () => {
  test('Adicionar nova tarefa', () => {
    render(<TaskList />);

    const input = screen.getByPlaceholderText(/Adicione uma nova tarefa/);
    const button = screen.getByRole('button', { name: /Criar/ });

    fireEvent.change(input, { target: { value: 'Nova tarefa' } });
    fireEvent.click(button);

    expect(screen.getByText(/Nova tarefa/)).toBeInTheDocument();
  });

  test('Marcar tarefa como concluída', () => {
    render(<TaskList />);

    const input = screen.getByPlaceholderText(/Adicione uma nova tarefa/);
    const button = screen.getByRole('button', { name: /Criar/ });

    fireEvent.change(input, { target: { value: 'Tarefa incompleta' } });
    fireEvent.click(button);

    const checkbox = screen.getByTitle(/checkbox/);
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  test('Excluir tarefa', () => {
    render(<TaskList />);

    const input = screen.getByPlaceholderText(/Adicione uma nova tarefa/);
    const button = screen.getByRole('button', { name: /Criar/ });

    fireEvent.change(input, { target: { value: 'Tarefa para excluir' } });
    fireEvent.click(button);

    const trashButton = screen.getByTitle(/delete/);
    fireEvent.click(trashButton);

    expect(screen.queryByText(/Tarefa para excluir/)).not.toBeInTheDocument();
  });
});
