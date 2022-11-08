import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { Task } from './Task';

const tasks = [
  {_id: 1, text: 'Clean the house'},
  {_id: 2, text: 'finish course'},
  {_id: 3, text: 'finish phd'},
]

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    
    <ul>
       {tasks.map( task => <Task key={task._id} task={ task }/>)}
    </ul>

  </div>
);
