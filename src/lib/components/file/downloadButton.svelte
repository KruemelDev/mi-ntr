<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import {Download} from "@lucide/svelte";
    import {createRequirementsFile} from "$lib/fileHandler.svelte";

    let {class: className} = $props();
</script>

<Button class={className} size="icon" variant="outline" onclick={createRequirementsFile}>
    <Download/>
</Button>