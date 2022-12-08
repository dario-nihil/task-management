import { TaskStatus } from '../task.model';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { isString } from 'util';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
