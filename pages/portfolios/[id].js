import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

import BaseLayout from "../../components/layouts/BaseLayout";

export const getServerSideProps = async ({ params: { id } }) => {
  const newPost = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return {
    props: {
      newPost: newPost.data,
      id,
    },
  };
};

const Portfolio = ({ newPost, id }) => {
  const [post, setPost] = useState(newPost);

  // useEffect(() => {
  //   if (!id) {
  //     return;
  //   }

  //   const requestPortfolio = async () => {
  //     const newPost = await axios.get(
  //       `https://jsonplaceholder.typicode.com/posts/${id}`
  //     );

  //     setPost(newPost.data);
  //   };

  //   requestPortfolio();
  // }, [id]);

  return (
    <BaseLayout>
      <div>
        <Link href="/portfolios">
          <a>Back</a>
        </Link>
      </div>
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </BaseLayout>
  );
};

export default Portfolio;
