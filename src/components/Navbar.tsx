import { createStyles, Navbar, Title } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";

import DomainConnector from "./DomainConnector";
import WorkspaceSelector from "./WorkspaceSelector";

const useStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
    },

    main: {
        flex: 1,
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    title: {
        boxSizing: "border-box",
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: theme.spacing.xl,
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        padding: theme.spacing.md,
        paddingTop: 18,
        height: 60,
        borderBottom: `1px solid ${
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
        }`,
    },

    logo: {
        paddingRight: theme.spacing.md,
        paddingBottom: 5,
        width: 40,
        height: 40,
    },
}));

export default function DoubleNavbar() {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState("Releases");

    return (
        <Navbar width={{ md: 400 }}>
            <Navbar.Section grow className={classes.wrapper}>
                <div className={classes.main}>
                    <Title order={4} className={classes.title}>
                        <Image alt="Logo" src="/Logo.svg" height={30} width={30} className={classes.logo} />
                        {active}
                    </Title>

                    <DomainConnector />
                    <WorkspaceSelector />
                </div>
            </Navbar.Section>
        </Navbar>
    );
}
