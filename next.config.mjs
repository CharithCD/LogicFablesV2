/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.sanity.io',
              port: '',
              pathname: '/images/9x2ex6om/production/**',
            },
          ],
    }
};

export default nextConfig;
