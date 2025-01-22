import { useState } from "react";
import { ObjectiveType } from "./types/okr-types";
import CreateOKRForm from "./components/createOKRForm";
import ShowOKRForm from "./components/showOKRForm";


function App() {
  const [objectives, setObjectives] = useState<ObjectiveType[]>([]);

  return (
    <>
      <div className="flex mt-8">
        <CreateOKRForm objectives={objectives} setObjectives={setObjectives} />
        <ShowOKRForm objectives={objectives} setObjectives={setObjectives} />
      </div>
    </>
  );
}

export default App;