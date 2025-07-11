// src/components/Sidebar.jsx
import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import "./Sidebar.css";

const Sidebar = () => {
  const {
    getUsers,
    users,
    selectedUser,
    setSelectedUser,
    isUsersLoading,
  } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((u) => onlineUsers.includes(u._id))
    : users;

  if (isUsersLoading) return null;

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__header-inner">
          <h2 className="sidebar__header-title">Contacts</h2>
        </div>
        <div className="sidebar__filter">
          <label className="filter-label">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="filter-checkbox"
            />
            <span className="filter-text">Show online only</span>
          </label>
          <span className="filter-count">
            ({onlineUsers.length - 1} online)
          </span>
        </div>
      </div>

      <div className="sidebar__list">
        {filteredUsers.map((user) => {
          const isSelected = selectedUser?._id === user._id;
          const isOnline = onlineUsers.includes(user._id);
          return (
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`sidebar__item ${
                isSelected ? "sidebar__item--selected" : ""
              }`}
            >
              <div className="sidebar__name">{user.fullName}</div>
              <div className={`sidebar__status ${isOnline ? "online" : ""}`}>
                {isOnline ? "Online" : "Offline"}
              </div>
            </button>
          );
        })}

        {filteredUsers.length === 0 && (
          <div className="sidebar__no-users">No online users</div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;