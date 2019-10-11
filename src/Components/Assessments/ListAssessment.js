import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { listAssessments } from '../../Actions/index';


class ListAssessment extends Component {

    componentDidMount() {
        this.props.listAssessments();
    }

    renderAdmin(assessment) {
        //if ( assessment.userId === this.props.currentUserId) {
            return (
                <form className="w-100 tr">
                    <Link 
                    to={ `/assessments/edit/${assessment.id}` } 
                    className="f6 button-reset bg-white ba b--black-10 dim pointer ma2 pv1 black-60" 
                    type="submit">
                    Edit
                    </Link>
                    <button className="f6 button-reset bg-white ba b--black-10 dim pointer ma2 pv1 black-60" type="submit">
                    Delete
                    </button>
                </form>
            );
        }

    renderList() {
        return this.props.assessments.map( assessment => {
            return (
                <article className="dt w-100 bb b--black-05 pb2 mt2" key={assessment.id}>
                    
                    <div className="dtc v-mid pl3" >
                        <h2 className="f6 f5-ns fw6 lh-title black mv0"> {assessment.text} </h2>
                    </div>
                    <div className="dtc v-mid">
                        { this.renderAdmin(assessment) }
                    </div>
                </article>
            );
        });
    }

    renderCreateButton() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                <Link to="/assessments/new" className="ui button primary ma3">
                Create Assessment
                </Link>
            </div>
            );
        }
    }


    render(){
        return (
            <div>
                <h2>List of Assessments</h2>
                    
                    <div className="tl f6 f5-ns fw6 lh-title black mv0">{this.renderList()}</div>
                    { this.renderCreateButton() }

            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        assessments: Object.values(state.assessments),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

//selectAssessment is an action creator, put in curly brackets so that the action can be passed to the render method above
export default connect(
    mapStateToProps, 
    { listAssessments }
) (ListAssessment);