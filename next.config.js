/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "drive.google.com",
                port: '',
                pathname: "/drive/u/0/folders/1N_26DsjyN5KOvrwyVeUJWAiyvn0NE3vN"
            }
        ]
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
        ],
    },
};

module.exports = nextConfig;
