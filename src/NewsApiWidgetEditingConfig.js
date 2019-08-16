import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('NewsApiWidget', {
    title: 'Newsapi Import',
    attributes: {
        entries: {
            title: "Entries",
            description: "Number of entries. Default: 5"
        },
        apiKey: {
            title: "API-Key",
            description: "Your API-Key from newsapi.org"
        },

        category: {
            title: 'Category',
            description: 'Default: General',
            values: [
                { value: 'business', title: 'Business' },
                { value: 'entertainment', title: 'Entertainment' },
                { value: 'general', title: 'General' },
                { value: 'health', title: 'Health' },
                { value: 'science', title: 'Science' },
                { value: 'sports', title: 'Sports' },
                { value: 'technology', title: 'Technology' },
            ],
        },

    },

    properties: [
        'entries',
        'category',
        'apiKey'
    ],

    initialContent: {
        category: 'General',
        entries: '5'
    },
});