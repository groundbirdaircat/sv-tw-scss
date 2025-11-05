<script lang="ts">
  let { prefetchUrls }: { prefetchUrls: string[] } = $props();
</script>

<div class="hidden">
  {#each prefetchUrls as href}
    <link rel="prefetch" {href} />
  {/each}
</div>
