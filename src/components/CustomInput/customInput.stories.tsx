import { Meta, Story } from '@storybook/react';
import { CustomInput, ICustomInputProps } from '.';

export default {
  title: 'Components/CustomInput',
  component: CustomInput,
} as Meta;

const Template: Story<ICustomInputProps> = (args: any) => (
  <CustomInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter your text',
};

export const WithError = Template.bind({});
WithError.args = {
  placeholder: 'Enter your text',
  hasError: true,
};
