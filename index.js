const fs = require('fs')

const dir = 'files'
const files = fs.readdirSync(dir)
const langs = [
    {
        name: 'da',
        files: [],
        content: ''
    },
    {
        name: 'de',
        files: [],
        content: ''
    },
    {
        name: 'en',
        files: [],
        content: ''
    },
    {
        name: 'es',
        files: [],
        content: ''
    },
    {
        name: 'fi',
        files: [],
        content: ''
    },
    {
        name: 'fr',
        files: [],
        content: ''
    },
    {
        name: 'it',
        files: [],
        content: ''
    },
    {
        name: 'nl',
        files: [],
        content: ''
    },
    {
        name: 'no',
        files: [],
        content: ''
    },
    {
        name: 'pl',
        files: [],
        content: ''
    },
    {
        name: 'sv',
        files: [],
        content: ''
    }
]


for (let i = 0; i < langs.length; i++) {
    const langObj = langs[i];
    const lang = langObj.name;
    let content = '';

    for (const fileName of files) {
        if (fileName.includes('revisioninfo')) {
            continue;
        }
    
        if (fileName.includes('_' + lang + '.')) {
            langObj.files.push(fileName)
            const buffer = fs.readFileSync(dir + '/' + fileName);
            content += buffer + '\n';
        }
    }

    writeFile(lang + '.txt', content)
}


function writeFile(fileName, content) {
    const outputDir = 'output/'
    try {
        fs.writeFileSync(outputDir + fileName, content);
    } catch (err) {
        console.error(err);
    }
}

