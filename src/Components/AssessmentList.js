import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAssessment } from './../Actions/BarrierActions';



class AssessmentList extends Component {
    renderList(){
        return this.props.assessments.map(( assessment ) => {
            return (
                <div className="item" key={assessment.id}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary" 
                            onClick={() => this.props.selectAssessment(assessment)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{assessment.title}</div>
                </div>
            );

        });
    }
    
    render() {
        console.log(this.props);
        return <div>{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    console.log(state);
    return { assessments: state.assessments };
};

//selectAssessment is an action creator, put in curly brackets so that the action can be passed to the render method above
export default connect(mapStateToProps, 
    { selectAssessment }
    ) (AssessmentList);