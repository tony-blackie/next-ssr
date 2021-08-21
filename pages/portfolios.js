import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "../routes";
import BaseLayout from "../components/layouts/BaseLayout";

export const getStaticProps = async () => {
  const responsePosts = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((resp) => resp.data.slice(0, 10))
    .catch((e) => console.log(e));

  return {
    props: {
      responsePosts,
    },
  };
};

const Portfolios = ({ responsePosts }) => {
  const [posts, setPosts] = useState(responsePosts);

  useEffect(() => {
    const requestPosts = async () => {
      const responsePosts = await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((resp) => resp.data.slice(0, 10))
        .catch((e) => console.log(e));

      console.log("response: ", responsePosts);

      setPosts(responsePosts);
    };

    requestPosts();
  }, []);

  return (
    <BaseLayout>
      <h1>I am Portfolios Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.title}>
            <Link route={`/portfolios/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </BaseLayout>
  );
};

export default Portfolios;
