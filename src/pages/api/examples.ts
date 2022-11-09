import { type NextApiRequest, type NextApiResponse } from 'next';

import { prisma } from '../../server/db/client';

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await prisma.example.findMany();
  res.status(200).json(response);
};

export default examples;
