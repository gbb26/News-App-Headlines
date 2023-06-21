import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsSection from "./components/top-headlines/NewsSection";
import Navigator from "./components/Navigator";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigator />
      <Routes>
        <Route
          exact
          path="/"
          element={<NewsSection key="general" category="general" />}
        />
        <Route
          exact
          path="/business"
          element={<NewsSection key="business" category="business" />}
        />
        <Route
          exact
          path="/entertainment"
          element={<NewsSection key="entartainment" category="entertainment" />}
        />
        <Route
          exact
          path="/general"
          element={<NewsSection key="general" category="general" />}
        />
        <Route
          exact
          path="/health"
          element={<NewsSection key="health" category="health" />}
        />
        <Route
          exact
          path="/science"
          element={<NewsSection key="science" category="science" />}
        />
        <Route
          exact
          path="/sports"
          element={<NewsSection key="sports" category="sports" />}
        />
        <Route
          exact
          path="/technology"
          element={<NewsSection key="technology" category="technology" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
