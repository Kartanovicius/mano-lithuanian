import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Headline from "../component/homepage/headline";
import Footer from "../component/footer";
import Logo from "../component/homepage/logo";
import FollowUs from "../component/follow-us";
import News from "../component/homepage/news";
import WaysOfStudy from "../component/homepage/ways-of-study";

export default function HomePage() {
  return (
    <div>
      <Logo />
      <Headline />
      <WaysOfStudy />
      <News />
      <FollowUs />
      <Footer />
    </div>
  );
}
