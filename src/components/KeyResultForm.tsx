import React from "react";
import { KeyResultType } from "../types/okr-types";
type KeyResultFormProps = {
  index: number;
  keyResult: KeyResultType;
  setKeyResults: React.Dispatch<React.SetStateAction<KeyResultType[]>>;
  keyResults: KeyResultType[];
};
const KeyResultForm = ({
  index,
  keyResult,
  setKeyResults,
  keyResults,
}: KeyResultFormProps) => {
  return (
    <div key={index} className="key-result-input-area space-y-4">
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
  );
};

export default KeyResultForm;
