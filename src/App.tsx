import { useState } from "react";

type KeyResultType = {
  title: string;
  initialValue: number;
  currentValue: number;
  targetValue: number;
  metrics: string;
};

type ObjectiveType = {
  title: string;
  keyresults: KeyResultType[];
};

function App() {
  const [objectives, setObjectives] = useState<ObjectiveType[]>([]);

  const [newObjective, setNewObjective] = useState<string>("");

  const [keyResults, setKeyResults] = useState<KeyResultType[]>([
    {
      title: "",
      initialValue: 0,
      currentValue: 0,
      targetValue: 0,
      metrics: "",
    },
  ]);

  const resetKeyResults = () => {
    setKeyResults([
      {
        title: "",
        initialValue: 0,
        currentValue: 0,
        targetValue: 0,
        metrics: "",
      },
    ]);
  };
  const resetNewObjectiveValue = () => {
    setNewObjective("");
  };

  const addObjectives = () => {
    setObjectives([
      ...objectives,
      {
        title: newObjective,
        keyresults: [...keyResults],
      },
    ]);
    resetKeyResults();
    resetNewObjectiveValue();
  };

  return (
    <>
      <div className="flex mt-8">
        <div className="border px-4 py-8 max-w-3xl mx-auto space-y-10 ">
          <h1 className="uppercase text-3xl font-bold font-mono	 text-center">
            Create Objective Form
          </h1>

          <div className="space-y-3">
            <label htmlFor="objective" className="uppercase font-bold">
              Objective
            </label>

            <input
              className={
                "border px-3 py-3 block w-full rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
              }
              type="text"
              id="objective"
              placeholder={"Enter objective"}
              value={newObjective}
              required
              onChange={(e) => setNewObjective(e.target.value)}
            />
          </div>

          <div className="space-y-8">
            <label htmlFor="keyResults" className="uppercase font-bold">
              Key Results
            </label>
            {keyResults.map((keyResult, index) => (
              <div className="key-result-input-area space-y-4">
                <label htmlFor="keyResults" className="uppercase font-bold">
                  Add Key Result - {index + 1}
                </label>
                <input
                  className={
                    "border px-3 py-3 block w-full rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                  }
                  type="text"
                  id="keyResults"
                  placeholder={"Key Results"}
                  value={keyResult.title}
                  required
                  onChange={(e) => {
                    keyResult.title = e.target.value;
                    setKeyResults([...keyResults]);
                  }}
                />

                <div className="flex gap-x-4">
                  <input
                    className={
                      "border px-3 py-3  rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                    }
                    type="number"
                    id="initialValue"
                    placeholder={"Initial Value"}
                    required
                    value={keyResult.initialValue}
                    onChange={(e) => {
                      keyResult.initialValue = parseInt(e.target.value);
                      setKeyResults([...keyResults]);
                    }}
                  />
                  <input
                    className={
                      "border px-3 py-3  rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                    }
                    type="number"
                    id="currentValue"
                    placeholder={"Current Value"}
                    required
                    value={keyResult.currentValue}
                    onChange={(e) => {
                      keyResult.currentValue = parseInt(e.target.value);
                      setKeyResults([...keyResults]);
                    }}
                  />
                  <input
                    className={
                      "border px-3 py-3  rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                    }
                    type="number"
                    id="targetValue"
                    placeholder={"Target Value"}
                    required
                    value={keyResult.targetValue}
                    onChange={(e) => {
                      keyResult.targetValue = parseInt(e.target.value);
                      setKeyResults([...keyResults]);
                    }}
                  />
                </div>
                <div className="flex justify-between">
                  <input
                    className={
                      "border px-3 py-3 rounded-md  focus:outline-none focus:ring-1 focus:ring-gray-500 block"
                    }
                    type="text"
                    id="metricsValue"
                    placeholder={"Metrics"}
                    required
                    value={keyResult.metrics}
                    onChange={(e) => {
                      keyResult.metrics = e.target.value;
                      setKeyResults([...keyResults]);
                    }}
                  />
                  <button
                    className={
                      "border-1 bg-red-400 p-3 text-white rounded-lg uppercase font-semibold  hover:bg-red-600"
                    }
                    onClick={() => {
                      if (keyResults.length > 1) {
                        keyResults.splice(index, 1);
                      } else {
                        keyResult.title = "";
                        keyResult.initialValue = 0;
                        keyResult.currentValue = 0;
                        keyResult.targetValue = 0;
                        keyResult.metrics = "";
                      }
                      setKeyResults([...keyResults]);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="max-w-xl">
              <button
                className={
                  " bg-gray-400 p-3 hover:bg-gray-500 text-white rounded-lg uppercase font-semibold"
                }
                onClick={() =>
                  setKeyResults([
                    ...keyResults,
                    {
                      title: "",
                      initialValue: 0,
                      currentValue: 0,
                      targetValue: 0,
                      metrics: "",
                    },
                  ])
                }
              >
                Add Key Result
              </button>
            </div>
          </div>

          <div className="max-w-xl mx-auto pt-6">
            <button
              className={
                " bg-gray-400 p-3 hover:bg-gray-500 text-white rounded-lg w-full uppercase font-semibold"
              }
              onClick={addObjectives}
            >
              <span>Add Objective</span>
            </button>
          </div>
        </div>

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
                        onClick={()=>{
                          objective.keyresults.splice(index, 1)
                          setObjectives([...objectives])
                        }}>Delete</button>
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
      </div>
    </>
  );
}

export default App;
