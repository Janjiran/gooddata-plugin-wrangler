const { exec } = require('promisify-child-process')

import type { NextApiRequest, NextApiResponse } from "next";

type LinkPluginRequestBody = {
    gdcUsername: string;
    gdcPassword: string;
    workspaceId: string;
    dashboardId: string;
    hostname: string;
    pluginId: string;
    backendType?: "bear" | "tiger";
};

interface AddPluginRequest extends NextApiRequest {
    body: LinkPluginRequestBody;
}

export default async function linkPlugin(req: AddPluginRequest, res: NextApiResponse) {
    const {
        gdcUsername,
        gdcPassword,
        pluginId,
        hostname,
        workspaceId,
        dashboardId,
        backendType = "bear",
        //@ts-ignore
    } = JSON.parse(req.body);

    const {stdout} = await exec(
        `cross-env GDC_USERNAME=${gdcUsername} GDC_PASSWORD=${gdcPassword} npx @gooddata/plugin-toolkit dashboard-plugin link "${pluginId}" --backend ${backendType} --hostname "${hostname}" --workspace-id "${workspaceId}" --dashboard-id "${dashboardId}"`,
    );

    res.status(200).json(JSON.stringify(stdout));
}
