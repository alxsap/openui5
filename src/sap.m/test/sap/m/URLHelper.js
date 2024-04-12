var person = {
	name : "John Smith",
	tel : "+49 6227 747474",
	sms : "+49 173 123456",
	email : "john.smith@sap.com",
	website : "http://www.sap.com",
	address : "Walldorf, Germany"
}

var page = new sap.m.Page({
	title : person.name,
	content : [new sap.m.List({
		inset : true,
		headerText : "!!! You need a SIM Card to test properly !!!",
		items : [new sap.m.DisplayListItem({
			label : "Name",
			value : person.name
		}), new sap.m.DisplayListItem({
			label : "Telephone",
			value : person.tel,
			type : "Active",
			press : function() {
				sap.m.URLHelper.triggerTel(person.sms);
			}
		}), new sap.m.DisplayListItem({
			label : "Sms",
			value : person.sms,
			type : "Active",
			press : function() {
				sap.m.URLHelper.triggerSms(person.sms);
			}
		}), new sap.m.DisplayListItem({
			id : "email",
			label : "Email",
			value : person.email,
			type : "Active",
			press : function() {
				sap.m.URLHelper.triggerEmail(person.email, "Info", "Dear " + person.name + ",\nThis is a test messsage &cc=test@sap.com ");
			}
		}), new sap.m.DisplayListItem({
			label : "Address",
			value : person.address,
			type : "Active",
			press : function() {
				sap.m.URLHelper.redirect("http://maps.apple.com/?q=" + person.address, true);
			}
		}), new sap.m.DisplayListItem({
			id : "website",
			label : "Website",
			value : person.website,
			type : "Active",
			press : function() {
				sap.m.URLHelper.redirect(person.website, true);
			}
		})]
	})]
});

new sap.m.App().addPage(page).placeAt("body");