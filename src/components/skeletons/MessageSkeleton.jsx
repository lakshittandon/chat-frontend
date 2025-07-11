
import './MessageSkeleton.css';

const MessageSkeleton = () => {
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="message-skeleton">
      {skeletonMessages.map((_, idx) => {
        const alignment = idx % 2 === 0
          ? 'message-row--start'
          : 'message-row--end';
        return (
          <div key={idx} className={`message-row ${alignment}`}>
            <div className="message-avatar">
              <div className="avatar-circle">
                <div className="skeleton skeleton-avatar" />
              </div>
            </div>
            <div className="message-body">
              <div className="message-header">
                <div className="skeleton skeleton-header" />
              </div>
              <div className="message-bubble">
                <div className="skeleton skeleton-message" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageSkeleton;