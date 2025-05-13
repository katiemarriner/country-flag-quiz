<script lang="ts">
  import data from '$lib/data/flags.json';

  console.log(data);

  Math.random()
</script>

<h1>What country does this flag belong to?</h1>
{#each data as flag}
  <div>
    <span>{flag.name}</span>
    <span>{flag.emoji}</span>
  </div>
{/each}
<!-- Play area -->
<!-- Randomize Flag -->
<!-- Choices or text input -->
<!-- Next -->
