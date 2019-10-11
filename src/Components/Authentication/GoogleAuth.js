import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from './../../Actions';


class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '959907611019-2tegq94kv01h3k79eudtopepkh6qoeqt.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return <button className="f6 link dim br3 ba ph3 pv2 mb2 dib dark-green" onClick={ this.onSignOutClick }>Sign Out</button>;
        } else {
            return <button className="f6 link dim br3 ba ph3 pv2 mb2 dib dark-green" onClick={ this.onSignInClick }>Sign In</button>;
        };
    };

    render(){
        return <div className="link dim dark-gray f6 f5-l dib mr3 mr4-l" >{this.renderAuthButton()}</div>;
    }
}   

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect ( 
    mapStateToProps,
    { signIn, signOut }
)(GoogleAuth);