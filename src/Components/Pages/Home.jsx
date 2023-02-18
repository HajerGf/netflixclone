import React from "react";
import requests from "../../Requests";
import Main from "../Main";
import Row from "../Row";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="4" title="Latest" fetchURL={requests.requestLatest} />
      <Row
        rowID="5"
        title="Now Playing"
        fetchURL={requests.requestNowPlaying}
      />
    </>
  );
};

export default Home;
