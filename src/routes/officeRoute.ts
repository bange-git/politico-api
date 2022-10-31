import { Router, Response, Request } from 'express';

const OfficeRouter = Router();

interface Office {
  id: number;
  type: string;
  name: string;
}

const offices: Office[] = [
  {
    id: 1,
    type: 'Federal',
    name: 'President',
  },
  {
    id: 2,
    type: 'Federal',
    name: 'Vice President',
  },
  {
    id: 3,
    type: 'Legislative',
    name: 'President',
  },
  {
    id: 4,
    type: 'legislative',
    name: 'Vice President',
  },
  {
    id: 5,
    type: 'Federal',
    name: 'Secretary',
  },
];

OfficeRouter.get('/', (req: Request, res: Response) => {
  try {
    res.status(200).json({ status: res.statusCode, data: offices });
  } catch (error) {
    res.status(400).json({ status: res.statusCode, error: error });
  }
});

OfficeRouter.get('/:office_id', (req: Request, res: Response) => {
  const id = req.params.office_id;

  try {
    if (offices[Number(id)]) {
      const office = offices[Number(id)];
      res.status(200).json({ status: res.statusCode, data: office });
    } else {
      res
        .status(404)
        .json({ status: res.statusCode, error: ' page not found' });
    }
  } catch (error) {
    res.status(400).json({ status: res.statusCode, error: error });
  }
});

OfficeRouter.post('/create', (req: Request, res: Response) => {
  const newOffice = req.body;
  offices.push(newOffice);
  try {
    res.status(201).json({ status: res.statusCode, data: offices });
  } catch (error) {
    res.status(400).json({ status: res.statusCode, error: error });
  }
});

OfficeRouter.delete('/:office_id', (req: Request, res: Response) => {
  const id: string = req.params.office_id;
  if (offices[Number(id)]) {
    const updatedParty = offices.filter((item) => item.id !== Number(id));
    res.status(200).json({ status: res.statusCode, data: updatedParty });
  } else {
    res
      .status(404)
      .json({ status: res.statusCode, message: 'Office not found' });
  }
});

OfficeRouter.put('/:office_id', (req: Request, res: Response) => {
  const id: string = req.params.office_id;
  const { name, type } = req.body;
  if (offices[Number(id)]) {
    offices.map((item) => {
      if (item.id == Number(id)) {
        item.id = Number(id);
        item.type = type;
        item.name = name;
      }
    });
    res.status(201).json({ status: res.statusCode, data: offices });
  } else {
    res.status(404).json({ status: res.statusCode, error: 'Office not found' });
  }
});

export { OfficeRouter };
