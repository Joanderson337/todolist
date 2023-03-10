import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Colors from '../../styles/theme';
import { CustomInput } from '.';

describe('Custom Input', () => {
  it('deve renderizar com erro se hasError for verdadeiro', () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder="Lorem Ipsum" hasError={true} />
    );

    const input = getByPlaceholderText('Lorem Ipsum');

    expect(input).toHaveStyle({ border: `2px solid ${Colors.error}` });
  });

  it('deve renderizar sem erro se hasError for false', () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder="Lorem Ipsum" hasError={false} />
    );

    const input = getByPlaceholderText('Lorem Ipsum');

    expect(input).toHaveStyle({ border: 'none' });
  });

  it('deve mudar o valor quando o usuário digita', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <CustomInput placeholder="Lorem Ipsum" hasError={false} />
    );

    const input = getByPlaceholderText('Lorem Ipsum');

    userEvent.type(input, 'Dolor Sit');

    getByDisplayValue('Dolor Sit');
  });
});
