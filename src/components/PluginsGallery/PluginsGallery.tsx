import { Grid } from "@mantine/core";
import plugins from "./assets/plugins";
import { PluginCard } from "./PluginCard/PluginCard";
import { FC } from "react";

type PluginsGalleryProps = {
    onEnablePluginClick: (pluginUrl: string, enable: boolean) => void;
};

export const PluginsGallery: FC<PluginsGalleryProps> = ({ onEnablePluginClick }) => {
    const pluginIds = Object.keys(plugins);

    return (
        <Grid>
            {pluginIds.map((pluginId) => (
                <Grid.Col span={4}>
                    <PluginCard key={pluginId} onEnableClick={onEnablePluginClick} {...plugins[pluginId]} />
                </Grid.Col>
            ))}
        </Grid>
    );
};
