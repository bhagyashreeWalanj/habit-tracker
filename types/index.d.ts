/* eslint-disable no-unused-vars */
declare type DayOption = {
  id: number;
  name: string;
  isSelected: boolean;
};

declare interface AllHabitsProps {
  _id: string | undefined;
  name: string | undefined;
  icon: { prefix: IconPrefix; iconName: IconName };
  isNotificationOn: boolean | undefined;
  completedDays: { _id: string; date: string }[];
  frequency: {
    type: string;
    days: string[];
    timesPerWeek?: number | undefined;
    timesPerDay?: any | undefined;
  };
  notificationTime: string | undefined;
  areas: { label: string | undefined; value: string | undefined }[];
}

// predefined habits in  createNewHabit Dropwdown menu
export type HabitSelect = {
  id: number | undefined;
  title: string;
  areas: {
    id: number | undefined;
    icon: { prefix: IconPrefix; iconName: IconName };
    name: string;
  }[];
};

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type Gender = "male" | "female" | "other";
declare type Status = "pending" | "scheduled" | "cancelled";

declare interface CreateUserParams {
  name: string;
  email: string;
  password: string;
}
declare interface User extends CreateUserParams {
  $id: string;
}

declare interface RegisterUserParams extends CreateUserParams {
  userId: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies: string | undefined;
  currentMedication: string | undefined;
  familyMedicalHistory: string | undefined;
  pastMedicalHistory: string | undefined;
  identificationType: string | undefined;
  identificationNumber: string | undefined;
  identificationDocument: FormData | undefined;
  privacyConsent: boolean;
}

declare type CreateAppointmentParams = {
  userId: string;
  patient: string;
  primaryPhysician: string;
  reason: string;
  schedule: Date;
  status: Status;
  note: string | undefined;
};

declare type UpdateAppointmentParams = {
  appointmentId: string;
  userId: string;
  appointment: Appointment;
  type: string;
};
