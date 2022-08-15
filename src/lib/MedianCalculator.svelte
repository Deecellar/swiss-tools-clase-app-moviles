<script>
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

<input type="number" min="0" name="Max Value" id="max" bind:value={max} />
<input
    type="number"
    {max}
    min="0"
    name="Approved Note"
    id="approved"
    bind:value={approved}
/>
<input
    type="number"
    name="scores"
    id="scores"
    min="1"
    bind:value={ammount_of_scores}
/>
<table class="bg-slate-200">
    {#each notes as note, i}
        <input
            type="number"
            name="Note {i}"
            id="note{i}"
            {max}
            min="0"
            bind:value={note.note}
        />
        <input
            type="number"
            name="percentage {i}"
            id="percentage{i}"
            max={100.0}
            min="0.01"
            bind:value={note.percentage}
        />
    {/each}
</table>

<p class={result >= approved ? "text-green-500" : "text-red-500"}>{result}</p>
