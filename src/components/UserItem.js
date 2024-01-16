import React from "react";

function UserItem(props) {
  return (
    <div className="UserItem" onMouseOver={() => props.setUserData(props)}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        alt="User Pic"
        width={50}
      />
      <h4>{props.name}</h4>
    </div>
  );
}

export default UserItem;
