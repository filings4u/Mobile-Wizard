window.formRegistry = window.formRegistry || {}; 
window.isWizardCurrentlyRestoringStateVanilla = false; 
window.currentWizardActiveStep = 1; 
let databasePollingAttempts = 0; 

window.stepMetadataMatrix = { 
    1: { title: "Selected Package", desc: "Items and inclusions" }, 
    2: { title: "Service Form", desc: "Purchase configuration profile" }, 
    3: { title: "Add-Ons", desc: "Compliance assets & shields" }, 
    4: { title: "Power of Attorney", desc: "Digital signature execution" }, 
    5: { title: "Purchase Summary", desc: "Order item breakdowns" }, 
    6: { title: "Secure Payment", desc: "Encrypted checkout gateway" }, 
    7: { title: "Success Portal", desc: "Account creation systems" } 
}; 

function extractURLConfigurationParameters() { 
    const urlParams = new URLSearchParams(window.location.search); 
    
    // Read exact parameters coming straight from the query link
    let service = urlParams.get('service') || urlParams.get('package') || ""; 
    let plan = urlParams.get('plan') || ""; 

    if (!service || !plan) { 
        console.warn("[Mobile Engine] URL parameter strings are empty. Waiting on native app payload configurations..."); 
    } 

    // Process values strictly if they exist, otherwise default safely to an empty string without altering the user's url path
    window.routeActiveServiceKey = service ? service.toLowerCase().trim().replace(/[\s_]+/g, "-") : ""; 
    window.routeActivePlanKey = plan ? plan.toLowerCase().trim() : ""; 

    console.log(`[Mobile Context] Service: "${window.routeActiveServiceKey}", Plan: "${window.routeActivePlanKey}"`); 
} 

function verifyDatabaseSyncAndRender() { 
    console.log("[Mobile Engine] Inspecting real-time workspace allocation channels..."); 
    renderActiveWorkflowStepView(); 
}


function getActivePlanDetails() { 
    const serviceKey = window.routeActiveServiceKey; 
    const planKey = window.routeActivePlanKey; 
    
    let planData = { title: "", price: "0.00", features: [] }; 
    if (!serviceKey) return planData;

    // Direct interface connection to your true database location
    const dbRoot = window.STATE_PRICING || {};
    const centralPackages = dbRoot.packages || {};
    const targetServiceNode = centralPackages[serviceKey];

    if (targetServiceNode) {
        // 1. Unpack the name from the pricing structure natively
        planData.title = targetServiceNode.name || serviceKey.replace(/-/g, ' ').toUpperCase();
        
        // 2. Fetch the plan price (Starter, Compliance, Enterprise) directly from the properties
        if (planKey && targetServiceNode[planKey] !== undefined) {
            planData.price = Number(targetServiceNode[planKey]).toFixed(2);
        }

        // 3. Extract the exact bullet features array mapped to that plan selection
        if (planKey && targetServiceNode.bullets && Array.isArray(targetServiceNode.bullets[planKey])) {
            planData.features = targetServiceNode.bullets[planKey];
        } else if (targetServiceNode.bullets && Array.isArray(targetServiceNode.bullets)) {
            planData.features = targetServiceNode.bullets;
        } else if (Array.isArray(targetServiceNode.features)) {
            planData.features = targetServiceNode.features;
        }
    } else {
        // Fallback layout name formatting if data isn't compiled yet
        planData.title = serviceKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    }

    return planData; 
}



// ==========================================
// DYNAMIC DOM RENDERING PIPELINE FOR STEP 1
// ==========================================
function renderActiveWorkflowStepView() {
    const rootContainer = document.getElementById("dynamic-onboarding-fields-root");
    const headingTarget = document.getElementById("mobile-step-heading-target");
    
    if (!rootContainer) {
        console.error("[Mobile Engine] Shell injection target error: #dynamic-onboarding-fields-root missing.");
        return;
    }

    // 1. Update Step Headings from your stepMetadataMatrix
    const currentMeta = window.stepMetadataMatrix[window.currentWizardActiveStep];
    if (currentMeta && headingTarget) {
        headingTarget.innerHTML = `
            <h1 class="wizard-step-title">${currentMeta.title}</h1>
            <p class="wizard-step-desc">${currentMeta.desc}</p>
        `;
    }

    // 2. Only build the inclusion layout if it's Step 1
    if (window.currentWizardActiveStep === 1) {
        // Fetch values processed from window.STATE_PRICING or data routing layers
        const dataPayload = getActivePlanDetails();
        
        let dynamicListItems = "";
        if (Array.isArray(dataPayload.features)) {
            dynamicListItems = dataPayload.features.map(feature => `
                <li class="package-feature-item">
                    <span class="feature-checkmark-icon">✓</span>
                    <span class="feature-text">${feature}</span>
                </li>
            `).join("");
        }

        // Clean out loader spinner & safely paint UI values
        rootContainer.innerHTML = `
            <div class="dynamic-package-card">
                <div class="package-card-header">
                    <h3 class="package-name">${dataPayload.title}</h3>
                    <div class="package-price-wrapper">
                        <span class="currency-symbol">$</span>
                        <span class="price-value">${dataPayload.price}</span>
                    </div>
                </div>
                <ul class="package-features-list">
                    ${dynamicListItems || '<li>No explicit items found for this selection</li>'}
                </ul>
            </div>
        `;
    }
}

// ==========================================
// DECOUPLED LIFECYCLE RE-VERIFICATION ENGINE
// ==========================================
function verifyDatabaseSyncAndRender() {
    console.log("[Mobile Engine] Inspecting real-time workspace allocation channels...");
    
    // Read the true state registry properties
    const dbRoot = window.STATE_PRICING || {};
    const centralDatabase = dbRoot.packages || {};
    const totalDatabaseKeysCount = Object.keys(centralDatabase).length;
    
    window.databasePollingAttempts = window.databasePollingAttempts || 0;

    // FUSED ASYNC PROTECTION: If the separate state-pricing.js script is still parsing,
    // hold execution briefly for up to 10 loops (500ms max) to let keys populate natively.
    if (window.currentWizardActiveStep === 1 && totalDatabaseKeysCount === 0 && window.databasePollingAttempts < 10) {
        window.databasePollingAttempts++;
        console.log(`[Mobile Engine] Pricing data channel unassigned. Retrying pipeline hook... Attempt ${window.databasePollingAttempts}`);
        setTimeout(verifyDatabaseSyncAndRender, 50);
        return;
    }

    // Break out and paint the DOM values immediately once keys exist or safety limit is met
    renderActiveWorkflowStepView();
}

// ==========================================
// KICKSTART PIPELINE RUNTIME HOOKS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    extractURLConfigurationParameters();
    verifyDatabaseSyncAndRender();
});


async function renderActiveWorkflowStepView() { 
    const activeIdx = window.currentWizardActiveStep; 
    const currentMeta = window.stepMetadataMatrix[activeIdx] || { title: "Selected Package", desc: "Items and inclusions" }; 
    const trackerTarget = document.getElementById("mobile-progress-tracker-target"); 
    const headingTarget = document.getElementById("mobile-step-heading-target"); 
    const fieldsTarget = document.getElementById("dynamic-onboarding-fields-root"); 
    
    // 1. FIXED: Point data validation lookups straight to your active configuration engine track metrics
    const activePlan = getActivePlanDetails(); 
    const dbRoot = window.STATE_PRICING || {};
    const centralDatabase = dbRoot.packages || window.GLOBAL_COMPANY_PRICING || window.CENTRAL_SERVICE_PLAN_DB || {}; 
    const totalDatabaseKeysCount = Object.keys(centralDatabase).length; 

    // 2. FUSED LIFECYCLE: If database is completely empty, stall up to 15 times (750ms total) to allow scripts to load 
    if (activeIdx === 1 && totalDatabaseKeysCount === 0 && (!activePlan || !activePlan.price || activePlan.price === "0.00")) { 
        window.databasePollingAttempts = window.databasePollingAttempts || 0; 
        if (window.databasePollingAttempts < 15) { 
            window.databasePollingAttempts++; 
            console.log(`[Mobile Lifecycle] Waiting for database compilation proxy tracks... Attempt: ${window.databasePollingAttempts}`); 
            if (fieldsTarget && !fieldsTarget.innerHTML.includes("fa-spin")) { 
                fieldsTarget.innerHTML = ` 
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 20px; gap: 12px; color: #475569;"> 
                        <i class="fa-solid fa-circle-notch fa-spin" style="font-size: 2rem; color: #10b981;"></i> 
                        <span style="font-size: 0.95rem; font-weight: 600;">Assembling your customized layout configuration parameters...</span> 
                    </div> `; 
            } 
            setTimeout(renderActiveWorkflowStepView, 50); 
            return; 
        } else { 
            console.warn("[Mobile Lifecycle] Database polling fuse blown. Proceeding with active URL context parse fallbacks."); 
        } 
    } 

    // Update Progress Bars & Headings 
    if (trackerTarget) trackerTarget.innerHTML = `<span class="tracker-label">Step ${activeIdx} of 7: ${currentMeta.title}</span><div class="progress-rail"><div class="progress-beam" style="width: ${(activeIdx / 7) * 100}%"></div></div>`; 
    if (headingTarget) headingTarget.innerHTML = `<h2>${currentMeta.title}</h2><p>${currentMeta.desc}</p>`; 

    if (fieldsTarget) { 
        fieldsTarget.innerHTML = ""; 
        
        if (activeIdx === 1) { 
            if (typeof window.getMobileWizardStepOneMarkup === "function") { 
                fieldsTarget.innerHTML = window.getMobileWizardStepOneMarkup(); 
            } else { 
                let dynamicListItems = ""; 
                if (activePlan && Array.isArray(activePlan.features)) { 
                    dynamicListItems = activePlan.features.map(feat => ` 
                        <li style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px; font-size: 0.95rem; color: #334155;"> 
                            <span style="color: #10b981; font-weight: bold;">✓</span> <span>${feat}</span> 
                        </li> `).join(""); 
                } 
                fieldsTarget.innerHTML = ` 
                    <div class="dynamic-package-card" style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.05);"> 
                        <div class="package-card-header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; margin-bottom: 16px;"> 
                            <h3 style="margin: 0; font-size: 1.25rem; color: #1e293b; font-weight: 700;">${activePlan.title || 'Compliance Filing'}</h3> 
                            <div class="package-price-wrapper" style="font-size: 1.5rem; font-weight: 800; color: #10b981;"> 
                                <span>$</span><span>${activePlan.price || '0.00'}</span> 
                            </div> 
                        </div> 
                        <ul class="package-features-list" style="list-style: none; padding: 0; margin: 0;"> 
                            ${dynamicListItems || '<li style="color: #64748b; font-style: italic;">Processing custom inclusions for your entity...</li>'} 
                        </ul> 
                    </div> `; 
            } 
        } else if (activeIdx === 2) { 
            const masterRegistryKey = `${window.routeActiveServiceKey}-form-master`; 
            if (typeof window.formRegistry[masterRegistryKey] === "function") { 
                try { 
                    fieldsTarget.innerHTML = window.formRegistry[masterRegistryKey](window.globalStateDropdownOptionsHtml || ""); 
                } catch(e) { 
                    if (typeof window.getMobileWizardStepTwoMarkup === "function") fieldsTarget.innerHTML = window.getMobileWizardStepTwoMarkup(); 
                } 
            } else if (typeof window.getMobileWizardStepTwoMarkup === "function") { 
                fieldsTarget.innerHTML = window.getMobileWizardStepTwoMarkup(); 
            } 
        } else if (activeIdx === 3) { 
            // FIXED: Fully synchronized layout frame injection sequence
            if (typeof window.getMobileWizardStepThreeMarkup === "function") {
                fieldsTarget.innerHTML = window.getMobileWizardStepThreeMarkup(); 
            }
            if (typeof window.renderTargetUpsellsListPanel === "function") {
                console.log("[Mobile Router] Target shell injected. Bootstrapping dynamic catalog data maps...");
                window.renderTargetUpsellsListPanel(); 
            }
        } else if (activeIdx === 4 && typeof window.getMobileWizardStepFourMarkup === "function") { 
            fieldsTarget.innerHTML = window.getMobileWizardStepFourMarkup() + (typeof window.getMobileWizardStepFourExecutionFieldsMarkup === "function" ? window.getMobileWizardStepFourExecutionFieldsMarkup() : ""); 
            if (typeof window.evaluatePoaInputStateMatrixMobile === "function") window.evaluatePoaInputStateMatrixMobile(); 
        } else if (activeIdx === 5 && typeof window.getMobileWizardStepFiveMarkup === "function") { 
            fieldsTarget.innerHTML = window.getMobileWizardStepFiveMarkup(); 
            if (typeof window.updateSummaryInvoiceDisplayMatrix === "function") window.updateSummaryInvoiceDisplayMatrix(); 
            if (typeof window.executeMarketplaceSummaryRenderLoop === "function") window.executeMarketplaceSummaryRenderLoop();
        } else if (activeIdx === 6 && typeof window.getMobileWizardStepSixMarkup === "function") { 
            fieldsTarget.innerHTML = window.getMobileWizardStepSixMarkup(); 
            if (typeof window.initializeFlatStripeCheckoutElement === "function") window.initializeFlatStripeCheckoutElement(); 
        } else if (activeIdx === 7 && typeof window.getMobileWizardStepSevenReceiptMarkup === "function") { 
            fieldsTarget.innerHTML = window.getMobileWizardStepSevenReceiptMarkup() + (typeof window.getMobileWizardStepSevenAccountSetupMarkup === "function" ? window.getMobileWizardStepSevenAccountSetupMarkup() : ""); 
        } 
    } 

    const backBtn = document.getElementById("mobile-back-btn"); 
    if (backBtn) backBtn.style.visibility = (activeIdx === 1 || activeIdx === 7) ? "hidden" : "visible"; 
    
    const continueBtn = document.getElementById("mobile-continue-btn"); 
    if (continueBtn) { 
        if (activeIdx === 6) { 
            continueBtn.innerText = "Submit Order"; 
            continueBtn.style.display = "block"; 
        } else if (activeIdx === 7) { 
            continueBtn.style.display = "none"; 
        } else { 
            continueBtn.innerText = "Continue"; 
            continueBtn.style.display = "block"; 
        } 
    } 

    if (typeof window.updateDynamicPricingMatrixVanilla === "function") window.updateDynamicPricingMatrixVanilla(); 
    if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") window.cacheAndRestoreWizardFormStatesVanilla(true); 
}



window.navigateMobileWizardStep = function(direction) { 
    if (direction === 1) { 
        // FIXED: Only target required inputs and selects that are currently visible to the eye
        const allRequiredFields = document.querySelectorAll("#dynamic-onboarding-fields-root input[required], #dynamic-onboarding-fields-root select[required]"); 
        let isCurrentStepValid = true; 
        
        allRequiredFields.forEach(element => {
            // Safe guard: If a field or its parent wrapper is hidden via CSS, skip validating it for this step
            const isElementHidden = element.offsetWidth === 0 || element.offsetHeight === 0 || window.getComputedStyle(element).display === 'none';
            if (isElementHidden) return;

            if (!element.value.trim()) { 
                isCurrentStepValid = false; 
                element.style.borderColor = "#ef4444"; 
            } else { 
                element.style.borderColor = "var(--border, #e2e8f0)"; 
            } 
        }); 

        if (!isCurrentStepValid) { 
            alert("Please fill out all required fields before proceeding."); 
            return; 
        } 

        if (window.currentWizardActiveStep === 6 && typeof window.executeOnboardingTransactionPayloadSubmitVanilla === "function") { 
            window.executeOnboardingTransactionPayloadSubmitVanilla(); 
            return; 
        } 
    } 

    let targetStepIndex = window.currentWizardActiveStep + direction; 
    if (targetStepIndex < 1) targetStepIndex = 1; 
    if (targetStepIndex > 7) targetStepIndex = 7; 

    try { 
        const cacheKey = "f4u_wizard_onboarding_state"; 
        const sessionCache = JSON.parse(localStorage.getItem(cacheKey) || "{}"); 
        
        document.querySelectorAll("#dynamic-onboarding-fields-root input, #dynamic-onboarding-fields-root select, #dynamic-onboarding-fields-root textarea").forEach(input => { 
            const key = input.id || input.name; 
            if (key) {
                sessionCache[key] = input.type === 'checkbox' ? input.checked : input.value; 
            }
        }); 
        
        sessionCache.currentWizardActiveStep = targetStepIndex; 
        localStorage.setItem(cacheKey, JSON.stringify(sessionCache)); 
    } catch(e) { 
        console.error("[State Save Failed]", e); 
    } 

    window.currentWizardActiveStep = targetStepIndex; 
    renderActiveWorkflowStepView(); 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
};


function buildStaticLayoutStructuralTargets() { 
    const headerTarget = document.getElementById("mobile-app-header-slot"); 
    const footerTarget = document.getElementById("mobile-fixed-action-toolbar-target"); 
    const fieldsTarget = document.getElementById("dynamic-onboarding-fields-root"); 
    const headingTarget = document.getElementById("mobile-step-heading-target"); 
    
    if (fieldsTarget && window.currentWizardActiveStep === 1) fieldsTarget.innerHTML = ""; 
    if (headingTarget) headingTarget.innerHTML = ""; 
    
    if (headerTarget) { 
        // FIX: Verify if the clock container node exists. If it does, skip destructive innerHTML rewrites.
        if (!document.getElementById("wizard-live-clock-timestamp")) {
            headerTarget.innerHTML = ` 
                <div class="f4u-full-canvas-header" style="background: #ffffff; border-bottom: 1px solid #cbd5e1; padding: 12px 0; width: 100% !important; min-width: 100% !important; box-sizing: border-box; clear: both; display: block;"> 
                    <div class="nav-container" style="width: 92% !important; max-width: 1370px !important; margin: 0 auto !important; padding: 0 !important; display: flex !important; justify-content: space-between !important; align-items: center !important; box-sizing: border-box;"> 
                        <a href="mobile-wizard.html" style="display: block; margin: 0 !important; padding: 0 !important;"> 
                            <img src="images/logo.png" alt="filings4u" onerror="this.src='images/fav.png'" style="height: 38px; width: auto; max-width: 100%; object-fit: contain; display: block;"> 
                        </a> 
                        <div style="display: flex !important; align-items: center !important; justify-content: flex-end !important; box-sizing: border-box; margin: 0 !important; padding: 0 !important;"> 
                            <div class="header-meta-badge" style="font-size: 0.85rem; font-weight: 400; color: #0f172a; background: #f8fafc; padding: 8px 14px; border-radius: 6px; border: 1px solid #cbd5e1; display: flex !important; align-items: center !important; box-sizing: border-box;"> 
                                <a href="tel:+17732457079" style="text-decoration: none; color: inherit; display: inline-flex; align-items: center; font-weight: 400 !important; white-space: nowrap;"> 
                                    <i class="fa-solid fa-phone" style="color: #10b981; margin-right: 6px;"></i> <span>773-245-7079</span> 
                                </a> 
                                <style> 
                                    @media screen and (max-width: 768px) { .mobile-hide-meta-element { display: none !important; } } 
                                </style> 
                                <span class="meta-divider mobile-hide-meta-element" style="width: 1px; height: 14px; background: #cbd5e1; margin: 0 12px; display: inline-block;"></span> 
                                <span class="mobile-hide-meta-element" style="display: inline-flex; align-items: center; font-weight: 400; white-space: nowrap;"> 
                                    <i class="fa-regular fa-clock" style="color: #10b981; margin-right: 6px;"></i> 
                                    <span id="wizard-live-clock-timestamp">Initializing clock...</span> 
                                </span> 
                            </div> 
                        </div> 
                    </div> 
                </div> `; 
            initializeLiveHeaderClockEngine(); 
        }
    } 
    
    if (footerTarget) { 
        // FIX: Only inject the action footer if the buttons do not already exist in the canvas
        if (!document.getElementById("mobile-continue-btn")) {
            footerTarget.innerHTML = ` 
                <div class="mobile-action-toolbar"> 
                    <button type="button" class="btn-mobile-nav btn-mobile-secondary" id="mobile-back-btn" onclick="window.navigateMobileWizardStep(-1)">Back</button> 
                    <button type="button" class="btn-mobile-nav btn-mobile-primary" id="mobile-continue-btn" onclick="window.navigateMobileWizardStep(1)">Continue</button> 
                </div> `; 
        }
    } 
} 

function initializeLiveHeaderClockEngine() { 
    if (window.isHeaderClockIntervalRunningVanilla) return; 
    window.isHeaderClockIntervalRunningVanilla = true; 
    
    function updateClockDisplay() { 
        const clockNode = document.getElementById("wizard-live-clock-timestamp"); 
        if (!clockNode) return; 
        
        const timeNow = new Date(); 
        let rawHours = timeNow.getHours(); 
        const rawMinutes = timeNow.getMinutes(); 
        const amPmIndicator = rawHours >= 12 ? 'PM' : 'AM'; 
        
        rawHours = rawHours % 12; 
        rawHours = rawHours ? rawHours : 12; 
        
        const stringifiedMinutes = rawMinutes < 10 ? '0' + rawMinutes : rawMinutes; 
        clockNode.innerText = `${rawHours}:${stringifiedMinutes} ${amPmIndicator}`; 
    } 
    
    updateClockDisplay(); 
    setInterval(updateClockDisplay, 1000); 
} 

function bootstrapMobileApplicationEngine() { 
    extractURLConfigurationParameters(); 
    
    const urlParams = new URLSearchParams(window.location.search); 
    const contextHasUrlParams = urlParams.has('service') || urlParams.has('package') || urlParams.has('plan'); 
    const cache = localStorage.getItem("f4u_wizard_onboarding_state"); 
    
    if (cache && !contextHasUrlParams) { 
        try { 
            const parsed = JSON.parse(cache); 
            if (parsed.currentWizardActiveStep) { 
                window.currentWizardActiveStep = parseInt(parsed.currentWizardActiveStep, 10); 
            } 
        } catch(e) {} 
    } else if (contextHasUrlParams) { 
        window.currentWizardActiveStep = 1; 
    } 
    
    buildStaticLayoutStructuralTargets(); 
    verifyDatabaseSyncAndRender(); 
} 

// Listen for async database payload readiness confirmation event signals safely
window.addEventListener("f4u_database_node_ready", () => { 
    console.log("[Mobile Lifecycle] Pricing node load confirmed. Re-painting workspace canvas views..."); 
    if (window.currentWizardActiveStep === 1) { 
        renderActiveWorkflowStepView(); 
    } 
}); 

if (document.readyState === "loading") { 
    document.addEventListener("DOMContentLoaded", bootstrapMobileApplicationEngine); 
} else { 
    bootstrapMobileApplicationEngine(); 
}
