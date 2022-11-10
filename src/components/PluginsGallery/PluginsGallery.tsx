import { Grid } from "@mantine/core";
import plugins from "./plugins";
import { PluginCard } from "./PluginCard/PluginCard";
import { FC } from "react";

type PluginsGalleryProps = {
    onEnablePluginClick: (pluginUrl: string, enable: boolean) => void;
};

export const PluginsGallery: FC<PluginsGalleryProps> = ({ onEnablePluginClick }) => {
    const pluginIds = Object.keys(plugins).sort();

    return (
        <Grid sx={({ spacing }) => ({ flex: 1, padding: spacing.md })}>
            {pluginIds.map((pluginId) => (
                <Grid.Col key={pluginId} span={4}>
                    <PluginCard onEnableClick={onEnablePluginClick} {...plugins[pluginId]} />
                </Grid.Col>
            ))}
        </Grid>
    );
};
