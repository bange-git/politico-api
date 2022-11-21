import { Router, Response, Request } from 'express';
import { newPetition } from '../controllers/petition.controller';
import auth from '../middlewares/auth';

const PetitionRouter = Router();

interface Petition {
  id: number;
  createdOn: Date;
  createdBy: number;
  office: number;
  body: string;
}

const petitions: Petition[] = [
  {
    id: 1,
    createdOn: new Date(22 - 8 - 2022),
    createdBy: 1,
    office: 1,
    body: 'I hated the style of the last election. we have to redo it',
  },
  {
    id: 2,
    createdOn: new Date(22 - 8 - 2022),
    createdBy: 144,
    office: 25,
    body: 'It was a total disaster. I hated the style of the last election. we have to redo it',
  },
  {
    id: 3,
    createdOn: new Date(22 - 8 - 2022),
    createdBy: 23,
    office: 1,
    body: 'Big mistakes were made in the cordination. i will love that it should be redone.',
  },
];

PetitionRouter.get('/', (req: Request, res: Response) => {
  res.send(petitions);
});

PetitionRouter.get('/:petition_id', (req: Request, res: Response) => {
  const id: string = req.params.petition_id;
  const petition = petitions[Number(id)];
  if (petition) {
    res.status(200).json({ status: res.statusCode, data: [petition] });
  } else {
    res.status(404).json({ message: 'Petition not found' });
  }
});

PetitionRouter.post('/create', auth, newPetition);

PetitionRouter.delete('/:petition_id', (req: Request, res: Response) => {
  const id: string = req.params.petition_id;
  if (petitions[Number(id)]) {
    const updatedPetitions = petitions.filter((item) => item.id !== Number(id));
    res.status(200).json({ status: res.statusCode, data: updatedPetitions });
  } else {
    res.status(404).json({ message: 'Petition not found' });
  }
});

PetitionRouter.put('/:vote_id', (req: Request, res: Response) => {
  const id: string = req.params.vote_id;
  const { createdOn, createdBy, office, body } = req.body;
  if (id) {
    petitions.map((item) => {
      if (item.id == Number(id)) {
        item.id = Number(id);
        item.createdOn = createdOn;
        item.createdBy = createdBy;
        item.office = office;
        item.body = body;
      }
    });
    res.status(201).json({ status: res.statusCode, data: petitions });
  } else {
    res.status(404).json({ message: 'Petition not found' });
  }
});

export { PetitionRouter };
