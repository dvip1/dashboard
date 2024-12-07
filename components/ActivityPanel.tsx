import React from 'react';

const ActivityPanel = () => {
  return (
    <div className="activity-panel">
      <h4>Activity</h4>
      <form>
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="Add People" />
        <input type="date" />
        <input type="time" />
        <textarea placeholder="Description"></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="upcoming-overdue">
        <h5>Upcoming & Overdue</h5>
        {/* Example list of activities */}
        <p>Arrange a Call</p>
        <p>Follow Up Email</p>
      </div>
    </div>
  );
};

export default ActivityPanel;
