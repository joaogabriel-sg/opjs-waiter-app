import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { name, icon } = req.body;

    const category = await Category.create({ name, icon });

    res.status(201).json(category);
  } catch {
    res.sendStatus(500);
  }
}
