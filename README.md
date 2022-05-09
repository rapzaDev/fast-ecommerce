# REST API TEMPLATE using Express.js in Node.js

Contains all my personal configuration for creation of REST API with express.js

## Tech Stack

**Server:** Express.js, Node.js.

## Script dev
- `"dev" : "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"`


## Installation

Dependencies:
```bash
  yarn
```

For the Typescript:

```bash
  yarn add typescript -D
  yarn tsc init
```

For express:

```bash
  yarn add @types/express -D
```

## Configuration: 

### package.json:
- `--transpile-only`: Disables ts-node-dev error sintax verification. I'll check this in production time.
- `--ignore-watch`: Set the command to avoid node_modules folder verification.
- `--respawn`: Updates the application always the code change. 

### tsconfig.json:
- `"strict": true ` [ DISABLED ] 
- `"rootDir": "./src"`
- `"outDir": "./dist"`

## Authors

- [@rapzaDev](https://github.com/rapzaDev)