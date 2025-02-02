module.exports = {
    input: [
        'src/**/*.{js,jsx,ts,tsx}',
    ],
    output: './public/locales',
    options: {
        sort: true,
        debug: true,
        lngs: ['en', 'ru'],
        ns: ['translation'],
        defaultLng: 'ru',
        defaultNs: 'translation',
        defaultValue: (lng, ns, key) => {
            return `ERROR value was not added to the ${key}`;
        },
        resource: {
            loadPath: 'public/locales/{{lng}}/{{ns}}.json',
            savePath: '{{lng}}/{{ns}}.json',
            jsonIndent: 2,
        },
        func: {
            list: ['i18next.t', 'i18n.t', 't'],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
    },
};
