<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Select from "$lib/components/ui/select/index.js";
    import {Label} from "$lib/components/ui/label";
    import {Slider} from "$lib/components/ui/slider";

    const scientificWorkOptions = [
        { value: "Facharbeit", label: "Facharbeit in einem MINT-Fach mit mind. 10 Seiten oder" },
        { value: "Projektkurs", label: "Projektkurs im MINT-Bereich" },
        { value: "Lernleistung", label: "Besondere Lernleistung im MINT-Bereich" },
        { value: "Wettbewerbsbeitrag", label: "Wettbewerbsbeitrag im Rahmen von „Jugend forscht“" },
    ];

    let scientificWorkSelection = $state("Fachwissenschaftliche Arbeiten");

    let note: number = $state(9);
</script>

<Card.Root class="overflow-hidden rounded-xl border shadow-sm">
    <Card.Header class="border-b bg-muted/40">
        <Card.Title class="text-base md:text-lg">Anforderungsfeld 2</Card.Title>
        <Card.Description>Fachwissenschaftliche Arbeiten</Card.Description>
    </Card.Header>
    <Card.Content>
        <div class="rounded-lg border p-4 bg-card">
            <Label class="text-xs text-muted-foreground">Fachwissenschaftliche Arbeiten</Label>
            <div class="mt-2">
                <Select.Root type="single" bind:value={scientificWorkSelection}>
                    <Select.Trigger class="w-full justify-between">
                        <span class="truncate">{scientificWorkSelection}</span>
                    </Select.Trigger>
                    <Select.Content>
                        <Select.Group>
                            <Select.Label>Fächerbelegung</Select.Label>
                            {#each scientificWorkOptions as option (option.value)}
                                <Select.Item value={option.value} label={option.label}>
                                    {option.label}
                                </Select.Item>
                            {/each}
                        </Select.Group>
                    </Select.Content>
                </Select.Root>
            </div>
        </div>
        <div class="rounded-lg border p-4 bg-card mt-4">
            <div class="flex items-center justify-between">
                <span class="text-xs text-muted-foreground">Mittelwert aller Noten ≥</span>
                <span class="text-xs text-muted-foreground">{note} NP</span>
            </div>
            <div class="mt-3">
                <Slider
                        class="w-full"
                        bind:value={note}
                        type="single"
                        min={9}
                        max={13}
                        step={2}
                />
            </div>
        </div>
    </Card.Content>
</Card.Root>