// ============================================================================ //
// 🎯 MOBILE WIZARD STEP 1 TEMPLATE CONTROLLER LOOP
// ============================================================================ //
window.getMobileWizardStepOneMarkup = function() {
    return `
    <div class="wizard-panel active" id="step-panel-1" style="width: 100%; box-sizing: border-box;">
        
        <!-- 📊 Mobile Progress Tracker Header -->
        <div class="mobile-sticky-tracker-header" style="margin: -20px -20px 20px -20px; background: #ffffff; padding: 16px; border-bottom: 1px solid #cbd5e1;">
            <span class="m-step-indicator-label" style="font-size: 0.75rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 6px;">Step 1 of 7: Package Selection</span>
            <div class="m-progress-bar-bg" style="width: 100%; height: 6px; background-color: #cbd5e1; border-radius: 3px; overflow: hidden;">
                <div class="m-progress-bar-fill" style="height: 100%; width: 14.28%; background-color: #10b981; transition: width 0.3s ease;"></div>
            </div>
        </div>

        <!-- Title Block Header -->
        <div class="step-header-container" style="margin-bottom: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 12px;">
            <h2 class="step-main-title" style="color: #0a1f44; font-size: 1.3rem; font-weight: 900; margin: 0 0 4px 0; letter-spacing: -0.5px;">Your Selection Overview</h2>
            <p class="step-subtitle" style="color: #64748b; font-size: 0.85rem; margin: 0; line-height: 1.4;">Review your selected package and features below.</p>
        </div>

        <!-- Single Column Mobile Form Container Wrapper -->
        <div class="workspace-split-layout" style="display: block !important; width: 100% !important;">
            <div class="form-grid-layout" style="display: block !important; width: 100% !important;">
                
                <!-- Input Box 1: Selected Offering Profile -->
                <div class="wizard-input-group" style="margin-bottom: 20px;">
                    <label for="wizard-route-service-id" class="wizard-input-label" style="display: block; font-size: 0.85rem; font-weight: 700; margin-bottom: 6px; color: #0a1f44;">Selected Compliance Offering</label>
                    <div class="input-lock-wrapper" style="position: relative; display: flex; align-items: center; width: 100%;">
                        <input type="text" id="wizard-route-service-id" readonly required class="wizard-input-field readonly-lock-field" value="" style="width: 100% !important; height: 48px !important; padding: 12px 40px 12px 12px !important; font-size: 16px !important; border: 1.5px solid #cbd5e1 !important; border-radius: 8px !important; background: #f8fafc !important; color: #64748b !important; box-sizing: border-box !important; outline: none; -webkit-appearance: none;">
                        <span class="input-lock-icon-span" style="position: absolute; right: 14px; color: #94a3b8; font-size: 0.95rem; pointer-events: none;"><i class="fa-solid fa-lock"></i></span>
                    </div>
                </div>

                <!-- Hidden Input Buffer Trackers for URL query variables parameters -->
                <input type="hidden" id="wizard-route-tier-id" value="">

                <!-- Input Box 2: Package Inclusions dynamic target folder mapping -->
                <div class="wizard-input-group" style="margin-bottom: 20px;">
                    <label class="wizard-input-label" style="display: block; font-size: 0.85rem; font-weight: 700; margin-bottom: 8px; color: #0a1f44;">What Comes with the Package</label>
                    <div id="step-1-package-features-list" class="features-list-data-container" style="width: 100%; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 14px; background: #ffffff; box-sizing: border-box; min-height: 80px;">
                        <div class="loading-skeleton-row" style="color: #64748b; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-spinner fa-spin" style="color: #10b981;"></i>
                            <span>Assembling your customized layout configuration parameters...</span>
                        </div>
                    </div>
                </div>

                <!-- Touch Friendly Mobile Pricing Calculation row -->
                <div id="step-1-base-fee-row" style="background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 16px; margin-top: 20px; display: flex; justify-content: space-between; align-items: center; box-sizing: border-box; width: 100%;">
                    <span style="font-weight: 800; color: #0a1f44; font-size: 0.95rem;">Base Fee:</span>
                    <strong id="step-1-base-fee-value" style="font-family: monospace; color: #10b981; font-size: 1.35rem;">$0.00</strong>
                </div>

            </div>
        </div>

        <!-- 🔘 STEP 1 NAVIGATION CONTROL BAR (MOBILE BASE FIXED FIT) -->
        <div class="wizard-action-footer" style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #cbd5e1; display: flex; gap: 12px; width: 100%; box-sizing: border-box;">
            <button type="button" class="btn-wizard-save-progress" onclick="executeSaveAndExitWorkflow()" style="flex: 1; height: 48px; border-radius: 8px; font-size: 0.9rem; font-weight: 700; border: 1.5px solid #cbd5e1; background: #ffffff; color: #64748b; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 6px;"><i class="fa-solid fa-floppy-disk"></i> Save Progress</button>
            <button type="button" class="btn-wizard-main" onclick="goToNextWizardStep(2, event)" style="flex: 1.5; height: 48px; border-radius: 8px; font-size: 0.95rem; font-weight: 800; border: none; background: #10b981; color: #ffffff; cursor: pointer; text-align: center;">Continue to Form</button>
        </div>

    </div>
    `;
};

// ============================================================================ //
// 🏢 MOBILE WIZARD STEP 2 TEMPLATE CONTROLLER LOOP
// ============================================================================ //
window.getMobileWizardStepTwoMarkup = function() {
    return `
    <div class="wizard-panel master-onboarding-form" id="step-panel-2" data-step="2" style="display: none; width: 100%; box-sizing: border-box;">
        
        <!-- 📊 Mobile Progress Tracker Header -->
        <div class="mobile-sticky-tracker-header" style="margin: -20px -20px 20px -20px; background: #ffffff; padding: 16px; border-bottom: 1px solid #cbd5e1;">
            <span class="m-step-indicator-label" style="font-size: 0.75rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 6px;">Step 2 of 7: Service Form</span>
            <div class="m-progress-bar-bg" style="width: 100%; height: 6px; background-color: #cbd5e1; border-radius: 3px; overflow: hidden;">
                <div class="m-progress-bar-fill" style="height: 100%; width: 28.56%; background-color: #10b981; transition: width 0.3s ease;"></div>
            </div>
        </div>

        <!-- Title Block Header -->
        <div style="margin-bottom: 25px; border-bottom: 1px solid #e2e8f0; padding-bottom: 15px;">
            <h2 style="color: #0a1f44; font-size: 1.3rem; font-weight: 900; margin: 0 0 6px 0; letter-spacing: -0.5px;">Corporate Entity Details</h2>
            <p style="color: #64748b; font-size: 0.85rem; margin: 0; line-height: 1.4;">Provide company identifier records, operational parameters, and target communications parameters.</p>
        </div>

        <!-- Hidden desktop timeline fallback rules to isolate viewport display flow tracking -->
        <style>
            .sticky-timeline-sidebar { display: none !important; width: 0px !important; height: 0px !important; visibility: hidden !important; }
            .workspace-split-layout { display: block !important; width: 100% !important; }
            #dynamic-onboarding-fields-root { display: block !important; width: 100% !important; }
        </style>

        <!-- Unified Single Column Mobile Viewport Layout Container -->
        <div class="workspace-split-layout">
            <!-- FORCE INJECTED ROOT FIELDS INTO SINGLE COLUMN STACK FOR 100+ PLATFORMS -->
            <div id="dynamic-onboarding-fields-root" class="mobile-full-stack">
                <div style="text-align: center; padding: 40px 0; color: #64748b; font-weight: 500; font-size: 0.95rem;">
                    <i class="fa-solid fa-spinner fa-spin" style="color: #10b981; margin-right: 8px; font-size: 1.2rem;"></i>
                    <span>Assembling specialized compliance filing interfaces...</span>
                </div>
            </div>
        </div>

        <!-- 🔘 STEP 2 NAVIGATION CONTROL BAR (MOBILE BASE FIXED FIT) -->
        <div class="wizard-action-footer" style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px; box-sizing: border-box; gap: 12px;">
            <button type="button" class="btn-wizard-alt" onclick="goToNextWizardStep(1, event)" style="flex: 1; height: 48px; border-radius: 8px; font-size: 0.9rem; font-weight: 700; border: 1.5px solid #cbd5e1; background: #ffffff; color: #64748b; cursor: pointer; text-align: center;">Back</button>
            <button type="button" class="btn-wizard-save-progress" onclick="executeSaveAndExitWorkflow()" style="flex: 1; height: 48px; border-radius: 8px; font-size: 0.85rem; font-weight: 700; border: 1.5px solid #cbd5e1; background: #ffffff; color: #64748b; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 4px;"><i class="fa-solid fa-floppy-disk"></i> Save</button>
            <button type="button" class="btn-wizard-main" onclick="goToNextWizardStep(3)" style="flex: 1.5; height: 48px; border-radius: 8px; font-size: 0.95rem; font-weight: 800; border: none; background: #10b981; color: #ffffff; cursor: pointer; text-align: center;">Continue</button>
        </div>

    </div>
    `;
};

// ============================================================================ //
// 🚀 MOBILE WIZARD STEP 3 TEMPLATE CONTROLLER LOOP
// ============================================================================ //
window.getMobileWizardStepThreeMarkup = function() {
    return `
    <div class="wizard-panel master-onboarding-form" id="step-panel-3" data-step="3" style="display: none; width: 100%; box-sizing: border-box;">
        
        <!-- 📊 Mobile Progress Tracker Header -->
        <div class="mobile-sticky-tracker-header" style="margin: -20px -20px 20px -20px; background: #ffffff; padding: 16px; border-bottom: 1px solid #cbd5e1;">
            <span class="m-step-indicator-label" style="font-size: 0.75rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 6px;">Step 3 of 7: Compliance Add-Ons</span>
            <div class="m-progress-bar-bg" style="width: 100%; height: 6px; background-color: #cbd5e1; border-radius: 3px; overflow: hidden;">
                <div class="m-progress-bar-fill" style="height: 100%; width: 42.84%; background-color: #10b981; transition: width 0.3s ease;"></div>
            </div>
        </div>

        <!-- Title Block Header -->
        <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 15px; margin-bottom: 20px;">
            <h2 style="color: #0a1f44; font-size: 1.3rem; font-weight: 900; margin: 0 0 6px 0; letter-spacing: -0.5px;">Add-On Assets & Protection Tiers</h2>
            <p style="color: #64748b; font-size: 0.85rem; margin: 0; line-height: 1.4;">Activate secondary infrastructure shields to protect your active corporate standing from sudden status shifts.</p>
        </div>

        <!-- Hidden desktop timeline sidebars via Scoped CSS Overrides -->
        <style>
            .sticky-timeline-sidebar { display: none !important; width: 0px !important; height: 0px !important; visibility: hidden !important; }
            .workspace-split-layout { display: block !important; width: 100% !important; }
            #wizard-dynamic-upsells-render-target { display: flex !important; flex-direction: column !important; gap: 16px !important; width: 100% !important; }
        </style>

        <!-- Unified Single Column Mobile Viewport Layout Container -->
        <div class="workspace-split-layout">
            <!-- TARGET MOUNT ANCHOR FOR DYNAMIC JAVASCRIPT MARKETPLACE CARD LOOPS -->
            <div id="wizard-dynamic-upsells-render-target" class="mobile-full-stack">
                <div style="text-align: center; padding: 40px 0; color: #64748b; font-size: 0.9rem;">
                    <i class="fa-solid fa-spinner fa-spin" style="color: #10b981; margin-right: 8px; font-size: 1.2rem;"></i>
                    <span>Loading eligible asset protection tiers...</span>
                </div>
            </div>
        </div>

        <!-- 🔘 STEP 3 NAVIGATION CONTROL BAR (MOBILE BASE FIXED FIT) -->
        <div class="wizard-action-footer" style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px; box-sizing: border-box; gap: 12px;">
            <button type="button" class="btn-wizard-alt" onclick="goToNextWizardStep(2, event)" style="flex: 1; height: 48px; border-radius: 8px; font-size: 0.9rem; font-weight: 700; border: 1.5px solid #cbd5e1; background: #ffffff; color: #64748b; cursor: pointer; text-align: center;">Back</button>
            <button type="button" class="btn-wizard-save-progress" onclick="executeSaveAndExitWorkflow()" style="flex: 1; height: 48px; border-radius: 8px; font-size: 0.85rem; font-weight: 700; border: 1.5px solid #cbd5e1; background: #ffffff; color: #64748b; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 4px;"><i class="fa-solid fa-floppy-disk"></i> Save</button>
            <button type="button" class="btn-wizard-main" onclick="goToNextWizardStep(4)" style="flex: 1.5; height: 48px; border-radius: 8px; font-size: 0.95rem; font-weight: 800; border: none; background: #10b981; color: #ffffff; cursor: pointer; text-align: center;">Continue</button>
        </div>

    </div>
    `;
};

// ============================================================================ //
// 📋 MOBILE WIZARD STEP 4 TEMPLATE CONTROLLER LOOP
// ============================================================================ //
window.getMobileWizardStepFourMarkup = function() {
    return `
    <div class="wizard-panel master-onboarding-form" id="step-panel-4" data-step="4" style="display: none; width: 100%; box-sizing: border-box;">
        
        <!-- 📊 Mobile Progress Tracker Header -->
        <div class="mobile-sticky-tracker-header" style="margin: -20px -20px 20px -20px; background: #ffffff; padding: 16px; border-bottom: 1px solid #cbd5e1;">
            <span class="m-step-indicator-label" style="font-size: 0.75rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 6px;">Step 4 of 7: Power of Attorney</span>
            <div class="m-progress-bar-bg" style="width: 100%; height: 6px; background-color: #cbd5e1; border-radius: 3px; overflow: hidden;">
                <div class="m-progress-bar-fill" style="height: 100%; width: 57.12%; background-color: #10b981; transition: width 0.3s ease;"></div>
            </div>
        </div>

        <!-- Title Block Header -->
        <div style="margin-bottom: 25px; border-bottom: 1px solid #e2e8f0; padding-bottom: 15px; position: relative;">
            <h2 style="color: #0a1f44; font-size: 1.3rem; font-weight: 900; margin: 0 0 6px 0; letter-spacing: -0.5px;">Digital Power of Attorney Execution</h2>
            <p style="color: #64748b; font-size: 0.85rem; margin: 0; line-height: 1.4;">Please scroll to the bottom of the legal mandate to review and unlock the signature input panel.</p>
        </div>

        <!-- Hidden desktop timeline sidebars via Scoped CSS Overrides -->
        <style>
            .sticky-timeline-sidebar { display: none !important; width: 0px !important; height: 0px !important; visibility: hidden !important; }
            .workspace-split-layout { display: block !important; width: 100% !important; }
        </style>

        <!-- Unified Single Column Mobile Viewport Layout Container -->
        <div class="workspace-split-layout">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; box-sizing: border-box; display: flex; flex-direction: column; width: 100%;">
                
                <!-- Legal Scrollable Text Area Container Frame -->
                <div id="poa-scroll-box" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 0.8rem; color: #334155; line-height: 1.5; max-height: 200px; overflow-y: scroll; font-family: system-ui, sans-serif; text-align: justify; margin-bottom: 16px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02); -webkit-overflow-scrolling: touch;">
                    LIMITED POWER OF ATTORNEY & CORPORATE AGENCY AGREEMENTWHEREAS, the undersigned Principal (hereinafter referred to as the "Principal"), on behalf of themselves and any business entity currently existing or to be formed through the services requested, does hereby nominatively appoint, designate, and empower filings4u, LLC (hereinafter referred to as the "Attorney-in-Fact"), an Illinois limited liability company and subsidiary of Roseland Companies, LLC, along with its authorized operational agents, officers, employees, and designees, as its true and lawful Attorney-in-Fact and Corporate Agent in accordance with the strict terms and limitations set forth herein.<br><br> 1. EXPRESS LIMITED SCOPE OF APPOINTMENT<br> The scope of this appointment is strictly restricted and expressly limited to administrative, regulatory, and compliance-related document processing. The Attorney-in-Fact is granted the authority to execute, sign, modify, amend, translate, submit, and process applications, registrations, forms, and renewals on behalf of the Principal across the following commercial vectors:<br> Entity Formation & Corporate Management: Articles of Organization (LLCs), Articles of Incorporation, DBAs, Nonprofits, Series LLCs, Foreign Qualifications, Reinstatements, Good Standings, Bylaws, and Resolutions.<br> Intellectual Property & Operational Compliance: Trademark/Servicemark filings, Annual Reports, Operating Agreements, Registered Agent service maintenance, Business Licenses, EIN procurement, CLIA Certificates, and NDAs.<br> Tax Registration & Filings: Federal/State tax configurations, Franchise Tax reporting, Sales Tax registrations, Payroll Tax (940/941) setups, Heavy Highway Vehicle Use Tax (Form 2290), and 1099-NEC/MISC processing.<br> Government Procurement: CAGE Code Registrations, DUNS Number processing, SAM.gov transitions, MBE Certifications, and WOSB Certifications.<br> Transportation & Trucking Compliance: Trucker/Broker Motor Carrier Authorities (MC/DOT Numbers), Unified Carrier Registrations (UCR), Standard Carrier Alpha Codes (SCAC), DOT Drug & Alcohol Consortium enrollment, Driver Qualification Files, Process Agent designations (BOC-3 filings), IFTA registrations, HAZMAT registrations, IRP plates, and ELD coordination.<br><br> 2. GRANT OF OPERATIONAL POWERS<br> The Principal hereby grants, conveys, and delivers unto the said Attorney-in-Fact full operational power, authority, and jurisdiction to undertake, execute, and perform any and all acts deemed necessary, incidental, or legally obligatory to fulfill the service requests initiated by the Principal within the filings4u, LLC digital wizard interface. This grant explicitly includes: The authority to submit electronic credentials for identity verification purposes; The right to sign public registry certificates as an "Organizer," "Incorporator," "Authorized Representative," or "Preparer"; The capacity to act as a third-party designee before state departments, Departments of Revenue, the Internal Revenue Service (IRS), the FMCSA, the DOT, and equivalent international ministries.<br><br> 3. INTERNATIONAL & CROSS-BORDER ADAPTABILITY<br> This authorization extends past domestic US parameters to include Canadian federal and provincial registries (including Corporations Canada and provincial revenue ministries) and other international regulatory structures where the Principal explicitly directs filings4u, LLC to act.<br><br> 4. ELECTRONIC SIGNATURES, ESIGN ACT COMPLIANCE, AND INTENT<br> This Agreement is executed electronically in strict conformity with the federal Electronic Signatures in Global and National Commerce Act (ESIGN), the Uniform Electronic Transactions Act (UETA), and applicable international electronic commerce frameworks. The Principal expressly understands, agrees, and consents that typing their name into the designated input field—resulting in a script-generated cursive font rendering of their name on the screen—constitutes their valid, legally binding electronic signature. The Principal affirms that this mechanical action represents an explicit intent to sign, execute, and deliver this Limited Power of Attorney and that such digital authentication carries the identical legal weight, validity, and enforceability of a handwritten "wet" ink signature.<br><br> 5. NO LEGAL SERVICES RENDERED (UPL DISCLAIMER)<br> The Principal acknowledges and agrees that filings4u, LLC is a document preparation, filing, and administrative compliance service provider. filings4u, LLC, its officers, employees, and parent entities do not provide legal advice, legal opinions, or architectural legal strategies.<br><br> 6. RATIFICATION, REVOCATION, AND DURATION<br> This agreement shall remain in full force and effect from the date of electronic execution until explicitly revoked. Revocation may occur via written physical notification delivered to filings4u, LLC corporate networks or electronic cancellation processed through verified client portal pathways.<br><br> 7. AFFIRMATION AND ACCEPTANCE<br> By executing this document through digital input validation, the Principal affirms that they possess the legal capacity, administrative ownership, or explicit corporate authorization required to execute this contract on behalf of themselves or the commercial entity represented.<br><br> Corporate Entity Information:<br> filings4u, LLC | A Subsidiary of Roseland Companies, LLC<br> filings4u Compliance Hub | Roseland Companies Management<br> Contact Support: support@filings4u.com
                </div>

            </div>
        </div>

        <!-- 🔘 STEP 4 NAVIGATION CONTROL BAR (MOBILE BASE FIXED FIT) -->
        <div class="wizard-action-footer" style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px; box-sizing: border-box; gap: 12px;">
            <button type="button" class="btn-wizard-alt" onclick="goToNextWizardStep(3, event)" style="flex: 1; height: 48px; border-radius: 8px; font-size: 0.9rem; font-weight: 700; border: 1.5px solid #cbd5e1; background: #ffffff; color: #64748b; cursor: pointer; text-align: center;">Back</button>
            <button type="button" class="btn-wizard-save-progress" onclick="executeSaveAndExitWorkflow()" style="flex: 1; height: 48px; border-radius: 8px; font-size: 0.85rem; font-weight: 700; border: 1.5px solid #cbd5e1; background: #ffffff; color: #64748b; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 4px;"><i class="fa-solid fa-floppy-disk"></i> Save</button>
            <button type="button" class="btn-wizard-main" onclick="goToNextWizardStep(5)" style="flex: 1.5; height: 48px; border-radius: 8px; font-size: 0.95rem; font-weight: 800; border: none; background: #10b981; color: #ffffff; cursor: pointer; text-align: center;">Continue</button>
        </div>

    </div>
    `;
};


// ============================================================================ //
// 📋 MOBILE WIZARD STEP 4 ENGINE AND Preview SIGNATURE FIELD SUB-BLOCK
// ============================================================================ //
window.getMobileWizardStepFourExecutionFieldsMarkup = function() {
    return `
    <!-- Live Execution Fields & Signature Preview Target Container Block -->
    <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; box-sizing: border-box; margin-top: 16px;">
        
        <!-- Instruction and Dynamic Tooltip Layout -->
        <div style="display: flex; align-items: flex-start; justify-content: space-between; width: 100%;">
            <div style="display: flex; flex-direction: column; gap: 4px; flex: 1;">
                <label for="poa_typed_signature" style="display: block; font-weight: 800; font-size: 0.85rem; text-transform: uppercase; color: #0a1f44; letter-spacing: 0.3px; margin: 0;">Full Legal Name</label>
                <span style="display: block; font-size: 0.75rem; color: #64748b; line-height: 1.3;">Type your name exactly as it appears on your government-issued ID. Our system will generate your digital signature.</span>
            </div>
            
            <!-- Tooltip Anchor Icon Container -->
            <div class="poa-tooltip-anchor" style="position: relative; margin-left: 12px; flex-shrink: 0;">
                <button type="button" id="poa-info-btn" style="background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; color: #0a1f44; font-weight: bold; cursor: pointer; font-size: 0.9rem;" onclick="window.togglePoaContextualTooltipDisplay(event)">ⓘ</button>
                <div id="poa-tooltip-card" style="display: none; position: absolute; bottom: 38px; right: 0; width: 280px; background: #0a1f44; color: #ffffff; padding: 14px; border-radius: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.15); font-size: 0.75rem; line-height: 1.4; z-index: 1000; text-align: left; box-sizing: border-box;">
                    <div id="poa-tooltip-content-target">Loading authorization context data...</div>
                </div>
            </div>
        </div>

        <!-- Single Column Touch Target Grid Matrix -->
        <div class="signature-fields-responsive-row" style="display: flex; flex-direction: column; gap: 14px; width: 100%;">
            <div style="width: 100%;">
                <input type="text" id="poa_typed_signature" name="poa_typed_signature" required placeholder="e.g., Johnathan R. Doe" style="width: 100% !important; height: 48px !important; padding: 12px !important; border: 1.5px solid #cbd5e1 !important; border-radius: 8px !important; font-size: 16px !important; box-sizing: border-box !important; color: #0a1f44 !important; font-weight: 600; background: #ffffff !important; outline: none; -webkit-appearance: none;">
            </div>
            <div style="width: 100%;">
                <div id="cursive-signature-preview" style="width: 100%; height: 48px; padding: 0 12px; background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 8px; display: flex; align-items: center; box-sizing: border-box; font-family: 'Dancing Script', 'Caveat', cursive, sans-serif; font-size: 1.6rem; color: #0066cc; user-select: none; white-space: nowrap; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0,0,0,0.02);">Your Signature</div>
            </div>
        </div>

        <!-- Real-Time Legal Affirmation Block -->
        <p style="margin: 0; font-size: 0.75rem; color: #475569; line-height: 1.4; text-align: left; background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; width: 100%; box-sizing: border-box;">
            📝 <strong>Legal Acknowledgment:</strong> By typing your name above, you are creating a legally binding digital signature. You explicitly authorize filings4u, LLC to act as your administrative attorney-in-fact to execute and submit the regulatory documents selected in this wizard.
        </p>

        <!-- Touch Gatekeeper Checkbox Alignment -->
        <div style="display: flex; align-items: flex-start; gap: 12px; margin-top: 4px; text-align: left; width: 100%; box-sizing: border-box;">
            <input type="checkbox" id="poa_consent_checkbox" name="poa_consent_checkbox" class="addon-checkbox" style="width: 22px !important; height: 22px !important; margin-top: 2px; border: 1.5px solid #cbd5e1 !important; border-radius: 4px !important; background: #ffffff !important; cursor: pointer; flex-shrink: 0; -webkit-appearance: checkbox !important;" onchange="if(typeof window.evaluatePoaInputStateMatrix === 'function') window.evaluatePoaInputStateMatrix()">
            <label for="poa_consent_checkbox" style="font-size: 0.775rem; font-weight: 600; color: #0a1f44; cursor: pointer; line-height: 1.4; user-select: none;">
                I agree to the Limited Power of Attorney & Corporate Agency Agreement, expressly consent to conduct this transaction electronically under the ESIGN Act, and authorize filings4u, LLC to sign and file these documents on my behalf.
            </label>
        </div>

    </div>

    <!-- Engineering Compliance Hidden Metadata Elements Framework (V2026.1) -->
    <input type="hidden" id="poa_meta_version" value="v2026.1">
    <input type="hidden" id="poa_meta_intent_string" value="">
    <input type="hidden" id="poa_meta_font_style" value="Dancing Script, Caveat, cursive">
    <input type="hidden" id="poa_meta_timestamp_utc" value="">
    <input type="hidden" id="poa_meta_user_agent" value="">

    <!-- 🔘 STEP 4 NAVIGATION CONTROL BAR (MOBILE FIXED FIT) -->
    <div class="wizard-action-footer" style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px; box-sizing: border-box; gap: 12px;">
        <button type="button" class="btn-wizard-alt" onclick="goToPreviousWizardStep()" style="flex: 1; height: 48px; border-radius: 8px; font-size: 0.9rem; font-weight: 700; border: 1.5px solid #cbd5e1; background: #ffffff; color: #64748b; cursor: pointer; text-align: center;">Back</button>
        <button type="button" class="btn-wizard-save-progress" onclick="if(typeof executeSaveAndExitWorkflow==='function') executeSaveAndExitWorkflow()" style="flex: 1; height: 48px; border-radius: 8px; font-size: 0.85rem; font-weight: 700; border: 1.5px solid #cbd5e1; background: #ffffff; color: #64748b; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 4px;"><i class="fa-solid fa-floppy-disk"></i> Save</button>
        <button type="button" id="poa-next-btn" class="btn-wizard-main" style="flex: 1.5; height: 48px; border-radius: 8px; font-size: 0.95rem; font-weight: 800; border: none; background: #10b981; color: #ffffff; opacity: 1; cursor: pointer; pointer-events: auto !important; text-align: center;" onclick="if(typeof window.runActivePoaClickValidationGate === 'function') { window.runActivePoaClickValidationGate(event); } else { if(typeof goToNextWizardStep === 'function') goToNextWizardStep(5, event); }">Continue</button>
    </div>
    `;
};


// ============================================================================ //
// 📊 MOBILE WIZARD STEP 5 TEMPLATE CONTROLLER LOOP
// ============================================================================ //
window.getMobileWizardStepFiveMarkup = function() {
    return `
    <div class="wizard-panel" id="step-panel-5" style="display: none; width: 100%; box-sizing: border-box;">
        
        <!-- 📊 Mobile Progress Tracker Header -->
        <div class="mobile-sticky-tracker-header" style="margin: -20px -20px 20px -20px; background: #ffffff; padding: 16px; border-bottom: 1px solid #cbd5e1;">
            <span class="m-step-indicator-label" style="font-size: 0.75rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 6px;">Step 5 of 7: Purchase Summary</span>
            <div class="m-progress-bar-bg" style="width: 100%; height: 6px; background-color: #cbd5e1; border-radius: 3px; overflow: hidden;">
                <div class="m-progress-bar-fill" style="height: 100%; width: 71.40%; background-color: #10b981; transition: width 0.3s ease;"></div>
            </div>
        </div>

        <!-- Title Block Header -->
        <div style="margin-bottom: 25px; border-bottom: 1px solid #e2e8f0; padding-bottom: 15px;">
            <h2 style="color: #0a1f44; font-size: 1.3rem; font-weight: 900; margin: 0 0 6px 0; letter-spacing: -0.5px;">Review Your Purchase Summary</h2>
            <p style="color: #64748b; font-size: 0.85rem; margin: 0; line-height: 1.4;">Verify your baseline item allocations and dynamic package selections before continuing to payment.</p>
        </div>

        <!-- Hidden desktop timeline fallbacks via Scoped CSS Overrides -->
        <style>
            .sticky-timeline-sidebar { display: none !important; width: 0px !important; height: 0px !important; visibility: hidden !important; }
            .workspace-split-layout { display: block !important; width: 100% !important; }
        </style>

        <!-- Unified Single Column Mobile Viewport Layout Container -->
        <div class="workspace-split-layout">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; box-sizing: border-box; width: 100%;">
                
                <!-- Dynamic Target Element Row: Filled by wizard-summary.js invoice compilation logic -->
                <div id="summary-purchase-rows-container" style="display: flex; flex-direction: column; gap: 14px; width: 100%;"></div>
                
                <!-- Invoice Accounting Breakdown Board Block -->
                <div style="margin-top: 20px; border-top: 1px solid #e2e8f0; padding-top: 20px; display: flex; flex-direction: column; gap: 12px; box-sizing: border-box; width: 100%;">
                    
                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; font-weight: 500;">
                        <span>Filing &amp; Add-on Subtotal</span>
                        <strong id="summary-subtotal-display" style="font-family: monospace; color: #0a1f44; font-size: 1rem;">$0.00</strong>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; font-weight: 500;">
                        <span>Government &amp; Agency Fees</span>
                        <strong id="summary-gov-fees-display" style="font-family: monospace; color: #0a1f44; font-size: 1  05rem;">$0.00</strong>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; margin-top: 10px; border-top: 1px dashed #e2e8f0; padding-top: 14px; font-size: 1.15rem; align-items: center; width: 100%;">
                        <span style="color: #0a1f44; font-weight: 800;">Total Summary Amount</span>
                        <strong id="summary-grand-total-display" style="font-family: monospace; color: #10b981; font-size: 1.35rem;">$0.00</strong>
                    </div>
                    
                </div>
            </div>
        </div>

        <!-- 🔘 STEP 5 NAVIGATION CONTROL BAR (MOBILE BASE FIXED FIT) -->
        <div class="wizard-action-footer" style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px; box-sizing: border-box; gap: 12px;">
            <button type="button" class="btn-wizard-alt" onclick="goToNextWizardStep(4)" style="flex: 1; height: 48px; border-radius: 8px; font-size: 0.9rem; font-weight: 700; border: 1.5px solid #cbd5e1; background: #ffffff; color: #64748b; cursor: pointer; text-align: center;">Back</button>
            <button type="button" class="btn-wizard-save-progress" onclick="executeSaveAndExitWorkflow()" style="flex: 1; height: 48px; border-radius: 8px; font-size: 0.85rem; font-weight: 700; border: 1.5px solid #cbd5e1; background: #ffffff; color: #64748b; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 4px;"><i class="fa-solid fa-floppy-disk"></i> Save</button>
            <button type="button" class="btn-wizard-main" onclick="goToNextWizardStep(6)" style="flex: 1.5; height: 48px; border-radius: 8px; font-size: 0.95rem; font-weight: 800; border: none; background: #10b981; color: #ffffff; cursor: pointer; text-align: center;">Continue</button>
        </div>

    </div>
    `;
};


// ============================================================================ //
// 💳 MOBILE WIZARD STEP 6 TEMPLATE CONTROLLER LOOP
// ============================================================================ //
window.getMobileWizardStepSixMarkup = function() {
    return `
    <div class="wizard-panel master-onboarding-form" id="step-panel-6" data-step="6" style="display: none; width: 100%; box-sizing: border-box;">
        
        <!-- 📊 Mobile Progress Tracker Header -->
        <div class="mobile-sticky-tracker-header" style="margin: -20px -20px 20px -20px; background: #ffffff; padding: 16px; border-bottom: 1px solid #cbd5e1;">
            <span class="m-step-indicator-label" style="font-size: 0.75rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 6px;">Step 6 of 7: Secure Payment</span>
            <div class="m-progress-bar-bg" style="width: 100%; height: 6px; background-color: #cbd5e1; border-radius: 3px; overflow: hidden;">
                <div class="m-progress-bar-fill" style="height: 100%; width: 85.68%; background-color: #10b981; transition: width 0.3s ease;"></div>
            </div>
        </div>

        <!-- Title Block Header -->
        <div style="margin-bottom: 25px; border-bottom: 1px solid #e2e8f0; padding-bottom: 15px;">
            <h2 style="color: #0a1f44; font-size: 1.3rem; font-weight: 900; margin: 0 0 6px 0; letter-spacing: -0.5px;">Encrypted Payment Entry</h2>
            <p style="color: #64748b; font-size: 0.85rem; margin: 0; line-height: 1.4;">Provide tokenized card verification parameters to authorize and execute your secure checkout connection.</p>
        </div>

        <!-- Hidden desktop timeline sidebars via Scoped CSS Overrides -->
        <style>
            .sticky-timeline-sidebar { display: none !important; width: 0px !important; height: 0px !important; visibility: hidden !important; }
            .workspace-split-layout { display: block !important; width: 100% !important; }
        </style>

        <!-- Unified Single Column Mobile Viewport Layout Container -->
        <div class="workspace-split-layout">
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; box-sizing: border-box; display: flex; flex-direction: column; gap: 16px; width: 100%;">
                
                <!-- Split Layout Total Display row optimized for clean vertical alignment on mobile views -->
                <div style="display: flex; flex-direction: column; gap: 8px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px; width: 100%; box-sizing: border-box;">
                    <div>
                        <h3 style="margin: 0 0 4px 0; font-size: 1.05rem; font-weight: 800; color: #0a1f44;">Secure Credit Card Details</h3>
                        <p style="margin: 0; font-size: 0.775rem; color: #64748b; line-height: 1.3; font-weight: 400;">All numbers remain completely shielded inside tokenized merchant processing vault pipelines.</p>
                    </div>
                    <div style="text-align: left; background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; margin-top: 4px; box-sizing: border-box; width: 100%;">
                        <span style="font-size: 0.75rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Filing Total:</span>
                        <div style="font-size: 1.3rem; font-weight: 900; color: #10b981; font-family: monospace;" id="payment-gateway-total-display">Calculating...</div>
                    </div>
                </div>

                <!-- Stripe Checkout Target Mount Box Container -->
                <div class="wizard-input-group" style="margin-bottom: 4px; display: flex; flex-direction: column; gap: 6px; width: 100%; box-sizing: border-box;">
                    <label style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; display: block; margin-bottom: 2px;">Secure Credit or Debit Card Payment</label>
                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; box-shadow: inset 0 1px 3px rgba(0,0,0,0.02); width: 100%; box-sizing: border-box;">
                        <div id="stripe-payment-element-mount-point"></div>
                    </div>
                </div>

                <!-- Trust Badges Footer Area -->
                <div style="border-top: 1px solid #e2e8f0; padding-top: 14px; display: flex; flex-direction: column; gap: 8px; font-size: 0.75rem; color: #64748b; font-weight: 600; width: 100%; box-sizing: border-box;">
                    <div style="display: flex; align-items: center; gap: 8px; font-weight: 400;"><i class="fa-solid fa-shield-halved" style="color: #10b981;"></i> PCI-DSS Level 1 Compliant Architecture Seam</div>
                    <div style="display: flex; align-items: center; gap: 8px; font-weight: 400;"><i class="fa-solid fa-circle-check" style="color: #10b981;"></i> Official Corporate Guarantee Protection Included</div>
                </div>

            </div>
        </div>

        <!-- 🔘 STEP 6 NAVIGATION CONTROL BAR (MOBILE BASE FIXED FIT) -->
        <div class="wizard-action-footer" style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px; box-sizing: border-box; gap: 12px;">
            <button type="button" class="btn-wizard-alt" onclick="goToNextWizardStep(5, event)" style="flex: 1; height: 48px; border-radius: 8px; font-size: 0.9rem; font-weight: 700; border: 1.5px solid #cbd5e1; background: #ffffff; color: #64748b; cursor: pointer; text-align: center;">Back</button>
            <button type="button" class="btn-wizard-save-progress" onclick="executeSaveAndExitWorkflow()" style="flex: 1; height: 48px; border-radius: 8px; font-size: 0.85rem; font-weight: 700; border: 1.5px solid #cbd5e1; background: #ffffff; color: #64748b; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 4px;"><i class="fa-solid fa-floppy-disk"></i> Save</button>
            <button type="button" id="wizard-next-trigger-btn" class="btn-wizard-main" onclick="window.executeOnboardingTransactionPayloadSubmitVanilla()" style="flex: 1.8; height: 48px; border-radius: 8px; font-size: 0.95rem; font-weight: 800; border: none; background: #10b981; color: #ffffff; cursor: pointer; text-align: center; box-shadow: 0 4px 12px rgba(16,185,129,0.25);">Submit Order</button>
        </div>

    </div>
    `;
};


// ============================================================================ //
// 🎉 MOBILE WIZARD STEP 7 TEMPLATE CONTROLLER LOOP (BLOCK 1)
// ============================================================================ //
window.getMobileWizardStepSevenReceiptMarkup = function() {
    return `
    <div class="wizard-panel" id="step-panel-7" style="display: none; width: 100%; box-sizing: border-box;">
        
        <!-- 📊 Mobile Progress Tracker Header -->
        <div class="mobile-sticky-tracker-header" style="margin: -20px -20px 20px -20px; background: #ffffff; padding: 16px; border-bottom: 1px solid #cbd5e1;">
            <span class="m-step-indicator-label" style="font-size: 0.75rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 6px;">Step 7 of 7: Success Portal</span>
            <div class="m-progress-bar-bg" style="width: 100%; height: 6px; background-color: #cbd5e1; border-radius: 3px; overflow: hidden;">
                <div class="m-progress-bar-fill" style="height: 100%; width: 100%; background-color: #10b981; transition: width 0.3s ease;"></div>
            </div>
        </div>

        <!-- Single Column Responsive Mobile Canvas Layout -->
        <div class="success-container" style="display: flex; flex-direction: column; gap: 20px; width: 100%; box-sizing: border-box;">
            
            <!-- ORDER CONFIRMATION AND TRANSACTION RECEIPT CARD -->
            <div class="success-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px; box-sizing: border-box; width: 100%;">
                
                <!-- Success Checkmark Badge Component -->
                <div class="success-badge-icon" style="width: 56px; height: 56px; background: rgba(16, 185, 129, 0.1); color: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                    <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px; display: block;">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>

                <!-- Main Confirmation Header Text Block -->
                <div style="margin-bottom: 20px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px; width: 100%; box-sizing: border-box;">
                    <h1 style="color: #0a1f44; font-size: 1.4rem; font-weight: 900; margin: 0 0 6px 0; letter-spacing: -0.5px;">Order Successfully Deployed</h1>
                    <p style="color: #64748b; font-size: 0.85rem; margin: 0; line-height: 1.45;">Your compliance metadata package has been parsed, encrypted, and transmitted directly to target authority filing networks.</p>
                </div>

                <!-- Administrative Handshake Reference Parameters Board -->
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; display: flex; flex-direction: column; gap: 14px; margin-bottom: 20px; box-sizing: border-box; width: 100%;">
                    <div style="width: 100%; box-sizing: border-box;">
                        <span style="font-size: 0.725rem; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">Secure Tracking Token</span>
                        <strong id="receipt-session-hash-display" style="font-family: monospace; font-size: 0.9rem; color: #0a1f44; word-break: break-all; display: block; line-height: 1.3;">RETRIEVING...</strong>
                    </div>
                    <div style="width: 100%; box-sizing: border-box;">
                        <span style="font-size: 0.725rem; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">Filing Status</span>
                        <strong style="color: #10b981; font-size: 0.85rem; display: flex; align-items: center; gap: 6px; line-height: 1.3; padding-top: 2px; font-weight: 700;">
                            <span style="width: 8px; height: 8px; background: #10b981; border-radius: 50%; display: inline-block;"></span> VALIDATED &amp; QUEUED
                        </strong>
                    </div>
                </div>

                <!-- Itemized Transaction Invoice Display Stack Board Block -->
                <div style="margin-bottom: 20px; width: 100%; box-sizing: border-box;">
                    <h3 style="margin: 0 0 12px 0; font-size: 0.85rem; font-weight: 800; color: #0a1f44; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 2px solid #f8fafc; padding-bottom: 6px;">Itemized Billing Statement</h3>
                    
                    <!-- Target dynamic injector location point for transaction rows -->
                    <div id="receipt-items-injector-frame" style="display: flex; flex-direction: column; gap: 8px; width: 100%;"></div>
                    
                    <div style="background: #f8fafc; border-radius: 8px; padding: 14px; margin-top: 12px; border: 1px solid #cbd5e1; display: flex; flex-direction: column; gap: 10px; box-sizing: border-box; width: 100%;">
                        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #64748b; font-weight: 500;">
                            <span>Filing Processing Subtotal</span>
                            <span id="receipt-subtotal-display" style="font-family: monospace; color: #0a1f44; font-weight: 600;">$0.00</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #64748b; font-weight: 500;">
                            <span>Government Statutory Registry Fees</span>
                            <span id="receipt-gov-fee-display" style="font-family: monospace; color: #0a1f44; font-weight: 600;">$0.00</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 1.15rem; color: #0a1f44; font-weight: 900; border-top: 1px dashed #cbd5e1; padding-top: 10px; margin-top: 2px; align-items: center; width: 100%;">
                            <span>Total Paid Amount</span>
                            <span id="receipt-grand-total-display" style="font-family: monospace; color: #10b981;">$0.00</span>
                        </div>
                    </div>
                </div>

                <!-- Dynamic Legal Entity Audit Profile Record View Board -->
                <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 16px; box-sizing: border-box; width: 100%;">
                    <h3 style="margin: 0 0 12px 0; font-size: 0.85rem; font-weight: 800; color: #0a1f44; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 8px;">
                        <i class="fa-solid fa-building" style="color: #64748b;"></i> Registered Entity Profile Target
                    </h3>
                    <div class="profile-responsive-grid" style="display: flex; flex-direction: column; gap: 14px; font-size: 0.85rem; width: 100%; box-sizing: border-box;">
                        <div>
                            <span style="color: #64748b; display: block; font-size: 0.725rem; font-weight: 700; text-transform: uppercase; margin-bottom: 2px;">Legal Corporate Name</span>
                            <strong id="receipt-profile-name" style="color: #0a1f44; font-weight: 600;">---</strong>
                        </div>
                        <div>
                            <span style="color: #64748b; display: block; font-size: 0.725rem; font-weight: 700; text-transform: uppercase; margin-bottom: 2px;">Taxpayer ID / EIN</span>
                            <strong id="receipt-profile-ein" style="color: #0a1f44; font-family: monospace; font-weight: 600;">---</strong>
                        </div>
                        <div>
                            <span style="color: #64748b; display: block; font-size: 0.725rem; font-weight: 700; text-transform: uppercase; margin-bottom: 2px;">Principal Office Address</span>
                            <strong id="receipt-profile-address" style="color: #0a1f44; font-weight: 600; display: block; line-height: 1.3;">---</strong>
                        </div>
                    </div>
                </div>

            </div>
    `;
};

// ============================================================================ //
// 🎉 MOBILE WIZARD STEP 7 TEMPLATE CONTROLLER LOOP (BLOCK 2)
// ============================================================================ //
window.getMobileWizardStepSevenAccountSetupMarkup = function() {
    return `
            <!-- CLIENT SECURED GATEWAY ACCOUNT CREATION CARD -->
            <div class="success-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px; box-sizing: border-box; width: 100%; margin-top: 20px;">
                
                <div style="margin-bottom: 20px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px; width: 100%; box-sizing: border-box;">
                    <h2 style="color: #0a1f44; font-size: 1.2rem; font-weight: 800; margin: 0 0 4px 0; display: flex; align-items: center; gap: 8px;">
                        <i class="fa-solid fa-user-plus" style="color: #10b981; font-size: 1.1rem;"></i> Activate Client Portal
                    </h2>
                    <p style="color: #64748b; font-size: 0.8rem; margin: 0; line-height: 1.4; font-weight: 400;">Claim ownership of your compliance dossier. Establish your security access parameters to monitor state approvals, fetch corporate documents, and track status matrices in real time.</p>
                </div>

                <!-- SECURE PORTAL USER REGISTRATION MATRIX FORM -->
                <div id="wizard-account-generation-subform" style="width: 100%; box-sizing: border-box;">
                    
                    <div style="display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; width: 100%; box-sizing: border-box;">
                        <label for="portal_user_email" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Registered Account Username / Email</label>
                        <div style="position: relative; display: flex; align-items: center; width: 100%;">
                            <span style="position: absolute; left: 14px; color: #64748b; font-size: 0.9rem; pointer-events: none;"><i class="fa-solid fa-envelope"></i></span>
                            <input type="email" id="portal_user_email" required readonly style="width: 100% !important; height: 48px !important; padding: 12px 12px 12px 40px !important; font-size: 16px !important; font-weight: 600; border-radius: 8px !important; border: 1.5px solid #cbd5e1 !important; background: #f1f5f9 !important; color: #64748b !important; cursor: not-allowed; outline: none; box-sizing: border-box !important;">
                        </div>
                        <span style="font-size: 0.7rem; color: #64748b; font-weight: 400; padding-left: 2px;">Auto-locked to your corporate registry filing email.</span>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; width: 100%; box-sizing: border-box;">
                        <label for="portal_user_password" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Create Security Password</label>
                        <div style="position: relative; display: flex; align-items: center; width: 100%;">
                            <span style="position: absolute; left: 14px; color: #64748b; font-size: 0.9rem; pointer-events: none;"><i class="fa-solid fa-key"></i></span>
                            <input type="password" id="portal_user_password" required minlength="8" placeholder="Minimum 8 characters..." style="width: 100% !important; height: 48px !important; padding: 12px 12px 12px 40px !important; font-size: 16px !important; border-radius: 8px !important; border: 1.5px solid #cbd5e1 !important; background: #ffffff !important; color: #0a1f44 !important; outline: none; box-sizing: border-box !important; -webkit-appearance: none;">
                        </div>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; width: 100%; box-sizing: border-box;">
                        <label for="portal_user_password_confirm" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Confirm Security Password</label>
                        <div style="position: relative; display: flex; align-items: center; width: 100%;">
                            <span style="position: absolute; left: 14px; color: #64748b; font-size: 0.9rem; pointer-events: none;"><i class="fa-solid fa-circle-check"></i></span>
                            <input type="password" id="portal_user_password_confirm" required minlength="8" placeholder="Re-type password..." style="width: 100% !important; height: 48px !important; padding: 12px 12px 12px 40px !important; font-size: 16px !important; border-radius: 8px !important; border: 1.5px solid #cbd5e1 !important; background: #ffffff !important; color: #0a1f44 !important; outline: none; box-sizing: border-box !important; -webkit-appearance: none;">
                        </div>
                    </div>
                    
                    <button type="button" id="portal-activation-submit-btn" onclick="handleClientAccountActivation(event);" style="width: 100%; height: 50px; text-align: center; background: #10b981; color: #ffffff; border: none; font-weight: 700; font-size: 1rem; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2); box-sizing: border-box; display: flex; align-items: center; justify-content: center; gap: 6px;">
                        <i class="fa-solid fa-unlock-keyhole"></i> Initialize Secured Dashboard
                    </button>
                    
                </div>
                
                <div style="margin-top: 16px; border-top: 1px dashed #cbd5e1; padding-top: 14px; display: flex; align-items: flex-start; gap: 8px; font-size: 0.725rem; color: #64748b; line-height: 1.4; width: 100%; box-sizing: border-box;">
                    <span style="color: #10b981; font-size: 0.9rem; flex-shrink: 0;"><i class="fa-solid fa-shield-halved"></i></span>
                    <span><strong>Encrypted Vault Lock:</strong> Portal passwords undergo one-way cryptographic SHA-256 hashing prior to serialization inside database clusters. filings4u staff cannot view or access your security password.</span>
                </div>
                
            </div>
            
        </div>
    </div>
    `;
};
