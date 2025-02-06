import React from "react";
import Navbar from "../components/navbar";
import SearchBarComponent from "../components/SearchBarComponent";
import CategoryHeader from "../components/CategoryHeader";
import Category from "../components/Category";
import MapIntegration from "../locations/MapIntegration";
import uWaterlooLocation from "../locations/uWaterlooLocation";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <SearchBarComponent />
      <CategoryHeader />
      <Category />
      <MapIntegration />
    </div>
  );
};

export default HomePage;
