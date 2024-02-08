// const server = Bun.serve({
// 	port: 3000,
// 	fetch(request) {
// 		return new Response('Hello World!');
// 	},
// });

// console.log(`Listening on localhost:${server.port}`);

import { Resend } from 'resend';
import { GirlfriendEmail } from '../src/GirlfriendEmail';

const resend = new Resend('re_XaAsgERN_KX4CN1WZ5n53mGwLoYQbMYgC');

// const server = Bun.serve({
// 	port: 3000,
// 	async fetch() {
// 		const data = await resend.emails.send({
// 			from: 'onboarding@resend.dev',
// 			to: 'davida10@live.ca',
// 			subject: 'Testing',
// 			react: GirlfriendForm({ name: 'Mafatta' }),
// 		});

// 		return new Response(JSON.stringify(data));
// 	},
// });

await resend.emails.send({
	from: 'onboarding@resend.dev',
	to: 'davida10@live.ca',
	subject: 'Testing',
	react: GirlfriendEmail({ name: 'Mafatta' }),
});

// resend.emails.send({
// 	from: 'onboarding@resend.dev',
// 	to: 'davida10@live.ca',
// 	subject: 'Hello World',
// 	html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
// });

// console.log(`Listening on http://localhost:${server.port} ...`);
// console.log('server', server);
