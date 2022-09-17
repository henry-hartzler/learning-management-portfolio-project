For windows users, npm start will not work. So use this line in package.json => 
    "watch:all": "parallelshell \"npm run watch:scss\" \"npm run lite\""
    and erase this line =>
    "watch:all": "parallelshell 'npm run watch:scss' 'npm run lite'"