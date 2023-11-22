/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
				port: "",
				pathname: "**",
			},
		],
	},
	typescript: {
		// temporarily skip checks
		ignoreBuildErrors: true,
	},
};

module.exports = nextConfig;
