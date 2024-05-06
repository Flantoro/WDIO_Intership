import { config as dockerConf } from "./docker.conf.js";

export const config = {
	...dockerConf,
	capabilities: [
		{
			maxInstances: 1,
			browserName: "firefox",
			acceptInsecureCerts: true,
			"moz:firefoxOptions": {
				args: ["--disable-gpu", "--disable-dev-shm-usage"],
			},
		},
	],
};