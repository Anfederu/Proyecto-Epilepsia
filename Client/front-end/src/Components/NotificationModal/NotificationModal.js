import React,{useState,useEffect}from 'react';
import axios from 'axios';

const NotificationModal = ({ message} ) => {
  const [notifications, setnotifications] = useState([]);
  
  useEffect(() => {
    axios
      .get(`http://localhost:4000/notifications`)
      .then((res) => {
        setnotifications(res.data);
      });
  }, []);
 
  return (
        <div className="notification-modal">
          <div className="notification-modal-content">
            
          {notifications.map((notification, i) => (
            <p>{notification.message}</p>
          ))}
          </div>
        </div>
  );
}

export default NotificationModal;
