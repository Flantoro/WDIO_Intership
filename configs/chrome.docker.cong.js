import { config as dockerConf } from "./docker.conf.js";

export const config = {
	...dockerConf,
	capabilities: [
		{
			maxInstances: 1,
			browserName: "chrome",
			acceptInsecureCerts: true,
			"goog:chromeOptions": {
				args: ["--disable-gpu", "--disable-dev-shm-usage"],
			},
		},
	],
};