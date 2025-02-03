import  {useContext, useState} from "react";
import { KeyResultType } from "../types/okr-types";
import { insertOKRObjectives } from "../data/okr-data";
import ObjectiveForm from "./ObjectiveForm";
import KeyResultForm from "./KeyResultForm";
import {okrProviderContext} from "../providers/OkrProvider.tsx";

const emptyKeyResult = {
  title: "",
  initialValue: 0,
  currentValue: 0,
  targetValue: 0,
  metrics: "",
};

type CreateOKRFormPropType = {
  isUpdateObjectiveFormOpen: boolean;
  setIsUpdateObjectiveFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


export default function CreateOKRForm({ isUpdateObjectiveFormOpen,
                                        setIsUpdateObjectiveFormOpen} : CreateOKRFormPropType ) {


  const {objectives, setObjectives} = useContext(okrProviderContext);

  const [newObjective, setNewObjective] = useState<string>("");

  const [keyResults, setKeyResults] = useState<KeyResultType[]>([
    emptyKeyResult,
  ]);

  const resetKeyResults = () => {
    setKeyResults([emptyKeyResult]);
  };
  const resetNewObjectiveValue = () => {
    setNewObjective("");
  };

  const addObjectives = () => {
    const newOKR = {
      title: newObjective,
      keyResults: [...keyResults],
    };
    insertOKRObjectives(newOKR).then((data) => {
      setObjectives(data);
      resetKeyResults();
      resetNewObjectiveValue();
    });
  };

  const addKeyResult = () => {
    setKeyResults([...keyResults, emptyKeyResult]);
  };

  return (
    <div
      className={`${
        isUpdateObjectiveFormOpen ? "inset-0 fixed  bg-black bg-opacity-25" : ""
      } border px-4 py-8 max-w-3xl mx-auto space-y-10 mt-24 `}
    >


      <h1 className="uppercase text-3xl font-bold font-mono	 text-center">
        Create Objective Form
      </h1>

     <ObjectiveForm newObjective={newObjective} setNewObjective={setNewObjective}></ObjectiveForm>

      <div className="space-y-8">
        <label htmlFor="keyResults" className="uppercase font-bold">
          Key Results
        </label>
        {keyResults.map((keyResult, index) => (
          <KeyResultForm index={index} keyResult={keyResult} setKeyResults={setKeyResults} keyResults={keyResults} key={index}/>
        ))}


        <div className="max-w-xl">
          <button
            className={
              " bg-gray-400 p-3 hover:bg-gray-500 text-white rounded-lg uppercase font-semibold"
            }
            onClick={addKeyResult}
          >
            Add Key Result
          </button>
        </div>


      </div>

      <div className="max-w-xl mx-auto pt-6">
        <button
          className={
            " bg-blue-400 p-3 hover:bg-blue-500 text-white rounded-lg w-full uppercase font-semibold"
          }
          onClick={addObjectives}
        >
          <span>Add Objective</span>
        </button>
      </div>


    </div>
  );
}
