import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from "@mantine/core";
import { useState, FC, useContext } from "react";

import { AuthContext } from "../contexts/authContext";

interface ISignIn {
    domain: string;
    toggleModal: () => void;
}

const SignIn: FC<ISignIn> = ({ domain, toggleModal }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const state = useContext(AuthContext);

    const signIn = async () => {
        try {
            setLoading(true);
            state.signIn(email, password, domain);

            // Store credentials + domain for later use
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            localStorage.setItem("domain", domain);

            toggleModal();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container size={420} my={40}>
            <Title
                align="center"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
            >
                Welcome!
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                Do not have an account yet?{" "}
                <Anchor<"a"> href="#" size="sm">
                    Create account
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    placeholder="you@mantine.dev"
                    required
                />
                <PasswordInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                    placeholder="Your password"
                    required
                    mt="md"
                />
                <Group position="apart" mt="md">
                    <Checkbox label="Remember me" />
                    <Anchor<"a"> onClick={(event) => event.preventDefault()} href="#" size="sm">
                        Forgot password?
                    </Anchor>
                </Group>
                <Button loading={loading} fullWidth mt="xl" onClick={signIn}>
                    Sign in
                </Button>
            </Paper>
        </Container>
    );
};

export default SignIn;
