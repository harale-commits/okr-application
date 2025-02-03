import {useContext, useEffect, useState} from "react";
import {ObjectiveType} from "./types/okr-types";
import CreateOKRForm from "./components/CreateOKRForm";
import ShowOKRForm from "./components/ShowOKRForm";
import {getOKRObjectives} from "./data/okr-data";
import {okrProviderContext} from "./providers/OkrProvider";
import {Route, Routes} from "react-router-dom";
import {NavBar} from "./components/NavBar.tsx";

function App() {
  const {objectives, setObjectives} = useContext(okrProviderContext);
  const [isUpdateObjectiveFormOpen, setIsUpdateObjectiveFormOpen] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(objectives === null)


  useEffect(() => {
    (async () => {
      const resolvedPromiseData: ObjectiveType[] = await getOKRObjectives();
      setObjectives(resolvedPromiseData);
      setIsLoading(false);
    })();
  }, [setObjectives]);

  return (
    <div className="flex mt-8">

      <NavBar/>

      <Routes>

        <Route path="/okrForm" element={<CreateOKRForm
          isUpdateObjectiveFormOpen={isUpdateObjectiveFormOpen}
          setIsUpdateObjectiveFormOpen={setIsUpdateObjectiveFormOpen}
        />}/>


        <Route path="/displayOkrForm" element={<ShowOKRForm
          isUpdateObjectiveFormOpen={isUpdateObjectiveFormOpen}
          setIsUpdateObjectiveFormOpen={setIsUpdateObjectiveFormOpen}
        />}/>

      </Routes>

    </div>
  );
}

export default App;
