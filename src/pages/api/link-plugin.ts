import { execSync } from "child_process";

import type { NextApiRequest, NextApiResponse } from "next";

type LinkPluginRequestBody = {
    gdcUsername: string;
    gdcPassword: string;
    workspaceId: string;
    dashboardId: string;
    backendUrl: string;
    pluginId: string;
    backendType?: "bear" | "tiger";
};

interface AddPluginRequest extends NextApiRequest {
    body: LinkPluginRequestBody;
}

export default function linkPlugin(req: AddPluginRequest, res: NextApiResponse) {
    const {
        gdcUsername,
        gdcPassword,
        pluginId,
        backendUrl,
        workspaceId,
        dashboardId,
        backendType = "bear",
    } = req.body;

    const output = execSync(
        `cross-env GDC_USERNAME=${gdcUsername} GDC_PASSWORD=${gdcPassword}  npx @gooddata/plugin-toolkit dashboard-plugin link "${pluginId}" --backend ${backendType} --hostname "${backendUrl}" --workspace-id "${workspaceId}" --dashboard-id "${dashboardId}"`,
        { encoding: "utf-8" },
    );

    res.status(200).json(JSON.stringify(output));
}
