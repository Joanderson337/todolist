import { render } from '@testing-library/react';
import { CustomButton } from './index';

describe('Custom Button', () => {
  it('deve renderizar com um texto', () => {
    const { getByText } = render(<CustomButton>lorem ipsum</CustomButton>);

    getByText('lorem ipsum');
  });
});
