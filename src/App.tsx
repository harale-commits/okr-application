import { useEffect, useState } from "react";
import { ObjectiveType } from "./types/okr-types";
import CreateOKRForm from "./components/CreateOKRForm";
import ShowOKRForm from "./components/ShowOKRForm";
import { getOKRObjectives } from "./data/okr-data";
import { DotLoader } from "react-spinners";

function App() {
  const [objectives, setObjectives] = useState<ObjectiveType[] | null>(null);
  const isLoading = objectives === null;

  useEffect(() => {
    (async () => {
      const resolvedPromiseData: ObjectiveType[] = await getOKRObjectives();
      console.log("frontend object", resolvedPromiseData);
      setObjectives(resolvedPromiseData);
    })();
  }, []);

  return (
    <div className="flex mt-8">
      <CreateOKRForm
        objectives={objectives ?? []}
        setObjectives={setObjectives}
      />
      {isLoading ? (
        <div className="mx-auto max-w-3xl border px-4 py-2 flex-grow space-y-8 flex items-center justify-center">
          <div className="space-y-4">
            <DotLoader />
            <p>Loading ...</p>
          </div>
        </div>
      ) : (
        <ShowOKRForm objectives={objectives} setObjectives={setObjectives} />
      )}
    </div>
  );
}

export default App;
