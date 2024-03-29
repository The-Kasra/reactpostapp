import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useBoundStore from "../../store/Store";

import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import classes from './Login.page.module.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginService, authLoading, user } = useBoundStore((state) => state);

  useEffect(() => {
    if (!!user) {
      navigate("/posts");
    }
  }, [user]);

  const onLogin = async (e) => {
    e.preventDefault();
    let email = e.target.email?.value;
    let password = e.target.password?.value;
    if (!email || !password) return;
    loginService(email, password);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>

<Container size={420} my={40}>
   <form onSubmit={onLogin}>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput name="email" label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput name="password" label="Password" placeholder="Your password" required mt="md" />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />

        </Group>
        <Button type="submit" fullWidth mt="xl" >
          Sign in
        </Button>
      </Paper>
      </form>
    </Container>
      
    </div>
  );
};

export default LoginPage;
