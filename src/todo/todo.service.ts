import { Injectable } from '@nestjs/common';
import { Todo } from './schemas/todo.schema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoRepository } from './repositories/todo.repository';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoRepository.create(createTodoDto);
  }

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.findAll();
  }

  async findOne(id: string): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoRepository.update(id, updateTodoDto);
  }

  async remove(id: string): Promise<void> {
    return this.todoRepository.remove(id);
  }
}
