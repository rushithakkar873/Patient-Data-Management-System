import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const AuthNavbar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav className="bg-black text-white">
      <div className="flex justify-between items-center px-6 py-5">
        <div className="flex space-x-4 items-center">
          <div>
            <Link to={"/"} className="flex items-center">
              <span className="font-bold text-xl">𝐆𝐏𝐓-𝐌𝐞𝐝𝐀𝐬𝐬𝐢𝐬𝐭</span>
            </Link>
          </div>
        </div>
        <Button variant={"outline"} className="bg-black px-5">
          <Link
            to={pathname.includes("login") ? "/auth/signup" : "/auth/login"}
          >
            {pathname.includes("login") ? "Signup" : "Login"}
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default AuthNavbar;
