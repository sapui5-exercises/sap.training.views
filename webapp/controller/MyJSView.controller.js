sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.controller.MyJSView", {

		onCBSelect: function() {
			var oCheckBox = this.getView().byId("idCheckBox");
			if (oCheckBox.getSelected()) {
				oCheckBox.setText("Ja");
			} else {
				oCheckBox.setText("Nein");
			}
		}

	});

});

