import { Request, Response } from "express";
import Province from "../database/models/provinces";
import ITodos from "../inteface/Todos";
import Todos from "../mocks/Todos";

export default new (class ProvinceService {
  private todos: ITodos[];

  constructor() {
    this.todos = { ...Todos };
  }

  async find(req: Request, res: Response): Promise<Response> {
    try {
      // return res.status(200).json(Todos);

      const province = await Province.findAll();
      return res.status(200).json(province);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Internal Server Error " + error });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      // const { id } = req.params;
      // const data = Todos.find((data) => data.id === parseInt(id));

      // return res.status(200).json(data);

      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0)
        return res.status(400).json({ message: "Invalid ID" });

      const province = await Province.findByPk(id);

      if (!province) return res.status(404).json({ message: "ID Not Found" });

      return res.status(200).json(province);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Internal Server Error " + error });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      // const data: ITodos = req.body;
      // Todos.push(data);

      // return res.status(200).json({ data, message: "Create Todo Succesfully" });

      const { name } = req.body;
      const province = await Province.create({ name });

      return res
        .status(200)
        .json({ province, message: "Succesfully Create Province " });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Internal Server Error " + error });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      // const { id } = req.params;
      // const updateTodo: ITodos = req.body;

      // const index: number = this.todos.findIndex(
      //   (todo) => todo.id === parseInt(id)
      // );

      // if (index !== -1) {
      //   this.todos[index] = { ...this.todos[index], ...updateTodo };
      //   const data = this.todos[index];
      //   return res
      //     .status(200)
      //     .json({ data, message: "Updated Todo SuccesFully" });
      // }

      // return res.status(400).json({ message: "ID Todo Not Found" });

      const { id } = req.params;
      const provinceUpdate = await Province.findByPk(id);
      if (!provinceUpdate)
        return res.status(404).json({ message: "Province Not Found" });

      const update = req.body;
      const province = await provinceUpdate.update(update);

      return res
        .status(200)
        .json({ province, message: "Succesfully Update Province" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Internal Server Error " + error });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      // const { id } = req.params;
      // const data: ITodos[] = Todos.filter((todo) => todo.id === parseInt(id));

      // return res.status(200).json({ data, message: "Delete Todo Succesfully" });

      const { id } = req.params;
      const deleteProvince = await Province.findByPk(id);

      if (!deleteProvince)
        return res.status(404).json({ message: "Province Not Found" });

      const province = await deleteProvince.destroy();
      return res
        .status(200)
        .json({ province, message: "Succesfully Delete Province" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Internal Server Error " + error });
    }
  }
})();
