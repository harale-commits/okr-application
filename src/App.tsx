import { useContext, useEffect, useState } from "react";
import { ObjectiveType } from "./types/okr-types";
import CreateOKRForm from "./components/CreateOKRForm";
import ShowOKRForm from "./components/ShowOKRForm";
import { getOKRObjectives } from "./data/okr-data";
import { DotLoader } from "react-spinners";
import {okrProviderContext} from "./providers/OkrProvider";

function App() {
  const {objectives, setObjectives} = useContext(okrProviderContext);
  const [isLoading, setIsLoading] = useState<boolean>(objectives === null)

  const [isUpdateObjectiveFormOpen, setIsUpdateObjectiveFormOpen] =
    useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const resolvedPromiseData: ObjectiveType[] = await getOKRObjectives();
      console.log("frontend object", resolvedPromiseData);
      setObjectives(resolvedPromiseData);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="flex mt-8">
      <CreateOKRForm
        isUpdateObjectiveFormOpen={isUpdateObjectiveFormOpen}
        setIsUpdateObjectiveFormOpen={setIsUpdateObjectiveFormOpen}
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
        <ShowOKRForm
          objectives={objectives??[]}
          setObjectives={setObjectives}
          isUpdateObjectiveFormOpen={isUpdateObjectiveFormOpen}
          setIsUpdateObjectiveFormOpen={setIsUpdateObjectiveFormOpen}
        />
      )}
    </div>
  );
}

export default App;
