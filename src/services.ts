import bearFactory, { FixedLoginAndPasswordAuthProvider } from "@gooddata/sdk-backend-bear";
import { IAnalyticalBackend } from "@gooddata/sdk-backend-spi";

// const bearClient = factory();
// or if your application will be hosted on a different host than the GoodData platform backend

// or if your application will be hosted on a different host than the GoodData platform
export const getBackend = async (
    username: string,
    password: string,
): Promise<IAnalyticalBackend> => {
    return bearFactory()
        .onHostname("")
        .withAuthentication(new FixedLoginAndPasswordAuthProvider(username, password));
};

export type PluginConfig = {
    gdcUsername: string;
    gdcPassword: string;
    pluginUrl: string;
    hostname: string;
    workspaceId: string;
};

export const addPlugin = async (pluginConfig: PluginConfig) => {
    try {
        const data = await fetch('/api/add-plugin', {
            body: JSON.stringify(pluginConfig),
            method: 'POST'
        });
        const objectIdRaw = await data.json();
        const { objectId } = JSON.parse(objectIdRaw);
        return objectId.replace('\\n', '');
    } catch(err) {
        console.log(err)
    }
};

export const linkPlugin = async (pluginConfig: Omit<PluginConfig & {
    pluginId: string,
    dashboardId: string
}, 'pluginUrl'>) => {
    try {
        const data = await fetch('/api/link-plugin', {
            body: JSON.stringify(pluginConfig),
            method: 'POST'
        });
        return data;
    } catch(err) {
        console.log(err)
    }
};

export const unlinkPlugin = async (pluginConfig: PluginConfig) => {
    try {
        const data = await fetch('/api/unlink-plugin', {
            body: JSON.stringify(pluginConfig),
            method: 'POST'
        });
        return data;
    } catch(err) {
        console.log(err)
    }
};