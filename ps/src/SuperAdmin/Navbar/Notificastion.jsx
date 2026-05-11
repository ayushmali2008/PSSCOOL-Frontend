import React from 'react';
import './Notification.css';

const notificationGroups = [
  {
    label: "Today",
    items: [
      { icon: "🏢", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...", time: "2 hours ago", source: "Bright Future Academy" },
      { icon: "🏢", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...", time: "4 hours ago", source: "Bright Future Academy" },
    ],
  },
  {
    label: "Yesterday",
    items: [
      { icon: "🏢", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...", time: "1 day ago", source: "Bright Future Academy" },
      { icon: "🏢", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...", time: "1 day ago", source: "Bright Future Academy" },
    ],
  },
];

const Notification = () => {
  return (
    <div className="notification-container">
      <div className="notification-top">
        <h2>Notifications</h2>
        <button className="clear-all-btn">Clear All</button>
      </div>

      {notificationGroups.map((group) => (
        <div className="notifications" key={group.label}>
          <h3>{group.label}</h3>
          {group.items.map((item, i) => (   
            <div className="notification-item" key={i}>
              <div className="notification-icon">
                <span>{item.icon}</span>
              </div>
              <div className="notification-content">
                <p>
                  {item.text}{' '}
                  <span className="more">...more</span>
                </p>
                <div className="notification-footer">
                  <p className="timestamp">{item.time}</p>
                  <p className="source">{item.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Notification;
