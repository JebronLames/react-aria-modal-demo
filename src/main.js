import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Modal),
    document.getElementById('mount')
  );
});
