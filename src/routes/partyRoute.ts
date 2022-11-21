import { Router } from 'express';
import {
  deleteParty,
  getAllParties,
  getParty,
  newParty,
  updateParty,
} from '../controllers/party.controller';

const PartyRouter = Router();

PartyRouter.get('/', getAllParties);
PartyRouter.get('/:party_id', getParty);
PartyRouter.post('/create', newParty);
PartyRouter.put('/:party_id', updateParty);
PartyRouter.delete('/:party_id', deleteParty);

//getAllParties, getParty, newParty, deleteParty, updateParty

// interface Party {
//   id: number;
//   name: string;
//   hdAddress: string;
//   logoUrl: string;
//   description: string;
// }

// const parties: Party[] = [
//   {
//     id: 1,
//     name: 'CPDM',
//     hdAddress: 'Yaounde4',
//     logoUrl: 'https://unsplash.com/photos/mxIGWk111u0',
//     description: 'I love my country',
//   },
//   {
//     id: 2,
//     name: 'SDF',
//     hdAddress: 'Yaounde5',
//     logoUrl: 'https://unsplash.com/photos/mxIGWk111u0',
//     description: 'I love my country',
//   },
//   {
//     id: 3,
//     name: 'YPP',
//     hdAddress: 'Yaounde',
//     logoUrl: 'https://unsplash.com/photos/mxIGWk111u0',
//     description: 'I love my country',
//   },
// ];

// PartyRouter.get('/', (req: Request, res: Response) => {
//   res.send(parties);
// });

// PartyRouter.get('/:party_id', (req: Request, res: Response) => {
//   const id: string = req.params.party_id;
//   if (parties[Number(id)]) {
//     res.send(parties[Number(id)]);
//   } else {
//     res.status(404).json({ message: 'Page not found' });
//   }
// });

// PartyRouter.post('/create', (req: Request, res: Response) => {
//   const newParty = req.body;
//   parties.push(newParty);
//   try {
//     res.status(201).json({ status: res.statusCode, data: parties });
//   } catch (error) {
//     res.status(400).json({ status: res.statusCode, error: error });
//   }
// });

// PartyRouter.delete('/:party_id', (req: Request, res: Response) => {
//   const id: string = req.params.party_id;
//   if (parties[Number(id)]) {
//     const updatedParty = parties.filter((item) => item.id !== Number(id));
//     res
//       .status(200)
//       .json({ message: 'item succesfully deleted', data: updatedParty });
//   } else {
//     res.status(404).json({ message: 'Party not found' });
//   }
// });

// PartyRouter.put('/:party_id', (req: Request, res: Response) => {
//   const id: string = req.params.party_id;
//   const { name, hdAddress, logoUrl, description } = req.body;
//   if (id) {
//     parties.map((item) => {
//       if (item.id == Number(id)) {
//         item.id = Number(id);
//         item.name = name;
//         item.hdAddress = hdAddress;
//         item.logoUrl = logoUrl;
//         item.description = description;
//       }
//     });
//     res
//       .status(201)
//       .json({ message: 'Party updated succesfully', data: parties });
//   } else {
//     res.status(404).json({ message: 'Party not found' });
//   }
// });

export { PartyRouter };
