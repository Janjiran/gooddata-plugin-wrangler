import { useBackend } from '@gooddata/sdk-ui';
import { Select, Box, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  box: {
      paddingTop: theme.spacing.md
  }
}));

const WorkspaceSelector = () => {
  const { classes, cx } = useStyles();

  const backend = useBackend();
  console.log("🚀 ~ file: WorkspaceSelector.tsx ~ line 14 ~ WorkspaceSelector ~ backend", backend)

  console.log(backend?.workspaces().forCurrentUser().query())
  
  return (
    <Box sx={{ maxWidth: 300 }} className={classes.box} mx="auto">
      <Select
        label="Select Workspace"
        placeholder="Pick one"
        searchable
        clearable
        nothingFound="No options"
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
    </Box>
  );
};

export default WorkspaceSelector;