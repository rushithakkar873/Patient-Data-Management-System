import { Icons } from "@/utils/Icons";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

const Dashboard = () => {
    // Dummy data for demonstration
    const lifeStyleData = {
        smoking: "no",
        alcohol: "yes",
        sleep_time: "6-8 hours",
    };

    const medicalHistoryData = {
        allergies: "Pollen",
        past_medical_history: "Asthma",
        family_medical_history: "Heart Disease",
        current_medication: "Inhaler",
        vaccination_history: ["COVID-19", "Flu"],
    };

    return (
        <div className="h-full grid grid-rows-2 gap-4">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    <Card className="h-full flex flex-col items-center space-y-3 py-6">
                        <Avatar className="h-[100px] w-[100px]">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>P</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-lg">Welcome, Username!</CardTitle>
                        <div>
                            <p>Contact: +91 99999 99999</p>
                            <p>Mail: user@mail.com</p>
                        </div>
                    </Card>
                </div>
                <div className="col-span-2">
                    <Card className="h-full px-6 py-6">
                        <Tabs defaultValue="medical-history" className="w-full">
                            <TabsList>
                                <TabsTrigger value="medical-history">Medical History</TabsTrigger>
                                <TabsTrigger value="life-style">Life Style</TabsTrigger>
                            </TabsList>
                            <TabsContent value="medical-history" className="">
                                <div>
                                <div className="grid grid-cols-2 gap-2">
                                    <p><span className="font-semibold">Allergies:</span> {medicalHistoryData.allergies}</p>
                                    <p><span className="font-semibold">Past Medical History:</span> {medicalHistoryData.past_medical_history}</p>
                                    <p><span className="font-semibold">Family Medical History:</span> {medicalHistoryData.family_medical_history}</p>
                                    <p><span className="font-semibold">Current Medication:</span> {medicalHistoryData.current_medication}</p>
                                    <p><span className="font-semibold">Vaccination History:</span> {medicalHistoryData.vaccination_history.join(', ')}</p>
                                </div>
                                </div>

                            </TabsContent>
                            <TabsContent value="life-style">
                                <div>
                                    <p>Smoking: {lifeStyleData.smoking}</p>
                                    <p>Alcohol: {lifeStyleData.alcohol}</p>
                                    <p>Sleep Time: {lifeStyleData.sleep_time}</p>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </Card>
                </div>
            </div>
            <div className="row-span-1">
                <Card className="h-full py-6">
                    <CardHeader>
                        <CardTitle>Patient Cases History</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* Placeholder for dynamic patient cases history */}
                        <p>This section will display the patient's cases history...</p>
                    </CardContent>
                    <CardFooter>
                        {/* Possible actions or summary */}
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;