import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { PluginCard } from "./PluginCard";
import plugins from "../assets/plugins";

export default {
    title: "PluginsGallery/PluginCard",
    component: PluginCard,
    argTypes: {},
} as ComponentMeta<typeof PluginCard>;

const Template: ComponentStory<typeof PluginCard> = (args) => <PluginCard {...args} />;

export const Card = Template.bind({});
Card.args = {
    ...plugins.dashboardDescription,
    onEnableClick: (url, val) => console.log(url, val),
};
