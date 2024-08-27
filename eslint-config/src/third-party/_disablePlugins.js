/** @file Disable plugins in a config. */
/* eslint-disable fp/no-delete -- No easy workaround. */
"use strict";

/**
 * Disable plugins in a config.
 *
 * @template {import("eslint").Linter.Config | import("eslint").Linter.ConfigOverride} T
 *
 * @param {T} input - The input config.
 * @param {string[]} pluginNames - The plugin names to disable.
 *
 * @returns {T} - The config without the disabled plugins.
 */
function disablePlugins(input, pluginNames) {
	const config = { ...input };

	config.plugins &&= config.plugins.filter((pluginName) => !pluginNames.includes(pluginName));

	config.extends &&= (
		typeof config.extends === "string" ? [config.extends] : config.extends
	).filter(
		(configName) =>
			!pluginNames.includes(
				/^(?:plugin:)?(?:eslint-(?:config|plugin)-)?(?<pluginName>.+?)(?:\/eslint-(?:config|plugin))?(?:\/.+)?$/.exec(
					configName,
				)?.groups?.pluginName || "",
			),
	);

	for (const pluginName of pluginNames) {
		if (config.rules) {
			for (const [key] of Object.entries(config.rules))
				if (key.startsWith(`${pluginName}/`)) delete config.rules[key];
		}

		if (config.env) {
			for (const [key] of Object.entries(config.env))
				if (key.startsWith(`${pluginName}/`)) delete config.env[key];
		}

		if (config.processor?.startsWith(`${pluginName}/`)) delete config.processor;
	}

	config.overrides &&= config.overrides.map((override) => disablePlugins(override, pluginNames));

	return config;
}

module.exports = disablePlugins;
