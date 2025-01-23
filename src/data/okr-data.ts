import { InsertOKRObjectiveType, ObjectiveType } from "../types/okr-types";
import { v4 as uuidv4 } from "uuid";

let db = new Map<string, ObjectiveType>();

let OKRObjectives: ObjectiveType[] = [
  {
    id: uuidv4(),
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

export const insertOKRObjectives = (newOKR: InsertOKRObjectiveType): Promise<ObjectiveType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newObjectiveID = uuidv4();
      const newOKRToBeAddedInDB = { id: newObjectiveID, ...newOKR };
      console.log(newOKRToBeAddedInDB);
      db.set(uuidv4(), newOKRToBeAddedInDB);
      resolve(newOKRToBeAddedInDB);
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
