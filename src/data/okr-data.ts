import { ObjectiveType } from "../types/okr-types";

let dbIndex = 1;
let db = new Map<number, ObjectiveType>();

type OKRObjectives = ObjectiveType & {
  id: number;
};

let OKRObjectives: OKRObjectives[] = [
  {
    id: dbIndex++,
    title: "Hire Devs",
    keyresults: [
      {
        title: "Hire 5 Backend Devs",
        initialValue: 0,
        currentValue: 2,
        targetValue: 5,
        metrics: "Devs",
      },
    ],
  },
];

OKRObjectives.forEach((objective) => {
  db.set(objective.id, objective);
});

export const insertOKRObjectives = (newOKR: ObjectiveType): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      db.set(dbIndex++, newOKR);
      resolve();
    }, 3000);
  });
};

export const getOKRObjectives = (): Promise<ObjectiveType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Array.from(db.values()));
    }, 3000);
  });
};
