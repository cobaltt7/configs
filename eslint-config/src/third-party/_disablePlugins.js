/**
 * @template {import("eslint").Linter.Config | import("eslint").Linter.ConfigOverride} T
 * @param {T} config
 * @param {string[]} pluginNames
 *
 * @returns {T}
 */
function disablePlugins(config, pluginNames) {
	config = { ...config };
	if (config.plugins) {
		config.plugins = config.plugins.filter((pluginName) => {
			return !pluginNames.includes(pluginName);
		});
		if (config.plugins.length === 0) delete config.plugins;
	}
	if (config.extends) {
		config.extends = (
			typeof config.extends === "string" ? [config.extends] : config.extends
		).filter((configName) => {
			return !pluginNames.includes(
				configName.match(
					/^(?:plugin:)?(?:eslint-(?:config|plugin)-)?(.+?)(\/eslint-(?:config|plugin))?(?:\/.+)?$/,
				)?.[1] || "",
			);
		});
		if (config.extends.length === 0) delete config.extends;
	}
	for (const pluginName of pluginNames) {
		for (const [key] of Object.entries(config.rules || {})) {
			if (key.startsWith(pluginName + "/")) {
				delete config.rules?.[key];
			}
		}
		if (Object.keys(config.rules || {}).length === 0) delete config.rules;
		for (const [key] of Object.entries(config.env || {})) {
			if (key.startsWith(pluginName + "/")) {
				delete config.env?.[key];
			}
		}
		if (Object.keys(config.env || {}).length === 0) delete config.env;
		if (config.processor?.startsWith(pluginName + "/")) {
			delete config.processor;
		}
	}
	if (config.overrides) {
		config.overrides = config.overrides.map((override) => {
			return disablePlugins(override, pluginNames);
		});

		if (config.overrides.length === 0) delete config.overrides;
	}

	return config;
}

module.exports = disablePlugins;
