import React from "react";

export default function SubNavItems(props) {
  const { name, icon, active } = props.data;
  return (
    <button
      onClick={(e)=>props.hundelClick(e)}
      data-section-id={name}
      className="nav-button me-3 border-0 p-0 d-flex align-items-center flex-column pt-2 rounded-pill"
      style={{
        width: 68,
        height: 132
      }}
      >
      <div
        className="bg-white mb-2 rounded-circle d-flex justify-content-center align-items-center"
        style={{ width: 52, height: 52, top: 6, right: 3 }}
      >
        <img width={30} src={icon} />
      </div>
      <div
        className="fw-bold"
        style={{
          bottom: "20%",
          width: 52,
          fontSize: 12
        }}
      >
        {name}
      </div>
    </button>
  );
}
