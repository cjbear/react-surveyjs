import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPostsAndUsers } from '../Actions';
import UserHeader from './UserHeader';



class PostList extends Component {

    componentDidMount() {
        this.props.getPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map( post => {
            return (
                <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0" key={post.id}>
                    <div className="dtc w2 w3-ns v-mid">
                        <img src="http://mrmrs.github.io/photos/p/2.jpg" alt="User's visual representation. " className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                    </div>
                    <div className="dtc v-mid pl3">
                        <h1 className="f6 f5-ns fw6 lh-title black mv0">{post.title} </h1>
                        <h2 className="f6 fw4 mt0 mb0 black-60"><UserHeader userId={ post.userId }/></h2>
                        <p>{post.body}</p>
                    </div>
                    <div className="dtc v-mid">
                        <form className="w-100 tr">
                        <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">Reply</button>
                        </form>
                    </div>
                </article>
            )
        })
    }

        render(){
            return <div>
                {this.renderList()};
            </div>
        }

    };

    const mapStateToProps = (state) => {
        return { posts: state.posts };
    }


    export default connect(
        mapStateToProps, 
        { getPostsAndUsers }
    ) (PostList);