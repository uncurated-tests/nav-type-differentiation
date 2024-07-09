/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => {
    return [
      {
        source: "/:slug",
        destination: "/client-only/:slug",
        has: [
          {
            type: "header",
            key: "Sec-Fetch-Mode",
            value: "cors",
          },
          {
            type: "header",
            key: "Sec-Fetch-Site",
            value: "same-origin",
          },
        ],
      },
      {
        source: "/:slug",
        destination: "/authing/:slug",
      },
    ];
  },
};

export default nextConfig;
