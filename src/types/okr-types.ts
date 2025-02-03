type KeyResultType = {
  title: string;
  initialValue: number;
  currentValue: number;
  targetValue: number;
  metrics: string;
  objectiveID ?: number
};

type ObjectiveType = {
  id: string;
  title: string;
  keyResults: KeyResultType[];
};

type InsertOKRObjectiveType = Omit<ObjectiveType, "id">;

export type { KeyResultType, ObjectiveType, InsertOKRObjectiveType };
