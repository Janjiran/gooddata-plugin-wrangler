import { Button, Card, createStyles, Group, Image, Switch, Text } from "@mantine/core";
import { FC } from "react";

import { IPlugin } from "../../../../types/plugin";

type PluginCardProps = Pick<IPlugin, "name" | "url" | "image" | "description">;

export const PluginCard: FC<PluginCardProps> = ({ name, image, description }) => {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
                <Image src={image} height={160} alt={name} />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{name}</Text>
                <Switch color="pink">Enable</Switch>
            </Group>

            <Text size="sm" color="dimmed">
                {description}
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Demo
                {/*    TODO link to demo dashboard*/}
            </Button>
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Configure
                {/*    TODO open plugin config panel*/}
            </Button>
        </Card>
    );
};
