import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export type HabitType = {
  _id: string | undefined;
  name: string | undefined;
  icon: { prefix: IconPrefix; iconName: IconName };
  isNotificationOn: boolean | undefined;
  frequency: {
    type: string;
    days: string[];
    timesPerWeek?: number | undefined;
    timesPerDay?: any | undefined;
  };
  notificationTime: string | undefined;
  areas: { label: string | undefined; value: string | undefined }[];
  completedDays: { _id: string; date: string }[];
};

export type AreaType = {
  // id: number;
  value: string;
  label: string;
  icon: { prefix: IconPrefix; iconName: IconName };
};
