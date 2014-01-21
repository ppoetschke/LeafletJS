
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var townEvent = {};	// @dataSource
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	townEvent.onCurrentElementChange = function townEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		App.updateMap("mapArea", sources.town.x, sources.town.y);
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		App.createMap("mapArea");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("town", "onCurrentElementChange", townEvent.onCurrentElementChange, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
