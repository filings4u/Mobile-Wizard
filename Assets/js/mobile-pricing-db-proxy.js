// ============================================================================ //
// 🧰 MOBILE PROXY ISOLATION LAYER: WIZARD PRICING DATABASE (DATA BRIDGE FIXED)
// ============================================================================ //
(function() { 
    console.log("[Mobile Sandbox] Fetching and isolating desktop pricing parameters..."); 
    
    fetch('assets/js/wizard-pricing-db.js') 
        .then(response => { 
            if (!response.ok) throw new Error("Network response for pricing DB failed"); 
            return response.text(); 
        }) 
        .then(rawScriptText => { 
            // 1. Existing Rule: Replaces rigid const/let declarations with open global parameters
            let isolatedCode = rawScriptText.replace(/^(const|let|var)\s+urlParamsMatrix\s*=/m, "window.urlParamsMatrix ="); 

            // 2. DATA BRIDGE PATCH: Initialize formRegistry global namespace if missing
            window.formRegistry = window.formRegistry || {};

            // Append code to automatically copy desktop pricing entities into mobile structural keys
            isolatedCode += `
                (function() {
                    console.log("[Mobile Sandbox Bridge] Binding desktop databases to formRegistry targets...");
                    
                    // Identify the active service key via URL search queries or global state anchors
                    const urlParams = new URLSearchParams(window.location.search);
                    let detectedService = urlParams.get('service') || urlParams.get('package') || window.routeActiveServiceKey || "";
                    
                    if (detectedService) {
                        const targetKey = detectedService.toLowerCase().trim().replace(/[\\s_]+/g, "-");
                        const targetFormMasterKey = targetKey + "-form-master";
                        
                        // Map the central pricing memory tables to the specific target keys required by mobile-wizard.js
                        window.formRegistry[targetFormMasterKey] = window.formRegistry[targetFormMasterKey] || {};
                        
                        // Bridge configurations from whatever object structure your desktop wizard populated
                        const baseSourceDb = window.GLOBAL_COMPANY_PRICING || window.CENTRAL_SERVICE_PLAN_DB || {};
                        
                        if (baseSourceDb.packages) {
                            window.formRegistry[targetFormMasterKey].packages = baseSourceDb.packages;
                        } else if (baseSourceDb[targetKey] && baseSourceDb[targetKey].packages) {
                            window.formRegistry[targetFormMasterKey].packages = baseSourceDb[targetKey].packages;
                        } else {
                            // Direct object backup assignment reference mapping pass
                            window.formRegistry[targetFormMasterKey].packages = baseSourceDb;
                        }
                        
                        console.log("[Mobile Sandbox Bridge Success] Synced service key:", targetFormMasterKey, window.formRegistry[targetFormMasterKey]);
                    }
                })();
            `;

            // Execute the sanitized, patched codebase safely inside an isolated script node
            const scriptNode = document.createElement("script"); 
            scriptNode.text = isolatedCode; 
            document.head.appendChild(scriptNode); 
            
            console.log("[Mobile Sandbox Success] Isolated Pricing DB executed smoothly with database bridge mapping."); 
        }) 
        .catch(err => console.error("[Mobile Sandbox Error] Unable to proxy Pricing DB:", err)); 
})();
