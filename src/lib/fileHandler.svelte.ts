import {requirementOneData, requirementTwoData, activityManagerLevel1, activityManagerLevel2} from "$lib/requirementData.svelte";
import type {RequirementsSaveFormat} from "$lib/types/requirementsSaveFormat";
import {Activity} from "$lib/requirementThree/activity";

export function createRequirementsFile() {
    const requirement1 = requirementOneData;
    const requirement2 = requirementTwoData;

    const requirement3 = {
        level1: activityManagerLevel1.getActivities(),
        level2: activityManagerLevel2.getActivities()
    };
    const data: RequirementsSaveFormat = {
        requirement1,
        requirement2,
        requirement3
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json"
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "requirements.json";
    a.click();

    URL.revokeObjectURL(url);
}
export function loadRequirements(json: RequirementsSaveFormat) {
    requirementOneData.subjectChoice = json.requirement1.subjectChoice;
    requirementOneData.averageNote = json.requirement1.averageNote;
    requirementOneData.noteRequirement = json.requirement1.noteRequirement;

    requirementTwoData.scientificSelection = json.requirement2.scientificSelection;
    requirementTwoData.scientificNote = json.requirement2.scientificNote;

    activityManagerLevel1.clearActivities();
    activityManagerLevel2.clearActivities();

    for (const level1Activity of json.requirement3.level1) {
        activityManagerLevel1.addActivity(new Activity(level1Activity.name, level1Activity.points));
    }
    for (const level2Activity of json.requirement3.level2) {
        activityManagerLevel2.addActivity(new Activity(level2Activity.name, level2Activity.points));
    }
}