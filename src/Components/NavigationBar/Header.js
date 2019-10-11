import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './../../Components/Authentication/GoogleAuth';

const Header = () => {
    return (
        <div>
            <nav className="db dt-l w-100 border-box pa3 ph5-l">
                <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
                    <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name"/>
                </a>
                    <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                        <Link to="/Assessments" className="link dim dark-gray f6 f5-l dib mr3 mr4-l" title="Assessment">List Assessments</Link>
                        <Link to="/Assessments/new" className="link dim dark-gray f6 f5-l dib mr3 mr4-l"  title="New Assessment">New</Link>
                        <Link to="/Assessments/edit/" className="link dim dark-gray f6 f5-l dib mr3 mr4-l" title="Edit Assessment">Edit</Link>
                        <Link to="/Assessments/edit/" className="link dim dark-gray f6 f5-l dib mr3 mr4-l" title="Edit Assessment">Delete</Link>
                        <Link to="/Assessments/edit/" className="link dim dark-gray f6 f5-l dib mr3 mr4-l" title="Edit Assessment">Show</Link>
                        <GoogleAuth />
                    </div>
            </nav>
            </div>
        )
}

export default Header;