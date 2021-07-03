import React from "react";
import FollowUs from "../component/follow-us";
import Footer from "../component/footer";
import Logo from "../component/logo";
import Header from "../component/article/header";
import Content from "../component/article/content";
import Button from "../component/article/button";

export default function Article() {
  return (
    <div className={""}>
      <Logo />
      <Header />
      <Content />
      <Button/>
      <FollowUs />
      <Footer />
    </div>
  );
}
