import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface VaccinationHistory {
  name: string;
  status: string;
}

interface MedicalHistory {
  _id: string;
  allergies: string;
  past_medical_history: string;
  family_medical_history: string;
  current_medication: string;
  vaccination_history: VaccinationHistory[];
}

interface Lifestyle {
  _id: string;
  smoking: string;
  alcohol: string;
  sleep_time: string;
}

interface Patient {
  _id: string;
  name: string;
  gender: string;
  email: string;
  age: number;
}

interface CurrentSymptoms {
  description: string;
  duration_days: number;
  affected_area: string;
}

interface AiResponse {
  _id: string;
  patient_query: string;
  gemini_response: string;
  openai_response: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface CaseData {
  current_symptoms: CurrentSymptoms;
  prescription: { medicine: string[] };
  _id: string;
  patient: Patient;
  medical_history: MedicalHistory;
  life_style: Lifestyle;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// Simulating fetching data from API
const apiResponse: { data: CaseData; ai_response: AiResponse } = {
  data: {
    current_symptoms: {
      description: "sever headache and stomach pain sometimes",
      duration_days: 5,
      affected_area: "Head and Stomach",
    },
    prescription: {
      medicine: [],
    },
    _id: "65e239a68e7ff8142defedee",
    patient: {
      _id: "65e1fff205fd49715e039bc9",
      name: "Vipul Chaudhary",
      gender: "male",
      email: "vipulr6111x@gmail.com",
      age: 3,
    },
    medical_history: {
      _id: "65e239a68e7ff8142defedea",
      allergies: "Pollen",
      past_medical_history: "Asthma",
      family_medical_history: "Heart Disease, Diabetes ",
      current_medication: "Inhaler",
      vaccination_history: [
        {
          name: "Covid - 19",
          status: "yes",
        },
        {
          name: "Flu",
          status: "yes",
        },
      ],
    },
    life_style: {
      _id: "65e239a68e7ff8142defedec",
      smoking: "yes",
      alcohol: "yes",
      sleep_time: "6-8 hours",
    },
    createdAt: "2024-03-01T20:25:10.795Z",
    updatedAt: "2024-03-01T20:25:10.795Z",
    __v: 0,
  },
  ai_response: {
    _id: "65e239ad8e7ff8142defedf0",
    patient_query: "65e239a68e7ff8142defedee",
    gemini_response:
      "Based on the patient's medical history and current symptoms, they may be experiencing a mild to moderate headache and occasional stomach pain. The combination of these symptoms suggests the possibility of an underlying inflammatory condition. The patient's allergies, past medical history, and current medications should be taken into consideration when determining the most appropriate treatment plan. The patient's lifestyle habits, including smoking and alcohol consumption, may also be contributing to their symptoms and should be addressed.\n\nRecommended treatment options may include over-the-counter pain relievers, such as ibuprofen or acetaminophen, to alleviate headache and stomach pain. Additionally, lifestyle modifications such as dietary changes, exercise, and stress management techniques can help reduce inflammation and improve overall well-being. The patient should also be advised to quit smoking and limit alcohol intake.\n\nIt is important for the patient to follow up with their doctor regularly to monitor their symptoms and make any necessary adjustments to their treatment plan. The doctor should also be aware of potential drug interactions and side effects, especially in light of the patient's current medications and allergies.",
    openai_response: "",
    createdAt: "2024-03-01T20:25:17.096Z",
    updatedAt: "2024-03-01T20:25:17.096Z",
    __v: 0,
  },
};

const CaseViewComponent: React.FC = () => {
  const { data, ai_response } = apiResponse;

  const handleCaseSubmit = () => {
    // Submit the case
  }

  return (
    <div className="p-4">
      <h2 className="text-3xl font-semibold">Patient Case Details</h2>
      <div className="mt-4">
        <h3 className="font-semibold text-xl">Current Symptoms</h3>
        <p>
          <span className="font-semibold">Description:</span>{" "}
          {data.current_symptoms.description}
        </p>
        <p>
          <span className="font-semibold">Duration (days):</span>{" "}
          {data.current_symptoms.duration_days}
        </p>
        <p>
          <span className="font-semibold">Affected Area:</span>{" "}
          {data.current_symptoms.affected_area}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-xl">Medical History</h3>
        <p>
          <span className="font-semibold">Allergies:</span>{" "}
          {data.medical_history.allergies}
        </p>
        <p>
          <span className="font-semibold">Past Medical History:</span>{" "}
          {data.medical_history.past_medical_history}
        </p>
        <p>
          <span className="font-semibold">Family Medical History:</span>{" "}
          {data.medical_history.family_medical_history}
        </p>
        <p>
          <span className="font-semibold">Current Medication:</span>{" "}
          {data.medical_history.current_medication}
        </p>
        <p>
          <span className="font-semibold">Vaccination History:</span>{" "}
          {data.medical_history.vaccination_history
            .map((v) => v.name)
            .join(", ")}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-xl">Lifestyle</h3>
        <p>
          <span className="font-semibold">Smoking:</span>{" "}
          {data.life_style.smoking}
        </p>
        <p>
          <span className="font-semibold">Alcohol:</span>{" "}
          {data.life_style.alcohol}
        </p>
        <p>
          <span className="font-semibold">Sleep Time:</span>{" "}
          {data.life_style.sleep_time}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-xl">GPT-Generated Analysis</h3>
        <p>
          <span className="font-semibold">GeminiAI:</span>{" "}
          {ai_response.gemini_response}
        </p>
        <p>
          <span className="font-semibold">OpenAI:</span>{" "}
          {ai_response.openai_response || "Noo response!!"}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-xl">Prescription</h3>
        <p>
          <span className="font-semibold">Medicine:</span>{" "}
          {data.prescription.medicine.join(", ") || "No prescription yet"}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-xl">Doctor's Note</h3>
        <Input placeholder="Write your note here" className="mt-2" />
      </div>
      <div className="mt-4 flex justify-end">
        <Button onClick={handleCaseSubmit} className="">Submit</Button>
      </div>
    </div>
  );
};

export default CaseViewComponent;
