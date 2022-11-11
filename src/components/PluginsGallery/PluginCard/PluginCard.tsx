import { Button, Card, Group, Image, Switch, Text } from "@mantine/core";
import { FC, useState } from "react";
import { useAuth } from "../../../contexts/authContext";
import { addPlugin, linkPlugin, PluginConfig } from "../../../services";

import { IPlugin } from "../../../types/plugin";
import { ConfigurationDrawer } from "../../ConfigurationDrawer";

type PluginCardProps = IPlugin & {
    onEnableClick: (pluginUrl: string, enable: boolean) => void;
};

export const PluginCard: FC<PluginCardProps> = ({ name, image, description, url, configMd }) => {
    const state = useAuth();

    const [loading, setLoading] = useState(false);
    const [unlinkLoading, setUnlinkLoading] = useState(false);

    const enablePlugin = async () => {
        try {
            setLoading(true);

            const gdcUsername = localStorage.getItem("email") as string;
            const gdcPassword = localStorage.getItem("password") as string;

            const pluginOjectId = await addPlugin({
                gdcUsername,
                gdcPassword,
                pluginUrl: url,
                hostname: state.domain as string,
                workspaceId: state.workspace as string,
            });

            const data = await linkPlugin({
                gdcUsername,
                gdcPassword,
                pluginId: pluginOjectId,
                dashboardId: state.dashboard?.identifier as string,
                hostname: state.domain as string,
                workspaceId: state.workspace as string,
            })
            console.log("🚀 ~ file: PluginCard.tsx ~ line 42 ~ enablePlugin ~ data", data)

        } catch (err) {
            console.warn(err);
        } finally {
            setLoading(false);
        }
    };

    const unlinkPlugin = async () => {
        try {
            setUnlinkLoading(true);

            const gdcUsername = localStorage.getItem("email") as string;
            const gdcPassword = localStorage.getItem("password") as string;

            const data = await addPluginAsync({
                gdcUsername,
                gdcPassword,
                pluginUrl: url,
                hostname: state.domain as string,
                workspaceId: state.workspace as string,
            });

            // const parseData = await data.json();
            // const pluginObjectId = parseData.split(' ').at(-1).replace('\\n\"', '');

            // await linkPlugin({
            //     gdcUsername,
            //     gdcPassword,
            //     pluginId: pluginObjectId,
            //     hostname: state.domain as string,
            //     workspaceId: state.workspace as string,
            // });
        } catch (err) {
            console.warn(err);
        } finally {
            setUnlinkLoading(false);
        }
    };

    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <Card
                sx={{
                    maxWidth: 400,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
                shadow="sm"
                p="lg"
                radius="md"
                withBorder
            >
                <Card.Section sx={(theme) => ({ boxShadow: theme.shadows.sm })}>
                    <Image src={image} height={160} alt={name} />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{name}</Text>
                    <Button variant="light" color="blue" radius="md">
                        Demo
                        {/*    TODO link to demo dashboard*/}
                    </Button>
                </Group>

                <Text size="sm" color="dimmed">
                    {description}
                </Text>

                <Card.Section
                    sx={(theme) => ({
                        flex: 1,
                        display: "flex",
                        alignItems: "end",
                        padding: theme.spacing.sm,
                        paddingBottom: theme.spacing.sm,
                        gap: theme.spacing.sm,
                    })}
                >
                    <Button
                        fullWidth
                        variant="filled"
                        color="blue"
                        radius="md"
                        onClick={() => setDrawerOpen(true)}
                    >
                        Configure
                    </Button>
                    <Button
                        onClick={enablePlugin}
                        disabled={!state.dashboard}
                        fullWidth
                        variant="filled"
                        color="green"
                        radius="md"
                        loading={loading}
                    >
                        Enable
                        {/*    TODO open plugin config panel*/}
                    </Button>
                    <Button
                        loading={unlinkLoading}
                        onClick={unlinkPlugin}
                        disabled={!state.dashboard}
                        fullWidth
                        variant="filled"
                        color="red"
                        radius="md"
                    >
                        Remove
                        {/*    TODO open plugin config panel*/}
                    </Button>
                </Card.Section>
            </Card>
            <ConfigurationDrawer configMd={configMd} open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        </>
    );
};
