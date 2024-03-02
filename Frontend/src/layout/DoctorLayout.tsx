import Navbar from "@/components/Navbar";
import { LayoutProps } from "@/types";

const DoctorLayout: React.FC<LayoutProps> = ({ children }) => {
    const navLinks : Array<{name: string, path: string}> = [
        // {name: "Cases", path: "/doctor/cases"},
        // {name: "Case View", path: "/doctor/case-view"}
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