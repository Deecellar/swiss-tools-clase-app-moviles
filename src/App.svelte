<script>
  import Conversor from "./lib/Conversor.svelte";
  import GuessTheNumber from "./lib/GuessTheNumber.svelte";
  import Home from "./lib/Home.svelte";
  import MedianCalculator from "./lib/MedianCalculator.svelte";
  // Typescript
  function createEnum(values) {
    const enumObject = {};
    for (const val of values) {
      enumObject[val] = val;
    }
    return Object.freeze(enumObject);
  }

  const nav = createEnum(["Home", "Conversor", "Guess", "Median"]);
  var navTabSelected = nav.Home;
</script>

<main class="h-screen dark:bg-gray-900  ">
  <div style="height: 93.99%;">
    {#if navTabSelected === nav.Home}
      <Home bind:navTabSelected navEnum={nav} />
    {:else if navTabSelected === nav.Conversor}
      <Conversor />
    {:else if navTabSelected === nav.Guess}
      <GuessTheNumber />
    {:else if navTabSelected == nav.Median}
      <MedianCalculator />
    {/if}
  </div>
  {#if navTabSelected !== nav.Home}
    <footer class="w-screen h-full  fixed inset-x-0 ">
      <nav class="  bg-blue-50 dark:bg-gray-800   ">
        <ul class="flex w-screen h-full   bg-blue-50 dark:bg-gray-800">
          {#each Object.keys(nav) as elem}
            <!-- svelte-ignore a11y-invalid-attribute -->
            <li
              class="w-1/4 align-middle text-center pb-4 {elem == navTabSelected
                ? 'bg-blue-200 dark:bg-gray-700'
                : ''}"
            >
              <a
                class="text-gray-100"
                href="#"
                on:click={() => (navTabSelected = elem)}
              >
                <img
                  class="select_image  "
                  src={"/src/assets/" + elem.toLowerCase() + ".png"}
                  alt={"NavMenu" + elem}
                /></a
              >
            </li>
          {/each}
        </ul>
      </nav>
    </footer>
  {/if}
</main>

<style lang="sass">


  
  .select_image 
      @apply w-12 h-12 aspect-square m-auto
  

</style>
