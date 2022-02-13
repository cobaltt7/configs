/** @file `eslint-config-hardcore`'s `recommended` config but with some plugins disabled. */
"use strict";

const disablePlugins = require("./_disablePlugins.js");

const resolved = disablePlugins(
	/** @type {import("eslint").Linter.Config} */ (require("eslint-config-hardcore/base")),
	["json", "@html-eslint"],
);

module.exports = resolved;
