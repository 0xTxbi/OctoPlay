/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "image-cdn-ak.spotifycdn.com",
				port: "",
				pathname: "/image/**",
			},
			{
				protocol: "https",
				hostname: "i.scdn.co",
				port: "",
				pathname: "/image/**",
			},
		],
	},
};

module.exports = nextConfig;
