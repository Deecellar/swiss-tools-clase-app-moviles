<script>
    export let navTabSelected;
    export let navEnum;
</script>

<div class="pt-12 flex flex-col   ">
    <img
        class="w-full h-80 px-8 "
        src="https://via.placeholder.com/2000"
        alt="placeholder  "
    />
    <h1 class="dark:text-gray-100 text-gray-800 text-4xl pt-8 ">Hola</h1>

    <div class="flex flex-row dark:bg-gray-600">
        <img
            class="w-20 h-20 px-8 "
            src="https://via.placeholder.com/2000"
            alt="placeholder  "
        />
        <img
            class="w-20 h-20 px-8 "
            src="https://via.placeholder.com/2000"
            alt="placeholder  "
        />
    </div>
    <h2 class="dark:text-gray-100 text-gray-800 text-2xl pt-8 ">Gadgets</h2>

    <div class="flex flex-row dark:bg-gray-600 ">
        <img
            class="w-20 h-20 px-8 "
            src="https://via.placeholder.com/2000"
            alt="placeholder  "
            on:click={() => {
                navTabSelected = navEnum.Conversor;
            }}
        />
        <img
            class="w-20 h-20 px-8 "
            src="https://via.placeholder.com/2000"
            alt="placeholder  "
            on:click={() => {
                navTabSelected = navEnum.Guess;
            }}
        />
        <img
            class="w-20 h-20 px-8 "
            src="https://via.placeholder.com/2000"
            alt="placeholder  "
            on:click={() => {
                navTabSelected = navEnum.Median;
            }}
        />
    </div>
    <div class="pb-12 dark:bg-gray-900 " />
</div>
