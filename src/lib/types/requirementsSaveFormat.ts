export interface RequirementsSaveFormat {
    requirement1: {
        subjectChoice: string;
        averageNote: number;
        noteRequirement: boolean;
    };
    requirement2: {
        scientificSelection: string;
        scientificNote: number;
    };
    requirement3: {
        level1: Requirement3Activity[];
        level2: Requirement3Activity[];
    };
}

interface Requirement3Activity {
    name: string;
    points: number;
}
