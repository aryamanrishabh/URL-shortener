import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Landing from "./Landing";
import Search from "./Search";

const App = () => {
  return (
    <div>
      <Header />
      <Landing />
      <Search />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
