<script>
    import configureMeasurements, { allMeasures } from "convert-units";
    const convert = configureMeasurements(allMeasures);
    const measures = convert(null).measures();
    var list_of_elements = convert(1).list(null);
    var first_selected_index = 0;
    var second_selected_index = 0;
    var selected_unit_type = 0;
    var result = 0;
    var input = 0;

    $: {
        list_of_elements = convert(null).list(measures[selected_unit_type]);
        result = convert(input)
            .from(list_of_elements[first_selected_index].abbr)
            .to(list_of_elements[second_selected_index].abbr);
    }
    $: {
        result = convert(input)
            .from(list_of_elements[first_selected_index].abbr)
            .to(list_of_elements[second_selected_index].abbr);
    }
</script>

<div class="flex items-center" style="padding-top: 50%;">
    <div class="flex flex-col items-center">
        <label for="units" class="dark:text-slate-300 text-gray-700">
            Units
        </label>
        <select
            name="Units"
            bind:value={selected_unit_type}
            id="units"
            class="p-2 dark:bg-gray-50 bg-gray-200 mb-10 rounded-md w-1/2 "
        >
            {#each measures as element, i}
                <option value={i}>{element}</option>
            {/each}
        </select>
        <div class="">
            <label for="first" class="dark:text-slate-300 text-gray-700 mr-20 ">
                Unit 1
            </label>
            <label for="second" class="dark:text-slate-300 text-gray-700 ml-20">
                Unit 2
            </label>
        </div>
        <div class="flex mb-2">
            <select
                name="First Unit"
                id="first"
                bind:value={first_selected_index}
                class="p-2 dark:bg-gray-50 bg-gray-200 rounded-md  w-1/2 mr-2   "
            >
                {#each list_of_elements as element, i}
                    <option value={i}
                        >{element.plural}
                        {measures[selected_unit_type] == "current"
                            ? ""
                            : "(" + element.abbr + ")"}</option
                    >
                {/each}
            </select>

            <select
                name="Second Unit"
                id="second"
                bind:value={second_selected_index}
                class="p-2 dark:bg-gray-50 bg-gray-200 rounded-md w-1/2 ml-2"
            >
                {#each list_of_elements as element, i}
                    <option value={i}
                        >{element.plural}
                        {measures[selected_unit_type] == "current"
                            ? ""
                            : "(" + element.abbr + ")"}</option
                    >
                {/each}
            </select>
        </div>

        <div class="flex items-center mt-10">
            <label
                for="firstval"
                class="dark:text-slate-300 text-gray-700 mr-2 "
            >
                Input:
            </label>
            <input
                type="number"
                bind:value={input}
                name="First Value"
                id="firstval"
                class="p-2 dark:bg-gray-50 bg-gray-200 rounded-md "
            />
        </div>
        <div class="flex items-center mt-5">
            <label
                for="secondval"
                class="dark:text-slate-300 text-gray-700 mr-2 "
            >
                Result:
            </label>
            <input
                type="number"
                bind:value={result}
                name="Second Value"
                id="secondval"
                class="p-2 dark:disabled:bg-gray-200 disabled:bg-gray-300 rounded-md"
                disabled
            />
        </div>
    </div>
</div>
