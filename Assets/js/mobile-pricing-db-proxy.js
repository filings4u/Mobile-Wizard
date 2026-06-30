// ============================================================================ //
// 🧰 MOBILE PROXY ISOLATION LAYER: WIZARD PRICING DATABASE
// ============================================================================ //
(function() {
    console.log("[Mobile Sandbox] Fetching and isolating desktop pricing parameters...");
    
    fetch('assets/js/wizard-pricing-db.js')
        .then(response => {
            if (!response.ok) throw new Error("Network response for pricing DB failed");
            return response.text();
        })
        .then(rawScriptText => {
            // RegEx: Replaces rigid const/let declarations with open global parameters
            let isolatedCode = rawScriptText.replace(/^(const|let|var)\s+urlParamsMatrix\s*=/m, "window.urlParamsMatrix =");
            
            // Execute the sanitized codebase safely inside an isolated script node
            const scriptNode = document.createElement("script");
            scriptNode.text = isolatedCode;
            document.head.appendChild(scriptNode);
            console.log("[Mobile Sandbox Success] Isolated Pricing DB executed smoothly without collisions.");
        })
        .catch(err => console.error("[Mobile Sandbox Error] Unable to proxy Pricing DB:", err));
})();
