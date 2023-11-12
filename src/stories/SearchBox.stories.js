// src/SearchBox.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchBox from '../components/searchbox/searchbox.component';

export default {
    title: 'SearchBox',
    component: SearchBox,
  };
  
  export const Default = () => <SearchBox onChange={(newSearchTerm) => console.log(newSearchTerm)} />;