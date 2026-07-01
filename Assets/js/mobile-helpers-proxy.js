// ============================================================================ // 
// 🧰 MOBILE PROXY ISOLATION LAYER: LOCAL HELPERS INTERCEPT (NO FETCH CHANNELS)
// ============================================================================ // 
(function() { 
    console.log("[Mobile Sandbox Helpers] Mapping event validation scripts locally..."); 
    
    // Safety allocation wrapper to ensure the global asset trackers are mounted
    window.step3TargetPanel = window.step3TargetPanel || null;

    // Inject digital signature event validator patches cleanly into the window scope
    window.evaluatePoaInputStateMatrixMobile = function() { 
        const mobileBox = document.getElementById("poa_consent_checkbox"); 
        const mobileBtn = document.getElementById("mobile-continue-btn"); 
        if (!mobileBox || !mobileBtn) return; 
        
        // Keeps the footer toolbar button colors visually reactive 
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

    console.log("[Mobile Sandbox Success] Local Helpers executed smoothly with mobile validation overrides."); 
})();
