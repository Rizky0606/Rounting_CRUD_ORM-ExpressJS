import { Request, Response } from "express";
import Regencies from "../database/models/regencies";

export default new (class RegencyServices {
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const regency = await Regencies.findAll();
      return res.status(200).json(regency);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Internal Server Error " + error });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0)
        return res.status(400).json({ message: "Invalid ID" });

      const regency = await Regencies.findByPk(id);

      if (!regency) return res.status(400).json({ message: "ID Not Found" });

      return res.status(200).json(regency);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Internal Server Error " + error });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, province_id } = req.body;
      const regency = await Regencies.create({ name, province_id });

      return res
        .status(200)
        .json({ regency, message: "Succesfully Create Regency" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Internal Server Error " + error });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const regencyUpdate = await Regencies.findByPk(id);

      if (!regencyUpdate)
        return res.status(404).json({ message: "Regency Not Found" });

      const update = req.body;
      const regency = await regencyUpdate.update(update);

      return res
        .status(200)
        .json({ regency, message: "Succesfully Update Regency" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Internal Server Error " + error });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const deleteRegency = await Regencies.findByPk(id);

      if (!deleteRegency)
        return res.status(404).json({ message: "Regency Not Found" });

      const regency = await deleteRegency.destroy();
      return res
        .status(200)
        .json({ regency, message: "Succesfully Delete Regency" });
    } catch (error) {
      return res.status(500).json({ message: "Succesfully Delete Regency" });
    }
  }
})();
