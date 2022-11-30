import { Router, Response, Request } from 'express';
import { createVote } from '../controllers/vote.controller';
import auth from '../middlewares/auth';

const VoteRouter = Router();

VoteRouter.post('/create', auth, createVote)

// interface Vote {
//   id: number;
//   createdOn: Date;
//   createdBy: number;
//   office: number;
// }

// const votes: Vote[] = [
//   {
//     id: 1,
//     createdOn: new Date(22 - 8 - 2022),
//     createdBy: 1,
//     office: 1,
//   },
//   {
//     id: 2,
//     createdOn: new Date(26 - 8 - 2022),
//     createdBy: 14,
//     office: 2,
//   },
//   {
//     id: 3,
//     createdOn: new Date(11 - 8 - 2022),
//     createdBy: 16,
//     office: 3,
//   },
// ];

// VoteRouter.get('/', (req: Request, res: Response) => {
//   res.send(votes);
// });

// VoteRouter.get('/:vote_id', (req: Request, res: Response) => {
//   const id: string = req.params.vote_id;
//   const vote = votes[Number(id)];
//   if (vote) {
//     res.status(200).json({ status: res.statusCode, data: [vote] });
//   } else {
//     res.status(404).json({ message: 'Voter not found' });
//   }
// });

// VoteRouter.post('/create', createVote)

// VoteRouter.delete('/:vote_id', (req: Request, res: Response) => {
//   const id: string = req.params.vote_id;
//   if (votes[Number(id)]) {
//     const updatedVoter = votes.filter((item) => item.id !== Number(id));
//     res.status(200).json({ status: res.statusCode, data: updatedVoter });
//   } else {
//     res.status(404).json({ message: 'Voter not found' });
//   }
// });

// VoteRouter.put('/:vote_id', (req: Request, res: Response) => {
//   const id: string = req.params.vote_id;
//   const { createdOn, createdBy, office } = req.body;
//   if (id) {
//     votes.map((item) => {
//       if (item.id == Number(id)) {
//         item.id = Number(id);
//         item.createdOn = createdOn;
//         item.createdBy = createdBy;
//         item.office = office;
//       }
//     });
//     res.status(201).json({ status: res.statusCode, data: votes });
//   } else {
//     res.status(404).json({ message: 'Voter not found' });
//   }
// });

export { VoteRouter };

