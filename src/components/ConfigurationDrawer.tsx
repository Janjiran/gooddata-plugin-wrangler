import { FC } from "react";
import { Box, createStyles, Drawer } from "@mantine/core";
import ReactMarkdown from "react-markdown";

type ConfigurationDrawerProps = {
    open: boolean;
    onClose: () => void;
    configMd?: string;
};

const useStyles = createStyles(() => ({
    root: {
        width: "70vw",
        overflowY: "auto",
    },
    markdown: {
        "& code": {
            background: "lightgrey",
        },
        "& img": {
            maxWidth: "75%",
        },
    },
}));

export const ConfigurationDrawer: FC<ConfigurationDrawerProps> = ({ open, configMd, onClose }) => {
    const { classes } = useStyles();

    return (
        <Drawer
            className={classes.root}
            opened={open}
            onClose={onClose}
            title="Configure"
            padding="xl"
            size="xl"
            position="right"
        >
            <Box>
                {configMd && (
                    <ReactMarkdown
                        className={classes.markdown}
                        // components={MarkdownComponents}
                    >
                        {configMd}
                    </ReactMarkdown>
                )}
            </Box>
        </Drawer>
    );
};
