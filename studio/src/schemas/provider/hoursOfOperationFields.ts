import { defineField } from "sanity";

// Shared by the provider's overall `hoursOfOperation` and each service type's
// per-service override, so both stay in the shape the provider form produces
// (`HoursOfOperation` in packages/types) — Google Places' periods/weekdayText shape.
const hoursOfOperationFields = [
  defineField({
    name: "periods",
    title: "Periods",
    type: "array",
    of: [
      {
        type: "object",
        fields: [
          {
            name: "open",
            title: "Open",
            type: "object",
            fields: [
              { name: "day", title: "Day", type: "number", description: "0 = Sunday, 6 = Saturday" },
              { name: "time", title: "Time", type: "string", description: "Format: HH:mm (24-hour format)" },
            ],
          },
          {
            name: "close",
            title: "Close",
            type: "object",
            fields: [
              { name: "day", title: "Day", type: "number", description: "0 = Sunday, 6 = Saturday" },
              { name: "time", title: "Time", type: "string", description: "Format: HH:mm (24-hour format)" },
            ],
          },
        ],
      },
    ],
  }),
  defineField({
    name: "weekdayText",
    title: "Weekday Text",
    type: "array",
    of: [{ type: "string" }],
    description: 'Human-readable hours for each day, e.g. "Monday: 9:00 AM – 5:00 PM".',
  }),
];

export default hoursOfOperationFields;
