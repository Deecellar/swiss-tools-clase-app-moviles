<script>
    import { current } from "convert-units";

    var message = "Elija un numero entre el 1 y el 20";
    var message2 = "";
    var lifes = 5;
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var secret_number = getRandomInteger(1, 20);
    var current_guess = 1;

    function guess() {
        if (current_guess < secret_number) {
            message = "El numero es mayor que " + current_guess + "!";
            lifes -= 1;
        }
        if (current_guess > secret_number) {
            message = "El numero es menor que " + current_guess + "!";
            lifes -= 1;
        }
        if (current_guess == secret_number) {
            message = "Elija un numero entre el 1 y el 20";
            message2 = "Correcto! Acertaste!";
            reset();
        }
    }
    $: {
        if (lifes == 0) {
            message = "Elija un numero entre el 1 y el 20";

            message2 = "El numero correcto es " + secret_number;
            reset();
        }
    }
    function reset() {
        secret_number = getRandomInteger(1, 20);
        lifes = 5;
    }
</script>

<div class="flex flex-col">
    <h1 class="m-auto dark:text-gray-100 text-gray-800 text-4xl pt-8 ">
        Mentalista
    </h1>
    <p class="m-auto text-lg pt-20 pb-10 dark:text-gray-50 ">{message}</p>
    <p
        class={(lifes >= 4
            ? "dark:text-green-200 "
            : lifes >= 2
            ? "dark:text-yellow-200 "
            : "dark:text-red-200 ") + "text-xl pb-10 pl-10"}
    >
        Vidas: {lifes}
    </p>

    <input
        class="mx-14 rounded-md"
        type="number"
        name="Guess"
        id="guess"
        min="1"
        max="20"
        bind:value={current_guess}
    />
    <button
        class="dark:text-gray-50 mx-14 rounded-md mt-10 dark:bg-blue-900 py-1.5 "
        on:click={() => guess()}
        disabled={lifes == 0}>Adivinar</button
    >
    <p class="m-auto text-lg pt-20 pb-10 dark:text-gray-50 ">{message2}</p>
</div>
