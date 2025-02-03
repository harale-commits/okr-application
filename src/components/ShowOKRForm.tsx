import {useContext, useState} from "react";
import AddKeyResultModal from "./AddKeyResultModal";
import UpdateOKRForm from "./UpdateOKRForm";
import {okrProviderContext} from "../providers/OkrProvider";
import {deleteOkrfromdb, getOKRObjectives} from "../data/okr-data.ts";

type ShowOKRFormPropType = {
  isUpdateObjectiveFormOpen: boolean;
  setIsUpdateObjectiveFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


export default function ShowOKRForm({
                                      isUpdateObjectiveFormOpen,
                                      setIsUpdateObjectiveFormOpen,
                                    }: ShowOKRFormPropType) {

  const {objectives, setObjectives} = useContext(okrProviderContext);


  const [objectIndex, setObjectIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


  return (
    <div className="mx-auto max-w-3xl border px-4 py-2 flex-grow space-y-8 mt-24">
      {objectives!.length > 0 ? (
        <h1 className="uppercase text-3xl font-bold font-mono py-8 text-center">
          Your Objectives 😃
        </h1>
      ) : (
        ""
      )}

      {objectives!.length > 0 ? (
        objectives!.map((objective, index) => (
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
                      //   setIsUpdateObjectiveFormOpen(true);
                    }}
                  >
                    Update
                  </button>

                  <button
                    className={
                      "border-1 bg-red-400 p-2 text-sm text-white rounded-md uppercase font-semibold  hover:bg-red-600  "
                    }
                    onClick={async () => {
                      await deleteOkrfromdb(objective.id)
                      const updatedObjectives = await getOKRObjectives();
                      setObjectives([...updatedObjectives!]);
                    }}
                  >
                    Delete Objective
                  </button>
                </div>
              </li>
              <ul className="list-disc pl-8 space-y-3">
                {objective.keyResults.map((keyResult, keyResultIndex) => (
                  <li key={keyResultIndex} className="p-2">
                    <h1 className="uppercase text-xl font-bold font-mono">
                      {keyResult.title}
                    </h1>
                    <span className="pl-4 space-x-2 text-xl">
                      Metrics:{keyResult.metrics}
                    </span>
                    <div className="flex justify-between text-nowrap">
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
                          objective.keyResults.splice(keyResultIndex, 1);
                          setObjectives([...objectives!]);
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
          objectives={objectives!}
          setObjectives={setObjectives}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {isUpdateObjectiveFormOpen && (
        <UpdateOKRForm
          isUpdateObjectiveFormOpen={isUpdateObjectiveFormOpen}
          setIsUpdateObjectiveFormOpen={setIsUpdateObjectiveFormOpen}
          objectives={objectives ?? []}
          setObjectives={setObjectives}
        />
      )}
    </div>
  );
}
