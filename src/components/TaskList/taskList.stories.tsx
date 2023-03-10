import { Story, Meta } from '@storybook/react';
import { TaskList, TaskListProps } from '.';

export default {
  title: 'Components/TaskList',
  component: TaskList,
} as Meta;

const Template: Story<TaskListProps> = (args : any) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    {
      id: '1',
      title: 'Fazer compras',
      isCompleted: false
    },
    {
      id: '2',
      title: 'Pagar contas',
      isCompleted: true
    }
  ],
  onChangeIsComplete: (id: string) => console.log(`Task ${id} completed`),
  onDeleteTask: (id: string) => console.log(`Task ${id} deleted`)
};
