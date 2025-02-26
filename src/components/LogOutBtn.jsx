import { BiLogOut } from "react-icons/bi";
import useLogout from "../hooks/useLogout";

const LogOutBtn = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <button onClick={logout} className="text-2xl text-white cursor-pointer">
          <BiLogOut />
        </button>
      )}
    </div>
  );
};

export default LogOutBtn;
