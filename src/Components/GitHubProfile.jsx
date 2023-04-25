import React from "react";
import "./Styles/GitHubProfile.css";
const GitHubProfile = () => {
  return (
    <div className="GitHub">
      <h1>GitHub Details</h1>
      <div>
        <div ><img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=nishantp15" alt="" /></div>
        <div ><img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs?username=nishantp15&show_icons=true&locale=en&layout=compact" alt="" /></div>
        <div><img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=nishantp15" alt="" /></div>
      </div>
    </div>
  );
};

export default GitHubProfile;
