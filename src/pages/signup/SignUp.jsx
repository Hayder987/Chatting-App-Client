

const SignUp = () => {
  return (
    <div className="min-w-[450px] flex justify-center items-center mx-auto flex-col">
      <div
        className="w-full p-6 rounded-lg shadow-md opacity  bg-clip-padding 
       backdrop-blur-lg "
      >
        <h1 className="text-3xl mb-6 text-center font-semibold">
          SignUp <span className="text-blue-800">OR Chat</span>
        </h1>

        <form className="">
          <div className="flex flex-col gap-4">
            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input w-full input-bordered"
                required
              />
            </div>
            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input w-full input-bordered"
                required
              />
            </div>
          </div>
          <button className="text-center mb-3  cursor-pointer mt-6 w-full rounded-md bg-blue-800 py-2 px-4 text-white">Login</button>
           <a href="#" className=""><span className="text-center hover:text-blue-800">{"Don't"} Have An Account? SignUp</span></a>
        </form>
      </div>
    </div>
  )
}

export default SignUp