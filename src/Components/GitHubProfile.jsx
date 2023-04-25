import React from "react";
import "./Styles/GitHubProfile.css";
import GitHubCalendar from 'react-github-calendar';
const GitHubProfile = () => {
  return (
    <div className="GitHub">
      <h1>GitHub Details</h1>
      <h3>GitHub Stats</h3>
      <div>
        <div ><img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=nishantp15" alt="" /></div>
        <div ><img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs?username=nishantp15&show_icons=true&locale=en&layout=compact" alt="" /></div>
        <div><img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=nishantp15&show_icons=true&locale=en" alt="" /></div>
      </div>
      <h3>GitHub Activity Calender</h3>
      <GitHubCalendar username="nishantp15" />
    </div>
  );
};

export default GitHubProfile;
