import { execSync } from "child_process";

import type { NextApiRequest, NextApiResponse } from "next";

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

    const { promisify } = require("util");
    const exec = promisify(require("child_process").exec);

    const stdout = await exec(
        `cross-env GDC_USERNAME=${gdcUsername} GDC_PASSWORD=${gdcPassword}  npx @gooddata/plugin-toolkit dashboard-plugin add "${pluginUrl}" --backend ${backendType} --hostname "${hostname}" --workspace-id "${workspaceId}"`,
    );
    console.log("🚀 ~ file: add-plugin.ts ~ line 26 ~ addPlugin ~ nameOutput", typeof stdout, stdout?.stdout);

    const data = stdout?.stdout.split(" ").at(-1).replace('\\n"', "");
    console.log("🚀 ~ file: add-plugin.ts ~ line 38 ~ addPlugin ~ data", data)
    res.status(200).send(data);

    // const output = execSync(
    //     `cross-env GDC_USERNAME=${gdcUsername} GDC_PASSWORD=${gdcPassword}  npx @gooddata/plugin-toolkit dashboard-plugin add "${pluginUrl}" --backend ${backendType} --hostname "${hostname}" --workspace-id "${workspaceId}"`,
    //      { encoding: "utf-8", stdio: 'inherit' },
    // );

    // res.status(200).json(JSON.stringify(output));
}
