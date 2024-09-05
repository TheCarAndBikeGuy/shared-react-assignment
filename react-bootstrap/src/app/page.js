"use client";
import OffCanvas from "./components/offcanvas";
import Footer from "./footer/page";
import Spinner from "./components/spinner";
import Loader from "./components/loader";

export default function Home() {
  return (
    <div className="home-page">
      <h1>Welcome! :)</h1>
      <br />
      <h3>This website is filled with UI/UX from React Bootstrap!</h3>
      <br />
      <h3>Things you will find here are: </h3>
      <br />
      <ul>
        <li>• A Navigation Bar</li>
        <li>• An Off Canvas</li>
        <li>• A Form</li>
        <li>• Spinners</li>
        <li>• A Dropdown Menu</li>
        <li>• Some CSS Styling</li>
        <li>• A Footer</li>
      </ul>
      <Spinner />
      <br />
      <br />
      <Loader />
      <OffCanvas />
      <Footer />
    </div>
  );
}
