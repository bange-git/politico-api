import { Router, Response, Request } from 'express';

const CandidateRouter = Router();

interface Candidate {
  id: number;
  office: number;
  party: number;
  candidate: number;
}

const candidates: Candidate[] = [
  {
    id: 1,
    office: 22,
    party: 1,
    candidate: 1001,
  },
  {
    id: 2,
    office: 22,
    party: 1,
    candidate: 1006,
  },

  {
    id: 3,
    office: 35,
    party: 2,
    candidate: 200,
  },
  {
    id: 4,
    office: 17,
    party: 2,
    candidate: 1144,
  },
];

CandidateRouter.get('/', (req: Request, res: Response) => {
  res.send(candidates);
});

CandidateRouter.get('/:candidate_id', (req: Request, res: Response) => {
  const id: string = req.params.candidate_id;
  if (candidates[Number(id)]) {
    res.send(candidates[Number(id)]);
  } else {
    res.status(404).json({ status: res.statusCode, data: candidates });
  }
});

CandidateRouter.post('/create', (req: Request, res: Response) => {
  const newCandidate = req.body;
  candidates.push(newCandidate);
  try {
    res.status(201).json({ status: res.statusCode, data: candidates });
  } catch (error) {
    res.status(400).json({ status: res.statusCode, error: error });
  }
});

CandidateRouter.delete('/:candidate_id', (req: Request, res: Response) => {
  const id: string = req.params.candidate_id;
  if (candidates[Number(id)]) {
    const updatedCandidates = candidates.filter(
      (item) => item.id !== Number(id),
    );
    res.status(200).json({ status: res.statusCode, data: updatedCandidates });
  } else {
    res.status(404).json({ status: res.statusCode, error: 'bad request' });
  }
});

CandidateRouter.put('/:candidate_id', (req: Request, res: Response) => {
  const id: string = req.params.candidate_id;
  const { office, party, candidate } = req.body;
  if (id) {
    candidates.map((item) => {
      if (item.id == Number(id)) {
        item.id = Number(id);
        item.office = office;
        item.party = party;
        item.candidate = candidate;
      }
    });
    res.status(201).json({ status: res.statusCode, data: candidates });
  } else {
    res.status(404).json({ message: 'Party not found' });
  }
});

export { CandidateRouter };
