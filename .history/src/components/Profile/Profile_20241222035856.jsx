import react from "react";
import "./profile.css";

const Profile = () => {
    return (
        <div>
        <h1>Profile settings</h1>
        <div className="container">
            <div>
                <label htmlFor="">First Name</label>
                <input type="text" />
                <label htmlFor="">Start Work at</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Last Name</label>
                <input type="text" />
                 <label htmlFor="">Position</label>
                 <input type="text" />
            </div>
            <div>
                <img src="" alt="" />
                <button>Modify image</button>
            </div>
            <div>
                <h3>Modify Password</h3>
                <div>
                    <input type="text" /><input type="text" /><input type="text" />
                </div>
            </div>
        </div>
        </div>
    )
}
export default Profile;