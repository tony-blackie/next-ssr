import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Link } from '../routes';
import axios from 'axios';

import BaseLayout from '../components/layouts/BaseLayout';

const Portfolio = (props) => {
    const router = useRouter();

    const {
        query: { id },
    } = router;

    console.log('router: ', router);

    const [post, setPost] = useState(null);

    useEffect(() => {
        if (!id) {
            return;
        }

        const requestPortfolio = async () => {
            const newPost = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
            );

            setPost(newPost.data);
        };

        requestPortfolio();
    }, [id]);

    return (
        <BaseLayout>
            <div>
                <Link route="/portfolios">
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
