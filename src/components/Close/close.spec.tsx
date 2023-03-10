import { render, screen } from '@testing-library/react';
import { Close } from '.';

describe('Close component', () => {
  it('renderiza um botão com um ícone de fechamento', () => {
    render(<Close />);
    const button = screen.getByRole('button');
    const icon = screen.getByTestId('close-icon');
    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

});
