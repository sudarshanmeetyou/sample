/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/experiment/sample/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});