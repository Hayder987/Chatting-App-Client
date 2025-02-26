import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuthContext from "./useAuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext()

  const logout = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(`/api/auth/logout`);
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("chat-user")
      setAuthUser(null)

    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {loading, logout}
};

export default useLogout;
