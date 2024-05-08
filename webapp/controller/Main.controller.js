sap.ui.define(["./BaseController", "sap/m/MessageBox", "sap/ui/model/json/JSONModel"], function (BaseController, MessageBox, JSONModel) {
	"use strict";

	return BaseController.extend("asst.test.controller.Main", {
		onInit:function(){
			this.routesModel = new JSONModel("../model/routes.json");
			this.getView().setModel(this.routesModel, "routes");
			this.oRouter = this.getOwnerComponent().getRouter();
		},
		onPress:function(oRoute){
			this.oRouter.navTo(oRoute);
		}
	});
});
