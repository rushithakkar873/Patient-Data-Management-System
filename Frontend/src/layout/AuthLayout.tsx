import AuthNavbar from "@/components/AuthNavbar";
import { LayoutProps } from "@/types";

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-h-screen h-screen flex flex-col">
      <div className="">
        <AuthNavbar />
      </div>
      <div className="grow flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
