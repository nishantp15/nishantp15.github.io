import React from "react";
import "./Styles/GitHubProfile.css";
const GitHubProfile = () => {
  return (
    <div className="GitHub">
      <h1>GitHub Details</h1>
      <div>
        <div ><img id="github-streak-stats" src="https://camo.githubusercontent.com/df0863a7f00bc85c72219d8ce0442002f1411862eb2b7213a9d7fb218c8d3962/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6e697368616e747031352673686f775f69636f6e733d74727565266c6f63616c653d656e" alt="" /></div>
        <div ><img id="github-top-langs" src="https://camo.githubusercontent.com/fe068a16f34fb95353cd58f27e1fc6fee3050e511985f31f27df9bc2ce81cc22/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d6e697368616e747031352673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" alt="" /></div>
      </div>
    </div>
  );
};

export default GitHubProfile;
