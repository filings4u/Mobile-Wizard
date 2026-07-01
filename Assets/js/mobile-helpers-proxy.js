// ============================================================================ // 
// 🧰 MOBILE PROXY ISOLATION LAYER: WIZARD HELPERS MATRIX (PART 1 OF 2)
// ============================================================================ // 
(function() { 
    console.log("[Mobile Sandbox] Fetching and isolating desktop layout helpers..."); 
    
    // FIXED DOMAIN INTERCEPT: Pulls the layout file directly across domains using an absolute path
    fetch('https://mobile.filings4u.com') 
        .then(response => { 
            if (!response.ok) throw new Error("Network response for helpers failed"); 
            return response.text(); 
        })
        .then(rawScriptText => { 
            let isolatedCode = rawScriptText.replace(/^(const|let|var)\s+step3TargetPanel\s*=/m, "window.step3TargetPanel ="); 

            if (isolatedCode.includes("evaluatePoaInputStateMatrix")) { 
                console.log("[Mobile Sandbox Match] Injecting digital signature event validator patches..."); 
                
                // Polyfill function mapping desktop gate execution parameters straight into our custom mobile layouts 
                isolatedCode += ` 
                    window.evaluatePoaInputStateMatrixMobile = function() { 
                        const mobileBox = document.getElementById("poa_consent_checkbox"); 
                        const mobileBtn = document.getElementById("mobile-continue-btn"); 
                        if (!mobileBox || !mobileBtn) return; 
                        
                        if (mobileBox.checked) { 
                            mobileBtn.style.opacity = "1"; 
                            mobileBtn.style.cursor = "pointer"; 
                        } else { 
                            mobileBtn.style.opacity = "0.6"; 
                        } 
                    }; 
                    window.runActivePoaClickValidationGateMobile = function(event) { 
                        const mobileBox = document.getElementById("poa_consent_checkbox"); 
                        if (mobileBox && !mobileBox.checked) { 
                            if (event) event.preventDefault(); 
                            alert("Please check the legal acknowledgment box to confirm your Power of Attorney before continuing."); 
                            return false; 
                        } 
                        return true; 
                    }; 
                `; 
            } 

            // Execute the patched runtime script inside the browser head module 
            const scriptNode = document.createElement("script"); 
            scriptNode.text = isolatedCode; 
            document.head.appendChild(scriptNode); 
            console.log("[Mobile Sandbox Success] Isolated Helpers executed smoothly with mobile validation overrides."); 
        }) 
        .catch(err => console.error("[Mobile Sandbox Error] Unable to proxy Helpers:", err)); 
})();
