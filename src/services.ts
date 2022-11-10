import bearFactory, { FixedLoginAndPasswordAuthProvider } from "@gooddata/sdk-backend-bear";
import { IAnalyticalBackend } from "@gooddata/sdk-backend-spi";

// const bearClient = factory();
// or if your application will be hosted on a different host than the GoodData platform backend

// or if your application will be hosted on a different host than the GoodData platform
export const getBackend = async (
    username: string,
    password: string,
    domain: string,
): Promise<IAnalyticalBackend> => {
    return bearFactory()
        .onHostname(domain)
        .withAuthentication(new FixedLoginAndPasswordAuthProvider(username, password));
};
