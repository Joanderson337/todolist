import { render } from '@testing-library/react';
import { Loading } from '.';

describe('Loading', () => {
  it('deve mostrar uma mensagem se houver uma', () => {
    const { getByText } = render(<Loading message="Aguarde..." />);

    getByText('Aguarde...');
  });
});
