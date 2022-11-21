import Link from "next/link";
import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Navbar from "../common/Navbar";

const Facilities = () => {
  return (
    <div>
      <h1>This is Facilities Page</h1>
      <li><Link href='/facilities/lab'>Lab</Link></li>
      <li><Link href='/facilities/library'>Library</Link></li>
      <li><Link href='/facilities/playground'>Playground</Link></li>
      <li><Link href='/facilities/sports'>Sports</Link></li>
    </div>
  );
};

export default Facilities;