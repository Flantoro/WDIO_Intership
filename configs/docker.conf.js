import { config as conf } from "../wdio.conf.js";

export const config = {
	...conf,
	port: 4444,
	//port:4441 when running selenium/standalone-chrome:latest
	//port:4442 when running selenium/standalone-firefox:latest
	//but at once, either selenium chrome standalone or firefox can run, not both
	maxInstances: 5,
	specs: ["./../test/specs/**/*.js"],
	capabilities: [
		{
			maxInstances: 1,
			browserName: "chrome",
			acceptInsecureCerts: true,
			"goog:chromeOptions": {
				args: ["--disable-gpu", "--disable-dev-shm-usage"],
			},
		},
		{
			maxInstances: 1,
			browserName: "firefox",
			acceptInsecureCerts: true,
			"moz:firefoxOptions": {
				args: ["--disable-gpu", "--disable-dev-shm-usage"],
			},
		},
	],
	services: [],
};