import Navbar from "@/components/Navbar";
import { LayoutProps } from "@/types";

const PatientLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className="max-h-screen h-screen flex flex-col">
                <Navbar />
                <div className="grow p-6">
                    {children}
                </div>
            </div>
        </>
    );
}

export default PatientLayout;