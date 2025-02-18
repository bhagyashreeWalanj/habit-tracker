export const sampleHabitData = [
  {
    _id: "0aa1f2a5-04cf-43b2-aa0f-a11112534dd7",
    name: "Drink 3 Litres of water Daily",
    icon: {
      prefix: "fas",
      iconName: "coffee",
    },
    isNotificationOn: false,
    completedDays: [
      {
        _id: "457c7828-a538-46d2-85fb-95b003442991",
        date: "2025-02-03",
      },
      {
        _id: "c5a034b8-9534-4ea4-98a7-c5e1503bbec0",
        date: "2025-02-10",
      },
    ],
    frequency: {
      type: "Daily",
      days: ["Mo", "Th"],
      timesPerWeek: 1,
      timesPerDay: 1,
    },
    notificationTime: "08:00 AM",
    areas: [
      {
        value: "Study",
        label: "Study",
      },
      {
        value: "Health",
        label: "Health",
      },
    ],
  },
  {
    _id: "6817266d-5c6c-4419-99fc-eaef3bb45c96",
    name: "Do homework ",
    icon: {
      prefix: "fas",
      iconName: "book",
    },
    isNotificationOn: false,
    completedDays: [
      {
        _id: "5da10683-e8f8-4ff5-ac05-28507c436c2d",
        date: "2025-02-04",
      },
      {
        _id: "57095b54-e946-4358-a185-4c45cecbfd68",
        date: "2025-02-11",
      },
      {
        _id: "35f6ecf2-31cb-4ae1-aba4-7b5b3c572430",
        date: "2025-02-10",
      },
    ],
    frequency: {
      type: "Daily",
      days: ["Mo", "Tu", "Fr"],
      timesPerWeek: 1,
      timesPerDay: 1,
    },
    notificationTime: "08:00 AM",
    areas: [
      {
        value: "Study",
        label: "Study",
      },
    ],
  },
  {
    _id: "e4547deb-4bde-4fab-94e2-7776ce75fb35",
    name: "Set a To-do List",
    icon: {
      prefix: "fas",
      iconName: "layer-group",
    },
    isNotificationOn: false,
    completedDays: [
      {
        _id: "1",
        date: "03/02/2025",
      },
      {
        _id: "bbbf63ed-e56a-4df3-aded-4d9078ea61b1",
        date: "2025-02-12",
      },
      {
        _id: "8e078d15-46f8-477f-941f-f1ab9b01f1b0",
        date: "2025-02-11",
      },
      {
        _id: "55ecb2c3-abe3-4e88-8b10-2e8033c5a3b1",
        date: "2025-02-10",
      },
    ],
    frequency: {
      type: "Daily",
      days: ["Mo", "Tu", "We", "Th", "Fr", "Sa"],
      timesPerWeek: 1,
      timesPerDay: "4",
    },
    notificationTime: "",
    areas: [
      {
        label: "Study",
        value: "Study",
      },
      {
        label: "Health",
        value: "Health",
      },
    ],
  },
  {
    _id: "4b833f1e-b84e-4376-9344-e1b8f9a43533",
    name: "Drink Water",
    icon: {
      prefix: "fas",
      iconName: "layer-group",
    },
    isNotificationOn: false,
    completedDays: [
      {
        _id: "1",
        date: "03/02/2025",
      },
      {
        _id: "971db304-5e65-4de3-a2f2-d451e4cc6722",
        date: "2025-02-12",
      },
      {
        _id: "f8555442-f4e4-4eae-a8da-9baeb0f297b8",
        date: "2025-02-11",
      },
      {
        _id: "26fbaa0c-b226-4bfb-9fc6-c796c9d9f5a3",
        date: "2025-02-10",
      },
    ],
    frequency: {
      type: "Daily",
      days: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      timesPerWeek: 1,
      timesPerDay: 1,
    },
    notificationTime: "",
    areas: [
      {
        label: "Health",
        value: "Health",
      },
    ],
  },
  {
    _id: "333a3fdc-2288-418b-911f-d0ab3aadc072",
    name: "Stay Fit with Exercises",
    icon: {
      prefix: "fas",
      iconName: "layer-group",
    },
    isNotificationOn: false,
    completedDays: [
      {
        _id: "1",
        date: "03/02/2025",
      },
      {
        _id: "88a78e84-cba7-44f6-b2de-ff8bbadc019d",
        date: "2025-02-12",
      },
      {
        _id: "15acc1a3-1741-4d7f-8e81-deeaa976b1df",
        date: "2025-02-11",
      },
      {
        _id: "208f0f0c-d935-4d77-8b65-165d216751d8",
        date: "2025-02-10",
      },
      {
        _id: "208f0f0c-d935-4d77-8b65-165d21675777",
        date: "2025-02-17",
      },
    ],
    frequency: {
      type: "Daily",
      days: ["Mo", "Tu", "We"],
      timesPerWeek: 1,
      timesPerDay: 1,
    },
    notificationTime: "",
    areas: [
      {
        label: "Spiritual",
        value: "Spiritual",
      },
    ],
  },
];

// [
//   {
//     _id: uuidv4(),
//     name: "Drink 3 Litres of water Daily",
//     icon: { prefix: "fas", iconName: "coffee" },
//     isNotificationOn: false,
//     completedDays: [{ _id: uuidv4(), date: "2025-02-03" }],
//     frequency: {
//       type: "Daily",
//       days: ["Mo", "Th"],
//       timesPerWeek: 1,
//       timesPerDay: 1,
//     },

//     notificationTime: "08:00 AM",
//     areas: [
//       { value: "Study", label: "Study" },
//       { value: "Health", label: "Health" },
//     ],
//   },
//   {
//     _id: uuidv4(),
//     name: "Do homework ",
//     icon: { prefix: "fas", iconName: "book" },
//     isNotificationOn: false,
//     completedDays: [{ _id: uuidv4(), date: "2025-02-04" }],
//     frequency: {
//       type: "Daily",
//       days: ["Mo", "Tu", "Fr"],
//       timesPerWeek: 1,
//       timesPerDay: 1,
//     },

//     notificationTime: "08:00 AM",
//     areas: [{ value: "Study", label: "Study" }],
//   },
// ];
