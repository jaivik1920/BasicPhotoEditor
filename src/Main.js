import React from 'react';
import './App.css';
import EditElement from './EditElement.js';

function Main() {

return (
<div className="main-container">
    <img id='myImg' src="https://source.unsplash.com/500x500/?tree,green" alt="random pic" />
    <EditElement
     id='myImg' />
</div>
);
}

export default Main;