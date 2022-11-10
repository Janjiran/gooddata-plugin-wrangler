import { createContext, ReactNode, useState, FC, Dispatch, SetStateAction } from "react";
import { IAnalyticalBackend } from "@gooddata/sdk-backend-spi";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import { getBackend } from "../services";

interface IAuthContextProvider {
    children: ReactNode;
}

type AuthDefaultProps = {
    backend: IAnalyticalBackend | null;
    workspace: string | null;
    setAuthState: Dispatch<SetStateAction<AuthDefaultProps>>;
    signIn: (email: string, password: string, domain: string) => void;
};

const authDefault: AuthDefaultProps = {
    backend: null,
    workspace: null,
    setAuthState: () => {},
    signIn: () => {},
};

export const AuthContext = createContext<AuthDefaultProps>(authDefault);

const AuthContextProvider: FC<IAuthContextProvider> = ({ children }) => {
    const [authState, setAuthState] = useState(authDefault);

    const signIn = async (email: string, password: string, domain: string) => {
        const backend = await getBackend(email, password, domain);

        setAuthState((prev) => ({
            ...prev,
            backend,
        }));
    };

    const value = {
        ...authState,
        setAuthState,
        signIn,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
