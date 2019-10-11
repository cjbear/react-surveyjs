import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AssessmentList from './Components/AssessmentList';
import './App.css';


//When using Redux, storing state in classes is less necessary as Redux stores state.

const App = () => {
    return (
    
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <AssessmentList />
          </div>
          <div className="column eight wide"></div>
        </div>
      </div>

      );
}


export default App;
