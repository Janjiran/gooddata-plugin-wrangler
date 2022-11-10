import { execSync } from "child_process";

import type { NextApiRequest, NextApiResponse } from "next";

type AddPluginRequestBody = {
    gdcUsername: string;
    gdcPassword: string;
    pluginUrl: string;
    backendUrl: string;
    workspaceId: string;
    backendType?: "bear" | "tiger";
};

interface AddPluginRequest extends NextApiRequest {
    body: AddPluginRequestBody;
}

export default function addPlugin(req: AddPluginRequest, res: NextApiResponse) {
    const { gdcUsername, gdcPassword, pluginUrl, backendUrl, workspaceId, backendType = "bear" } = req.body;

    const output = execSync(
        `cross-env GDC_USERNAME=${gdcUsername} GDC_PASSWORD=${gdcPassword}  npx @gooddata/plugin-toolkit dashboard-plugin add "${pluginUrl}" --backend ${backendType} --hostname "${backendUrl}" --workspace-id "${workspaceId}"`,
        { encoding: "utf-8" },
    );

    res.status(200).json(JSON.stringify(output));
}
