import React from 'react';
import Link from 'next/link';

const Header = () => {
    const config = [
        {
            href: '/',
            text: 'Home',
        },
        {
            href: '/about',
            text: 'About',
        },
        {
            href: '/portfolios',
            text: 'Portfolios',
        },
        {
            href: '/blogs',
            text: 'Blogs',
        },
        {
            href: '/cv',
            text: 'CV',
        },
    ];

    return (
        <>
            {config.map((item) => (
                <Link as={item.href} key={item.text} href={item.href}>
                    <a>{item.text}</a>
                </Link>
            ))}
            <style jsx>
                {`
                    .customClass {
                        color: red;
                    }
                `}
            </style>
        </>
    );
};

export default Header;
