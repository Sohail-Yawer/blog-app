// src/BlogList.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import BlogList from '../components/bloglist/bloglist.component';

export default {
    title: 'BlogList',
    component: BlogList,
    args: {
      // Provide an initial set of blogs for visualization
      blogs: [
        { id: 1, title: 'First Blog', content: 'Content of the first blog.' },
        { id: 2, title: 'Second Blog', content: 'Content of the second blog.' },
        // Add more blog objects as needed
      ],
    },
  };
  
  const Template = (args) => <BlogList {...args} />;
  
  export const Default = Template.bind({});