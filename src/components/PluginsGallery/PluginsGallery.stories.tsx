import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { PluginsGallery } from "./PluginsGallery";

export default {
    title: "PluginsGallery",
    component: PluginsGallery,
    argTypes: {},
} as ComponentMeta<typeof PluginsGallery>;

const Template: ComponentStory<typeof PluginsGallery> = (args) => <PluginsGallery {...args} />;

export const Card = Template.bind({});
Card.args = {
    onEnablePluginClick: (url, val) => console.log(url, val),
};
