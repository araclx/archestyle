'use strict'

// Package should be based on create-react-app
// https://github.com/facebook/create-react-app/blob/master/packages/create-react-app/createReactApp.js

const https = require('https')
const chalk = require('chalk')
const commander = require('commander')
const signale = require('signale')

const package = require('../package.json')

let nameOfProject

const program = new commander.Command(package.name)
	.version(package.version)
	.arguments('<directory>')
	.usage(`${chalk.green('<directory>')} [options]`)
	.action((name) => {
		nameOfProject = name
	})
	.option('--verbose', 'Print additional logs')
	.option('--info', 'Print enviroment debug info')
	.on('--help', () => {
		signale.log(`   Only ${chalk.green('<directory>')} is required.`)
		singale.log()
	})
	.parse(process.argv)

if (program.info) {
	singale.log(chalk.blog('\nEnviroment Info:'))
	singale.log(`\n Current version of ${package.name}: ${package.version}`)
	singale.log(`\n Running from: ${__dirname}`)
	return envinfo
		.run(
			{
				System: ['OS', 'CPU'],
				Binaries: ['node', 'npm', 'yarn'],
			},
			{
				duplicates: true,
				showNotFound: true,
			}
		)
		.then(console.log)
}
