/**
 * @file Require rules.
 *
 * @author ChatGPT
 */
"use strict";

const path = require("path");

module.exports.rules = require("fs")
	// Read the directory and get all of the files in it
	.readdirSync(__dirname)
	// Use the reduce() method to create an object with the required modules
	.reduce((acc, file) => {
		// Skip the current file
		if (file === "index.js") return acc;

		// Get the path to the file
		// Require the file and store it in the object
		acc[path.parse(file).name] = require(path.resolve(__dirname, file));

		return acc;
	}, /** @type {Record<string, import("eslint").Rule.RuleModule>} */ ({}));
