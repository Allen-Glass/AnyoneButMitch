<svelte:head>
	<title>Not Mitch</title>
	<meta name="description" content="Anyone but Mitch" />
</svelte:head>

<section class="relative">
	<Countdown />
	{#each articles as article}
		<Card article={article}>
			{article.content}
		</Card>
	{/each}
	<div class="my-2 border w-3/4 bg-slate-100 p-4 hover:bg-slate-50 cursor-pointer">
		<div class="font-bold text-l">
			Mitch's Current Standing
		</div>
		<hr class="my-2" />
		<div class="grid grid-cols-6">
			<div class="col-span-5">
				{wins} Wins {losses} Losses {ties} Ties
			</div>
		</div>
	</div>
	<div class="my-2 w-3/4 p-4">
		Be the first to support Mitch on his journey towards another 'ship. 
		<Thumb />
	</div>
</section>

<script lang="ts">
	import Thumb from './../lib/components/Thumb.svelte';
	import Card from '$lib/components/Card.svelte';
	import Countdown from '$lib/components/countdown.svelte';
	import Articles from '$lib/articles.json';
	import type {Article} from '$lib/article';
	import { onMount } from 'svelte';

	let articles: Article[] = [];
	let wins: number = 0;
	let losses: number = 0;
	let ties: number = 0;

	onMount(() => {
		getRecord();
		//articles = Articles.articles;
	})

	async function getRecord() {
		const response = await fetch("https://api.sleeper.app/v1/league/982124326289797120/rosters");
		const json = await response.json() as any[];
		const mitch = json.find(j => j.owner_id === "862046468247232512");
		wins = mitch.settings.wins;
		losses = mitch.settings.losses;
		ties = mitch.settings.ties;
	}
</script>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>