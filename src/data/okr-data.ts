import {InsertOKRObjectiveType, ObjectiveType} from "../types/okr-types";

export const insertOKRObjectives = async (
  newOKR: InsertOKRObjectiveType
) => {


  const objectiveWithoutKeyResults = {title: newOKR.title};
  const keyResultsArray = newOKR.keyResults;


  const objectiveResponse = await fetch("http://localhost:3000/objectives", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objectiveWithoutKeyResults),
  });

  const data = await objectiveResponse.json();
  const responseID = data.id;

  for (let i = 0; i < keyResultsArray.length; i++) {
    keyResultsArray[i].objectiveID = responseID;
  }

  await fetch("http://localhost:3000/keyresults", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(keyResultsArray)

  })

  return getOKRObjectives();

};

export const getOKRObjectives = async (): Promise<ObjectiveType[]> => {
  const responseOKR = await fetch("http://localhost:3000/objectives/keyresults");
  return await responseOKR.json();
};

export const deleteOkrfromdb = async (id: string): Promise<ObjectiveType> => {
  const response = await fetch(`http://localhost:3000/objectives/${id}`, {
    method: "DELETE",
  });
  return await response.json()
}

