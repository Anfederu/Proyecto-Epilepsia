import React,{useState,useEffect}from 'react';
import axios from 'axios';
import NotificationItem from '../NotificationItem/NotificationItem';

const NotificationModal = () => {
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
            
          {notifications.length > 0? notifications.map((notification, i) => (
            <NotificationItem notification={notification.message}/>
          )) : <NotificationItem notification="Aún no tiene notificaciones"/>}
          </div>
        </div>
  );
}

export default NotificationModal;
