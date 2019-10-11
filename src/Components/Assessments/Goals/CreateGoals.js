import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createGoal } from './../../Actions/GoalActions';
import GoalsForm from './GoalsForm';

class CreateGoals extends Component {
    onSubmit = (formValues) => {
        this.props.createGoal(formValues);
    }
    
    render() {
        return (
            <div>
                <h3>Create a Goal</h3>
                <GoalsForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}



export default connect(null, { createGoal })(CreateGoals);