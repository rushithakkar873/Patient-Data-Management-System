import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Card, CardTitle } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Icons } from "@/utils/Icons";
import { Label } from "@radix-ui/react-label";
import { ChangeEvent, useState } from "react";
import { Input } from "../components/ui/input";

const Dashboard = () => {
    const [currentSymptoms, setCurrentSymptoms] = useState({
        description: '',
        duration_days: '',
        affected_area: '',
    });
    const [isLoading, setIsLoading] = useState(false);

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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentSymptoms((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleCreateNewCase = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // You can implement success or error handling here
        // For example, showing a toast notification
        setTimeout(() => {
            setIsLoading(false);
            // You can implement success or error handling here
            // For example, showing a toast notification
            alert('Case created successfully');
        }, 3000);
    }

    return (
        <div className="h-full flex flex-col space-y-4">
            <div className="ml-auto">
                <Dialog>
                    <DialogTrigger className="">
                        <Button className="">+ New Case</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="text-lg mb-4">Current Symptoms</DialogTitle>
                            <DialogDescription>
                                <form className="flex flex-col space-y-4" onSubmit={handleCreateNewCase}>
                                    <div>
                                        <Label htmlFor='description'>Describe it</Label>
                                        <Input
                                            type='text'
                                            id='description'
                                            name='description'
                                            value={currentSymptoms.description}
                                            onChange={handleChange}
                                            placeholder='Enter your current symptoms description'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor='duration_days'>Duration in Days</Label>
                                        <Input
                                            type='number'
                                            id='duration_days'
                                            name='duration_days'
                                            value={currentSymptoms.duration_days}
                                            onChange={handleChange}
                                            placeholder='Enter your current symptoms duration in days'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor='affected_area'>Affected Area</Label>
                                        <Input
                                            type='text'
                                            id='affected_area'
                                            name='affected_area'
                                            value={currentSymptoms.affected_area}
                                            onChange={handleChange}
                                            placeholder='Enter your current symptoms affected area'
                                            required
                                        />
                                    </div>
                                    <Button type='submit' className='w-full' disabled={isLoading}>
                                        {isLoading ? (
                                            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                                        ) : (
                                            'Create new case'
                                        )}
                                    </Button>
                                </form>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="grow grid grid-rows-2 gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-full md:col-span-1">
                        <Card className="h-full flex flex-col justify-center items-center space-y-3 py-6">
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
                    <div className="md:col-span-2">
                        <Card className="h-full px-10 py-6">
                            <Tabs defaultValue="medical-history" className="">
                                <TabsList>
                                    <TabsTrigger value="medical-history">Medical History</TabsTrigger>
                                    <TabsTrigger value="life-style">Life Style</TabsTrigger>
                                </TabsList>
                                <TabsContent value="medical-history" className="">
                                    <div className="grid grid-cols-2 gap-2">
                                        <p><span className="font-semibold">Allergies:</span> {medicalHistoryData.allergies}</p>
                                        <p><span className="font-semibold">Past Medical History:</span> {medicalHistoryData.past_medical_history}</p>
                                        <p><span className="font-semibold">Family Medical History:</span> {medicalHistoryData.family_medical_history}</p>
                                        <p><span className="font-semibold">Current Medication:</span> {medicalHistoryData.current_medication}</p>
                                        <p><span className="font-semibold">Vaccination History:</span> {medicalHistoryData.vaccination_history.join(', ')}</p>
                                    </div>
                                </TabsContent>
                                <TabsContent value="life-style">
                                    <div className="flex flex-col space-y-2">
                                        <p><span className="font-semibold">Smoking:</span> {lifeStyleData.smoking}</p>
                                        <p><span className="font-semibold">Alcohol:</span> {lifeStyleData.alcohol}</p>
                                        <p><span className="font-semibold">Sleep Time:</span> {lifeStyleData.sleep_time}</p>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </Card>
                    </div>
                </div>
                <div className="row-span-1">
                    <Card className="h-full px-6 py-6">
                        <CardTitle className="text-lg">Patient Cases History</CardTitle>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;