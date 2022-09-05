<script>
    import Picture from "./Picture.svelte";

    export let navTabSelected;
    export let navEnum;
    function getImageUrl(name) {
        return new URL(`../assets/${name}.png`, import.meta.url).href;
    }
</script>

<div class="pt-12 flex flex-col dark:bg-gray-900  ">
    <h1 class="m-auto  dark:text-gray-100 text-gray-800 text-4xl pt-8 ">
        Bienvenido a
    </h1>
    <Picture
        extraClass="full m-auto"
        src="../assets/swiss.png?preset=full"
        alt="Hero"
    />
    <h1 class="m-auto dark:text-gray-100 text-gray-800 text-4xl pt-8 ">
        Creadores
    </h1>

    <div class="flex flex-row dark:bg-gray-600 mb-2">
        <div class="flex flex-col m-auto">
            <Picture
                extraClass="thumb m-auto"
                src="../assets/swiss.png?preset=thumbnail"
                alt="Dan Ellis Echavarria"
            />

            <p class="dark:text-gray-100 text-gray-800">Dan Ellis Echavarria</p>
        </div>
        <div class="flex flex-col m-auto">
            <Picture
                extraClass="thumb m-auto"
                src="../assets/swiss.png?preset=thumbnail"
                alt="Christian Escobar Roqueme"
            />

            <p class="dark:text-gray-100 text-gray-800">
                Christian Escobar Roqueme
            </p>
        </div>
        <div class="flex flex-col m-auto">
            <Picture
                extraClass="thumb m-auto"
                src="../assets/swiss.png?preset=thumbnail"
                alt="Juan Esteban Herrera"
            />

            <p class="dark:text-gray-100 text-gray-800">Juan Esteban Herrera</p>
        </div>
    </div>
    <div class="dark:bg-gray-800 flex flex-col w-full">
        <h2 class="m-auto dark:text-gray-100 text-gray-800 text-2xl pt-8 ">
            Gadgets
        </h2>

        <div class="flex flex-row dark:bg-gray-600  ">
            <div class="container_image">
                <img
                    class="w-12 h-auto m-auto "
                    src={getImageUrl("conversor", "")}
                    alt="placeholder  "
                    on:click={() => {
                        navTabSelected = navEnum.Conversor;
                    }}
                />
                <p class="dark:text-gray-100 text-gray-800 m-auto items-center">
                    Conversor
                </p>
            </div>

            <div class="container_image">
                <img
                    class="select_image  "
                    src={getImageUrl("guess", "")}
                    alt="placeholder  "
                    on:click={() => {
                        navTabSelected = navEnum.Guess;
                    }}
                />
                <p class="dark:text-gray-100 text-gray-800 m-auto items-center">
                    Guess the Number
                </p>
            </div>
            <div class="container_image">
                <img
                    class="select_image  "
                    src={getImageUrl("median", "")}
                    alt="placeholder  "
                    on:click={() => {
                        navTabSelected = navEnum.Median;
                    }}
                />
                <p class="dark:text-gray-100 text-gray-800 m-auto items-center">
                    Median
                </p>
            </div>
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
    @apply w-auto h-auto m-auto

.container_image
    @apply w-full flex flex-col m-auto

</style>
