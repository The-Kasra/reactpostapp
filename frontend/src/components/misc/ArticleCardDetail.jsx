import { Card, Image, Avatar, Text, Group, Button } from "@mantine/core";
import classes from "./ArticleCardDetail.module.css";
import { Link } from "react-router-dom";
import useBoundStore from "../../store/Store";

export function ArticleCardDetail({
  id,
  title,
  category,
  image,
  content,
  userId,
  username,
}) {
  const { user } = useBoundStore();
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group wrap="nowrap" gap={0}>
        <div className={classes.body}>
          <Text tt="uppercase" c="dimmed" fw={700} size="xs">
            {username}
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            {title}
          </Text>
          {/* <Group wrap="nowrap" gap="xs"> */}
          <Group gap="xs" wrap="nowrap">
            {/* <Avatar
                size={20}
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
              /> */}
            <Text size="xs">{category}</Text>
          </Group>
          {/* <Text size="xs" c="dimmed">
              •
            </Text> */}
          <Group gap="xs" wrap="nowrap">
            <Text size="xs" c="dimmed">
              {content}
            </Text>
          </Group>
          {/* </Group> */}
        </div>
        <Image src={image} height={300} width={200} />
      </Group>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button>
          <Link to="/posts">Back</Link>
        </Button>
        {user.id === userId && (
          <Button>
            <Link to={`/posts/edit/${id.toString()}`}>Edit</Link>
          </Button>
        )}
      </div>
    </Card>
  );
}
