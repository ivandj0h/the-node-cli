#!/usr/bin/env node

/**
 * private-cli
 * this is my first cli tool
 *
 * @author ivandi djoh gah <https://ivandjoh.online>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const axios = require('axios');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);

	if (input.includes('private')) {
		const res = await axios.get(
			'https://jsonplaceholder.typicode.com/albums?_page=1&_limit=5'
		);

		console.log(res.data);
	}
})();
