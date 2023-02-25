import React from "react";
import Articles from './Articles';


function Home() {
 
  return (
    <div>
    <div className='welcome-note'>
      <h2>Welcome to our blog website</h2>
<h5 className='note'>where we share insights and updates on the latest trends in the exciting field of artificial intelligence. Our team of experts and enthusiasts is passionate about exploring the possibilities of AI and its applications in various industries. From cutting-edge research to practical applications, we aim to provide valuable and informative content that keeps you informed and engaged. Join us on this journey of discovery and innovation, and explore the endless possibilities of AI!</h5>
<a className='note-link' href="/Articles">Start Reading Blogs </a>
</div>
<div className="diamond"></div>
<div className="diamond1"></div>
<div className="diamond2"></div>
<div className="diamond3"></div>
</div>
  );
}

export default Home;