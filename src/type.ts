export default interface Todo {
  id: number;
  inUpdating: boolean;
  title: string;
  completed: boolean;
  endDate: Date;
}
