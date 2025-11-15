# Webza Boilerplate

## Features
Uses PHP as templating syntax for html pages generation

## Requirements
PHP 8 or higher
Node.js 22 or higher

## Usage
```
$ composer install
$ npm install
$ npm run dev
$ npm run build.
```

## Source layers
`pages`
↑
`layouts`
↑
`widgets`
↑
`shared`
	`config/bundle.scss` - exception. can import styles from upper layers
	`config/bundle.ts` - exception. can import scripts from upper layers

## Folders
- **package-scripts** - all related to the scripts section in **package.json**
