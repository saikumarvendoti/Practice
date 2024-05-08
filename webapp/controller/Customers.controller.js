sap.ui.define(["./BaseController", "sap/m/MessageBox", "sap/ui/model/json/JSONModel"], function (BaseController, MessageBox, JSONModel) {
	"use strict";

	return BaseController.extend("asst.test.controller.Coustomers", {
		onInit:function(){
            this.idDefaultItems = this.getView().byId('idCustomerTable');
            this.SelectedRecords = [];
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
		},
        onCollect:function(){
            let items = this.getView().byId('idCustomerTable').getSelectedItems();
            let i = 0;
            for ( i; i < items.length; i++) {
                let id = items[i].getBindingContextPath().split("/")[1];
                if (! this.SelectedRecords.includes(this.Results[id].CustomerID)) {
                    this.SelectedRecords.push(this.Results[id].CustomerID);
                }      
            }
            alert(this.SelectedRecords);
        }	
	});
});
