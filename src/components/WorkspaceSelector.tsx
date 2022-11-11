import { useBackend } from "@gooddata/sdk-ui";
import { IAnalyticalWorkspace } from "@gooddata/sdk-backend-spi";
import { Select, Box, createStyles } from "@mantine/core";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";

const useStyles = createStyles((theme) => ({
    box: {
        paddingTop: theme.spacing.md,
    },
}));

type DescriptorWS = IAnalyticalWorkspace & {
        descriptor: {
            title: string;
            description: string;
        };
    }
;

const WorkspaceSelector = () => {
    const { classes } = useStyles();
    const backend = useBackend();

    const state = useAuth();

    const [workspaces, setWorkspaces] = useState<DescriptorWS[]>();

    const loadWorkspaces = async () => {
        const query = await backend?.workspaces().forCurrentUser().query();
        if (query) {
            setWorkspaces(query.items as DescriptorWS[]);
        }
    };

    const getWsName = (ws: DescriptorWS) => `${ws.descriptor.title} ${ws.descriptor.description ? " - " + ws.descriptor.description : ""}`;

    const onChange = (value: string) => {
        const ws = workspaces?.find((workspace) => value === getWsName(workspace));
        state.setAuthState((prev) => ({...prev, workspace: ws?.workspace as string }))
    };

    useEffect(() => {
        if (backend?.isAuthenticated()) {
            loadWorkspaces();
        }
    }, [backend]);

    const workspaceNames = workspaces?.map(
        (ws) => getWsName(ws),
    );

    return (
        <Box sx={{ maxWidth: 300 }} className={classes.box} mx="auto">
            <Select
                label="Select Workspace"
                placeholder="Pick one"
                searchable
                clearable
                disabled={!state.domain}
                nothingFound="No options"
                onChange={onChange}
                data={workspaceNames || [""]}
            />
        </Box>
    );
};

export default WorkspaceSelector;
