import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const execSync = require('child_process').execSync;

  const output = execSync('ls', { encoding: 'utf-8' });

  res.status(200).json(JSON.stringify(output))
}
