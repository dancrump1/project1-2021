import PropTypes from 'prop-types';
import React from 'react';
import photo from './editedDecentPic.jpg'
import './Home.css';

const Home = () => {
return (
<div className="pageContainer">
    <img src={photo} alt="something" className='profilePhoto' />
</div>
)
};

Home.propTypes = {

};

export default Home;