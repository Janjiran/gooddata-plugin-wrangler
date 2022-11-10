/** @type {import('next').NextConfig} */

const rewrites = () => {
    return [
        {
            source: "/gdc/:path*",
            destination: "/api/gdc",
        },
    ];
};

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    rewrites,
};

module.exports = nextConfig;
