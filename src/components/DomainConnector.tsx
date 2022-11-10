import { useContext, useState } from "react";
import {
  TextInput,
  Button,
  Group,
  Box,
  Modal as MantineModal,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconDots } from "@tabler/icons";

import SignIn from "./signin";
import { AuthContext } from "../contexts/authContext";

type FormProps = {
  domain: string;
};

const DomainConnector = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const { backend } = useContext(AuthContext);

  const form = useForm<FormProps>({
    initialValues: {
      domain: "",
    },

    validate: {
      domain: (value) =>
        new RegExp(
          /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
        ).test(value)
          ? null
          : "Invalid domain",
    },
  });

  const onSubmit = async (values: FormProps) => {
    try {
      setModalOpened(!modalOpened);
    } catch (error) {}
  };

  const toggleModal = () => setModalOpened(false);

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit(onSubmit)}>
        <TextInput
          withAsterisk
          disabled={!!backend}
          label="Domain URL"
          placeholder="https://honza.on.gooddata.com/"
          rightSection={<IconDots size={16} />}
          {...form.getInputProps("domain")}
        />

        <Group position="right" mt="md">
          <Button
            disabled={!!backend}
            color={backend ? "green" : "blue"}
            type="submit"
          >
            {backend ? "Connected" : "Connect"}
          </Button>
        </Group>
      </form>
      <MantineModal opened={modalOpened} onClose={toggleModal}>
        <SignIn toggleModal={toggleModal} domain={form.values.domain} />
      </MantineModal>
    </Box>
  );
};

export default DomainConnector;
