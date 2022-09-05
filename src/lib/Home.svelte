<script>
    import Picture from "./Picture.svelte";

    export let navTabSelected;
    export let navEnum;
</script>

<div class="pt-12 flex flex-col   ">
    <h1 class="m-auto  dark:text-gray-100 text-gray-800 text-4xl pt-8 ">
        Bienvenido a
    </h1>
    <Picture
        extraClass="full"
        src="/src/assets/swiss.png?preset=full"
        alt="Hero"
    />
    <h1 class="m-auto dark:text-gray-100 text-gray-800 text-4xl pt-8 ">
        Creadores
    </h1>

    <div class="flex flex-row dark:bg-gray-600">
        <div class="flex flex-col">
            <Picture
                extraClass="thumb"
                src="/src/assets/median.png?preset=thumbnail"
                alt="Dan Ellis Echavarria"
            />

            <p class="dark:text-gray-100 text-gray-800">Dan Ellis Echavarria</p>
        </div>
        <div class="flex flex-col">
            <Picture
                extraClass="thumb"
                src="/src/assets/guess.png?preset=thumbnail"
                alt="Christian Escobar Roqueme"
            />

            <p class="dark:text-gray-100 text-gray-800">
                Christian Escobar Roqueme
            </p>
        </div>
        <div class="flex flex-col">
            <Picture
                extraClass="thumb"
                src="/src/assets/conversor.png?preset=thumbnail"
                alt="Juan Esteban Herrera"
            />

            <p class="dark:text-gray-100 text-gray-800">Juan Esteban Herrera</p>
        </div>
    </div>
    <div class="dark:bg-gray-800 flex flex-col">
        <h2 class="m-auto dark:text-gray-100 text-gray-800 text-2xl pt-8 ">
            Gadgets
        </h2>

        <div class="flex flex-row dark:bg-gray-600 ">
            <img
                class="select_image  "
                src="/src/assets/conversor.png"
                alt="placeholder  "
                on:click={() => {
                    navTabSelected = navEnum.Conversor;
                }}
            />
            <img
                class="select_image  "
                src="/src/assets/guess.png"
                alt="placeholder  "
                on:click={() => {
                    navTabSelected = navEnum.Guess;
                }}
            />
            <img
                class="select_image  "
                src="/src/assets/median.png"
                alt="placeholder  "
                on:click={() => {
                    navTabSelected = navEnum.Median;
                }}
            />
        </div>
    </div>

    <div class="pb-12 dark:bg-gray-900 " />
</div>

<style lang="sass">

%img 
    @apply px-8
 

.thumb  
    @extend %img
    @apply w-32 h-32
 
.full  
    @extend %img
    @apply w-full h-80

.hd
    @extend %img
    @apply w-full 

.density
    @extend %img
    @apply w-full h-80

.select_image 
    @extend %img
    @apply w-1/3 w-1/3

</style>
