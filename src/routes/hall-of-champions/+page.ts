import { dev } from '$app/environment';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;


export const load = (async ({ fetch, setHeaders }) => {
    async function playoff2022() {
		const leagueNumber = "860365485148057600";
		const bracket = await fetch(`https://api.sleeper.app/v1/league/${leagueNumber}/users`);
        return await bracket.json();
	}

    return { response: await playoff2022()};
})