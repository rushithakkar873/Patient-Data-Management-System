import { LayoutProps } from "@/types";

const AuthLayout : React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="max-h-screen h-screen p-4 flex flex-col justify-center items-center">
            <header className="text-4xl font-bold mb-4">MediAnalytix</header>
            {children}
        </div>
    );
};

export default AuthLayout;