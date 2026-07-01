// ============================================================================ // 
// 🧰 MOBILE PROXY ISOLATION LAYER: FIXED LOCAL TRANSLATION SYNCHRONIZATION
// ============================================================================ // 
(function() { 
    console.log("[Mobile Sandbox Bridge] Binding local databases to formRegistry targets..."); 
    
    // Initialize formRegistry namespace if it is missing
    window.formRegistry = window.formRegistry || {}; 
    
    const urlParams = new URLSearchParams(window.location.search); 
    let detectedService = urlParams.get('service') || urlParams.get('package') || window.routeActiveServiceKey || ""; 
    if (detectedService) { 
        const targetKey = detectedService.toLowerCase().trim().replace(/[\s_]+/g, "-"); 
        const targetFormMasterKey = targetKey + "-form-master"; 
        window.formRegistry[targetFormMasterKey] = window.formRegistry[targetFormMasterKey] || {}; 
        
        // Target the globally available central service pricing database object
        const baseSourceDb = window.GLOBAL_COMPANY_PRICING || window.CENTRAL_SERVICE_PLAN_DB || {}; 
        
        if (baseSourceDb.packages) { 
            window.formRegistry[targetFormMasterKey].packages = baseSourceDb.packages; 
        } else if (baseSourceDb[targetKey] && baseSourceDb[targetKey].packages) { 
            window.formRegistry[targetFormMasterKey].packages = baseSourceDb[targetKey].packages; 
        } else if (baseSourceDb[targetKey]) {
            window.formRegistry[targetFormMasterKey].packages = baseSourceDb[targetKey].packages || baseSourceDb[targetKey];
        } else { 
            window.formRegistry[targetFormMasterKey].packages = baseSourceDb; 
        } 
        console.log("[Mobile Sandbox Bridge Success] Local mapping complete for key:", targetFormMasterKey); 
    } else {
        console.warn("[Mobile Sandbox Bridge Warning] No service context detected in URL parameters.");
    }
})();
