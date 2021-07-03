import React from "react";
import Headline from "../component/homepage/headline";
import Footer from "../component/footer";
import Logo from "../component/logo";
import FollowUs from "../component/follow-us";
import Blog from "../component/homepage/article";
import WaysOfStudy from "../component/homepage/ways-of-study";

export default function HomePage() {
  return (
    <div>
      <Logo />
      <Headline />
      <WaysOfStudy />
      <Blog />
      <FollowUs />
      <Footer />
    </div>
  );
}
