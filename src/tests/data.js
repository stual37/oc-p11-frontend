export const CITIES = [
    {
        id: 1, 
        name: "PARIS"
    }, 
    {
        id: 2, 
        name: "BORDEAUX"
    }, 
    {
        id: 3, 
        name: "MARSEILLE"
    }
];



export const SPECIALITIES = [
    {
        "id": 1,
        "name": "Cardiologie",
        "hospitals": [
            {
                "id": 2,
                "bedAvailable": 0,
                "city": {
                    "id": 2,
                    "name": "BORDEAUX"
                },
                "name": "Hôpital Julia Crusher"
            },
            {
                "id": 1,
                "bedAvailable": 9,
                "city": {
                    "id": 1,
                    "name": "PARIS"
                },
                "name": "Hôpital Fred Brooks"
            }
        ]
    },
    {
        "id": 2,
        "name": "Immunologie",
        "hospitals": [
            {
                "id": 3,
                "bedAvailable": 5,
                "city": {
                    "id": 3,
                    "name": "MARSEILLE"
                },
                "name": "Hôpital Beverly Bashir"
            },
            {
                "id": 1,
                "bedAvailable": 9,
                "city": {
                    "id": 1,
                    "name": "PARIS"
                },
                "name": "Hôpital Fred Brooks"
            }
        ]
    },
    {
        "id": 3,
        "name": "Neuropathologie",
        "hospitals": [
            {
                "id": 3,
                "bedAvailable": 5,
                "city": {
                    "id": 3,
                    "name": "MARSEILLE"
                },
                "name": "Hôpital Beverly Bashir"
            }
        ]
    },
    {
        "id": 4,
        "name": "Diagnostic",
        "hospitals": [
            {
                "id": 3,
                "bedAvailable": 5,
                "city": {
                    "id": 3,
                    "name": "MARSEILLE"
                },
                "name": "Hôpital Beverly Bashir"
            }
        ]
    }
];
