import { createContext, ReactNode, useState, FC, Dispatch, SetStateAction, useContext, useEffect } from "react";
import { IAnalyticalBackend } from "@gooddata/sdk-backend-spi";
import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";
import { getBackend } from "../services";

interface IAuthContextProvider {
    children: ReactNode;
}

type AuthDefaultProps = {
    backend: IAnalyticalBackend | null;
    workspace: string | null;
    setAuthState: Dispatch<SetStateAction<AuthDefaultProps>>;
    signIn: (email: string | null, password: string | null, domain: string | null) => void;
};

const authDefault: AuthDefaultProps = {
    backend: null,
    workspace: null,
    setAuthState: () => {},
    signIn: () => {},
};

export const AuthContext = createContext<AuthDefaultProps>(authDefault);

export const useAuth = (): AuthDefaultProps => {
    const auth = useContext(AuthContext);
    return auth || authDefault;
  };

const AuthContextProvider: FC<IAuthContextProvider> = ({ children }) => {
    const [authState, setAuthState] = useState(authDefault);

    const signIn = async (email: string | null, password: string | null, domain: string | null) => {
        if (!email || !password || !domain) {
            return console.warn('One of following parameters was not supplied: ', 'Email: ', email, 'Password: ', password, 'Domain: ', domain)
        };
        const backend = await getBackend(email, password, domain);
        
        setAuthState((prev) => ({
            ...prev,
            backend,
        }));
    };

    const getConfig = () => {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        const domain = localStorage.getItem('domain');

        return { email, password, domain };
    };

    const value = {
        ...authState,
        setAuthState,
        signIn,
    };

    useEffect(() => {
        const { email, password, domain } = getConfig();
        if (email && password && domain) {
            signIn(email, password, domain);
        }

    }, []);

    return (
        <AuthContext.Provider value={value}>
            <BackendProvider backend={value.backend}>
                {/* <WorkspaceProvider workspace={value.workspace}> */}
                {children}
                {/* </WorkspaceProvider> */}
            </BackendProvider>
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
