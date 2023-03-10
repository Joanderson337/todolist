import { Meta, Story } from '@storybook/react';
import { Loading, ILoadingProps } from '.';

export default {
  title: 'Components/Loading',
  component: Loading,
} as Meta;

const Template: Story<ILoadingProps> = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Loading...',
};
