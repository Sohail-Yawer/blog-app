// src/CreateBlog.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import CreateBlog from '../components/createblog/createblog.component';

export default {
    title: 'CreateBlog',
    component: CreateBlog,
    argTypes: {
      onPublish: { action: 'published' }, // Mocks the onPublish prop action
    },
    args: {
      // You can add any other props or initial values your component accepts
      onPublish: (blog) => console.log('Publishing:', blog),
    },
  };
  
  const Template = (args) => <CreateBlog {...args} />;
  
  export const Default = Template.bind({});