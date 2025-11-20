<script lang="ts">
    import activities from "$lib/assets/activities.json";
    import * as Select from "$lib/components/ui/select";
    import {Activity} from "$lib/requirementThree/activity.js";

    let {index = $bindable(), niveau = $bindable(), category = $bindable(), activityManager} = $props();

    let activitySelection: string = $state("activities/0");
</script>

<Select.Root type="single" bind:value={activitySelection} onValueChange={() => {
            // Achtung: Schwarze Magie
            let split = activitySelection.split("/");
            split[0] === "competitions" ? category = activities["competitions"] : category = activities["activities"];
            index = Number(split[1]);
            niveau = "";
        }}>
    <Select.Trigger class="w-full justify-between">
        <span class="truncate">{category[index]?.label}</span>
    </Select.Trigger>
    <Select.Content class="max-w-md lg:max-w-lg whitespace-normal max-h-80">
        <Select.Group>
            <Select.Label>Aktivitäten</Select.Label>
            {#each activities["activities"] as activity, i}
                <Select.Item disabled={!activity.multipleParticipation && activityManager.hasActivity(new Activity(activity.label, Number(niveau)*5))} value={"activities/" + String(i)} label={activity.label}
                             class="p-2 flex items-start">
                            <span class="min-w-0 flex-1 whitespace-normal break-words">
                                {activity.name}
                            </span>
                </Select.Item>
            {/each}
            <Select.Separator/>
            <Select.Label>Wettbewerbe</Select.Label>
            {#each activities["competitions"] as competition, i}
                <Select.Item disabled={!competition.multipleParticipation && activityManager.hasActivity(new Activity(competition.label, Number(niveau)*5))} value={"competitions/" + String(i)} label={competition.label}
                             class="p-2 flex items-start">
                            <span class="min-w-0 flex-1 whitespace-normal break-words">
                                {competition.name}
                            </span>
                </Select.Item>
            {/each}
        </Select.Group>
    </Select.Content>
</Select.Root>