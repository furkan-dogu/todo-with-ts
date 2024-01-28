interface ITodoType {
  id: string | number;
  isDone: boolean;
  task: string;
  todo?: string;
}

type AddFunc = (text: string) => Promise<void>;
type ToggleFunc = (item: ITodoType) => Promise<void>;
type DeleteFunc = (id: string | number) => Promise<void>;
