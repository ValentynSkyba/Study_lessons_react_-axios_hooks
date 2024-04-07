import React from "react";
import SearchForm from "./components/Posts/SearchForm";
import PostList from "./components/Posts/PostList";

const App = () => {
  return (
    <div>
      <SearchForm />
      <PostList />
    </div>
  );
};

export default App;
