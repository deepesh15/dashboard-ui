import React from "react";

const ProfileCard = ({ UserImg }) => {
  return (
    <div className="profile-card Card">
      <div className="card-header">
        <h3>Profile</h3>
      </div>

      <div className="card-body">
        <div className="user-image">
          <img src={UserImg} alt="user" />
          <button>Change</button>
        </div>

        <div className="details-section">
          <div className="profile-name">
            <div className="first-name">
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="first-name" id="first-name" value="Surya"/>
            </div>
            <div className="last-name">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="last-name" id="last-name" value="Wiguna" />
            </div>
          </div>

          <label htmlFor="dob">Date of Birth</label>
          <input type="text" name="dob" id="dob" value="28 Feb 1996" />

          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="text"
            name="phone-number"
            id="phone-number"
            value="+1283716291"
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value="323 Fifth Ave. Canandaigua, NY"
          />

          <div className="profile-button">
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
