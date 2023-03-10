import { render } from '@testing-library/react';
import Colors from '../../styles/theme';
import { ErrorMessage } from '.';

describe('Input Error Message', () => {
  it('deve mostrar mensagem com cor de error', () => {
    const { getByText } = render(
      <ErrorMessage>Lorem Ipsum</ ErrorMessage>
    );

    const message = getByText('Lorem Ipsum');

    expect(message).toHaveStyle({ color: Colors.error });
  });
});
