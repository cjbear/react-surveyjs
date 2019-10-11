import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { showAssessment, editAssessment } from './../../Actions';
import AssessmentForm from './AssessmentForm';

class EditAssessment extends Component {

    componentDidMount() {
        this.props.showAssessment(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editAssessment(this.props.match.params.id, formValues);

    };  


    render() {
        if (!this.props.assessment) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h3>
                    Update Assessment
                </h3>
                <AssessmentForm 
                initialValues={ _.pick(this.props.assessment, 'text', 'value') }
                onSubmit={this.onSubmit }/>
            </div>
            );
    }
}
    


const mapStateToProps = (state, ownProps) => {

    return { assessment: state.assessments[ownProps.match.params.id] };

};

export default connect(
    mapStateToProps, 
    { showAssessment, editAssessment }
) (EditAssessment);