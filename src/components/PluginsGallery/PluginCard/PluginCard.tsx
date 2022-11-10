import { Button, Card, Group, Image, Switch, Text } from "@mantine/core";
import { ChangeEventHandler, FC } from "react";

import { IPlugin } from "../../../types/plugin";

type PluginCardProps = Pick<IPlugin, "name" | "url" | "image" | "description"> & {
    onEnableClick: (pluginUrl: string, enable: boolean) => void;
};

export const PluginCard: FC<PluginCardProps> = ({ name, image, description, url, onEnableClick }) => {
    const handleEnableSwitchChange: ChangeEventHandler = (e) => {
        onEnableClick(url, e.target.value);
    };

    return (
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
                <Switch onChange={handleEnableSwitchChange} color="pink">
                    Enable
                </Switch>
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
                <Button variant="light" color="blue" radius="md">
                    Demo
                    {/*    TODO link to demo dashboard*/}
                </Button>
                <Button fullWidth variant="filled" color="blue" radius="md">
                    Configure
                    {/*    TODO open plugin config panel*/}
                </Button>
            </Card.Section>
        </Card>
    );
};
