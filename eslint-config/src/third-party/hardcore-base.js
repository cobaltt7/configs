/** @file `eslint-config-hardcore`'s `recommended` config but with some plugins disabled. */
"use strict";

const disablePlugins = require("./_disablePlugins.js");

const resolved = disablePlugins(
	/** @type {import("eslint").Linter.Config} */ (
		/** @type {unknown} */ (require("eslint-config-hardcore/base.json"))
	),
	["json", "@html-eslint", "putout"],
);

module.exports = resolved;
