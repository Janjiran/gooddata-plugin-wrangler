import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const execSync = require('child_process').execSync;

  const output = execSync('npx @gooddata/plugin-toolkit dashboard-plugin add', { encoding: 'utf-8' });

  res.status(200).json(JSON.stringify(output))
}
