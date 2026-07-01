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
    let service = urlParams.get('service') || urlParams.get('package') || ""; 
    let plan = urlParams.get('plan') || ""; 

    // STRAIGHT REDIRECT: Immediate exit path if the URL lacks the required query parameters
    if (!service || !plan) {
        console.warn("[Router Error] Missing core parameter payload. Routing to primary start node.");
        window.location.href = "https://filings4u.com/get-started.html";
        return;
    }

    window.routeActiveServiceKey = service.toLowerCase().trim().replace(/[\s_]+/g, "-"); 
    window.routeActivePlanKey = plan.toLowerCase().trim(); 
    console.log(`[Context] Service: "${window.routeActiveServiceKey}", Plan: "${window.routeActivePlanKey}"`); 
}
function verifyDatabaseSyncAndRender() { 
    const isNativeDbReady = typeof window.GLOBAL_COMPANY_PRICING !== "undefined" || typeof window.CENTRAL_SERVICE_PLAN_DB !== "undefined"; 
    const isStepsReady = typeof window.getMobileWizardStepOneMarkup === "function"; 
    const isExtractorReady = typeof getActivePlanDetails === "function"; 

    // STRAIGHT FAIL-SAFE EXIT: If layout templates fail to compile, exit instantly to the global path
    if ((!isStepsReady || !isExtractorReady) && databasePollingAttempts >= 50) { 
        console.error("[Boot Error] System dependencies dropped. Relocating workflow...");
        window.location.href = "https://filings4u.com/get-started.html";
        return; 
    }

    if ((!isStepsReady || !isExtractorReady) && databasePollingAttempts < 50) { 
        databasePollingAttempts++; 
        setTimeout(verifyDatabaseSyncAndRender, 100); 
        return; 
    } 

    if (!isNativeDbReady) {
        const targetCoreScript = document.createElement("script");
        // FIXED DOMAIN LOCATION ROUTE: Pointing to your central production JavaScript file path
        targetCoreScript.src = "https://filings4u.com/get-started.html"; 
        targetCoreScript.async = true;
        targetCoreScript.onload = () => renderActiveWorkflowStepView();
        targetCoreScript.onerror = () => {
            console.error("[Boot Error] Central pricing tables missing over network channels. Aborting...");
            window.location.href = "https://filings4u.com/get-started.html";
        };
        document.head.appendChild(targetCoreScript);
        return;
    }
    renderActiveWorkflowStepView(); 
}

function getActivePlanDetails() { 
    const serviceKey = window.routeActiveServiceKey || ""; 
    const planKey = window.routeActivePlanKey || ""; 
    const masterRegistryKey = `${serviceKey}-form-master`; 
    
    let planData = { 
        title: "Custom Compliance Package", 
        price: "0.00", 
        features: ["Assembling your customized layout configuration parameters..."] 
    }; 

    if (window.formRegistry && !window.formRegistry[masterRegistryKey] && serviceKey) {
        if (!window[`_loading_${masterRegistryKey}`]) {
            window[`_loading_${masterRegistryKey}`] = true;
            
            const crossScript = document.createElement("script");
            // FIXED PATH STRING: Added the absolute required forward slash to build the clean root URL path dynamically
            crossScript.src = `https://filings4u.com{serviceKey}.js`; 
            crossScript.async = true;
            crossScript.onload = () => renderActiveWorkflowStepView();
            
            // EXIT ROUTE: Reroute immediately if your custom asset script fails to download over the network
            crossScript.onerror = () => {
                console.error(`[Data Error] Failed to download data table file: ${serviceKey}.js. Exiting funnel...`);
                window.location.href = "https://filings4u.com/get-started.html";
            };
            
            document.head.appendChild(crossScript);
        }
    }


    const nativeSourceDb = window.GLOBAL_COMPANY_PRICING || window.CENTRAL_SERVICE_PLAN_DB || {}; 
    let targetPackage = null; 

    if (nativeSourceDb.packages && nativeSourceDb.packages[planKey]) { 
        targetPackage = nativeSourceDb.packages[planKey]; 
    } else if (nativeSourceDb[serviceKey] && nativeSourceDb[serviceKey].packages && nativeSourceDb[serviceKey].packages[planKey]) { 
        targetPackage = nativeSourceDb[serviceKey].packages[planKey]; 
    } else if (nativeSourceDb[planKey]) { 
        targetPackage = nativeSourceDb[planKey]; 
    } else if (window.formRegistry && window.formRegistry[masterRegistryKey]) { 
        const rawDatabase = window.formRegistry[masterRegistryKey]; 
        if (rawDatabase.packages && rawDatabase.packages[planKey]) targetPackage = rawDatabase.packages[planKey]; 
    } 

    if (targetPackage) { 
        planData.title = targetPackage.name || targetPackage.title || planData.title; 
        planData.price = targetPackage.price || targetPackage.amount || planData.price; 
        planData.features = Array.isArray(targetPackage.features) ? targetPackage.features : (Array.isArray(targetPackage.bullets) ? targetPackage.bullets : planData.features); 
    } 
    return planData; 
}

async function renderActiveWorkflowStepView() { 
    const activeIdx = window.currentWizardActiveStep; 
    const currentMeta = window.stepMetadataMatrix[activeIdx] || { title: "Selected Package", desc: "Items and inclusions" }; 
    const trackerTarget = document.getElementById("mobile-progress-tracker-target"); 
    const headingTarget = document.getElementById("mobile-step-heading-target"); 
    const fieldsTarget = document.getElementById("dynamic-onboarding-fields-root"); 

    if (activeIdx === 1 && typeof window.GLOBAL_COMPANY_PRICING === "undefined" && typeof window.CENTRAL_SERVICE_PLAN_DB === "undefined") {
        if (fieldsTarget && !fieldsTarget.innerHTML) {
            fieldsTarget.innerHTML = `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 20px; gap: 12px; color: #475569;"><i class="fa-solid fa-circle-notch fa-spin" style="font-size: 2rem; color: #10b981;"></i><span style="font-size: 0.95rem; font-weight: 600;">Assembling your customized layout configuration parameters...</span></div>`;
        }
        await new Promise((resolve) => {
            const externalDataCheckInterval = setInterval(() => {
                if (typeof window.GLOBAL_COMPANY_PRICING !== "undefined" || typeof window.CENTRAL_SERVICE_PLAN_DB !== "undefined") {
                    clearInterval(externalDataCheckInterval);
                    resolve();
                }
            }, 50);
        });
    }

    if (trackerTarget) trackerTarget.innerHTML = `<span class="tracker-label">Step ${activeIdx} of 7: ${currentMeta.title}</span><div class="progress-rail"><div class="progress-beam" style="width: ${(activeIdx / 7) * 100}%"></div></div>`; 
    if (headingTarget) headingTarget.innerHTML = `<h2>${currentMeta.title}</h2><p>${currentMeta.desc}</p>`; 
    if (fieldsTarget) { 
        fieldsTarget.innerHTML = ""; 
        if (activeIdx === 1 && typeof window.getMobileWizardStepOneMarkup === "function") { 
            fieldsTarget.innerHTML = window.getMobileWizardStepOneMarkup(); 
        } else if (activeIdx === 2) { 
            const masterRegistryKey = `${window.routeActiveServiceKey}-form-master`; 
            if (typeof window.formRegistry[masterRegistryKey] === "function") { 
                try { fieldsTarget.innerHTML = window.formRegistry[masterRegistryKey](window.globalStateDropdownOptionsHtml || ""); } 
                catch(e) { if (typeof window.getMobileWizardStepTwoMarkup === "function") fieldsTarget.innerHTML = window.getMobileWizardStepTwoMarkup(); } 
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
        if (activeIdx === 6) { continueBtn.innerText = "Submit Order"; continueBtn.style.display = "block"; } 
        else if (activeIdx === 7) { continueBtn.style.display = "none"; } 
        else { continueBtn.innerText = "Continue"; continueBtn.style.display = "block"; } 
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
                    <a href="index.html" style="display: block; margin: 0 !important; padding: 0 !important;"> 
                        <img src="https://filings4u.com" alt="filings4u" onerror="this.src='images/logo.png'" style="height: 38px; width: auto; max-width: 100%; object-fit: contain; display: block;"> 
                    </a> 
                    <div style="display: flex !important; align-items: center !important; justify-content: flex-end !important; box-sizing: border-box; margin: 0 !important; padding: 0 !important;"> 
                        <div class="header-meta-badge" style="font-size: 0.85rem; font-weight: 400; color: #0f172a; background: #f8fafc; padding: 8px 14px; border-radius: 6px; border: 1px solid #cbd5e1; display: flex !important; align-items: center !important; box-sizing: border-box;"> 
                            <a href="tel:+17732457079" style="text-decoration: none; color: inherit; display: inline-flex; align-items: center; font-weight: 400 !important; white-space: nowrap;"> 
                                <i class="fa-solid fa-phone" style="color: #10b981; margin-right: 6px;"></i> <span>773-245-7079</span> 
                            </a> 
                            <style> @media screen and (max-width: 768px) { .mobile-hide-meta-element { display: none !important; } } </style> 
                            <span class="meta-divider mobile-hide-meta-element" style="width: 1px; height: 14px; background: #cbd5e1; margin: 0 12px; display: inline-block;"></span> 
                            <span class="mobile-hide-meta-element" style="display: inline-flex; align-items: center; font-weight: 400; white-space: nowrap;"> 
                                <i class="fa-regular fa-clock" style="color: #10b981; margin-right: 6px;"></i> <span id="wizard-live-clock-timestamp">Initializing clock...</span> 
                            </span> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        `; 
        initializeLiveHeaderClockEngine(); 
    } 

    if (footerTarget) { 
        footerTarget.innerHTML = ` 
            <div class="mobile-action-toolbar"> 
                <button type="button" class="btn-mobile-nav btn-mobile-secondary" id="mobile-back-btn" onclick="window.navigateMobileWizardStep(-1)">Back</button> 
                <button type="button" class="btn-mobile-nav btn-mobile-primary" id="mobile-continue-btn" onclick="window.navigateMobileWizardStep(1)">Continue</button> 
            </div> 
        `; 
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
    const cache = localStorage.getItem("f4u_wizard_onboarding_state"); 
    if (cache) { 
        try { 
            const parsed = JSON.parse(cache); 
            if (parsed.currentWizardActiveStep) window.currentWizardActiveStep = parseInt(parsed.currentWizardActiveStep, 10); 
        } catch(e) {} 
    } 
    buildStaticLayoutStructuralTargets(); 
    verifyDatabaseSyncAndRender(); 
} 

if (document.readyState === "loading") { 
    document.addEventListener("DOMContentLoaded", bootstrapMobileApplicationEngine); 
} else { 
    bootstrapMobileApplicationEngine(); 
}
