import { useBackend } from "@gooddata/sdk-ui";
import { Select, Box, createStyles } from "@mantine/core";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { IListedDashboard } from "@gooddata/sdk-model";

const useStyles = createStyles((theme) => ({
    box: {
        paddingTop: theme.spacing.md,
    },
}));

const DasboardSelector = () => {
    const { classes } = useStyles();
    const backend = useBackend();
    const [isLoading, setIsLoading] = useState(false);

    const state = useAuth();

    const [dashboards, setDashboards] = useState<IListedDashboard[]>();

    const loadDashboards = async (ws: string) => {
        const query = await backend?.workspace(ws).dashboards().getDashboards();
        if (query) {
            setDashboards(query);
            setIsLoading(false);
        }
    };

    const onChange = (value: string) => {
        const dashboard = dashboards?.find((d) => d.identifier === value);
        state.setAuthState((prev) => ({...prev, dashboard: dashboard as IListedDashboard }))
    };

    useEffect(() => {
        setIsLoading(true);
        if (state.workspace) {
            loadDashboards(state.workspace);
        }
    }, [state.workspace]);

    return (
        <Box sx={{ maxWidth: 300 }} className={classes.box} mx="auto">
            <Select
                label="Select Dashboard"
                placeholder="Pick one"
                searchable
                clearable
                disabled={isLoading}
                nothingFound="No options"
                onChange={onChange}
                data={dashboards?.map((d) => ({ label: d.title, value: d.identifier })) || ['']}
            />
        </Box>
    );
};

export default DasboardSelector;
