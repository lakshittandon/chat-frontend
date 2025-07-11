import { Users } from "lucide-react";
import "./SidebarSkeleton.css";

const SidebarSkeleton = () => {
  const items = Array(8).fill(null);

  return (
    <aside className="sidebar-skeleton">
      <div className="sidebar-skeleton__header">
        <div className="sidebar-skeleton__header-inner">
          <Users className="sidebar-skeleton__icon" />
          <span className="sidebar-skeleton__title">Contacts</span>
        </div>
      </div>

      <div className="sidebar-skeleton__list">
        {items.map((_, i) => (
          <div key={i} className="sidebar-skeleton__item">
            <div className="sidebar-skeleton__avatar">
              <div className="skeleton skeleton--circle skeleton--avatar" />
            </div>
            <div className="sidebar-skeleton__info">
              <div className="skeleton skeleton--text skeleton--name" />
              <div className="skeleton skeleton--text skeleton--status" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;