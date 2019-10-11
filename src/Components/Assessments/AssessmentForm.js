import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class AssessmentForm extends Component {

    renderError({ error, touched }) {
        if (touched && error ) {
            return(
                <div>
                    <div className='bg-red white'>{error}</div>
                </div>
            );
        }
    }
    
    renderInput = ( {input, label, meta } ) => {
        console.log(meta);
        return (
            <div className= 'b f6 mv1 ph1'>
                <label>{label}</label>
                <div className='pointer  hover-bg-black-10  bg-animate pv2 ph1'>
                <input className='ba b--black-20 pa2 mb2 db w-100' autoComplete='off' { ...input } />
                {this.renderError(meta)}
                </div>    
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    
    render() {
        return (
            <form onSubmit={ this.props.handleSubmit(this.onSubmit)}  className='pa4 black-80'>
                <Field name="text" component={this.renderInput} label="Enter goal." />
                <Field name= "value" component={this.renderInput} label="Enter due date." />
                <button className='f6 link dim br3 ba ph3 pv2 mb2 dib dark-green'>Submit</button>
            </form>

        )
        }
};

const validate = (formValues) => {

    const errors = {};

    if (!formValues.text ) {
        errors.text = 'Please write a goal.';
    }
    if (!formValues.value) {
        errors.value = 'Please enter a due date.';
    }
    return errors;
}

export default reduxForm(
   { 
    form: 'assessmentForm',
    validate 
    } 
)(AssessmentForm);
