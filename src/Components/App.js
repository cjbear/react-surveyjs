import React from 'react';
import { Router, BrowserRouter, Route } from 'react-router-dom';

import AssessmentDetails from './AssessmentDetail';
import PostList from './PostList';

import Header from './../Components/NavigationBar/Header';
import CreateAssessment from './../Components/Assessments/CreateAssessment';
import DeleteAssessment from './../Components/Assessments/DeleteAssessment';
import EditAssessment from './../Components/Assessments/EditAssessment';
import ListAssessment from './../Components/Assessments/ListAssessment';
import ShowAssessment from './../Components/Assessments/ShowAssessment';
import History from '../History';

//When using Redux, storing state in classes is less necessary as Redux stores state.

const App = () => {
    return ( 
      <div> 
      <article className="flex flex-column center mw100">
        <div className="fl w-100 tc">
            <Router history={History}>
              <div className="">
                <Header />
                </div>
                <div className="flex flex-column center mw100">
                  <div className="outline center w-75 pa3 mr2">
                    <Route path= "/Assessments/" exact component={ListAssessment}/>
                    <Route path= "/Assessments/new" exact component={CreateAssessment}/>
                    <Route path= "/Assessments/edit/:id" exact component={EditAssessment}/>
                    <Route path= "/Assessments/delete" exact component={DeleteAssessment}/>
                    <Route path= "/Assessments/show" exact component={ShowAssessment}/>
                  </div>

              </div>
            </Router>
          </div>
        </article>
        </div>
      );
}


export default App;
