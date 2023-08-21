<svelte:head>
	<title>Winner Winner</title>
	<meta name="description" content="Hall Of Champions" />
</svelte:head>

<div class="text-column">
	<div id="left-spotlight">

	</div>
	<WinnerCard title="2022 Watson-under that towel" imageUrl="https://sleepercdn.com/uploads/b21fc7b099a0784f132f87e1b2d76fb6.jpg"></WinnerCard>
</div>

<script lang="ts">
	import { onMount } from "svelte";
	import type { PageData } from "../$types";
	import WinnerCard from "$lib/components/WinnerCard.svelte";

	export let data: PageData;
	let imageUrl: string = null;
	let lstl: number = 0;
	let lstr: number = 0;
	let rstl: number = 0;
	let rstr: number = 0;

	onMount(() => {
		console.log(data)
		const response = data as any;
		const alex = response.response.find((r: { display_name: string; }) => r.display_name === "ahantheman");
		imageUrl = alex.metadata.avatar;
		console.log(alex)
		window.addEventListener("mousemove", (e) => {
			const left = e.clientX;
			const right = e.clientY;
		})
	})

	function moveSpotlight() {
		const left = document.getElementById("left-spotlight");
	}
</script>

<style>
.confetti-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.confetti {
  width: 10px;
  height: 10px;
  background-color: #e64c65;
  position: absolute;
  border-radius: 50%;
  animation: fall 5s linear infinite;
}

@keyframes fall {
  0% {
    transform: translateY(-50px) rotateZ(0deg);
  }
  100% {
    transform: translateY(100vh) rotateZ(1080deg);
  }
}
</style>
