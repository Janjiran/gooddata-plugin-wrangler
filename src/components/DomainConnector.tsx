import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import {
  IconDots
} from '@tabler/icons';

const DomainConnector = () => {
  const form = useForm({
    initialValues: {
      domain: '',
    },

    validate: {
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Domain URL"
          placeholder="https://honza.on.gooddata.com/"
          rightSection={<IconDots size={16} />}
          {...form.getInputProps('domain')}
        />

        <Group position="right" mt="md">
          <Button type="submit">Connect</Button>
        </Group>
      </form>
    </Box>
  );
}

export default DomainConnector;