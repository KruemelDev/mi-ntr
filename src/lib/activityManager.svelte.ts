import type {Activity} from "$lib/activity";

export class ActivityManager {
    public activities: Activity[] = $state([]);
    public addActivity(activity: Activity) {
        this.activities.push(activity);
    }
    public removeActivity(activity: Activity) {
        this.activities = this.activities.filter(a => a !== activity);
    }
    public getActivities(): Activity[] {
        return this.activities;
    }
}