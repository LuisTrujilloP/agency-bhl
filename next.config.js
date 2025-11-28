/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output: "export",
	images: {
		unoptimized: true, // ← ADD THIS for static export
		deviceSizes: [360, 480, 576, 768, 1200, 1920, 2048, 3840],
		domains: ["res.cloudinary.com"],
	},
};

module.exports = nextConfig;
