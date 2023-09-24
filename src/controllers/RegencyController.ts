import { Request, Response } from "express";
import RegencyServices from "../services/RegencyServices";

export default new (class RegencyController {
  find(req: Request, res: Response) {
    RegencyServices.find(req, res);
  }

  findOne(req: Request, res: Response) {
    RegencyServices.findOne(req, res);
  }

  create(req: Request, res: Response) {
    RegencyServices.create(req, res);
  }

  update(req: Request, res: Response) {
    RegencyServices.update(req, res);
  }

  delete(req: Request, res: Response) {
    RegencyServices.delete(req, res);
  }
})();
