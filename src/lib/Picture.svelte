<script>
export var src;
export let alt;
export let extraClass = "";
var image = import(src).then(something => something.default).then(something => {
    const allSources = Array.isArray(something) ? something : [{ srcset: something, something }];
    const sources = allSources.slice(0, -1);
    const lastSource = allSources[allSources.length - 1];
    return {allSources:allSources, sources: sources, lastSource: lastSource };
})

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}
</script>


<template>
  {#await image then img}
    <picture alt={alt} >
    {#each img.sources as source, index}
    <source id={uuidv4()} />
    <img alt={alt} class={extraClass + " " + source.class != "undefined" ? console.log(source) : ""} { ...source}>
    {/each}
  </picture>
  {/await}

</template>
