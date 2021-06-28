import React from "react";
import Headline from "../component/homepage/headline";
import Footer from '../component/homepage/footer';
import Logo from '../component/homepage/logo';
import FollowUs from "../component/homepage/follow-us";
import News from '../component/homepage/news'
import WaysOfStudy from "../component/homepage/ways-of-study";

export default function HomePage() {
  return (
    <div>
      <Logo/>
      <Headline/>
      <WaysOfStudy/>
      <News/>
      <FollowUs/>
      <Footer/>
    </div>
  );
}
