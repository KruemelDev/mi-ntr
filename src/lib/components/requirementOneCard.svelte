<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Select from "$lib/components/ui/select/index.js";
    import { Checkbox } from "$lib/components/ui/checkbox/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Slider } from "$lib/components/ui/slider/index.js";

    const subjectChoice = [
        { value: "Zwei Leistungskurse", label: "Zwei Leistungskurse im MINT-Bereich in der Q1 und Q2"},
        { value: "Ein Leistungskurs, zwei Grundkurse", label: "Ein Leistungskurs und zwei Grundkurse im MINT-Bereich in der Q1 und Q2" },
    ];
    let requirementOneSelection = $state("Fächerbelegung");
    let averageNote = $state(11);

    let noteRequirement = $state(false);

</script>

<Card.Root class="overflow-hidden rounded-xl border shadow-sm">
    <Card.Header class="border-b bg-muted/40">
        <Card.Title class="text-base md:text-lg">Anforderungsfeld 1</Card.Title>
        <Card.Description>Fächerbelegung in der Q-Phase</Card.Description>
    </Card.Header>
    <Card.Content class="space-y-4">
        <div class="rounded-lg border p-4 bg-card">
            <Label class="text-xs text-muted-foreground">Fächerbelegung</Label>
            <div class="mt-2">
                <Select.Root type="single" bind:value={requirementOneSelection}>
                    <Select.Trigger class="w-full justify-between">
                        <span class="truncate">{requirementOneSelection}</span>
                    </Select.Trigger>
                    <Select.Content>
                        <Select.Group>
                            <Select.Label>Fächerbelegung</Select.Label>
                            {#each subjectChoice as subject (subject.value)}
                                <Select.Item value={subject.value} label={subject.label}>
                                    {subject.label}
                                </Select.Item>
                            {/each}
                        </Select.Group>
                    </Select.Content>
                </Select.Root>
            </div>
        </div>
        <div class="rounded-lg border p-4 bg-card">
            <div class="flex items-center justify-between">
                <span class="text-xs text-muted-foreground">Mittelwert aller Noten ≥</span>
                <span class="text-xs text-muted-foreground">{averageNote} NP</span>
            </div>
            <div class="mt-3">
                <Slider
                        class="w-full"
                        bind:value={averageNote}
                        type="single"
                        min={9}
                        max={13}
                        step={2}
                />
            </div>
        </div>
        <div class="rounded-lg border p-4 bg-card">
            <div class="flex items-center gap-2">
                <Checkbox id="noteRequirement" bind:checked={noteRequirement} class="size-4" />
                <Label for="noteRequirement" class="text-xs">Kein Halbjahr weniger als 5 NP</Label>
            </div>
        </div>


    </Card.Content>
</Card.Root>