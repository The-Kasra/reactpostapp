import { Link } from "react-router-dom";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Button, Container } from "@mantine/core";
import { useLoaderData } from "react-router-dom";
import { ArticleCardImage } from "../../components/misc/ArticleCardImage";
import { ArticleCardDetail } from "../../components/misc/ArticleCardDetail";


function PostDetailsPage() {
  const post = useLoaderData();


  return (
    <>
      <Container>
        <p>This page shows post details! for : {post.username}</p>       
        <ArticleCardDetail key={post.title} {...post}/>
        {/* <Button>
          <Link to="/posts">Back to Posts</Link>
        </Button> */}
      </Container>
    </>
  );
}

export const postDetailsLoader = async ({ params }) => {
  // do something with this
  //return null;
  const res = await axios.get(`${DOMAIN}/api/posts/${params.id.toString()}`);
  console.log("I ran!");
  return res.data;
};

export default PostDetailsPage;
