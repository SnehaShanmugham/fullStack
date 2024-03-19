// import '../../assets/css/Userprofile.css';
// import React, { useState } from 'react';
// import Sidebar from '../../component/Sidebar';

// const UserProfile = () => {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   const handleSave = () => {
//     setIsEditing(false);
    
//   };

//   return (
//     <div className='user'>
//       <Sidebar />
//       <div className='user-profile-container'>
//         <div className="user-card">
//           <div className="profile-pic">
//             <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile" />
//           </div>
//           <div className="user-details">
//             <div className="detail">
//               <span>Name:</span>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="name"
//                   value={user.name}
//                   onChange={handleChange}
//                   className="input-field"
//                 />
//               ) : (
//                 <span>{user.name}</span>
//               )}
//             </div>
//             <div className="detail">
//               <span>Mobile Number:</span>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="mobile"
//                   value={user.mobile}
//                   onChange={handleChange}
//                   className="input-field"
//                 />
//               ) : (
//                 <span>{user.mobile}</span>
//               )}
//             </div>
//             <div className="detail">
//               <span>Email:</span>
//               {isEditing ? (
//                 <input
//                   type="email"
//                   name="email"
//                   value={user.email}
//                   onChange={handleChange}
//                   className="input-field"
//                 />
//               ) : (
//                 <span>{user.email}</span>
//               )}
//             </div>
//             {isEditing ? (
//               <button onClick={handleSave} className="save-button">
//                 Save
//               </button>
//             ) : (
//               <button onClick={handleEdit} className="edit-button">
//                 Edit
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;




import '../../assets/css/Userprofile.css';
import React, { useState } from 'react';
import Sidebar from '../../component/Sidebar';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch hooks
import { setName, setEmail, setMobile } from '../../redux/UserSlice'; // Import the appropriate actions

const UserProfile = () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(null); // State to hold edited user data

  // Access user data from Redux store
  const user = useSelector(state => state.auth);

  const handleEdit = () => {
    setIsEditing(true);
    // Set the initial value of editedUser when entering edit mode
    setEditedUser({ ...user });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the editedUser state with the changes
    setEditedUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Dispatch the edited user data to Redux
    dispatch(setName(editedUser.name));
    dispatch(setEmail(editedUser.email));
    dispatch(setMobile(editedUser.mobile));
  };

  return (
    <div className='user'>
      <Sidebar />
      <div className='user-profile-container'>
        <div className="user-card">
          <div className="profile-pic">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile" />
          </div>
          <div className="user-details">
            <div className="detail">
              <span><b>Name:</b></span>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleChange}
                  className="input-field"
                />
              ) : (
                <span>{user.name}</span>
              )}
            </div>
            <div className="detail">
              <span><b>Mobile Number:</b></span>
              {isEditing ? (
                <input
                  type="text"
                  name="mobile"
                  value={editedUser.mobile}
                  onChange={handleChange}
                  className="input-field"
                />
              ) : (
                <span>{user.mobile}</span>
              )}
            </div>
            <div className="detail">
              <span><b>Email:</b></span>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={editedUser.email}
                  onChange={handleChange}
                  className="input-field"
                />
              ) : (
                <span>{user.email}</span>
              )}
            </div>
            {isEditing ? (
              <button onClick={handleSave} className="save-button">
                Save
              </button>
            ) : (
              <button onClick={handleEdit} className="edit-button">
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
