/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
            protocol: "https",
            hostname: 'cdn.sanity.io',
            }
        ]
    },
    async redirects() {
        return [
          {
            source: '/home-page',
            destination: '/',
            permanent: true,
          },
          {
            source: '/blog/1',
            destination: '/blog',
            permanent: true,
          },
          {
            source: '/blog/2',
            destination: '/blog',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;