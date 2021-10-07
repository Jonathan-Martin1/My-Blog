import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
	providers: [
		Providers.GitHub({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
	],
	debug: process.env.NODE_ENV === 'development',
	secret: process.env.AUTH_SECRET,
	jwt: {
		secret: process.env.JWT_SECRET,
	},
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			const isAllowedToSignIn = true;
			if (isAllowedToSignIn) {
				return true;
			} else {
				return false;
			}
		},
		async redirect({ url, baseUrl }) {
			return '/';
		},
	},
});
