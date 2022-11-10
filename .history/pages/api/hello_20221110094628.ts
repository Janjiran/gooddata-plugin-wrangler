// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const execSync = require('child_process').execSync;

  const output = execSync('ls', { encoding: 'utf-8' });  // the default is 'buffer'

  res.status(200).json(JSON.stringify(output))
}
