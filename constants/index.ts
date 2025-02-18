import { Option } from "@/components/ui/multiple-selector";
import { DayOption, HabitSelect } from "@/types";

export enum MenuOptions {
  ALL_HABITS = "All Habits",
  STATISTICS = "Statistics",
  WORKOUT = "Workout",
  AREAS = "Statistics",
}

export const WeekDays: DayOption[] = [
  { id: 1, name: "Mo", isSelected: true },
  { id: 2, name: "Tu", isSelected: false },
  { id: 3, name: "We", isSelected: false },
  { id: 4, name: "Th", isSelected: false },
  { id: 5, name: "Fr", isSelected: false },
  { id: 6, name: "Sa", isSelected: false },
  { id: 7, name: "Su", isSelected: false },
];

export const HabitSuggestions: HabitSelect[] = [
  {
    id: 1,
    title: "Most Popular Habits",
    areas: [
      {
        id: 1,
        name: "Meditate",
        icon: { prefix: "fas", iconName: "child-reaching" },
      },
      {
        id: 2,
        name: "Set a To-do List",
        icon: { prefix: "fas", iconName: "list" },
      },
      {
        id: 3,
        name: "Drink Water",
        icon: { prefix: "fas", iconName: "droplet" },
      },
      {
        id: 4,
        name: "Read Books",
        icon: { prefix: "fas", iconName: "book-open" },
      },
      {
        id: 5,
        name: "Running",
        icon: { prefix: "fas", iconName: "person-running" },
      },
      {
        id: 6,
        name: "Stay Fit with Exercises",
        icon: { prefix: "fas", iconName: "dumbbell" },
      },

      {
        id: 8,
        name: "Hit the Gym",
        icon: { prefix: "fas", iconName: "dumbbell" },
      },

      {
        id: 10,
        name: "Core Training",
        icon: { prefix: "fas", iconName: "dumbbell" },
      },
      {
        id: 11,
        name: "Practice Yoga",
        icon: { prefix: "fas", iconName: "dumbbell" },
      },
      {
        id: 12,
        name: "HIIT Cardio",
        icon: { prefix: "fas", iconName: "heart" },
      },

      {
        id: 14,
        name: "Stay Healthy",
        icon: { prefix: "fas", iconName: "heart" },
      },
      {
        id: 15,
        name: "Go for a Walk",
        icon: { prefix: "fas", iconName: "walking" },
      },
      {
        id: 16,
        name: "Get Good Sleep",
        icon: { prefix: "fas", iconName: "bed" },
      },
    ],
  },
  {
    id: 2,
    title: "Increase Your Productivity",
    areas: [
      {
        id: 23,
        name: "Read an Article",
        icon: { prefix: "fas", iconName: "newspaper" },
      },
      {
        id: 24,
        name: "Review Your Day",
        icon: { prefix: "fas", iconName: "calendar-alt" },
      },
      {
        id: 25,
        name: "Clean Up Emails",
        icon: { prefix: "fas", iconName: "envelope" },
      },
      {
        id: 26,
        name: "Write in Journal",
        icon: { prefix: "fas", iconName: "book" },
      },
    ],
  },
];

export const HabitSuggestions1 = [
  {
    id: 1,
    title: "Most Popular Habits",
    areas: [
      {
        id: 1,
        name: "Meditate",
        icon: { prefix: "fas", iconName: "child-reaching" },
      },
      {
        id: 2,
        name: "Set a To-do List",
        icon: { prefix: "fas", iconName: "list" },
      },
      {
        id: 3,
        name: "Drink Water",
        icon: { prefix: "fas", iconName: "droplet" },
      },
      {
        id: 4,
        name: "Read Books",
        icon: { prefix: "fas", iconName: "book-open" },
      },
      {
        id: 5,
        name: "Running",
        icon: { prefix: "fas", iconName: "person-running" },
      },
      {
        id: 6,
        name: "Stay Fit with Exercises",
        icon: { prefix: "fas", iconName: "dumbbell" },
      },
      {
        id: 7,
        name: "Quick Stretch",
        icon: { prefix: "fas", iconName: "child-reaching" },
      },
      {
        id: 8,
        name: "Hit the Gym",
        icon: { prefix: "fas", iconName: "dumbbell" },
      },
      {
        id: 9,
        name: "Swimming",
        icon: { prefix: "fas", iconName: "swimmer" },
      },
      {
        id: 10,
        name: "Core Training",
        icon: { prefix: "fas", iconName: "dumbbell" },
      },
      {
        id: 11,
        name: "Practice Yoga",
        icon: { prefix: "fas", iconName: "leaf" },
      },
      {
        id: 12,
        name: "HIIT Cardio",
        icon: { prefix: "fas", iconName: "heart" },
      },
      {
        id: 13,
        name: "Cycling",
        icon: { prefix: "fas", iconName: "bicycle" },
      },
      {
        id: 14,
        name: "Stay Healthy",
        icon: { prefix: "fas", iconName: "heart" },
      },
      {
        id: 15,
        name: "Go for a Walk",
        icon: { prefix: "fas", iconName: "walking" },
      },
      {
        id: 16,
        name: "Get Good Sleep",
        icon: { prefix: "fas", iconName: "bed" },
      },
      {
        id: 17,
        name: "Take a Cold Shower",
        icon: { prefix: "fas", iconName: "shower" },
      },
      {
        id: 18,
        name: "Take Power Naps",
        icon: { prefix: "fas", iconName: "bed" },
      },
      {
        id: 19,
        name: "Wash Your Hands",
        icon: { prefix: "fas", iconName: "soap" },
      },
      {
        id: 20,
        name: "Apply Sunscreen",
        icon: { prefix: "fas", iconName: "sun" },
      },
      {
        id: 21,
        name: "Take a Deep Breath",
        icon: { prefix: "fas", iconName: "lungs" },
      },
      {
        id: 22,
        name: "Wear a Mask",
        icon: { prefix: "fas", iconName: "mask" },
      },
    ],
  },
  {
    id: 2,
    title: "Increase Your Productivity",
    areas: [
      {
        id: 23,
        name: "Read an Article",
        icon: { prefix: "fas", iconName: "newspaper" },
      },
      {
        id: 24,
        name: "Review Your Day",
        icon: { prefix: "fas", iconName: "calendar-alt" },
      },
      {
        id: 25,
        name: "Clean Up Emails",
        icon: { prefix: "fas", iconName: "envelope" },
      },
      {
        id: 26,
        name: "Write in Journal",
        icon: { prefix: "fas", iconName: "book" },
      },
    ],
  },
  {
    id: 3,
    title: "Nurture Your Relationships",
    areas: [
      {
        id: 27,
        name: "Call My Parents",
        icon: { prefix: "fas", iconName: "phone-alt" },
      },
      {
        id: 28,
        name: "Spend Time with Family",
        icon: { prefix: "fas", iconName: "users" },
      },
      {
        id: 29,
        name: "Pay a Compliment",
        icon: { prefix: "fas", iconName: "thumbs-up" },
      },
      {
        id: 30,
        name: "Meet a Friend",
        icon: { prefix: "fas", iconName: "user-friends" },
      },
      {
        id: 31,
        name: "Say Thank You",
        icon: { prefix: "fas", iconName: "hand-holding-heart" },
      },
      {
        id: 32,
        name: "Spend Time with Yourself",
        icon: { prefix: "fas", iconName: "user" },
      },
    ],
  },
  {
    id: 4,
    title: "Watch Your Diet",
    areas: [
      {
        id: 33,
        name: "Take Vitamins",
        icon: { prefix: "fas", iconName: "capsules" },
      },
      {
        id: 34,
        name: "Eat Fruits",
        icon: { prefix: "fas", iconName: "apple-alt" },
      },
      {
        id: 35,
        name: "Limit Sugar",
        icon: { prefix: "fas", iconName: "cubes-stacked" },
      },
      {
        id: 36,
        name: "Track Calories",
        icon: { prefix: "fas", iconName: "chart-line" },
      },
      {
        id: 37,
        name: "Limit Caffeine",
        icon: { prefix: "fas", iconName: "mug-hot" },
      },
    ],
  },
  {
    id: 5,
    title: "Learn Something New",
    areas: [
      {
        id: 38,
        name: "Learn Spanish",
        icon: { prefix: "fas", iconName: "language" },
      },
      {
        id: 39,
        name: "Learn French",
        icon: { prefix: "fas", iconName: "language" },
      },
      {
        id: 40,
        name: "Learn German",
        icon: { prefix: "fas", iconName: "language" },
      },
      {
        id: 41,
        name: "Learn Japanese",
        icon: { prefix: "fas", iconName: "language" },
      },
      {
        id: 42,
        name: "Practice Coding",
        icon: { prefix: "fas", iconName: "code" },
      },
      {
        id: 43,
        name: "Try a New Recipe",
        icon: { prefix: "fas", iconName: "utensils" },
      },
    ],
  },
  {
    id: 6,
    title: "Live a Passion",
    areas: [
      {
        id: 44,
        name: "Play the Guitar",
        icon: { prefix: "fas", iconName: "guitar" },
      },
      {
        id: 45,
        name: "Take a Photo",
        icon: { prefix: "fas", iconName: "camera" },
      },
      {
        id: 46,
        name: "Paint & Draw",
        icon: { prefix: "fas", iconName: "paint-brush" },
      },
      {
        id: 47,
        name: "Just Dance",
        icon: { prefix: "fas", iconName: "person-walking" },
      },
    ],
  },
  {
    id: 7,
    title: "More Healthy Habits",
    areas: [
      {
        id: 48,
        name: "Play Badminton",
        icon: { prefix: "fas", iconName: "baseball-bat-ball" },
      },
      {
        id: 49,
        name: "Practice for basketball",
        icon: { prefix: "fas", iconName: "basketball" },
      },
      {
        id: 50,
        name: "Go Bowling",
        icon: { prefix: "fas", iconName: "bowling-ball" },
      },
      {
        id: 51,
        name: "Practice Boxing",
        icon: { prefix: "fas", iconName: "boxing-glove" },
      },
      {
        id: 52,
        name: "Go Fishing",
        icon: { prefix: "fas", iconName: "fish" },
      },
      {
        id: 53,
        name: "Play Golf",
        icon: { prefix: "fas", iconName: "golf-ball" },
      },
      {
        id: 54,
        name: "Go Climbing",
        icon: { prefix: "fas", iconName: "mountain" },
      },
      {
        id: 55,
        name: "Count Your Steps",
        icon: { prefix: "fas", iconName: "walking" },
      },
      {
        id: 56,
        name: "Jump Rope!",
        icon: { prefix: "fas", iconName: "circle-notch" },
      },
      {
        id: 57,
        name: "Treadmill Running",
        icon: { prefix: "fas", iconName: "running" },
      },
      {
        id: 58,
        name: "Lift Weight",
        icon: { prefix: "fas", iconName: "dumbbell" },
      },
      {
        id: 59,
        name: "Climb Those Stairs",
        icon: { prefix: "fas", iconName: "stairs" },
      },
      {
        id: 60,
        name: "Stay in Movements",
        icon: { prefix: "fas", iconName: "walking" },
      },
      {
        id: 61,
        name: "Exercise Time",
        icon: { prefix: "fas", iconName: "clock" },
      },
      {
        id: 62,
        name: "Burn some Calories",
        icon: { prefix: "fas", iconName: "fire" },
      },
      {
        id: 63,
        name: "Go Kayaking",
        icon: { prefix: "fas", iconName: "water" },
      },
    ],
  },
  {
    id: 8,
    title: "Vitamin Intake",
    areas: [
      {
        id: 65,
        name: "Take Vitamin A",
        icon: { prefix: "fas", iconName: "capsules" },
      },
      {
        id: 66,
        name: "Take Vitamin C",
        icon: { prefix: "fas", iconName: "capsules" },
      },
      {
        id: 67,
        name: "Take Vitamin B6",
        icon: { prefix: "fas", iconName: "capsules" },
      },
      {
        id: 68,
        name: "Take Vitamin E",
        icon: { prefix: "fas", iconName: "capsules" },
      },
      {
        id: 69,
        name: "Niacin Intake",
        icon: { prefix: "fas", iconName: "capsules" },
      },
      {
        id: 70,
        name: "Biotin Intake",
        icon: { prefix: "fas", iconName: "capsules" },
      },
      {
        id: 71,
        name: "Calcium Intake",
        icon: { prefix: "fas", iconName: "capsules" },
      },
      {
        id: 72,
        name: "Sodium Intake",
        icon: { prefix: "fas", iconName: "capsules" },
      },
      {
        id: 73,
        name: "Fat Intake",
        icon: { prefix: "fas", iconName: "capsules" },
      },
      {
        id: 74,
        name: "Protein Intake",
        icon: { prefix: "fas", iconName: "capsules" },
      },
      {
        id: 75,
        name: "Cholesterol Intake",
        icon: { prefix: "fas", iconName: "capsules" },
      },
    ],
  },
];
