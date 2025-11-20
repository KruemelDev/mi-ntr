<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import AverageNoteSlider from "$lib/components/requirements/averageNoteSlider.svelte";
    import SelectBox from "$lib/components/requirements/selectBox.svelte";
    import {scientificWorkOptions} from "$lib/requirementData.svelte.js";
    import {requirementTwoData} from "$lib/requirementData.svelte.js";

</script>

<Card.Root class="overflow-hidden rounded-xl border shadow-sm">
    <Card.Header class="border-b">
        <Card.Title class="text-base md:text-lg">Anforderungsfeld 2</Card.Title>
        <Card.Description>Fachwissenschaftliche Arbeiten</Card.Description>
    </Card.Header>
    <Card.Content class="space-y-4">
        <SelectBox list={scientificWorkOptions} bind:selection={requirementTwoData.scientificSelection}/>
        <AverageNoteSlider bind:averageNote={requirementTwoData.scientificNote} sliderText="Note ≥"/>
    </Card.Content>
</Card.Root>