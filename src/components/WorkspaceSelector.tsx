import { useBackend } from "@gooddata/sdk-ui";
import { Select, Box, createStyles } from "@mantine/core";
import { useEffect } from "react";

const useStyles = createStyles((theme) => ({
    box: {
        paddingTop: theme.spacing.md,
    },
}));

const WorkspaceSelector = () => {
    const { classes } = useStyles();

    const backend = useBackend();

    useEffect(() => {
        backend?.workspaces().forCurrentUser().query();
    }, [backend]);

    return (
        <Box sx={{ maxWidth: 300 }} className={classes.box} mx="auto">
            <Select
                label="Select Workspace"
                placeholder="Pick one"
                searchable
                clearable
                nothingFound="No options"
                data={["React", "Angular", "Svelte", "Vue"]}
            />
        </Box>
    );
};

export default WorkspaceSelector;
