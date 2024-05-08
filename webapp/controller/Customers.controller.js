sap.ui.define(["./BaseController", "sap/m/MessageBox", "sap/ui/model/json/JSONModel"], function (BaseController, MessageBox, JSONModel) {
	"use strict";

	return BaseController.extend("asst.test.controller.Coustomers", {
		onInit:function(){
            this.idDefaultItems = this.getView().byId('idCustomerTable');
			this.oDefaltModel = this.getOwnerComponent().getModel();
			this.localModel = new JSONModel();
            this.oDefaltModel.read("/Customers", {
                success:(oData)=>{
                    this.Results = oData.results;
                    this.localModel.setData(this.Results);
                    this.idDefaultItems.setModel(this.localModel,"Result");
                },
                error:function(error){
                    console.log(error);
                }
            })
		}	
	});
});
