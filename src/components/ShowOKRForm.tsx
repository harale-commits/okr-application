import { ObjectiveType } from "../types/okr-types";

type ShowOKRFormPropType = {
  objectives: ObjectiveType[];
  setObjectives: React.Dispatch<React.SetStateAction<ObjectiveType[]>>;
};
export default function ShowOKRForm({
  objectives: objectives,
  setObjectives: setObjectives,
}: ShowOKRFormPropType) {
    
  return (
    <div className="mx-auto max-w-3xl border px-4 py-2 flex-grow ">
      {objectives.length > 0 ? (
        <h1 className="uppercase text-3xl font-bold font-mono py-8 text-center">
          Your Objectives 😃
        </h1>
      ) : (
        ""
      )}

      {objectives.length > 0 ? (
        objectives.map((objective, index) => (
          <div className="">
            <ul className="list-disc pl-4">
              <li className="flex">
                {" "}
                <span className="uppercase font-bold text-2xl w-1/2 ">
                  {objective.title}
                </span>
                <div className="w-1/2 flex justify-center">
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
              <ul className="list-disc pl-8">
                {objective.keyresults.map((keyResult, index) => (
                  <li>
                    <h1 className="uppercase text-xl font-bold font-mono">
                      {keyResult.title}
                    </h1>
                    <span className="pl-4 space-x-2 text-xl">
                      init:{keyResult.initialValue}, curr:
                      {keyResult.currentValue}, target:
                      {keyResult.targetValue}
                    </span>
                    <button
                      className={
                        "border-1 bg-red-400 p-2 text-sm text-white rounded-md uppercase font-semibold  hover:bg-red-600  "
                      }
                      onClick={() => {
                        objective.keyresults.splice(index, 1);
                        setObjectives([...objectives]);
                      }}
                    >
                      Delete
                    </button>
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
    </div>
  );
}
