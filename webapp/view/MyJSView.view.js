sap.ui.jsview("sap.training.view.MyJSView", {

	getControllerName: function() {
		return "sap.training.controller.MyJSView";
	},

	createContent: function(oController) {

		var oText = new sap.m.Text({
			text: "Text auf JavaScript View"
		});

		var oCheckBox = new sap.m.CheckBox(this.createId("idCheckBox"), {
			text: "Nein"
		});

		oCheckBox.attachSelect(oController.onCBSelect, oController);

		return [oText, oCheckBox];

	}

});

