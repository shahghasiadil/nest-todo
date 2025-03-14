import { Todo } from '../schemas/todo.schema';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';

export interface ITodoRepository {
  create(createTodoDto: CreateTodoDto): Promise<Todo>;
  findAll(): Promise<Todo[]>;
  findOne(id: string): Promise<Todo>;
  update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo>;
  remove(id: string): Promise<void>;
}
