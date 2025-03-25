import React from "react";
import "./Category.css";

function Category() {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container" htmlFor="all">
          <input type="radio" name="all" id="all" />
          <span className="checkmark"></span> {/* Keep the span for styling */}
          <span>All</span>
        </label>
        <label className="sidebar-label-container" htmlFor="sneakers">
          <input type="radio" name="all" id="sneakers" />
          <span className="checkmark"></span>
          <span>Sneakers</span>
        </label>
        <label className="sidebar-label-container" htmlFor="flats">
          <input type="radio" name="all" id="flats" />
          <span className="checkmark"></span>
          <span>Flats</span>
        </label>
        <label className="sidebar-label-container" htmlFor="sandals">
          <input type="radio" name="all" id="sandals" />
          <span className="checkmark"></span>
          <span>Sandals</span>
        </label>
        <label className="sidebar-label-container" htmlFor="heels">
          <input type="radio" name="all" id="heels" />
          <span className="checkmark"></span>
          <span>Heels</span>
        </label>
      </div>
    </div>
  );
}

export default Category;
// import React from "react";
// import "./Category.css";

// function Category() {
//   return (
//     <div>
//       <h2 className="sidebar-title">Category</h2>
//       <div>
//         <label className="sidebar-label-container" htmlFor="all">
//           <input type="radio" name="all" id="all" />
//           <span className="checkmark">All</span>
//         </label>
//         <label className="sidebar-label-container" htmlFor="sneakers">
//           <input type="radio" name="all" id="sneakers" />
//           <span className="checkmark">Sneakers</span>
//         </label>
//         <label className="sidebar-label-container" htmlFor="flats">
//           <input type="radio" name="all" id="flats" />
//           <span className="checkmark">Flats</span>
//         </label>
//         <label className="sidebar-label-container" htmlFor="sandals">
//           <input type="radio" name="all" id="sandals" />
//           <span className="checkmark">Sandals</span>
//         </label>
//         <label className="sidebar-label-container" htmlFor="heels">
//           <input type="radio" name="all" id="heels" />
//           <span className="checkmark">Heels</span>
//         </label>
//       </div>
//     </div>
//   );
// }

// export default Category;
