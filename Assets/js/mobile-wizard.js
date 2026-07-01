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
    // Read ONLY what is actively set in the URL parameters
    const serviceKey = window.routeActiveServiceKey; 
    const planKey = window.routeActivePlanKey; 
    const masterRegistryKey = serviceKey ? `${serviceKey}-form-master` : ""; 
    
    let planData = { title: "", price: "", features: [] }; 

    // Return empty payload immediately if no context parameters exist
    if (!serviceKey) return planData;

    const nativeSourceDb = window.GLOBAL_COMPANY_PRICING || window.CENTRAL_SERVICE_PLAN_DB || window.formRegistry || {}; 
    let sourcePlanNode = null; 

    if (nativeSourceDb[serviceKey]) { 
        sourcePlanNode = nativeSourceDb[serviceKey]; 
    } else if (masterRegistryKey && window.formRegistry && window.formRegistry[masterRegistryKey]) { 
        const registryRoot = window.formRegistry[masterRegistryKey]; 
        sourcePlanNode = registryRoot.packages || registryRoot; 
    } else if (nativeSourceDb.packages) { 
        sourcePlanNode = nativeSourceDb.packages; 
    } 

    // Handle empty data nodes purely without hardcoded fallbacks
    if (!sourcePlanNode || Object.keys(sourcePlanNode).length === 0) { 
        console.log("[Mobile Engine] Target data node empty. Generating readable text title string from url key directly..."); 
        planData.title = serviceKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()); 
        planData.price = ""; 
        planData.features = []; 
        return planData; 
    } 

    if (sourcePlanNode) { 
        planData.title = sourcePlanNode.name || sourcePlanNode.title || serviceKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()); 
        
        if (planKey && sourcePlanNode[planKey] !== undefined) { 
            planData.price = sourcePlanNode[planKey]; 
        } else if (planKey && sourcePlanNode.packages && sourcePlanNode.packages[planKey]) { 
            const innerPkg = sourcePlanNode.packages[planKey]; 
            planData.title = innerPkg.name || innerPkg.title || planData.title; 
            planData.price = innerPkg.price || innerPkg.amount || ""; 
        } else { 
            planData.price = sourcePlanNode.price || sourcePlanNode.amount || ""; 
        } 

        if (planKey && sourcePlanNode.bullets && Array.isArray(sourcePlanNode.bullets[planKey])) { 
            planData.features = sourcePlanNode.bullets[planKey]; 
        } else if (sourcePlanNode.bullets && Array.isArray(sourcePlanNode.bullets)) { 
            planData.features = sourcePlanNode.bullets; 
        } else if (Array.isArray(sourcePlanNode.features)) { 
            planData.features = sourcePlanNode.features; 
        } 
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
        // Fetch values processed from URL parameter lookups or data fallbacks
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
    
    // 1. Check your real data objects natively
    const activePlan = getActivePlanDetails(); 
    const centralDatabase = window.GLOBAL_COMPANY_PRICING || window.CENTRAL_SERVICE_PLAN_DB || {}; 
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
                    </div> 
                `; 
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
                // Build dynamic DOM card strictly using parsed variables with zero text hardcoding
                let dynamicListItems = "";
                if (activePlan && Array.isArray(activePlan.features)) {
                    dynamicListItems = activePlan.features.map(feat => `
                        <li style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px; font-size: 0.95rem; color: #334155;">
                            <span style="color: #10b981; font-weight: bold;">✓</span>
                            <span>${feat}</span>
                        </li>
                    `).join("");
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
                    </div>
                `;
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
        } else if (activeIdx === 3 && typeof window.getMobileWizardStepThreeMarkup === "function") { 
            fieldsTarget.innerHTML = window.getMobileWizardStepThreeMarkup(); 
            if (typeof window.renderTargetUpsellsListPanel === "function") window.renderTargetUpsellsListPanel(); 
        } else if (activeIdx === 4 && typeof window.getMobileWizardStepFourMarkup === "function") { 
            fieldsTarget.innerHTML = window.getMobileWizardStepFourMarkup() + (typeof window.getMobileWizardStepFourExecutionFieldsMarkup === "function" ? window.getMobileWizardStepFourExecutionFieldsMarkup() : ""); 
            if (typeof window.evaluatePoaInputStateMatrixMobile === "function") window.evaluatePoaInputStateMatrixMobile(); 
        } else if (activeIdx === 5 && typeof window.getMobileWizardStepFiveMarkup === "function") { 
            fieldsTarget.innerHTML = window.getMobileWizardStepFiveMarkup(); 
            if (typeof window.updateSummaryInvoiceDisplayMatrix === "function") window.updateSummaryInvoiceDisplayMatrix(); 
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
        const requiredFields = document.querySelectorAll("#dynamic-onboarding-fields-root input[required], #dynamic-onboarding-fields-root select[required]"); 
        let isCurrentStepValid = true; 
        requiredFields.forEach(element => { 
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
            if (key) sessionCache[key] = input.type === 'checkbox' ? input.checked : input.value; 
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
        headerTarget.innerHTML = ` 
            <div class="f4u-full-canvas-header" style="background: #ffffff; border-bottom: 1px solid #cbd5e1; padding: 12px 0; width: 100% !important; min-width: 100% !important; box-sizing: border-box; clear: both; display: block;"> 
                <div class="nav-container" style="width: 92% !important; max-width: 1370px !important; margin: 0 auto !important; padding: 0 !important; display: flex !important; justify-content: space-between !important; align-items: center !important; box-sizing: border-box;"> 
                    <a href="mobile-wizard.html" style="display: block; margin: 0 !important; padding: 0 !important;"> 
                        <!-- FIXED PATHWAY: Uses your true asset image path instead of hitting the raw domain route --> 
                        <img src="images/logo.png" alt="filings4u" onerror="this.src='images/fav.png'" style="height: 38px; width: auto; max-width: 100%; object-fit: contain; display: block;"> 
                    </a> 
                    <div style="display: flex !important; align-items: center !important; justify-content: flex-end !important; box-sizing: border-box; margin: 0 !important; padding: 0 !important;"> 
                        <div class="header-meta-badge" style="font-size: 0.85rem; font-weight: 400; color: #0f172a; background: #f8fafc; padding: 8px 14px; border-radius: 6px; border: 1px solid #cbd5e1; display: flex !important; align-items: center !important; box-sizing: border-box;"> 
                            <a href="tel:+17732457079" style="text-decoration: none; color: inherit; display: inline-flex; align-items: center; font-weight: 400 !important; white-space: nowrap;"> 
                                <i class="fa-solid fa-phone" style="color: #10b981; margin-right: 6px;"></i> 
                                <span>773-245-7079</span> 
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
    if (footerTarget) { 
        footerTarget.innerHTML = ` 
            <div class="mobile-action-toolbar"> 
                <button type="button" class="btn-mobile-nav btn-mobile-secondary" id="mobile-back-btn" onclick="window.navigateMobileWizardStep(-1)">Back</button> 
                <button type="button" class="btn-mobile-nav btn-mobile-primary" id="mobile-continue-btn" onclick="window.navigateMobileWizardStep(1)">Continue</button> 
            </div> `; 
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

// NEW: Pure event lifecycle listener to re-render without polling or hardcoding
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
