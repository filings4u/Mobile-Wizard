// ============================================================================ //
// 🚀 ENGINE PART 1: GLOBAL STATE MATRIX & INITIALIZATION LIFECYCLE
// ============================================================================ //
(function() { 
    console.log("[Mobile Engine] Initializing core modules..."); 
    
    // Core State Registries
    window.formRegistry = window.formRegistry || {}; 
    window.isWizardCurrentlyRestoringStateVanilla = false; 
    window.currentWizardActiveStep = 1; 
    let databasePollingAttempts = 0; 

    // Wizard Progression Configuration Map
    const stepMetadataMatrix = { 
        1: { title: "Select Service Tier", desc: "Choose the package configurations level matching deployment timelines." }, 
        2: { title: "Corporate Entity Details", desc: "Provide company identifier records, operational parameters, and configuration requirements." }, 
        3: { title: "Add-On Dynamic Matrices", desc: "Select optional compliance validation products and target acceleration layers." }, 
        4: { title: "Power of Attorney Validation", desc: "Review statutory representation provisions and sign with legal verification metadata." }, 
        5: { title: "Review Registration Filing", desc: "Audit data-field outputs prior to transmission pipelines execution steps." }, 
        6: { title: "Secure Checkout Portal", desc: "Finalize compliance invoice transaction records processing variables." }, 
        7: { title: "Filing Transmission Complete", desc: "Universal database injection operations executed successfully." } 
    };

    // 🏗️ LAYOUT HOOK: Generates Header and Navigation Toolbars
    function buildStaticLayoutStructuralTargets() { 
        const headerTarget = document.getElementById("mobile-app-header-slot"); 
        const footerTarget = document.getElementById("mobile-fixed-action-toolbar-target"); 
        const fieldsTarget = document.getElementById("dynamic-onboarding-fields-root");
        const headingTarget = document.getElementById("mobile-step-heading-target"); // <-- ADDED TARGET

        // FIX: Flush dynamic workspace fields and static headers to prevent double text rendering
        if (fieldsTarget) { 
            fieldsTarget.innerHTML = ""; 
        }
        if (headingTarget) {
            headingTarget.innerHTML = ""; // <-- FLUSHES HARDCODED STRUCTURAL TEXT LAYOUTS
        }

        if (headerTarget) { 
            headerTarget.innerHTML = ` 
                <div class="mobile-nav-bar"> 
                    <img src="images/logo.png" alt="filings4u" onerror="this.src='https://filings4u.com'"> 
                    <a href="tel:7732457079" class="mobile-contact-badge"> 
                        <i class="fa-solid fa-phone"></i> 773-245-7079 
                    </a> 
                </div> `; 
        } 
        
        if (footerTarget) { 
            footerTarget.innerHTML = ` 
                <div class="mobile-action-toolbar"> 
                    <button type="button" class="btn-mobile-nav btn-mobile-secondary" id="mobile-back-btn" onclick="window.navigateMobileWizardStep(-1)">Back</button> 
                    <button type="button" class="btn-mobile-nav btn-mobile-primary" id="mobile-continue-btn" onclick="window.navigateMobileWizardStep(1)">Continue</button> 
                </div> `; 
        } 
    }

// ============================================================================ //
// 🎨 MOBILE-WIZARD-STEPS.JS: PART 2 (DYNAMIC STEP HOOK TEMPLATE)
// ============================================================================ //

// Safely attempts to parse your desktop pricing registration registry matrix state
function getActivePlanDetails() {
    const serviceKey = window.routeActiveServiceKey || "";
    const planKey = window.routeActivePlanKey || "";
    const masterRegistryKey = `${serviceKey}-form-master`;

    // Visual Baseline Clean Default Fallback State Object 
    let planData = {
        title: "Selected Compliance Package",
        price: "0.00",
        features: ["Assembling your customized layout configuration parameters..."]
    };

    // Safely parse nested object components matching clicked packages parameters
    if (window.formRegistry && window.formRegistry[masterRegistryKey]) {
        const rawDatabase = window.formRegistry[masterRegistryKey];
        if (rawDatabase.packages && rawDatabase.packages[planKey]) {
            const targetPackage = rawDatabase.packages[planKey];
            planData.title = targetPackage.name || targetPackage.title || planData.title;
            planData.price = targetPackage.price || targetPackage.amount || planData.price;
            
            if (Array.isArray(targetPackage.features)) {
                planData.features = targetPackage.features;
            } else if (Array.isArray(targetPackage.bullets)) {
                planData.features = targetPackage.bullets;
            }
        }
    }
    return planData;
}


// ============================================================================ //
// 🎯 STEP 1 PANEL: PACKAGE LISTING & SYSTEM INCLUSIONS (MOBILE CONVERSION)
// ============================================================================ //
window.getMobileWizardStepOneMarkup = function() {
    return `
        <div class="package-selection-wrapper" style="display: flex; flex-direction: column; gap: 16px; width: 100%; box-sizing: border-box;">
            
            <!-- Selected Compliance Offering Field Input Block -->
            <div class="wizard-input-group" style="display: flex; flex-direction: column; gap: 6px;">
                <label for="wizard-route-service-id" class="wizard-input-label" style="font-size: 0.85rem; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.05em;">Selected Compliance Offering</label>
                <div class="input-lock-wrapper" style="position: relative; display: flex; align-items: center; width: 100%;">
                    <input type="text" id="wizard-route-service-id" readonly required class="wizard-input-field readonly-lock-field" value="" 
                        style="width: 100%; height: 48px; padding: 0 44px 0 14px; border: 1px solid #cbd5e1; border-radius: 8px; background-color: #f1f5f9; color: #334155; font-size: 0.95rem; font-weight: 600; box-sizing: border-box; outline: none; -webkit-appearance: none;">
                    <span class="input-lock-icon-span" style="position: absolute; right: 16px; color: #94a3b8; font-size: 0.9rem; display: flex; align-items: center; justify-content: center; pointer-events: none;">
                        <i class="fa-solid fa-lock"></i>
                    </span>
                </div>
            </div>

            <!-- Inclusions Array Injection Target Box Container -->
            <div class="wizard-input-group" style="display: flex; flex-direction: column; gap: 6px;">
                <label class="wizard-input-label" style="font-size: 0.85rem; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.05em;">What Comes with the Package</label>
                <!-- Target container matching desktop state-pricing.js injection loops -->
                <div id="step-1-package-features-list" class="features-list-data-container" 
                    style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; background: #ffffff; min-height: 80px; box-sizing: border-box; font-size: 0.9rem; color: #334155; line-height: 1.5;">
                    <div class="loading-skeleton-row" style="display: flex; align-items: center; gap: 8px; color: #64748b;">
                        <i class="fa-solid fa-spinner fa-spin"></i>
                        <span>Assembling your customized layout configuration parameters...</span>
                    </div>
                </div>
            </div>

            <!-- Live Invoice Fee Row Row Component Box -->
            <div id="step-1-base-fee-row" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; display: flex; justify-content: space-between; align-items: center; box-sizing: border-box;">
                <span style="font-weight: 700; color: #0f172a; font-size: 0.95rem;">Base Fee:</span>
                <strong id="step-1-base-fee-value" style="font-family: monospace; color: #10b981; font-size: 1.35rem; font-weight: 700;">$0.00</strong>
            </div>

            <!-- Mobile-Optimized Inline Progress Actions Save Trigger -->
            <div class="mobile-save-progress-holder" style="margin-top: 8px; width: 100%; box-sizing: border-box;">
                <button type="button" class="btn-wizard-save-progress" onclick="if(typeof executeSaveAndExitWorkflow === 'function'){executeSaveAndExitWorkflow()}"
                    style="width: 100%; height: 44px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.9rem; font-weight: 600; color: #475569; display: flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; transition: background 0.2s ease;">
                    <i class="fa-solid fa-floppy-disk"></i> Save Progress
                </button>
            </div>

        </div>
    `;
};


    // 🎨 RENDER PIPELINE: Evaluates current step and builds specific inner fields 
    async function renderActiveWorkflowStepView() { 
        const activeIdx = window.currentWizardActiveStep; 
        const currentMeta = stepMetadataMatrix[activeIdx] || { title: "Compliance Hub", desc: "Complete configuration." }; 
        
        const trackerTarget = document.getElementById("mobile-progress-tracker-target"); 
        const headingTarget = document.getElementById("mobile-step-heading-target"); 
        const fieldsTarget = document.getElementById("dynamic-onboarding-fields-root"); 
        
        if (trackerTarget) { 
            trackerTarget.innerHTML = ` 
                <span class="tracker-label">Step ${activeIdx} of 7: ${currentMeta.title}</span> 
                <div class="progress-rail"><div class="progress-beam" style="width: ${(activeIdx / 7) * 100}%"></div></div> 
            `; 
        } 
        
        if (headingTarget) { 
            headingTarget.innerHTML = `<h2>${currentMeta.title}</h2><p>${currentMeta.desc}</p>`; 
        } 
        
        if (fieldsTarget) { 
            // Clear out any residual nodes before drawing the step to prevent stacking bugs
            fieldsTarget.innerHTML = "";

            if (activeIdx === 1 && typeof window.getMobileWizardStepOneMarkup === "function") { 
                fieldsTarget.innerHTML = window.getMobileWizardStepOneMarkup(); 
            } else if (activeIdx === 2) { 
                const masterRegistryKey = `${window.routeActiveServiceKey}-form-master`; 
                
                // FIX: Route template loading explicitly to prevent double assignments crashing into each other
                if (typeof window.formRegistry[masterRegistryKey] === "function") { 
                    try { 
                        fieldsTarget.innerHTML = window.formRegistry[masterRegistryKey](window.globalStateDropdownOptionsHtml || ""); 
                    } catch(e) { 
                        console.error("[Mobile Render Error - Desktop Matrix]", e); 
                        if (typeof window.getMobileWizardStepTwoMarkup === "function") {
                            fieldsTarget.innerHTML = window.getMobileWizardStepTwoMarkup();
                        }
                    } 
                } else if (typeof window.getMobileWizardStepTwoMarkup === "function") {
                    fieldsTarget.innerHTML = window.getMobileWizardStepTwoMarkup(); 
                }
            } else if (activeIdx === 3 && typeof window.getMobileWizardStepThreeMarkup === "function") { 
                fieldsTarget.innerHTML = window.getMobileWizardStepThreeMarkup(); 
                if (typeof window.renderTargetUpsellsListPanel === "function") window.renderTargetUpsellsListPanel(); 
            } else if (activeIdx === 4 && typeof window.getMobileWizardStepFourMarkup === "function") { 
                const executionFields = typeof window.getMobileWizardStepFourExecutionFieldsMarkup === "function" ? window.getMobileWizardStepFourExecutionFieldsMarkup() : "";
                fieldsTarget.innerHTML = window.getMobileWizardStepFourMarkup() + executionFields; 
                if (typeof window.evaluatePoaInputStateMatrixMobile === "function") window.evaluatePoaInputStateMatrixMobile(); 
            } else if (activeIdx === 5 && typeof window.getMobileWizardStepFiveMarkup === "function") { 
                fieldsTarget.innerHTML = window.getMobileWizardStepFiveMarkup(); 
                if (typeof window.updateSummaryInvoiceDisplayMatrix === "function") window.updateSummaryInvoiceDisplayMatrix(); 
            } else if (activeIdx === 6 && typeof window.getMobileWizardStepSixMarkup === "function") { 
                fieldsTarget.innerHTML = window.getMobileWizardStepSixMarkup(); 
                if (typeof window.initializeFlatStripeCheckoutElement === "function") window.initializeFlatStripeCheckoutElement(); 
            } else if (activeIdx === 7 && typeof window.getMobileWizardStepSevenReceiptMarkup === "function") { 
                const accountFields = typeof window.getMobileWizardStepSevenAccountSetupMarkup === "function" ? window.getMobileWizardStepSevenAccountSetupMarkup() : "";
                fieldsTarget.innerHTML = window.getMobileWizardStepSevenReceiptMarkup() + accountFields; 
            } 
        } 

        // Update Visibility Elements 
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

  
// ============================================================================ //
// 🔄 POLLING ENGINE: Holds template injection loops execution until deferred dependencies are resolved 
// ============================================================================ //
function verifyDatabaseSyncAndRender() { 
    const targetRegistryKey = `${window.routeActiveServiceKey}-form-master`; 
    
    // FIX 1: Ensure BOTH the desktop pricing files AND your new mobile steps markup templates are parsed before rendering
    const isDatabaseReady = typeof window.formRegistry !== "undefined" && typeof window.formRegistry[targetRegistryKey] !== "undefined"; 
    const isStepsFileReady = typeof window.getMobileWizardStepOneMarkup === "function"; 
    
    // FIX 2: Ensure the dynamic plan extraction configurations function module is compiled
    const isExtractorReady = typeof getActivePlanDetails === "function";

    if ((!isDatabaseReady || !isStepsFileReady || !isExtractorReady) && databasePollingAttempts < 50) { 
        databasePollingAttempts++; 
        console.log(`[Mobile Sync] Waiting for proxy database compile pipelines... Attempt ${databasePollingAttempts}/50`); 
        setTimeout(verifyDatabaseSyncAndRender, 100); 
        return; 
    } 

    console.log(`[Mobile Sync Success] All template data-structures verified. Populating workspace fields...`); 
    renderActiveWorkflowStepView(); 
}


    // 🗺️ STEP ROUTER & STORAGE INTERACTION FIELD SYNC
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

        // FIX: Calculate boundary targets first so storage steps math stays uniform
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
            sessionCache.currentWizardActiveStep = targetStepIndex; // Save clean bounded step
            localStorage.setItem(cacheKey, JSON.stringify(sessionCache)); 
        } catch(e) { 
            console.error("[State Save Failed]", e); 
        } 

        window.currentWizardActiveStep = targetStepIndex; 
        renderActiveWorkflowStepView(); 
        window.scrollTo({ top: 0, behavior: "smooth" }); 
    };


     // 🚀 INITIALIZATION COMPILER 
    function bootstrapMobileApplicationEngine() { 
        const urlParams = new URLSearchParams(window.location.search); 
        let service = urlParams.get('service') || urlParams.get('package') || window.routeActiveServiceKey || ""; 
        
        if (!service) { 
            buildStaticLayoutStructuralTargets(); 
            return; 
        } 
        
        window.routeActiveServiceKey = service.toLowerCase().trim().replace(/[\s_]+/g, "-"); 
        window.routeActivePlanKey = (urlParams.get('plan') || window.routeActivePlanKey || "").toLowerCase().trim(); 

        const cache = localStorage.getItem("f4u_wizard_onboarding_state"); 
        if (cache) { 
            try { 
                const parsed = JSON.parse(cache); 
                if (parsed.currentWizardActiveStep) {
                    window.currentWizardActiveStep = parseInt(parsed.currentWizardActiveStep, 10); 
                }
            } catch(e) {} 
        } 
        
        buildStaticLayoutStructuralTargets(); 
        verifyDatabaseSyncAndRender(); 
    } 

    // DOM Target Boot Verification
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bootstrapMobileApplicationEngine); 
    } else {
        bootstrapMobileApplicationEngine(); 
    }

    // ============================================================================ // 
    // 🚀 MOBILE INTEGRATION ROUTER: DATABASE EXTRACTOR & DATA HYDRATOR
    // ============================================================================ // 
    function getActivePlanDetails() { 
        const serviceKey = window.routeActiveServiceKey || ""; 
        const planKey = window.routeActivePlanKey || ""; 
        const masterRegistryKey = `${serviceKey}-form-master`; 
        
        // Visual Baseline Default Fallback State 
        let planData = { 
            title: "Custom Compliance Package", 
            price: "0.00", 
            features: ["Assembling your customized layout configuration parameters..."] 
        }; 
        
        // Pull from your existing global desktop pricing architecture safely 
        if (window.formRegistry && window.formRegistry[masterRegistryKey]) { 
            const rawDatabase = window.formRegistry[masterRegistryKey]; 
            
            // Check if the database contains plan matrix configurations 
            if (rawDatabase.packages && rawDatabase.packages[planKey]) { 
                const targetPackage = rawDatabase.packages[planKey]; 
                planData.title = targetPackage.name || targetPackage.title || planData.title; 
                planData.price = targetPackage.price || targetPackage.amount || planData.price; 
                
                if (Array.isArray(targetPackage.features)) { 
                    planData.features = targetPackage.features; 
                } else if (Array.isArray(targetPackage.bullets)) { 
                    planData.features = targetPackage.bullets; 
                } 
            } 
        } 
        return planData; 
    }

})(); // <-- CLOSES THE FILE COMPLETELY AT THE VERY BOTTOM WHERE IT BELONGS


    // 🏗️ LAYOUT HOOK: Generates Global Minimalist Canvas Header and Navigation Toolbars
    function buildStaticLayoutStructuralTargets() { 
        const headerTarget = document.getElementById("mobile-app-header-slot"); 
        const footerTarget = document.getElementById("mobile-fixed-action-toolbar-target"); 
        const fieldsTarget = document.getElementById("dynamic-onboarding-fields-root");
        const headingTarget = document.getElementById("mobile-step-heading-target");

        // Clear out dynamic workspace containers to prevent residual markup stacking
        if (fieldsTarget) fieldsTarget.innerHTML = ""; 
        if (headingTarget) headingTarget.innerHTML = "";

        // Inject the universal structural canvas header template
        if (headerTarget) { 
            headerTarget.innerHTML = ` 
                <!-- 🌐 SITE HEADER WITH 12HR CLOCK & CONTACT PHONE (MOBILE MINIMALIST INLINE) --> 
                <div class="f4u-full-canvas-header" style="background: #ffffff; border-bottom: 1px solid #cbd5e1; padding: 12px 0; width: 100% !important; min-width: 100% !important; box-sizing: border-box; clear: both; display: block;"> 
                    <div class="nav-container" style="width: 92% !important; max-width: 1370px !important; margin: 0 auto !important; padding: 0 !important; display: flex !important; justify-content: space-between !important; align-items: center !important; box-sizing: border-box;"> 
                        
                        <!-- Left Side: Brand Logo --> 
                        <a href="index.html" style="display: block; margin: 0 !important; padding: 0 !important;"> 
                            <img src="images/logo.png" alt="filings4u" style="height: 38px; width: auto; max-width: 100%; object-fit: contain; display: block;"> 
                        </a> 
                        
                        <!-- Right Side: Meta Badge Wrapper --> 
                        <div style="display: flex !important; align-items: center !important; justify-content: flex-end !important; box-sizing: border-box; margin: 0 !important; padding: 0 !important;"> 
                            <div class="header-meta-badge" style="font-size: 0.85rem; font-weight: 400; color: #0f172a; background: #f8fafc; padding: 8px 14px; border-radius: 6px; border: 1px solid #cbd5e1; display: flex !important; align-items: center !important; box-sizing: border-box;"> 
                                
                                <!-- ALWAYS VISIBLE: Support Phone Call Link --> 
                                <a href="tel:+17732457079" style="text-decoration: none; color: inherit; display: inline-flex; align-items: center; font-weight: 400 !important; white-space: nowrap;"> 
                                    <i class="fa-solid fa-phone" style="color: #10b981; margin-right: 6px;"></i> 
                                    <span>773-245-7079</span> 
                                </a> 
                                
                                <style> 
                                    @media screen and (max-width: 768px) { 
                                        .mobile-hide-meta-element { display: none !important; } 
                                    } 
                                </style> 
                                
                                <!-- HIDDEN ON MOBILE: Visual Separator Splitter Line --> 
                                <span class="meta-divider mobile-hide-meta-element" style="width: 1px; height: 14px; background: #cbd5e1; margin: 0 12px; display: inline-block;"></span> 
                                
                                <!-- HIDDEN ON MOBILE: Live 12-Hour Ticking Clock --> 
                                <span class="mobile-hide-meta-element" style="display: inline-flex; align-items: center; font-weight: 400; white-space: nowrap;"> 
                                    <i class="fa-regular fa-clock" style="color: #10b981; margin-right: 6px;"></i> 
                                    <span id="wizard-live-clock-timestamp">Initializing clock...</span> 
                                </span> 
                            </div> 
                        </div> 
                    </div> 
                </div> `;
                
            // Initialize or keep ticking the live clock module 
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

    // 🕒 TICKING MODULE: Generates local standard 12-hour AM/PM parameters updates
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
            rawHours = rawHours ? rawHours : 12; // Formats 0 standard hours to display 12
            
            const stringifiedMinutes = rawMinutes < 10 ? '0' + rawMinutes : rawMinutes;
            clockNode.innerText = `${rawHours}:${stringifiedMinutes} ${amPmIndicator}`;
        }

        // Initialize display updates immediately and loop every second
        updateClockDisplay();
        setInterval(updateClockDisplay, 1000);
    }
