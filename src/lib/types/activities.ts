import type {Activity} from "$lib/types/activity";

export interface Activities{
    [type: string]: Activity[]
}