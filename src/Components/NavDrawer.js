import React from "react";

const NavDrawer = () => {
  return (
    <div className="mobile-navbar d-flex p-1 d-md-none d-lg-none">
      <div className="i-cnt p-1">
        <i class="bi bi-house-door-fill"></i>
        <span>Home</span>
      </div>
      <div className="i-cnt p-1">
      <i class="bi bi-puzzle-fill"></i>
      <span>Project</span>
      </div>
      <div className="i-cnt p-1">
        <i class="bi bi-envelope-at-fill"></i>
      <span>Email</span>
      </div>
      <div className="i-cnt p-1">
      <i class="bi bi-telephone-fill"></i>
      <span>Call</span>
      </div>
      <div className="i-cnt p-1">
      <i class="bi bi-menu-button-fill"></i>
      <span>More</span>
      </div>
    </div>
  );
};

export default NavDrawer;
