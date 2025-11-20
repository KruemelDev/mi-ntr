<script lang="ts">
    import {Label} from "$lib/components/ui/label/index.js";
    import * as Tooltip from "$lib/components/ui/tooltip/index.js";
    import * as RadioGroup from "$lib/components/ui/radio-group/index.js";

    let {index = $bindable(), niveau = $bindable(), category = $bindable()} = $props();
</script>

<Tooltip.Provider>
    <RadioGroup.Root bind:value={niveau}>
        <!--TODO: Add possibility to display the requirements for a specific niveau of a specific activity-->
        <Tooltip.Root>
            <Tooltip.Trigger disabled={category[index]?.description1 === ""}>
                <div class="flex items-center space-x-2">
                    <RadioGroup.Item value="1" id="niveau1" disabled={!category[index]?.niveau1}></RadioGroup.Item>
                    <Label class={!category[index]?.niveau1 ? "text-muted-foreground": ""} for="niveau1">Niveau
                        1</Label>
                </div>
            </Tooltip.Trigger>
            <Tooltip.Content>
                {category[index]?.description1}
            </Tooltip.Content>

        </Tooltip.Root>

        <Tooltip.Root>
            <Tooltip.Trigger disabled={category[index]?.description2 === ""}>
                <div class="flex items-center space-x-2">
                    <RadioGroup.Item value="2" id="niveau2"
                                     disabled={!category[index]?.niveau2}></RadioGroup.Item>
                    <Label class={!category[index]?.niveau2 ? "text-muted-foreground": ""} for="niveau2">Niveau
                        2
                    </Label>
                </div>
            </Tooltip.Trigger>
            <Tooltip.Content>
                {category[index]?.description2}
            </Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
            <Tooltip.Trigger disabled={category[index]?.description3 === ""}>
                <div class="flex items-center space-x-2">
                    <RadioGroup.Item value="3" id="niveau3" disabled={!category[index]?.niveau3}></RadioGroup.Item>
                    <Label class={!category[index]?.niveau3 ? "text-muted-foreground": ""} for="niveau3">Niveau
                        3</Label>
                </div>
            </Tooltip.Trigger>
            <Tooltip.Content>
                {category[index]?.description3}
            </Tooltip.Content>
        </Tooltip.Root>

    </RadioGroup.Root>
</Tooltip.Provider>