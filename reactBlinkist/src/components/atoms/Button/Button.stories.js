import React from 'react'
import Button from './Button'


export default {
    title: 'Atoms/Button'
  }

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary= Template.bind({});
Primary.args = {
    color: "primary",
    variant: "outlined",
    name:"click me"
}

Secondary.args = {
    color: "secondary",
    variant: "outlined",
    name:"click me"
};