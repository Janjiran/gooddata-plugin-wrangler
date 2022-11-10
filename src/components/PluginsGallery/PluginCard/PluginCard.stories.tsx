import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { PluginCard } from "./PluginCard";

export default {
    title: "PluginsGallery/PluginCard",
    component: PluginCard,
    argTypes: {},
} as ComponentMeta<typeof PluginCard>;

const Template: ComponentStory<typeof PluginCard> = (args) => <PluginCard {...args} />;

export const Card = Template.bind({});
Card.args = {
    name: "Theme Editor",
    url: "https://gdc-ms-pub.s3.amazonaws.com/AIDA5QKRHPNLYV746FYP3_gdc-ms-pub_gooddata-internal-training/plugins/theme_editor/v106/dist/dashboardPlugin/dp_theme_editor.js",
    image: "plugin.screenshot.png",
    description:
        "Company logo, brand identity, colors. These items speaks of your company like nothing else. Whitelabel your dashboard through this plugin.",
};
