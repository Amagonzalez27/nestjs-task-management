import { TaskStatus } from '../tasks.model';
export class GetTassFilterDto {
  status: TaskStatus;
  search: string;
}
