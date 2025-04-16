// src/components/Notification.js
import React from 'react';
import './Notification.css';

const Notification = ({ message }) => {
  if (!message) return null;

  return (
    <div className="notification">
      <p>{message}</p>
    </div>
  );
};

export default Notification;