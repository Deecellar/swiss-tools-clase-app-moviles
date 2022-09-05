<script>
    import VirtualList from "./VirtualList.svelte";
    var list = new Array();
    var max = 5;
    var approved = 3;
    var ammount_of_scores = 1;
    var result = 0;
    var notes = [{ percentage: 0, note: 0 }];

    $: {
        while (notes.length > ammount_of_scores) {
            notes.pop();
        }
        if (notes.length < ammount_of_scores) {
            for (let index = notes.length; index < ammount_of_scores; index++) {
                notes.push({ percentage: 0, note: 0 });
            }
        }
        notes = notes;
    }

    $: {
        result = 0;
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            result += element.note * (element.percentage / 100);
        }
    }

    $: {
        if (approved > max) approved = max;
        let accumulative = 0;
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element.percentage + accumulative > 100) {
                notes[index].percentage = 100 - accumulative;
            }
            if (element.note > max) {
                notes[index].note = max;
            }
            if (element.percentage > 100) {
                notes[index].percentage = 100;
            }
            if (element.note < 0) {
                notes[index].note = 0;
            }
            if (element.percentage < 0) {
                notes[index].percentage = 0;
            }
            accumulative += element.percentage;
        }
    }
</script>

<div class="flex flex-col pt-8 pb-10">
    <div class="flex flex-col items-center">
        <label for="max" class="dark:text-slate-300 text-gray-700">
            Nota Maxima
        </label>
        <input
            type="number"
            min="0"
            name="Max Value"
            id="max"
            class="button"
            bind:value={max}
        />
    </div>
    <div class="flex flex-col items-center">
        <label for="approved" class="dark:text-slate-300 text-gray-700">
            Nota de aprobado
        </label>
        <input
            type="number"
            {max}
            min="0"
            name="Approved Note"
            id="approved"
            class="button"
            bind:value={approved}
        />
    </div>
    <div class="flex flex-col items-center">
        <label for="scores" class="dark:text-slate-300 text-gray-700">
            Cantidad de notas
        </label>
        <input
            type="number"
            name="scores"
            id="scores"
            min="1"
            class="button"
            bind:value={ammount_of_scores}
        />
    </div>
    <div class="flex flex-col items-center">
        <VirtualList items={notes} height="14rem" let:index>
            <div class="flex flex-row items-center">
                <div class="flex flex-col items-center px-2">
                    <label
                        for="note{index}"
                        class="dark:text-slate-300 text-gray-700"
                    >
                        Nota
                    </label>
                    <input
                        type="number"
                        name="Note {index}"
                        id="note{index}"
                        {max}
                        min="0"
                        bind:value={notes[index].note}
                    />
                </div>
                <div class="flex flex-col items-center">
                    <label
                        for="percentage{index}"
                        class="dark:text-slate-300 text-gray-700"
                    >
                        Porcentaje
                    </label>
                    <input
                        type="number"
                        name="percentage {index}"
                        id="percentage{index}"
                        max={100.0}
                        min="0.01"
                        bind:value={notes[index].percentage}
                    />
                </div>
            </div>
        </VirtualList>
    </div>

    <div class="flex flex-col items-center pt-4">
        <p class="dark:text-slate-300 text-gray-700">Resultado</p>

        <p class={result >= approved ? "text-green-500" : "text-red-500"}>
            {result}
        </p>
    </div>
</div>

<style lang="sass">
    .button
      @apply p-2 dark:bg-gray-50 bg-gray-200 mb-10 rounded-md w-1/2
</style>
