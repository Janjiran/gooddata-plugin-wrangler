import { execSync } from "child_process";

import type { NextApiRequest, NextApiResponse } from "next";

type UnlinkPluginRequestBody = {
    gdcUsername: string;
    gdcPassword: string;
    workspaceId: string;
    dashboardId: string;
    hostname: string;
    pluginId: string;
    backendType?: "bear" | "tiger";
};

interface AddPluginRequest extends NextApiRequest {
    body: UnlinkPluginRequestBody;
}

export default function unlinkPlugin(req: AddPluginRequest, res: NextApiResponse) {
    const {
        gdcUsername,
        gdcPassword,
        pluginId,
        hostname,
        workspaceId,
        dashboardId,
        backendType = "bear",
    } = req.body;

    const output = execSync(
        `cross-env GDC_USERNAME=${gdcUsername} GDC_PASSWORD=${gdcPassword}  npx @gooddata/plugin-toolkit dashboard-plugin unlink "${pluginId}" --backend ${backendType} --hostname "${hostname}" --workspace-id "${workspaceId}" --dashboard-id "${dashboardId}"`,
        { encoding: "utf-8" },
    );

    res.status(200).json(JSON.stringify(output));
}
