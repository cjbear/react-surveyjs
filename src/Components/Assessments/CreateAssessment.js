import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createAssessment } from './../../Actions/index';
import AssessmentForm from './AssessmentForm';

class CreateAssessment extends Component {
    onSubmit = (formValues) => {
        this.props.createAssessment(formValues);
    }
    
    render() {
        return (
            <div>
                <h3>Create an Assessment</h3>
                <AssessmentForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}


export default connect(null, { createAssessment })(CreateAssessment);