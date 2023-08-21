<div class="my-2 border w-3/4 bg-slate-100 p-4 hover:bg-slate-50 cursor-pointer">
    <div class="font-bold text-2xl">
        {title}
    </div>
    <hr class="my-2" />
    <div class="grid grid-cols-6">
        <div class="col-span-5">
            <slot></slot>
        </div>
        <div class="col-span-1 justify-self-end">
            <img alt={title} src={imageUrl} width="100" />
        </div>
    </div>
</div>

<script lang="ts">
    export let title: string = null;
    export let imageUrl: string = null;
</script>