import React from "react";
import "./Notification.css";

const Notification = ({ message, type }) => {
  if (!message) return null;

  return (
    <div className="notification">
      <span className="notification-icon">✓</span>
      <span className="notification-message">{message}</span>
      <span className="notification-close">×</span>
      <div className="notification-bar"></div>
    </div>
  );
};

export default Notification;
