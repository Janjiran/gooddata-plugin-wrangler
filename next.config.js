/** @type {import('next').NextConfig} */

const rewrites = () => {
    return [
        {
            source: "/gdc",
            destination: "https://fashion-police.on.gooddata.com",
        },
    ];
};

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    rewrites,
};

module.exports = nextConfig;
