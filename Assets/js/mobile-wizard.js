// ============================================================================ //
// 🚀 MASTER UNIFIED MOBILE APPLICATION WIZARD LIFECYCLE CONTROLLER ENGINE
// ============================================================================ //
(function() {
    console.log("[Mobile Engine] Instantiating sequence-independent platform isolation matrix...");

    window.formRegistry = window.formRegistry || {};
    window.isWizardCurrentlyRestoringStateVanilla = false;
    window.currentWizardActiveStep = 1;
    let databasePollingAttempts = 0;

    const stepMetadataMatrix = {
        1: { title: "Select Service Tier", desc: "Choose the package configurations level matching deployment timelines." },
        2: { title: "Corporate Entity Details", desc: "Provide company identifier records, operational parameters, and configuration requirements." },
        3: { title: "Add-On Dynamic Matrices", desc: "Select optional compliance validation products and target acceleration layers." },
        4: { title: "Power of Attorney Validation", desc: "Review statutory representation provisions and sign with legal verification metadata." },
        5: { title: "Review Registration Filing", desc: "Audit data-field outputs prior to transmission pipelines execution steps." },
        6: { title: "Secure Checkout Portal", desc: "Finalize compliance invoice transaction records processing variables." },
        7: { title: "Filing Transmission Complete", desc: "Universal database injection operations executed successfully." }
    };

    function bootstrapMobileApplicationEngine() {
        const urlParams = new URLSearchParams(window.location.search);
        
        let resolvedServiceSlug = urlParams.get('service') || urlParams.get('package') || urlParams.get('id') || window.routeActiveServiceKey || "";
        let resolvedPackagePlan = urlParams.get('plan') || urlParams.get('tier') || window.routeActivePlanKey || "";

        if (!resolvedServiceSlug) {
            console.warn("[Mobile Engine Guard] No valid product service intent parameters detected. Postponing compiler injection pass.");
            buildStaticLayoutStructuralTargets();
            
            const fieldsTarget = document.getElementById("dynamic-onboarding-fields-root");
            if (fieldsTarget) {
                fieldsTarget.innerHTML = `
                    <div style="text-align: center; padding: 40px 16px; color: var(--slate); font-weight: 500; font-size: 0.95rem;">
                        <i class="fa-solid fa-circle-exclamation" style="color: var(--primary); margin-bottom: 8px; font-size: 1.5rem; display: block;"></i>
                        <span>Session initialized. Waiting for service selection parameters pipeline context...</span>
                    </div>
                `;
            }
            return;
        }

        window.routeActiveServiceKey = resolvedServiceSlug.toLowerCase().trim().replace(/[\s_]+/g, "-");
        window.routeActivePlanKey = resolvedPackagePlan ? resolvedPackagePlan.toLowerCase().trim() : "";

        const cachedPayload = localStorage.getItem("f4u_wizard_onboarding_state");
        if (cachedPayload) {
            try {
                const parsedMetrics = JSON.parse(cachedPayload);
                if (parsedMetrics.currentWizardActiveStep) {
                    window.currentWizardActiveStep = parseInt(parsedMetrics.currentWizardActiveStep, 10);
                }
            } catch(e) { 
                console.warn("[Mobile Engine] Cache restore bypassed."); 
            }
        }

        buildStaticLayoutStructuralTargets();
        verifyDatabaseSyncAndRender();
    }

    function verifyDatabaseSyncAndRender() {
        const targetRegistryKey = `${window.routeActiveServiceKey}-form-master`;
        
        if (typeof window.formRegistry[targetRegistryKey] === "undefined" && databasePollingAttempts < 50) {
            databasePollingAttempts++;
            console.log(`[Mobile Sync] Waiting for deferred data layers to compile... Attempt ${databasePollingAttempts}/50`);
            setTimeout(verifyDatabaseSyncAndRender, 100);
            return;
        }
        
        console.log(`[Mobile Sync Success] Form verification confirmed for: ${targetRegistryKey}`);
        renderActiveWorkflowStepView();
    }

    function buildStaticLayoutStructuralTargets() {
        const headerTarget = document.getElementById("mobile-app-header-slot");
        const footerTarget = document.getElementById("mobile-fixed-action-toolbar-target");

        if (headerTarget) {
            headerTarget.innerHTML = `
                <div class="mobile-nav-bar">
                    <img src="images/logo.png" alt="filings4u" onerror="this.src='https://filings4u.com'">
                    <a href="tel:7732457079" class="mobile-contact-badge">
                        <i class="fa-solid fa-phone"></i> 773-245-7079
                    </a>
                </div>
            `;
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

    async function renderActiveWorkflowStepView() {
        const activeIdx = window.currentWizardActiveStep;
        const currentMeta = stepMetadataMatrix[activeIdx] || { title: "Compliance Hub", desc: "Complete configuration options." };

        const trackerTarget = document.getElementById("mobile-progress-tracker-target");
        const headingTarget = document.getElementById("mobile-step-heading-target");
        const fieldsTarget = document.getElementById("dynamic-onboarding-fields-root");

        const serviceInput = document.getElementById("wizard-route-service-id");
        const planInput = document.getElementById("wizard-route-tier-id");
        if (serviceInput) serviceInput.value = window.routeActiveServiceKey || "";
        if (planInput) planInput.value = window.routeActivePlanKey || "";

        if (trackerTarget) {
            trackerTarget.innerHTML = `
                <span class="tracker-label">Step ${activeIdx} of 7: ${currentMeta.title}</span>
                <div class="progress-rail">
                    <div class="progress-beam" style="width: ${(activeIdx / 7) * 100}%"></div>
                </div>
            `;
        }

        if (headingTarget) {
            headingTarget.innerHTML = `
                <h2>${currentMeta.title}</h2>
                <p>${currentMeta.desc}</p>
            `;
        }

        if (fieldsTarget) {
            if (activeIdx === 1 && typeof window.getMobileWizardStepOneMarkup === "function") {
                fieldsTarget.innerHTML = window.getMobileWizardStepOneMarkup();
            } 
            else if (activeIdx === 2 && typeof window.getMobileWizardStepTwoMarkup === "function") {
                fieldsTarget.innerHTML = window.getMobileWizardStepTwoMarkup();
                
                const masterRegistryKey = `${window.routeActiveServiceKey}-form-master`;
                const nestedRootSlot = document.getElementById("dynamic-onboarding-fields-root");
                
                if (nestedRootSlot && typeof window.formRegistry[masterRegistryKey] === "function") {
                    try {
                        const stateOptions = window.globalStateDropdownOptionsHtml || "";
                        nestedRootSlot.innerHTML = window.formRegistry[masterRegistryKey](stateOptions);
                    } catch(e) {
                        console.error("[Mobile Engine Exception] Dynamic template execution drop:", e);
                    }
                }
            } 
            else if (activeIdx === 3 && typeof window.getMobileWizardStepThreeMarkup === "function") {
                fieldsTarget.innerHTML = window.getMobileWizardStepThreeMarkup();
                if (typeof window.renderTargetUpsellsListPanel === "function") {
                    window.renderTargetUpsellsListPanel();
                }
            } 
            else if (activeIdx === 4 && typeof window.getMobileWizardStepFourMarkup === "function" && typeof window.getMobileWizardStepFourExecutionFieldsMarkup === "function") {
                fieldsTarget.innerHTML = window.getMobileWizardStepFourMarkup() + window.getMobileWizardStepFourExecutionFieldsMarkup();
                if (typeof window.evaluatePoaInputStateMatrixMobile === "function") {
                    window.evaluatePoaInputStateMatrixMobile();
                }
            } 
            else if (activeIdx === 5 && typeof window.getMobileWizardStepFiveMarkup === "function") {
                fieldsTarget.innerHTML = window.getMobileWizardStepFiveMarkup();
                if (typeof window.updateSummaryInvoiceDisplayMatrix === "function") {
                    window.updateSummaryInvoiceDisplayMatrix();
                }
            } 
            else if (activeIdx === 6 && typeof window.getMobileWizardStepSixMarkup === "function") {
                fieldsTarget.innerHTML = window.getMobileWizardStepSixMarkup();
                if (typeof window.initializeFlatStripeCheckoutElement === "function") {
                    window.initializeFlatStripeCheckoutElement();
                }
                if (typeof window.syncTotalToPaymentDisplay === "function") {
                    window.syncTotalToPaymentDisplay();
                }
            } 
            else if (activeIdx === 7 && typeof window.getMobileWizardStepSevenReceiptMarkup === "function" && typeof window.getMobileWizardStepSevenAccountSetupMarkup === "function") {
fieldsTarget.innerHTML = window.getMobileWizardStepSevenReceiptMarkup() + window.getMobileWizardStepSevenAccountSetupMarkup();}}const backBtn = document.getElementById("mobile-back-btn");if (backBtn) {backBtn.style.visibility = (activeIdx === 1 || activeIdx === 7) ? "hidden" : "visible";}const continueBtn = document.getElementById("mobile-continue-btn");if (continueBtn) {if (activeIdx === 6) continueBtn.innerText = "Submit Order";else if (activeIdx === 7) continueBtn.style.display = "none";else continueBtn.innerText = "Continue";}if (typeof window.updateDynamicPricingMatrixVanilla === "function") {window.updateDynamicPricingMatrixVanilla();}if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {window.cacheAndRestoreWizardFormStatesVanilla(true);}}window.navigateMobileWizardStep = function(direction) {if (direction === 1) {const requiredFields = document.querySelectorAll("#dynamic-onboarding-fields-root input[required], #dynamic-onboarding-fields-root select[required]");let isCurrentStepValid = true;requiredFields.forEach(element => {if (!element.value.trim()) {isCurrentStepValid = false;element.style.borderColor = "#ef4444";} else {element.style.borderColor = "var(--border)";}});if (!isCurrentStepValid) {alert("Please fill out all required fields before proceeding.");return;}if (window.currentWizardActiveStep === 6 && typeof window.executeOnboardingTransactionPayloadSubmitVanilla === "function") {window.executeOnboardingTransactionPayloadSubmitVanilla();return;}}try {const cacheKey = "f4u_wizard_onboarding_state";const sessionCache = JSON.parse(localStorage.getItem(cacheKey) || "{}");const structuralInputs = document.querySelectorAll("#dynamic-onboarding-fields-root input, #dynamic-onboarding-fields-root select, #dynamic-onboarding-fields-root textarea");structuralInputs.forEach(input => {const mapKey = input.id || input.name;if (mapKey) {sessionCache[mapKey] = input.type === 'checkbox' ? input.checked : input.value;}});sessionCache.currentWizardActiveStep = window.currentWizardActiveStep + direction;localStorage.setItem(cacheKey, JSON.stringify(sessionCache));} catch(e) {console.error("[Mobile Save State Matrix Fail]", e);}let targetStepIndex = window.currentWizardActiveStep + direction;if (targetStepIndex < 1) targetStepIndex = 1;if (targetStepIndex > 7) targetStepIndex = 7;window.currentWizardActiveStep = targetStepIndex;renderActiveWorkflowStepView();window.scrollTo({ top: 0, behavior: "smooth" });};if (document.readyState === "loading") {document.addEventListener("DOMContentLoaded", bootstrapMobileApplicationEngine);} else {bootstrapMobileApplicationEngine();}})();