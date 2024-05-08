sap.ui.define(["./BaseController", "sap/m/MessageBox", "sap/ui/model/json/JSONModel"], function (BaseController, MessageBox, JSONModel) {
	"use strict";

	return BaseController.extend("asst.test.controller.Products", {
		onInit:function(){
            this.idDefaultItems = this.getView().byId('idProducts');
			this.oDefaltModel = this.getOwnerComponent().getModel();
			this.localModel = new JSONModel();
            this.oDefaltModel.read("/Products", {
                success:(oData)=>{
                    this.Results = oData.results;
                    this.localModel.setData(this.Results);
                    this.idDefaultItems.setModel(this.localModel,"products");
                },
                error:function(error){
                    console.log(error);
                }
            })
		}	
	});
});
