export default function Repos() {
	// const getRepos = async () => {
	// 	const API_URL = process.env.GITHUB_API_KEY;
	// 	const header_Auth = process.env.GITHUB_PERSONAL_KEY;
	// 	const res = await fetch({
	// 		API_URL,
	// 		headers: {
	// 			Authorization: `${header_Auth}`,
	// 		},
	// 	});
	// 	console.log('res', res);

	// 	const projects = await res.json();
	// 	if (!res) {
	// 		return console.log('data not fetched');
	// 	} else {
	// 		const myPromise = new Promise((resolve, reject) => {
	// 			setTimeout(() => {
	// 				resolve(projects);
	// 			}, 100);
	// 		});
	// 		myPromise
	// 			.then(handleResolvedA, handleRejectedA)
	// 			.then(handleResolvedB, handleResjectedB)
	// 			.then(handleResolvedC, handleRejectedC);
	// 		console.log('promise', projects);
	// 		return {
	// 			projects,
	// 		};
	// 	}
	// };

	// const getData = getRepos();

	// console.log('data', getData);
	// let result;
	// let id;
	// const extractValues = ({ id, name, full_name, html_url }) => [
	// 	id,
	// 	name,
	// 	full_name,
	// 	html_url,
	// ];
	// result = getData.map(extractValues);
	// console.log(result);
	return <div>Repos Go Here</div>;
}

// const getRepos = async () => {
// 	const API_URL = process.env.GITHUB_API_KEY;
// 	const header_Auth = process.env.GITHUB_PERSONAL_KEY;
// 	const res = await fetch(API_URL, {
// 		headers: {
// 			Authorization: `${header_Auth}`,
// 		},
// 	});
// 	if (!res) {
// 		return console.log('data not fetched');
// 	} else {
// 		const projects = await res.json();
// 		return {
// 			props: {
// 				projects,
// 			},
// 		};
// 	}
// };
