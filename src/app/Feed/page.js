import React from "react";
import FeedHeader from "./FeedHeader";
import FooterIcons from "../FooterIcons";
import StorySection from "./StorySection";
import PostSection from "./PostSection";
import Sidebar from "./Sidebar";

const index = () => {
  return (
    <>
      <FeedHeader />
      <section className="flex justify-center mt-16 md:mt-28">
        <div className="container">
          <div className="grid grid-cols-3">
            <div className="col-span-3 md:col-span-2">
              <StorySection />
              <PostSection />
            </div>
            <div className="col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
      <FooterIcons />
    </>
  );
};

export default index;
