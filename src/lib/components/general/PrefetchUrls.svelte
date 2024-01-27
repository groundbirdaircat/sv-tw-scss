<script lang="ts">
  export let prefetchUrls: string[];
</script>

<div class="hidden">
  {#each prefetchUrls as href}
    <link rel="prefetch" {href} />
  {/each}
</div>
