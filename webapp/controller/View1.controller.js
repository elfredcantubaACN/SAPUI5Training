;sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.acn.training.project1.controller.View1", {
        onInit() {
        },

        onPressClear: function(oEvent) {
            let oInputName = this.getView().byId("input_name");
            let oStreetName = this.getView().byId("input_street");
            let oText_No = this.getView().byId("text_no");
            let oZip_Code = this.getView().byId("text_zip_code");
            let oText_City = this.getView().byId("text_city");
            let oSel_Country = this.getView().byId("select_country");

            //Clear items
            oInputName.setValue("");
            oStreetName.setValue("");
            oText_No.setValue("");
            oZip_Code.setValue("");
            oText_City.setValue("");
            oSel_Country.setValue("");
        }
    });
});