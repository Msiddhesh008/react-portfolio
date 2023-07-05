import React from "react";

const Email = () => {
  return (
  <div 
  className="d-lg-none"
  id="email">
    <form className="form p-4"> 
    <p className="lets-talk">Lets Talk</p>
    <input 
    placeholder="Name"
    type="text" 
    id="name" />
    <input 
    placeholder="Mobile"
    type="tel" 
    id="tel" />
    <textarea 
    placeholder="Message"
    type="text" 
    rows={5}
    id="name" />
    <button className="send-btn">Send</button>
    </form>
  </div>
  );
};

export default Email;
