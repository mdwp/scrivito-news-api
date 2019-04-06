import * as Scrivito from 'scrivito';

const NewsApiWidget = Scrivito.provideWidgetClass('NewsApiWidget', {
    attributes: {
        entries: 'string',
        apiKey: 'string',
        category: ['enum', { values: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'] }],
    },
});

export default NewsApiWidget;