import React from "react";

const GenderBox = () => {
  return (
    <div className="flex gap-4">
      <div className="form-control ">
        <label className="label mb-2">
          <span className="label-text text-white">Male</span>
          <input type="checkbox" defaultChecked className="checkbox text-white" />
        </label>
      </div>
      {/* ------------ */}
      <div className="form-control ">
        <label className="label mb-2">
          <span className="label-text text-white">Female</span>
          <input type="checkbox" defaultChecked className="checkbox text-white" />
        </label>
      </div>
    </div>
  );
};

export default GenderBox;


// import React from "react";

// const GenderBox = () => {
//   return (
//     <div className="flex gap-4">
//       <div className="form-control ">
//         <label className="label mb-2">
//           <span className="label-text text-white">Male</span>
//           <input type="checkbox" defaultChecked className="checkbox text-white" />
//         </label>
//       </div>
//       {/* ------------ */}
//       <div className="form-control ">
//         <label className="label mb-2">
//           <span className="label-text text-white">Female</span>
//           <input type="checkbox" defaultChecked className="checkbox text-white" />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GenderBox;

