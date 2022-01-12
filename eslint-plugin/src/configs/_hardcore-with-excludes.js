/** @file `eslint-config-hardcore`'s `recommended` config but with some plugins disabled. */
"use strict";

const { extractConfig, disablePlugins } = require("eslint-disable");

/** @type {import("eslint").Linter.Config} */
const config = disablePlugins(
	extractConfig({
		extends: "hardcore",
		root: true,
	}),
	["json", "@html-eslint"],
);

module.exports = config;
