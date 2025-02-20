const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '/**', // This allows any path under your Cloudinary domain
        },
      ],
    },
  };
  
  export default nextConfig;