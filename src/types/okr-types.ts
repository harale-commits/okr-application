type KeyResultType = {
  title: string;
  initialValue: number;
  currentValue: number;
  targetValue: number;
  metrics: string;
};

type ObjectiveType = {
  id: string;
  title: string;
  keyresults: KeyResultType[];
};

type InsertOKRObjectiveType = Omit<ObjectiveType, "id">;

export type { KeyResultType, ObjectiveType, InsertOKRObjectiveType };
