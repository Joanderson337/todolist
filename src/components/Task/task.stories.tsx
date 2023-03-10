import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Task, TodosProps } from '.';

export default {
  title: 'Components/Task',
  component: Task,
  argTypes: {
    id: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    isCompleted: {
      control: {
        type: 'boolean',
      },
    },
    onChangeIsComplete: {
      action: 'onChangeIsComplete',
    },
    onDeleteTask: {
      action: 'onDeleteTask',
    },
  },
} as Meta;

const Template: Story<TodosProps> = (args : any) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '1',
  title: 'Task 1',
  isCompleted: false,
};

export const Completed = Template.bind({});
Completed.args = {
  id: '2',
  title: 'Task 2',
  isCompleted: true,
};
