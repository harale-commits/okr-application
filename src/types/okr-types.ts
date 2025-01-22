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

export type { KeyResultType, ObjectiveType };
