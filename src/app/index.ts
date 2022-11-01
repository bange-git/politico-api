import express, { Application, Request, Response } from 'express';
import { router as UserRouter } from '../routes/userRoute';
import { PartyRouter } from '../routes/partyRoute';
import { OfficeRouter } from '../routes/officeRoute';
import { CandidateRouter } from '../routes/candidateRoute';
import { VoteRouter } from '../routes/voteRoute';
import { PetitionRouter } from '../routes/petitionRoute';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', UserRouter);
app.use('/api/parties', PartyRouter);
app.use('/api/offices', OfficeRouter);
app.use('/api/candidates', CandidateRouter);
app.use('/api/votes', VoteRouter);
app.use('/api/petitions', PetitionRouter);

app.use('/', (req: Request, res: Response): void => {
  res.json({ message: 'Allo! Catch-all route.' });
});

export default app;
