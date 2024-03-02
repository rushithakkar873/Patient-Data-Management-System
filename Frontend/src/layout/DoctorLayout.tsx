import Navbar from "@/components/Navbar";
import { LayoutProps } from "@/types";

const DoctorLayout: React.FC<LayoutProps> = ({ children }) => {
    const navLinks = [
        {name: "Active Cases", path: "/doctor/active-cases"},
        {name: "Case", path: "/doctor/active-cases"}
    ]
    return (
        <>
            <div className="max-h-screen h-screen flex flex-col">
                <Navbar navLinks={navLinks} />
                <div className="grow p-8">
                    {children}
                </div>
            </div>
        </>
    );
}

export default DoctorLayout;