export type MedicalHistory = {
  _id: string;
  allergies: string;
  past_medical_history: string;
  family_medical_history: string;
  current_medication: string;
  vaccination_history: Array<{
    name: string;
    status: 'yes' | 'no';
  }>
}

export type Lifestyle = {
  _id: string;
  smoking: string;
  alcohol: string;
  sleep_time: string;
};
