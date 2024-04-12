function addToPage(oContent, oPage){
	oPage.addContent(oContent);
	oPage.addContent(oContent.addStyleClass("sapUiSmallMargin"));
}


var oPage = new sap.m.Page("testPage", {
	showHeader : false,
	enableScrolling : true
});
new sap.m.App({
	pages: [oPage]
}).placeAt("body");


// Object Attribute standalone cases

addToPage(new sap.m.ObjectStatus({
	title: "Large class",
	text : " Success state",
	state: "Success",
	inverted: true,
}).addStyleClass("sapMObjectStatusLarge"), oPage);

addToPage(new sap.m.ObjectStatus({
	text : "Large Image",
	icon : "https://i.pinimg.com/originals/40/6e/2d/406e2db1e9a9e65bd7d32f4071dad2a2.png"
}).addStyleClass("sapMObjectStatusLarge"), oPage);

addToPage(new sap.m.ObjectStatus({
	text : "Large Image",
	inverted: true,
	icon : "https://i.pinimg.com/originals/40/6e/2d/406e2db1e9a9e65bd7d32f4071dad2a2.png"
}).addStyleClass("sapMObjectStatusLarge"), oPage);

addToPage(new sap.m.ObjectStatus({
	text : "Image",
	inverted: true,
	icon : "https://i.pinimg.com/originals/40/6e/2d/406e2db1e9a9e65bd7d32f4071dad2a2.png"
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Error",
	icon: "sap-icon://alert",
	inverted: true,
	text : "Very long not active status containing only text Ñagçyfox Created by John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John DoeÑagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe"
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Success",
	icon: "sap-icon://pharmacy",
	active: true,
	inverted: true,
	text : "Very long active status containing only text Ñagçyfox Created by John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John DoeÑagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe"
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Information",
	active: true,
	inverted: true,
	text : "Very long active status containing only text Ñagçyfox Created by John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John DoeÑagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe"
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	inverted: true,
	text : "Warning",
	state: "Warning"
}), oPage);

addToPage(new sap.m.ObjectStatus({
	inverted: true,
	text : "Warning",
	state: "Warning"
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	inverted: true,
	text : "active Warning",
	state: "Warning",
	active: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	inverted: true,
	text : "active Warning",
	state: "Warning",
	active: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	inverted: true,
	text : "None",
	state: "None"
}), oPage);

addToPage(new sap.m.ObjectStatus({
	inverted: true,
	text : "None",
	state: "None"
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	inverted: true,
	text : "active None",
	state: "None",
	active: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	inverted: true,
	text : "active None",
	state: "None",
	active: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	inverted: true,
	state: "None",
	active: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Success",
	text : "Success status",
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://error",
	state: "Success",
	text : "Success status",
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Success",
	text : "Success active status",
	inverted: true,
	active: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://error",
	state: "Success",
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://error",
	state: "Success",
	text : "Success active status",
	inverted: true,
	active: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Information",
	text : "Information status",
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://error",
	state: "Information",
	text : "Information status",
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Information",
	text : "Information active status",
	inverted: true,
	active: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://error",
	state: "Information",
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://error",
	state: "Information",
	text : "Info active status",
	inverted: true,
	active: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Error",
	text: "Error status",
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Error",
	icon: "sap-icon://alert",
	text : "Error",
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Error",
	icon: "sap-icon://alert",
	inverted: true,
	active: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Error",
	icon: "sap-icon://alert",
	text : "Error active",
	inverted: true,
	active: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Error",
	text : "Error active",
	inverted: true,
	active: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication01",
	text : "Indication 1 active",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication01",
	text : "Indication 1 active",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication01",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication01",
	text : "Indication 1",
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication01",
	text : "Indication 1",
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication02",
	text : "Indication 2 active",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication02",
	text : "Indication 2 active",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication03",
	text : "Indication 3 active",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication03",
	text : "Indication 3 active",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication04",
	text : "Indication 4 active",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication04",
	text : "Indication 4 active",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication05",
	text : "Indication 5 active",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication05",
	text : "Indication 5 active",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication06",
	text : "Indication 6",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication06",
	text : "Indication 6",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication07",
	text : "Indication 7",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication07",
	text : "Indication 7",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication08",
	text : "Indication 8",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication08",
	text : "Indication 8",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication09",
	text : "Indication 9",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication09",
	text : "Indication 9",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication10",
	text : "Indication 10",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication10",
	text : "Indication 10",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication11",
	text : "Indication 11",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication11",
	text : "Indication 11",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication12",
	text : "Indication 12",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication12",
	text : "Indication 12",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication13",
	text : "Indication 13",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication13",
	text : "Indication 13",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication14",
	text : "Indication 14",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication14",
	text : "Indication 14",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication15",
	text : "Indication 15",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication15",
	text : "Indication 15",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication16",
	text : "Indication 16",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication16",
	text : "Indication 16",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication17",
	text : "Indication 17",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication17",
	text : "Indication 17",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication18",
	text : "Indication 18",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication18",
	text : "Indication 18",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication19",
	text : "Indication 19",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication19",
	text : "Indication 19",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	icon: "sap-icon://alert",
	state: "Indication20",
	text : "Indication 20",
	active:true,
	inverted: true
}), oPage);

addToPage(new sap.m.ObjectStatus({
	state: "Indication20",
	text : "Indication 20",
	active:true,
	inverted: true
}), oPage);