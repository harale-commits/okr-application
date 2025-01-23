import { useState } from "react";
import { ObjectiveType } from "../types/okr-types";
import AddKeyResultModal from "./AddKeyResultModal";

type ShowOKRFormPropType = {
  objectives: ObjectiveType[];
  setObjectives: React.Dispatch<React.SetStateAction<ObjectiveType[] | null>>;
};
export default function ShowOKRForm({
  objectives: objectives,
  setObjectives: setObjectives,
}: ShowOKRFormPropType) {
  const [objectIndex, setObjectIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="mx-auto max-w-3xl border px-4 py-2 flex-grow space-y-8">
      {objectives.length > 0 ? (
        <h1 className="uppercase text-3xl font-bold font-mono py-8 text-center">
          Your Objectives 😃
        </h1>
      ) : (
        ""
      )}

      {objectives.length > 0 ? (
        objectives.map((objective, index) => (
          <div key={index} className="border p-4 rounded-md">
            <ul className="list-disc pl-4">
              <li className="flex">
                {" "}
                <span className="uppercase font-bold text-2xl w-1/2 ">
                  {objective.title}
                </span>
                <div className="w-1/2 flex justify-evenly">
                  <button
                    className={
                      "border-1 bg-gray-400 p-2 text-sm text-white rounded-md uppercase font-semibold  hover:bg-gray-600  "
                    }
                    onClick={() => {
                      setObjectIndex(index);
                      setIsModalOpen(true);
                    }}
                  >
                    Add key result
                  </button>

                  <button
                    className={
                      "border-1 bg-red-400 p-2 text-sm text-white rounded-md uppercase font-semibold  hover:bg-red-600  "
                    }
                    onClick={() => {
                      objectives.splice(index, 1);

                      setObjectives([...objectives]);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
              <ul className="list-disc pl-8 space-y-3">
                {objective.keyresults.map((keyResult, keyResultIndex) => (
                  <li key={keyResultIndex} className="p-2">
                    <h1 className="uppercase text-xl font-bold font-mono">
                      {keyResult.title}
                    </h1>
                    <div className="flex justify-between">
                      <span className="pl-4 space-x-2 text-xl">
                        Initial:{keyResult.initialValue},
                      </span>
                      <span className="pl-4 space-x-2 text-xl">
                        Current:
                        {keyResult.currentValue},
                      </span>
                      <span className="pl-4 space-x-2 text-xl">
                        Target:
                        {keyResult.targetValue}
                      </span>
                      <button
                        className={
                          "border-1 bg-red-400 p-2 text-sm text-white rounded-md uppercase font-semibold  hover:bg-red-600  "
                        }
                        onClick={() => {
                          objective.keyresults.splice(keyResultIndex, 1);
                          setObjectives([...objectives]);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        ))
      ) : (
        <h1 className="uppercase text-3xl font-bold font-mono py-8 text-center">
          No objectives to display ☹️
        </h1>
      )}

      {isModalOpen && (
        <AddKeyResultModal
          objectIndex={objectIndex}
          objectives={objectives}
          setObjectives={setObjectives}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
}
