import { Box } from "@mantine/core";
import Navbar from "../components/Navbar";
import { PluginsGallery } from "../components/PluginsGallery/PluginsGallery";

const Home = () => {
    return (
        <Box sx={({ spacing }) => ({ display: "flex", gap: spacing.md, overflowX: "hidden" })}>
            <Navbar />
            {/* <iframe
                src="https://fashion-police.on.gooddata.com/dashboards/embedded/#/workspace/mpe59q8d1qm1ow6lel30nio47zpmmqd5/dashboard/aapBQm8hQOOZ?showNavigation=true&setHeight=700"
                height="700px"
                width="100%"
            ></iframe> */}
            <PluginsGallery onEnablePluginClick={() => {}} />
        </Box>
    );
};

export default Home;
