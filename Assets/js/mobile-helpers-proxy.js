// ============================================================================ //
// 🧰 MOBILE PROXY ISOLATION LAYER: WIZARD HELPERS MATRIX
// ============================================================================ //
(function() {
    console.log("[Mobile Sandbox] Fetching and isolating desktop layout helpers...");
    
    fetch('assets/js/wizard-helpers.js')
        .then(response => {
            if (!response.ok) throw new Error("Network response for helpers failed");
            return response.text();
        })
        .then(rawScriptText => {
            // RegEx: Replaces rigid const/let declarations with open global parameters
            let isolatedCode = rawScriptText.replace(/^(const|let|var)\s+step3TargetPanel\s*=/m, "window.step3TargetPanel =");
            
            const scriptNode = document.createElement("script");
            scriptNode.text = isolatedCode;
            document.head.appendChild(scriptNode);
            console.log("[Mobile Sandbox Success] Isolated Helpers executed smoothly without collisions.");
        })
        .catch(err => console.error("[Mobile Sandbox Error] Unable to proxy Helpers:", err));
})();
