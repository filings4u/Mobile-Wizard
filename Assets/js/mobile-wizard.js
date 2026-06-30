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
        
        let resolvedServiceSlug = urlParams.get('service') || urlParams.get('id') || "llc";
        let resolvedPackagePlan = urlParams.get('plan') || urlParams.get('tier') || "standard";

        window.routeActiveServiceKey = resolvedServiceSlug.toLowerCase().trim().replace(/[\s_]+/g, "-");
        window.routeActivePlanKey = resolvedPackagePlan.toLowerCase().trim();

        const serviceNode = document.getElementById("wizard-route-service-id");
        const planNode = document.getElementById("wizard-route-tier-id");
        if (serviceNode) serviceNode.value = window.routeActiveServiceKey;
        if (planNode) planNode.value = window.routeActivePlanKey;

        const cachedPayload = localStorage.getItem("f4u_wizard_onboarding_state");
        if (cachedPayload) {
            try {
                const parsedMetrics = JSON.parse(cachedPayload);
                if (parsedMetrics.currentWizardActiveStep) {
                    window.currentWizardActiveStep = parseInt(parsedMetrics.currentWizardActiveStep, 10);
                }
            } catch(e) { console.warn("[Mobile Engine] Cache restore bypassed."); }
        }

        buildStaticLayoutStructuralTargets();
        verifyDatabaseSyncAndRender();
    }

    // 🔄 POLLING ENGINE: Holds template injection loops execution until deferred dependencies are resolved
    function verifyDatabaseSyncAndRender() {
        const targetRegistryKey = `${window.routeActiveServiceKey}-form-master`;
        
        if (typeof window.formRegistry[targetRegistryKey] === "undefined" && databasePollingAttempts < 50) {
            databasePollingAttempts++;
            console.log(`[Mobile Sync] Waiting for deferred data layers to compile... Attempt ${databasePollingAttempts}/50`);
            setTimeout(verifyDatabaseSyncAndRender, 100);
            return;
        }
        
        // Render step views when compilation verifies successfully
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
                    <button type="button" class="btn-mobile-nav btn-mobile-secondary" onclick="window.navigateMobileWizardStep(-1)">Back</button>
                    <button type="button" class="btn-mobile-nav btn-mobile-primary" onclick="window.navigateMobileWizardStep(1)">Continue</button>
                </div>
            `;
        }
    }

    function renderActiveWorkflowStepView() {
        const activeIdx = window.currentWizardActiveStep;
        const currentMeta = stepMetadataMatrix[activeIdx] || { title: "Compliance Hub", desc: "Complete configuration options." };

        const trackerTarget = document.getElementById("mobile-progress-tracker-target");
        const headingTarget = document.getElementById("mobile-step-heading-target");
        const fieldsTarget = document.getElementById("dynamic-onboarding-fields-root");

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

        const templateMasterKey = `${window.routeActiveServiceKey}-form-master`;
        let computedHtmlStringMarkup = "";

        try {
            if (window.formRegistry && typeof window.formRegistry[templateMasterKey] === "function") {
                const optionsHtml = window.globalStateDropdownOptionsHtml || "";
                computedHtmlStringMarkup = window.formRegistry[templateMasterKey](optionsHtml);
            }
        } catch(err) { console.error("[Mobile Engine Exception] Template build failure:", err); }

        if (fieldsTarget) {
            if (activeIdx === 2 && computedHtmlStringMarkup) {
                fieldsTarget.innerHTML = `
                    <div class="isolated-form-payload-container mobile-full-stack">
                        ${computedHtmlStringMarkup}
                    </div>
                `;
            } else {
                fieldsTarget.innerHTML = `
                    <div class="isolated-form-payload-container mobile-full-stack">
                        <div class="mobile-form-group">
                            <label>Primary Officer / Representative Name</label>
                            <input type="text" name="m_officer_name" id="m_officer_name" placeholder="John Doe" required />
                        </div>
                        <div class="mobile-form-group">
                            <label>Secure Corporate Notification Email</label>
                            <input type="email" name="m_officer_email" id="m_officer_email" placeholder="john@company.com" required />
                        </div>
                    </div>
                `;
            }
        }

        if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
            window.cacheAndRestoreWizardFormStatesVanilla(true);
        }
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
                    element.style.borderColor = "var(--border)";
                }
            });

            if (!isCurrentStepValid) {
                alert("Please fill out all required fields before proceeding.");
                return;
            }
        }

        try {
            const cacheKey = "f4u_wizard_onboarding_state";
            const sessionCache = JSON.parse(localStorage.getItem(cacheKey) || "{}");
            const structuralInputs = document.querySelectorAll("#dynamic-onboarding-fields-root input, #dynamic-onboarding-fields-root select");

            structuralInputs.forEach(input => {
                const mapKey = input.id || input.name;
                if (mapKey) sessionCache[mapKey] = input.value;
            });

            sessionCache.currentWizardActiveStep = window.currentWizardActiveStep + direction;
            localStorage.setItem(cacheKey, JSON.stringify(sessionCache));
        } catch(e) { console.error("[Mobile Save State Matrix Fail]", e); }

        let targetStepIndex = window.currentWizardActiveStep + direction;
        if (targetStepIndex < 1) targetStepIndex = 1;
        if (targetStepIndex > 7) targetStepIndex = 7;

        window.currentWizardActiveStep = targetStepIndex;
        renderActiveWorkflowStepView();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bootstrapMobileApplicationEngine);
    } else {
        bootstrapMobileApplicationEngine();
    }
})();
