import React from 'react';
import {Route , IndexRoute}from 'react-router';
import App from './components/App';
import taskConfig from './components/TaskConfiguration/taskConfig';
import userConfig from './components/UserConfiguration/userConfig';
import tasks from './components/RunTasks/runTasks';
import audit from './components/Audit/audit';
import course from './components/course/coursePage';
export default(

    <Route path="/" component={App}>
      <IndexRoute component={taskConfig} />
      <Route path="userConfig" component={userConfig}/>
      <Route path="tasks" component={tasks}/>
      <Route path="audit" component={audit}/>
      <Route path="course" component={course}/>


    </Route>

);

