import { Meta, Story } from '@storybook/react';
import { ErrorMessage } from './index';

export default {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
} as Meta;

const Template: Story<React.ComponentProps<typeof ErrorMessage>> = (args) => (
  <ErrorMessage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Oops! Something went wrong.',
};
