import React from 'react';
import { connect } from 'react-redux';


const AssessmentDetails = ({ assessment }) => {
    if (!assessment) {
        return <div>Select an assessment.</div>
    }
    return (
        <div className='center mw5 mw6-ns br3 hidden ba b--black-10 mv4'>
            <h1>{assessment.title}</h1>
            <div className="pa3 bt b--black-10">
                <p className="f6 f5-ns lh-copy measure"></p>{assessment.description}
            </div>
        </div>
    );
};

const mapStateToProps = ( state ) => {
    return { assessment: state.selectAssessment }
};


export default connect(mapStateToProps)(AssessmentDetails)