require('@babel/polyfill');

const users = [
    {
        username: 'captainamerica',
        password: 'steverogers'
    },
    {
        username: 'spiderman',
        password: 'peterparker'
    },
    {
        username: 'ironman',
        password: 'tonystark'
    },
    {
        username: 'thehulk',
        password: 'brucebanner'
    },
    {
        username: 'blackwidow',
        password: 'natasharomanova'
    },
    {
        username: 'thor',
        password: 'thorodinson'
    }
];

export function Get(credentials) {
    return users.filter(o => credentials.username === o.username && credentials.password === o.password)[0] || undefined;
}