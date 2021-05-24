import React from 'react'
import TextField from './TextField'


export default {
    title: 'Atoms/TextField'
  }

const Template = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
export const Secondary= Template.bind({});
Primary.args = {
    color: "primary",
    variant: "outlined",
    name:"Type"
}

Secondary.args = {
    color: "secondary",
    variant: "outlined",
    name:"Type"
};