
type ObjectiveFormProps = {
  newObjective: string;
  setNewObjective: React.Dispatch<React.SetStateAction<string>>;
};
const ObjectiveForm = ({
  newObjective,
  setNewObjective,
}: ObjectiveFormProps) => {
  return (
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
  );
};

export default ObjectiveForm;
