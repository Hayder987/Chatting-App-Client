import { useState } from "react";
import { Link } from "react-router";
import useLogin from "../../hooks/useLogin";

const Login = () => {
   const [userName, setUserName] = useState('')
   const [password , setPassword] = useState('')
   const {loading, login} = useLogin(userName, password)

   const handleSubmit =async (e)=>{
    e.preventDefault();
    await login(userName, password)
   }

  return (
    <div className="min-w-[450px] flex justify-center items-center mx-auto flex-col">
      <div
        className="w-full p-10 rounded-lg shadow-md opacity  bg-clip-padding 
       backdrop-blur-lg "
      >
        <h1 className="text-3xl text-white mb-6 text-center font-semibold">
          Login <span className="text-blue-400">OR Chat</span>
        </h1>

        <form
        onSubmit={handleSubmit}
         className="">
          <div className="flex flex-col gap-5">
            <div className="form-control flex flex-col">
              <label className="label mb-2">
                <span className="label-text text-white">User Name</span>
              </label>
              <input
                type="text"
                placeholder="User Name"
                value={userName}
                onChange={(e)=> setUserName(e.target.value)}
                className="input w-full bg-gray-900 border-none text-white input-bordered"
                required
              />
            </div>
            <div className="form-control flex flex-col">
              <label className="label mb-2">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                className="input w-full border-none bg-gray-900 text-white input-bordered"
                required
              />
            </div>
          </div>
           <button className="text-center mb-3  cursor-pointer mt-6 w-full rounded-md bg-gray-900 py-2 px-4 text-white">Login</button>
           <Link to='/signup' className=""><span className="text-center text-gray-300 hover:text-blue-500">{"Don't"} Have An Account? SignUp</span></Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

// initail code
// const Login = () => {
//     return (
//       <div className="min-w-[450px] flex justify-center items-center mx-auto flex-col">
//         <div
//           className="w-full p-10 rounded-lg shadow-md opacity  bg-clip-padding 
//          backdrop-blur-lg "
//         >
//           <h1 className="text-3xl text-white mb-6 text-center font-semibold">
//             Login <span className="text-blue-400">OR Chat</span>
//           </h1>
  
//           <form className="">
//             <div className="flex flex-col gap-5">
//               <div className="form-control flex flex-col">
//                 <label className="label mb-2">
//                   <span className="label-text text-white">User Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="User Name"
//                   className="input w-full bg-gray-900 border-none text-white input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control flex flex-col">
//                 <label className="label mb-2">
//                   <span className="label-text text-white">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="input w-full border-none bg-gray-900 text-white input-bordered"
//                   required
//                 />
//               </div>
//             </div>
//              <button className="text-center mb-3  cursor-pointer mt-6 w-full rounded-md bg-gray-900 py-2 px-4 text-white">Login</button>
//              <a href="#" className=""><span className="text-center text-gray-300 hover:text-blue-500">{"Don't"} Have An Account? SignUp</span></a>
//           </form>
//         </div>
//       </div>
//     );
//   };
  
//   export default Login;
  
