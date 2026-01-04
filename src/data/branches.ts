export type Branch = {
  id: string;
  name: string;
  phone: string; // international or local format
  addressLine: string;
  city: string;
  mapsUrl?: string;
  hours: {
    label: string;
    days: string;
    open: string;
    close: string;
  }[];
};

export const BRANCHES: Branch[] = [
  {
    id: "dha",
    name: "Sesame — DHA",
    phone: "+92 300 0000000",
    addressLine: "Add address here (DHA, Lahore).",
    city: "Lahore",
    mapsUrl: "https://maps.google.com",
    hours: [
      { label: "Mon–Thu", days: "Mon–Thu", open: "08:00", close: "23:00" },
      { label: "Fri–Sun", days: "Fri–Sun", open: "08:00", close: "00:00" },
    ],
  },
  {
    id: "gulberg",
    name: "Sesame — Gulberg",
    phone: "+92 300 0000000",
    addressLine: "Add address here (Gulberg, Lahore).",
    city: "Lahore",
    mapsUrl: "https://maps.google.com",
    hours: [
      { label: "Daily", days: "Daily", open: "08:00", close: "23:00" },
    ],
  },
];
