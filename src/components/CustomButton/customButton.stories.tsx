import { Meta, Story } from '@storybook/react';
import { CustomButton, ICustomButtonProps } from '.';

export default {
  title: 'Components/CustomButton',
  component: CustomButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<ICustomButtonProps> = (args : any) => (
  <CustomButton {...args}>Button</CustomButton>
);

export const Default = Template.bind({});
