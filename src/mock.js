let MOCK_FAMILY = [
    {
        index: 0,
        formData: {
            "is-primary-guest": true,
            "email": "victor.kwon1@gmail.com",
            "age-group": "adult",
            "first-name": "Kyo Jin",
            "last-name": "Kwon",
            "details": "Dishes should be served by AI cat.",
            "reception": "attending"
        }
    },
    {
        index: 1,
        formData: {
            "is-primary-guest": false,
            "email": "hhkimmy95@gmail.com",
            "age-group": "adult",
            "first-name": "Hee Hyun",
            "last-name": "Kim",
            "details": "I need a bib.",
            "reception": "attending"
        }
    },
    {
        index: 2,
        formData: {
            "is-primary-guest": false,
            "email": "",
            "age-group": "baby",
            "first-name": "Little Hee Hyun",
            "last-name": "Kwon",
            "details": "I also need a bib.",
            "reception": "attending"
        }
    },
]

export default function fetchFamily(familyId) {
    return {
        KWON: MOCK_FAMILY
    }[familyId]
}
