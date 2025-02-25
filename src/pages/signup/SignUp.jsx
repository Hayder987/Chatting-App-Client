import { Link } from "react-router";
import GenderBox from "./GenderBox";
import { useState } from "react";

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  

  return (
    <div className="min-w-[450px] flex justify-center items-center mx-auto flex-col">
      <div
        className="w-full p-10 rounded-lg shadow-md opacity  bg-clip-padding 
       backdrop-blur-lg "
      >
        <h1 className="text-3xl text-white mb-6 text-center font-semibold">
          SignUp <span className="text-blue-400">OR Chat</span>
        </h1>

        <form className="">
          <div className="flex flex-col gap-5">
            {/* full name */}
            <div className="form-control flex flex-col">
              <label className="label mb-2">
                <span className="label-text text-white">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Jhon Doe"
                className="input w-full bg-gray-900 border-none text-white input-bordered"
                required
              />
            </div>
            {/* user name */}
            <div className="form-control flex flex-col">
              <label className="label mb-2">
                <span className="label-text text-white">User Name</span>
              </label>
              <input
                type="text"
                placeholder="jhondoe"
                className="input w-full bg-gray-900 border-none text-white input-bordered"
                required
              />
            </div>
            {/* password */}
            <div className="form-control flex flex-col">
              <label className="label mb-2">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input w-full border-none bg-gray-900 text-white input-bordered"
                required
              />
            </div>
            {/* confirm password */}
            <div className="form-control flex flex-col">
              <label className="label mb-2">
                <span className="label-text text-white">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input w-full border-none bg-gray-900 text-white input-bordered"
                required
              />
            </div>
            {/* gender */}
             <GenderBox></GenderBox>
          </div>
          <button className="text-center mb-3  cursor-pointer mt-6 w-full rounded-md bg-gray-900 py-2 px-4 text-white">
            Sign Up
          </button>
          <Link to='/login' className="">
            <span className="text-center text-gray-300 hover:text-blue-500">
               Have An Account? Login
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;


// initial code
// import GenderBox from "./GenderBox";

// const SignUp = () => {
//   return (
//     <div className="min-w-[450px] flex justify-center items-center mx-auto flex-col">
//       <div
//         className="w-full p-10 rounded-lg shadow-md opacity  bg-clip-padding 
//        backdrop-blur-lg "
//       >
//         <h1 className="text-3xl text-white mb-6 text-center font-semibold">
//           SignUp <span className="text-blue-400">OR Chat</span>
//         </h1>

//         <form className="">
//           <div className="flex flex-col gap-5">
//             {/* full name */}
//             <div className="form-control flex flex-col">
//               <label className="label mb-2">
//                 <span className="label-text text-white">Full Name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Jhon Doe"
//                 className="input w-full bg-gray-900 border-none text-white input-bordered"
//                 required
//               />
//             </div>
//             {/* user name */}
//             <div className="form-control flex flex-col">
//               <label className="label mb-2">
//                 <span className="label-text text-white">User Name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="jhondoe"
//                 className="input w-full bg-gray-900 border-none text-white input-bordered"
//                 required
//               />
//             </div>
//             {/* password */}
//             <div className="form-control flex flex-col">
//               <label className="label mb-2">
//                 <span className="label-text text-white">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="input w-full border-none bg-gray-900 text-white input-bordered"
//                 required
//               />
//             </div>
//             {/* confirm password */}
//             <div className="form-control flex flex-col">
//               <label className="label mb-2">
//                 <span className="label-text text-white">Confirm Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 className="input w-full border-none bg-gray-900 text-white input-bordered"
//                 required
//               />
//             </div>
//             {/* gender */}
//              <GenderBox></GenderBox>
//           </div>
//           <button className="text-center mb-3  cursor-pointer mt-6 w-full rounded-md bg-gray-900 py-2 px-4 text-white">
//             Sign Up
//           </button>
//           <a href="#" className="">
//             <span className="text-center text-gray-300 hover:text-blue-500">
//                Have An Account? Login
//             </span>
//           </a>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

