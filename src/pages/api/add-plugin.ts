import type { NextApiRequest, NextApiResponse } from "next";
const { exec } = require('promisify-child-process')

type AddPluginRequestBody = {
    gdcUsername: string;
    gdcPassword: string;
    pluginUrl: string;
    hostname: string;
    workspaceId: string;
    backendType?: "bear" | "tiger";
};

interface AddPluginRequest extends NextApiRequest {
    body: AddPluginRequestBody;
}

export default async function addPlugin(req: AddPluginRequest, res: NextApiResponse) {
    const {
        gdcUsername,
        gdcPassword,
        pluginUrl,
        hostname,
        workspaceId,
        backendType = "bear",
        // @ts-ignore
    } = JSON.parse(req.body);

    // const { promisify } = require("util");
    // const exec = promisify(require("child_process").exec);

    const {stdout} = await exec(
        `cross-env GDC_USERNAME=${gdcUsername} GDC_PASSWORD=${gdcPassword}  npx @gooddata/plugin-toolkit dashboard-plugin add "${pluginUrl}" --backend ${backendType} --hostname "${hostname}" --workspace-id "${workspaceId}"`,
        {encoding: 'utf8'}
        );
        const data = stdout.split(" ").at(-1).replace('\n', "");
        const out = JSON.stringify({ objectId: String(data) });
    res.status(200).json(out);
}
