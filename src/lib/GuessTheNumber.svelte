<script>
    import { current } from "convert-units";

    var message = "Elija un numero entre el 1 y el 20";
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
            message =
                "Correcto! Acertaste! elija otro numero entre el 1 y el 20";
            reset();
        }
    }
    $: {
        if (lifes == 0) {
            message =
                "El numero correcto es " +
                secret_number +
                " elija otro numero entre el 1 y el 20";
            reset();
        }
    }
    function reset() {
        secret_number = getRandomInteger(1, 20);
        lifes = 5;
    }
</script>

<input
    type="number"
    name="Guess"
    id="guess"
    min="1"
    max="20"
    bind:value={current_guess}
/>
<button
    class="dark:text-gray-50 "
    on:click={() => guess()}
    disabled={lifes == 0}>Adivinar</button
>
<p class="dark:text-gray-50 ">{message}</p>
<p class="dark:text-gray-50 ">Vidas: {lifes}</p>
