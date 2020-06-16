const tripSpecificQuestions = {
    hiking: {
        questions: [{
            question: "What is your hiking experience?",
            answers: ["This will be my first time", "I’ve hiked a few times before", "I hike regularly", "I’m an expert"]
        }]
    },
    kayaking_canoeing: {
        questions: [{
            question: "What is your kayaking/canoeing experience?",
            answers: ["This will be my first time", "I’ve done it a few times before", "I do it regularly", "I’m an expert"]
        }, {
            question: "To go on this trip you will need to pass a swim test including swimming 50 yards (2 lengths of Drexel’s pool) without touching the bottom of the pool AND treading water for 1 minute (without touching the bottom). Are you a confident swimmer?",
            answers: ["Yes", "No"]
        }]
    },
    cross_country_skiing: {
        questions: [{
	        question: "What is your cross-country skiing experience?",
            answers: ["This will be my first time", "I’ve done it a few times before", "I do it regularly", "I’m an expert"]
        }]
    },
    deep_sea_fishing: {
        questions: [{
	        question: "What is your deep sea fishing experience?",
            answers: ["This will be my first time", "I’ve done it a few times before", "I do it regularly", "I’m an expert"]
        }]
    },
    horseback_riding: {
        questions: [{
	        question: "What is your horseback riding experience?",
            answers: ["This will be my first time", "I’ve done it a few times before", "I do it regularly", "I’m an expert"]
        }]
    },
    paintballing: {
        questions: [{
            question: "What is your paintballing experience?",
            answers: ["This will be my first time", "I’ve done it a few times before", "I do it regularly", "I’m an expert"]
        }]
    },
    skiing_snowboarding: {
        questions: [{
            question: "Have you ever been skiing/snowboarding before?",
            answers: ["Yes", "No"]
	    }, {
            question: "What is your skiing/snowboarding level?",
            answers: ["1 (Beginner)", "2 (Intermediate)", "3 (Expert)"]
	    }, {
            question: "Will you be renting?",
            answers: ["Not renting (bringing my own gear)", "Renting skis, boots, and poles", "Renting snowboard and boots"]
        }]
    },
    surfing: {
        questions: [{
            question: "What is your surfing experience?",
            answers: ["This will be my first time", "I’ve done it a few times before", "I do it regularly", "I’m an expert"]
        }, {
            question: "To go on this trip you will need to pass a swim test including swimming 50 yards (2 lengths of Drexel’s pool) without touching the bottom of the pool AND treading water for 1 minute (without touching the bottom). Are you a confident swimmer?",
            answers: ["Yes", "No"]
        }]
    },
    waterskiing: {
        questions: [{
            question: "What is your waterskiing/wakeboarding experience?",
            answers: ["This will be my first time", "I’ve done it a few times before", "I do it regularly", "I’m an expert"]
        }, {
            question: "To go on this trip you will need to pass a swim test including swimming 50 yards (2 lengths of Drexel’s pool) without touching the bottom of the pool AND treading water for 1 minute (without touching the bottom). Are you a confident swimmer?",
            answers: ["Yes", "No"]
        }]
    },
    whitewater_rafting: {
        questions: [{
            question: "What is your whitewater rafting experience?",
            answers: ["This will be my first time", "I’ve done it a few times before", "I do it regularly", "I’m an expert"]
        }]
    },
    climbing: {
        questions: [{
            question: "What is your climbing experience?",
            answers: ["This will be my first time", "I’ve done it a few times before", "I do it regularly", "I’m an expert"]
        }, {
            question: "Where have you climbed before?",
            answers: ["Never before", "Inside", "Outside", "Inside and Outside"]
        }, {
            question: "Do you know how to belay?",
            answers: ["Yes", "No"]
        }, {
            question: "Have you top roped before?",
            answers: ["Yes", "No"]
        }, {
            question: "Do you know how to lead climb?",
            answers: ["Yes", "No"]
        }]
    },
    caving: {
        questions: [{
            question: "What is your caving experience?",
            answers: ["This will be my first time", "I’ve done it a few times before", "I do it regularly", "I’m an expert"]
        }]
    },
    high_ropes_course: {
        questions: [{
	        question: "Have you ever been ziplining or gone on a high ropes course before?",
            answers: ["Yes", "No"]
        }]
    },
    trail_biking: {
        questions: [{
            question: "Do you know how to ride a bicycle?",
            answers: ["Yes", "No"]
        }, {
            question: "Have you ever ridden 20 miles or more at one time?",
            answers: ["Yes", "No"]
        }, {
            question: "Select the statement that best represents your bicycling experience.",
            answers: ["I rarely ride, or do so for short transportation", "I ride consistently for exercise or long-distance transportation", "I am a competitive cyclist"]
        }]
    },
    mountain_biking: {
        questions: [{
            question: "Do you know how to ride a bicycle?",
            answers: ["Yes", "No"]
        }, {
            question: "Have you ever been mountain biking before? (This means actual mountain biking trails, not just a flat trail)",
            answers: ["Yes", "No"]
        }, {
            question: "Have you ever ridden 20 miles or more at one time?",
            answers: ["Yes", "No"]
        }, {
            question: "Select the statement that best represents your bicycling experience.",
            answers: ["I rarely ride, or do so for short transportation", "I ride consistently for exercise or long-distance transportation", "I am a competitive cyclist"]
        }, {
            question: "If you have been mountain biking before, please rate your experience specifically in mountain biking",
            answers: ["This will be my first time mountain biking", "I've gone mountain biking a few times before", "I regularly mountain bike", "I am a competitive mountain biker"]
        }]
    }
}

export default tripSpecificQuestions;