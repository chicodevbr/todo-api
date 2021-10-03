const Todo = require('../models/Todo');

module.exports = class TodoService {
  static async getAllTodos() {
    try {
      const allTodos = await Todo.find();
      return allTodos;
    } catch (error) {
      console.log(`Could not fetch todos ${error}`);
    }
  }

  static async addTodos(data) {
    try {
      const newTodo = {
        title: data.title,
        description: data.description,
        date: data.date,
        finished: data.finished,
      };
      const response = await new Todo(newTodo).save();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async getTodoById(todoId) {
    try {
      const todo = await Todo.findById({ _id: todoId });
      return todo;
    } catch (error) {
      console.log(`Todo not found. ${error}`);
    }
  }

  static async updateTodo(id, todo) {
    try {
      const updateResponse = await Todo.updateOne(
        { _id: id },
        { ...todo, date: new Date() }
      );
      return updateResponse;
    } catch (error) {
      console.log(`Could not update Todo ${error}`);
    }
  }

  static async deleteTodo(todoId) {
    try {
      const deleteResponse = await Todo.findByIdAndDelete({ _id: todoId });
      return deleteResponse;
    } catch (error) {
      console.log(`Could not delete todo ${error}`);
    }
  }
};
