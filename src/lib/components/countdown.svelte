{#if !expired}
    <div class="my-2 border w-3/4 bg-slate-100 p-4">
        <div class="font-bold text-l">
            Season Kickoff: <br /> {date}
        </div>
        <slot></slot>
    </div>
{/if}

<script lang="ts">
	import { onMount } from "svelte";

    let date: string = "00d 0h 0m 0s";
    let expired: boolean = false;

    onMount(() => {
        startCountdown();
    })

    function startCountdown() {
        const countDownDate = new Date("Sep 8, 2023 00:20:00").getTime();
        const interval = setInterval(function() {

        const now = new Date().getTime();
        const distance = countDownDate - now;
        expired = distance < 0;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (expired) {
            clearInterval(interval);
        }

        date = days + "d " + hours + "h " + minutes + "m " + seconds + "s "
    }, 1000);
}
</script>