// ============================================================================ //
// 🏢 STEP 2 PANEL: LEGAL ENTITY PROFILE & TAXONOMY MATRICES (MOBILE CONVERSION)
// ============================================================================ //
window.getMobileWizardStepTwoMarkup = function() {
    // Note: Do not hardcode a secondary "#dynamic-onboarding-fields-root" ID here.
    // This allows your service form injection script to populate elements safely.
    return `
        <div class="mobile-service-form-wrapper" style="width: 100%; display: flex; flex-direction: column; gap: 16px; box-sizing: border-box;">
            
            <!-- Mobile-Optimized Unified Loading Skeleton Shield -->
            <div class="mobile-fields-loading-placeholder" style="text-align: center; padding: 40px 16px; color: #64748b; font-weight: 500; font-size: 0.95rem; border: 1px dashed #cbd5e1; border-radius: 8px; background: #ffffff; box-sizing: border-box;">
                <i class="fa-solid fa-spinner fa-spin" style="color: #10b981; margin-right: 8px; font-size: 1.2rem;"></i>
                <span style="display: block; margin-top: 8px;">Assembling specialized compliance filing interfaces...</span>
            </div>

            <!-- Mobile-Optimized Inline Progress Actions Save Trigger -->
            <div class="mobile-save-progress-holder" style="margin-top: 8px; width: 100%; box-sizing: border-box;">
                <button type="button" class="btn-wizard-save-progress" onclick="if(typeof executeSaveAndExitWorkflow === 'function'){executeSaveAndExitWorkflow()}"
                    style="width: 100%; height: 44px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.9rem; font-weight: 600; color: #475569; display: flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; transition: background 0.2s ease;">
                    <i class="fa-solid fa-floppy-disk"></i> Save Progress
                </button>
            </div>

        </div>
    `;
};

// ============================================================================ 
// 🚀 STEP 3 PANEL: SPLIT DESIGN COMPLIANCE ADD-ONS MARKET (MOBILE CONVERSION) 
// ============================================================================ 
window.getMobileWizardStepThreeMarkup = function() { 
    return ` 
        <div class="mobile-addons-marketplace-wrapper" style="width: 100%; display: flex; flex-direction: column; gap: 16px; box-sizing: border-box;"> 
            
            <!-- FIXED TARGET BLOCK: Matches your desktop marketplace engine ID exactly --> 
            <div id="wizard-dynamic-upsells-render-target" style="display: flex; flex-direction: column; gap: 14px; width: 100%; box-sizing: border-box;"> 
                <div class="mobile-skeleton-loader" style="text-align: center; padding: 40px 16px; color: #64748b; font-size: 0.9rem; border: 1px dashed #cbd5e1; border-radius: 8px; background: #ffffff; box-sizing: border-box;"> 
                    <i class="fa-solid fa-spinner fa-spin" style="color: #10b981; margin-right: 8px; font-size: 1.1rem;"></i> 
                    <span>Loading eligible asset protection tiers...</span> 
                </div> 
            </div> 
            
            <!-- Mobile-Optimized Inline Progress Actions Save Trigger --> 
            <div class="mobile-save-progress-holder" style="margin-top: 8px; width: 100%; box-sizing: border-box;"> 
                <button type="button" class="btn-wizard-save-progress" onclick="if(typeof executeSaveAndExitWorkflow === 'function'){executeSaveAndExitWorkflow()}" style="width: 100%; height: 44px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.9rem; font-weight: 600; color: #475569; display: flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; transition: background 0.2s ease;"> 
                    <i class="fa-solid fa-floppy-disk"></i> Save Progress 
                </button> 
            </div> 
        </div> `; 
};


// ============================================================================
// SYSTEM BOOTSTRAP INITIALIZATION FLOWS
// ============================================================================
// Read existing phone browser session contexts BEFORE setting default false keys
const cacheKey = "f4u_wizard_onboarding_state";
let activeLocalStorageState = {};
try {
    activeLocalStorageState = JSON.parse(localStorage.getItem(cacheKey) || "{}");
} catch(e) {
    console.warn("[Marketplace Memory] No onboarding session state found in cache.");
}

// Instantiate your global configuration parameters down into variable memory allocations safely
if (window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP) {
    Object.values(window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP).forEach(k => { 
        if (window[k] === undefined) {
            // If a step 3 box was checked in a previous session view, preserve its choice natively
            if (activeLocalStorageState[k] !== undefined) {
                window[k] = activeLocalStorageState[k];
            } else {
                window[k] = false; 
            }
        }
    });
}



// ============================================================================ //
// 📋 STEP 4 PANEL: POWER OF ATTORNEY AND DIGITAL COVENANTS (BLOCK 1 MOBILE)
// ============================================================================ //
window.getMobileWizardStepFourMarkup = function() {
    return `
        <div class="mobile-poa-agreement-wrapper" style="width: 100%; display: flex; flex-direction: column; gap: 16px; box-sizing: border-box;">
            
            <!-- Context Header Alert Block -->
            <div class="mobile-poa-instruction" style="background: #f8fafc; border-left: 4px solid var(--primary, #10b981); padding: 12px; border-radius: 0 8px 8px 0; font-size: 0.85rem; color: #475569; line-height: 1.4; box-sizing: border-box;">
                <i class="fa-solid fa-circle-info" style="color: var(--primary, #10b981); margin-right: 6px;"></i>
                Please scroll to the bottom of the legal mandate below to review and unlock the digital signature validation inputs.
            </div>

            <!-- Mobile-Optimized Scrollable Legal Text Box Frame (Height compressed to prevent screen lockouts) -->
            <div id="poa-scroll-box" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; font-size: 0.8rem; color: #334155; line-height: 1.5; max-height: 180px; overflow-y: scroll; -webkit-overflow-scrolling: touch; font-family: -apple-system, system-ui, sans-serif; text-align: justify; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02); box-sizing: border-box;">
                <strong>LIMITED POWER OF ATTORNEY & CORPORATE AGENCY AGREEMENT</strong><br><br>
                WHEREAS, the undersigned Principal (hereinafter referred to as the "Principal"), on behalf of themselves and any business entity currently existing or to be formed through the services requested, does hereby nominatively appoint, designate, and empower filings4u, LLC (hereinafter referred to as the "Attorney-in-Fact"), an Illinois limited liability company and subsidiary of Roseland Companies, LLC, along with its authorized operational agents, officers, employees, and designees, as its true and lawful Attorney-in-Fact and Corporate Agent in accordance with the strict terms and limitations set forth herein.<br><br> 
                <strong>1. EXPRESS LIMITED SCOPE OF APPOINTMENT</strong><br> 
                The scope of this appointment is strictly restricted and expressly limited to administrative, regulatory, and compliance-related document processing. The Attorney-in-Fact is granted the authority to execute, sign, modify, amend, translate, submit, and process applications, registrations, forms, and renewals on behalf of the Principal across the following commercial vectors:<br> 
                Entity Formation & Corporate Management: Articles of Organization (LLCs), Articles of Incorporation, DBAs, Nonprofits, Series LLCs, Foreign Qualifications, Reinstatements, Good Standings, Bylaws, and Resolutions.<br> 
                Intel Property & Operational Compliance: Trademark/Servicemark filings, Annual Reports, Operating Agreements, Registered Agent service maintenance, Business Licenses, EIN procurement, CLIA Certificates, and NDAs.<br> 
                Tax Registration & Filings: Federal/State tax configurations, Franchise Tax reporting, Sales Tax registrations, Payroll Tax (940/941) setups, Heavy Highway Vehicle Use Tax (Form 2290), and 1099-NEC/MISC processing.<br> 
                Government Procurement: CAGE Code Registrations, DUNS Number processing, SAM.gov transitions, MBE Certifications, and WOSB Certifications.<br> 
                Transportation & Trucking Compliance: Trucker/Broker Motor Carrier Authorities (MC/DOT Numbers), Unified Carrier Registrations (UCR), Standard Carrier Alpha Codes (SCAC), DOT Drug & Alcohol Consortium enrollment, Driver Qualification Files, Process Agent designations (BOC-3 filings), IFTA registrations, HAZMAT registrations, IRP plates, and ELD coordination.<br><br> 
                <strong>2. GRANT OF OPERATIONAL POWERS</strong><br> 
                The Principal hereby grants, conveys, and delivers unto the said Attorney-in-Fact full operational power, authority, and jurisdiction to undertake, execute, and perform any and all acts deemed necessary, incidental, or legally obligatory to fulfill the service requests initiated by the Principal within the filings4u, LLC digital wizard interface. This grant explicitly includes: The authority to submit electronic credentials for identity verification purposes; The right to sign public registry certificates as an "Organizer," "Incorporator," "Authorized Representative," or "Preparer"; The capacity to act as a third-party designee before state departments, Departments of Revenue, the Internal Revenue Service (IRS), the FMCSA, the DOT, and equivalent international ministries.<br><br> 
                <strong>3. INTERNATIONAL & CROSS-BORDER ADAPTABILITY</strong><br> 
                This authorization extends past domestic US parameters to include Canadian federal and provincial registries (including Corporations Canada and provincial revenue ministries) and other international regulatory structures where the Principal explicitly directs filings4u, LLC to act.<br><br> 
                <strong>4. ELECTRONIC SIGNATURES, ESIGN ACT COMPLIANCE, AND INTENT</strong><br> 
                This Agreement is executed electronically in strict conformity with the federal Electronic Signatures in Global and National Commerce Act (ESIGN), the Uniform Electronic Transactions Act (UETA), and applicable international electronic commerce frameworks. The Principal expressly understands, agrees, and consents that typing their name into the designated input field—resulting in a script-generated cursive font rendering of their name on the screen—constitutes their valid, legally binding electronic signature. The Principal affirms that this mechanical action represents an explicit intent to sign, execute, and deliver this Limited Power of Attorney and that such digital authentication carries the identical legal weight, validity, and enforceability of a handwritten "wet" ink signature.<br><br> 
                <strong>5. NO LEGAL SERVICES RENDERED (UPL DISCLAIMER)</strong><br> 
                The Principal acknowledges and agrees that filings4u, LLC is a document preparation, filing, and administrative compliance service provider. filings4u, LLC, its officers, employees, and parent entities do not provide legal advice, legal opinions, or architectural legal strategies.<br><br> 
                <strong>6. RATIFICATION, REVOCATION, AND DURATION</strong><br> 
                This agreement shall remain in full force and effect from the date of electronic execution until explicitly revoked. Revocation may occur via written physical notification delivered to filings4u, LLC corporate networks or electronic cancellation processed through verified client portal pathways.<br><br> 
                <strong>7. AFFIRMATION AND ACCEPTANCE</strong><br> 
                By executing this document through digital input validation, the Principal affirms that they possess the legal capacity, administrative ownership, or explicit corporate authorization required to execute this contract on behalf of themselves or the commercial entity represented.<br><br> 
                <em>Corporate Entity Information:</em><br> 
                filings4u, LLC | A Subsidiary of Roseland Companies, LLC<br> 
                filings4u Compliance Hub | Roseland Companies Management<br> 
                Contact Support: support@filings4u.com 
            </div>

            <!-- Opening wrapper anchor matching Block 2 attachment signature controls -->
            <div class="mobile-signature-inputs-container" style="display: flex; flex-direction: column; gap: 12px; width: 100%; box-sizing: border-box;">
    `;
};

// ============================================================================ //
// 📋 STEP 4 PANEL: POWER OF ATTORNEY AND DIGITAL COVENANTS (BLOCK 2 MOBILE)
// ============================================================================ //
window.getMobileWizardStepFourExecutionFieldsMarkup = function() {
    return `
            <!-- Instructional Label & Dynamic Context Tooltip Block -->
            <div class="mobile-signature-label-row" style="display: flex; align-items: flex-start; justify-content: space-between; width: 100%; box-sizing: border-box;">
                <div style="display: flex; flex-direction: column; gap: 4px; max-width: calc(100% - 44px);">
                    <label for="poa_typed_signature" style="display: block; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: #1e293b; letter-spacing: 0.05em; margin: 0;">Full Legal Name</label>
                    <span style="display: block; font-size: 0.75rem; color: #64748b; line-height: 1.3;">Type your name exactly as it appears on your government ID. Our engine generates your cursive digital signature profile.</span>
                </div>
                <!-- Contextual Mobile Tooltip Button Badge -->
                <div class="poa-tooltip-anchor" style="position: relative; margin-top: 2px;">
                    <button type="button" id="poa-info-btn" style="background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; color: #1e293b; font-weight: 700; cursor: pointer; font-size: 0.9rem;" 
                        onclick="if(typeof window.togglePoaContextualTooltipDisplay === 'function'){window.togglePoaContextualTooltipDisplay(event)}">ⓘ</button>
                    <div id="poa-tooltip-card" style="display: none; position: absolute; bottom: 40px; right: 0; width: 280px; background: #0f172a; color: #ffffff; padding: 14px; border-radius: 8px; box-shadow: 0 8px 20px rgba(0,0,0,0.15); font-size: 0.75rem; line-height: 1.4; z-index: 1000; text-align: left; box-sizing: border-box;">
                        <div id="poa-tooltip-content-target">Loading authorization context data...</div>
                    </div>
                </div>
            </div>

            <!-- Stacked Cursive Signature Verification Workspace Fields -->
            <div class="signature-fields-mobile-stack" style="display: flex; flex-direction: column; gap: 12px; width: 100%; box-sizing: border-box;">
                <div style="width: 100%;">
                    <input type="text" id="poa_typed_signature" name="poa_typed_signature" required placeholder="e.g., Johnathan R. Doe" 
                        style="width: 100%; height: 48px; padding: 0 14px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.95rem; box-sizing: border-box; color: #1e293b; font-weight: 600; background: #ffffff; outline: none; -webkit-appearance: none; transition: border-color 0.2s;">
                </div>
                <div style="width: 100%;">
                    <div id="cursive-signature-preview" style="width: 100%; height: 48px; padding: 0 14px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; display: flex; align-items: center; box-sizing: border-box; font-family: 'Dancing Script', 'Caveat', cursive, sans-serif; font-size: 1.6rem; color: #0066cc; user-select: none; white-space: nowrap; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0,0,0,0.02);">Your Signature</div>
                </div>
            </div>

            <!-- Legal Real-Time Affirmation Text Box Row Component -->
            <p style="margin: 4px 0 0 0; font-size: 0.75rem; color: #334155; line-height: 1.4; text-align: left; background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #cbd5e1; box-sizing: border-box;">
                📝 <strong>Legal Acknowledgment:</strong> By typing your name above, you are creating a legally binding digital signature. You explicitly authorize filings4u, LLC to act as your administrative attorney-in-fact to execute and submit the regulatory documents selected in this wizard.
            </p>

            <!-- Touch Target Gatekeeper Agreement Checkbox Component Layout -->
            <div style="display: flex; align-items: flex-start; gap: 12px; margin-top: 4px; text-align: left; width: 100%; box-sizing: border-box;">
                <input type="checkbox" id="poa_consent_checkbox" name="poa_consent_checkbox" class="addon-checkbox" 
                    style="width: 20px; height: 20px; margin-top: 2px; flex-shrink: 0; cursor: pointer;" 
                    onchange="if(typeof window.evaluatePoaInputStateMatrixMobile === 'function') { window.evaluatePoaInputStateMatrixMobile(); } else if(typeof window.evaluatePoaInputStateMatrix === 'function') { window.evaluatePoaInputStateMatrix(); }">
                <label for="poa_consent_checkbox" style="font-size: 0.8rem; font-weight: 600; color: #1e293b; cursor: pointer; line-height: 1.4; user-select: none;">
                    I agree to the Limited Power of Attorney & Corporate Agency Agreement, expressly consent to conduct this transaction electronically under the ESIGN Act, and authorize filings4u, LLC to sign and file these documents on my behalf.
                </label>
            </div>

            <!-- Closing parent structural wrapper tags inherited from Block 1 -->
            </div>
            
            <!-- Engineering Compliance Hidden Metadata Fields Framework -->
            <input type="hidden" id="poa_meta_version" value="v2026.1">
            <input type="hidden" id="poa_meta_intent_string" value="">
            <input type="hidden" id="poa_meta_font_style" value="Dancing Script, Caveat, cursive">
            <input type="hidden" id="poa_meta_timestamp_utc" value="">
            <input type="hidden" id="poa_meta_user_agent" value="">

            <!-- Mobile-Optimized Inline Progress Actions Save Trigger -->
            <div class="mobile-save-progress-holder" style="margin-top: 8px; width: 100%; box-sizing: border-box;">
                <button type="button" class="btn-wizard-save-progress" onclick="if(typeof executeSaveAndExitWorkflow === 'function'){executeSaveAndExitWorkflow()}"
                    style="width: 100%; height: 44px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.9rem; font-weight: 600; color: #475569; display: flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; transition: background 0.2s ease;">
                    <i class="fa-solid fa-floppy-disk"></i> Save Progress
                </button>
            </div>

        </div>
    `;
};

// ============================================================================ //
// 📊 STEP 5 PANEL: PURCHASE SUMMARY INVOICE RECAP (MOBILE CONVERSION)
// ============================================================================ //
window.getMobileWizardStepFiveMarkup = function() {
    return `
        <div class="mobile-invoice-summary-wrapper" style="width: 100%; display: flex; flex-direction: column; gap: 16px; box-sizing: border-box;">
            
            <!-- Core Line Item Breakdowns Box Frame Card Wrapper -->
            <div class="mobile-summary-card" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 16px; box-sizing: border-box; width: 100%;">
                
                <!-- Dynamic Target Anchor Container for javascript invoice arrays loops row rendering -->
                <div id="summary-purchase-rows-container" style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
                    <div style="text-align: center; padding: 20px 0; color: #64748b; font-size: 0.85rem;">
                        <i class="fa-solid fa-spinner fa-spin" style="color: #10b981; margin-right: 6px;"></i>
                        <span>Calculating total compilation aggregates...</span>
                    </div>
                </div>

                <!-- Ledger Accounting Aggregates Calculation Footers Matrix -->
                <div style="margin-top: 16px; border-top: 1px solid #cbd5e1; padding-top: 16px; display: flex; flex-direction: column; gap: 10px; box-sizing: border-box;">
                    
                    <!-- Subtotal Entry Parameters Row Row -->
                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #475569; font-weight: 500;">
                        <span>Filing & Add-on Subtotal</span>
                        <strong id="summary-subtotal-display" style="font-family: monospace; color: #1e293b; font-size: 1rem;">$0.00</strong>
                    </div>
                    
                    <!-- Government Fee Parameters Entry Row Row -->
                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #475569; font-weight: 500;">
                        <span>Government & Agency Fees</span>
                        <strong id="summary-gov-fees-display" style="font-family: monospace; color: #1e293b; font-size: 1rem;">$0.00</strong>
                    </div>
                    
                    <!-- Absolute Grand Total Invoiced Visual Line Indicator Box -->
                    <div style="display: flex; justify-content: space-between; margin-top: 8px; border-top: 1px dashed #cbd5e1; padding-top: 12px; font-size: 1.15rem; align-items: center; box-sizing: border-box;">
                        <span style="color: #0f172a; font-weight: 700;">Total Summary Amount</span>
                        <strong id="summary-grand-total-display" style="font-family: monospace; color: #10b981; font-size: 1.3rem; font-weight: 700;">$0.00</strong>
                    </div>

                </div>
            </div>

            <!-- Mobile-Optimized Inline Progress Actions Save Trigger -->
            <div class="mobile-save-progress-holder" style="margin-top: 8px; width: 100%; box-sizing: border-box;">
                <button type="button" class="btn-wizard-save-progress" onclick="if(typeof executeSaveAndExitWorkflow === 'function'){executeSaveAndExitWorkflow()}"
                    style="width: 100%; height: 44px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.9rem; font-weight: 600; color: #475569; display: flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; transition: background 0.2s ease;">
                    <i class="fa-solid fa-floppy-disk"></i> Save Progress
                </button>
            </div>

        </div>
    `;
};


// ============================================================================ //
// 💳 STEP 6 PANEL: EMBEDDED STACKED FLAT CHECKOUT INTERFACE (MOBILE CONVERSION)
// ============================================================================ //
window.getMobileWizardStepSixMarkup = function() {
    return `
        <div class="mobile-encrypted-payment-wrapper" style="width: 100%; display: flex; flex-direction: column; gap: 16px; box-sizing: border-box;">
            
            <!-- Mobile Price Widget & Gateway Summary Component Header Banner Box -->
            <div class="mobile-payment-summary-header" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 16px; display: flex; justify-content: space-between; align-items: center; box-sizing: border-box; width: 100%;">
                <div style="display: flex; flex-direction: column; gap: 2px;">
                    <h3 style="margin: 0; font-size: 0.95rem; font-weight: 700; color: #1e293b;">Filing Amount Summary</h3>
                    <span style="margin: 0; font-size: 0.75rem; color: #64748b;">Tokenized secure checkout link</span>
                </div>
                <div style="text-align: right;">
                    <div id="payment-gateway-total-display" style="font-size: 1.35rem; font-weight: 700; color: var(--primary, #00b074); font-family: monospace;">Calculating...</div>
                </div>
            </div>

            <!-- Stripe Element Mount Card Container Frame Block Component -->
            <div class="wizard-input-group" style="display: flex; flex-direction: column; gap: 6px; width: 100%; box-sizing: border-box;">
                <label style="font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: #475569; display: block;">Secure Credit or Debit Card Payment</label>
                <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 14px; box-shadow: inset 0 1px 3px rgba(0,0,0,0.02); width: 100%; box-sizing: border-box;">
                    <!-- Required Core Mounting Anchor Target for Stripe V3 Element JavaScript Injection Loops -->
                    <div id="stripe-payment-element-mount-point" style="min-height: 48px;"></div>
                </div>
            </div>

            <!-- Security Trust Badges Grid Line Row Segment Info Block -->
            <div class="mobile-pci-trust-badges" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; display: flex; flex-direction: column; gap: 8px; font-size: 0.75rem; color: #475569; box-sizing: border-box; width: 100%;">
                <div style="display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-shield-halved" style="color: var(--primary, #00b074); font-size: 0.85rem;"></i> PCI-DSS Level 1 Encrypted Compliant Vault</div>
                <div style="display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-circle-check" style="color: var(--primary, #00b074); font-size: 0.85rem;"></i> Official Corporate Standing Guarantee Protection Active</div>
            </div>

            <!-- Mobile-Optimized Inline Progress Actions Save Trigger -->
            <div class="mobile-save-progress-holder" style="margin-top: 4px; width: 100%; box-sizing: border-box;">
                <button type="button" class="btn-wizard-save-progress" onclick="if(typeof executeSaveAndExitWorkflow === 'function'){executeSaveAndExitWorkflow()}"
                    style="width: 100%; height: 44px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.9rem; font-weight: 600; color: #475569; display: flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; transition: background 0.2s ease;">
                    <i class="fa-solid fa-floppy-disk"></i> Save Progress
                </button>
            </div>

        </div>
    `;
};


// ============================================================================ //
// 🎉 STEP 7 PANEL: SUCCESS PORTAL & TRANSACTION RECEIPT (BLOCK 1 MOBILE)
// ============================================================================ //
window.getMobileWizardStepSevenReceiptMarkup = function() {
    return `
        <div class="mobile-success-portal-wrapper" style="width: 100%; display: flex; flex-direction: column; gap: 16px; box-sizing: border-box;">
            
            <!-- Success Status Confirmation Notification Box Frame -->
            <div class="mobile-success-card-recap" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 16px; padding: 20px; box-sizing: border-box; width: 100%;">
                
                <!-- Fixed Checkmark Circle SVG Status Icon -->
                <div class="success-badge-icon" style="width: 56px; height: 56px; background: rgba(16, 185, 129, 0.1); color: var(--primary, #00b074); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                    <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px; display: block;">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>

                <h1 style="color: #0f172a; font-size: 1.4rem; font-weight: 800; margin: 0 0 6px 0; letter-spacing: -0.02em;">Order Successfully Deployed</h1>
                <p style="color: #64748b; font-size: 0.85rem; margin: 0; line-height: 1.5;">Your compliance metadata package has been parsed, encrypted, and transmitted directly to target authority filing networks.</p>

                <!-- Administrative Handshake Tracking Parameters Info Row Container -->
                <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px; display: flex; flex-direction: column; gap: 12px; margin-top: 16px; box-sizing: border-box; width: 100%;">
                    <div>
                        <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">Secure Tracking Token</span>
                        <strong id="receipt-session-hash-display" style="font-family: monospace; font-size: 0.9rem; color: #1e293b; word-break: break-all; display: block; line-height: 1.3;">RETRIEVING...</strong>
                    </div>
                    <div>
                        <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">Filing Status</span>
                        <strong style="color: var(--primary, #00b074); font-size: 0.9rem; display: flex; align-items: center; gap: 6px; font-weight: 700;">
                            <span style="width: 8px; height: 8px; background: var(--primary, #00b074); border-radius: 50%; display: inline-block;"></span> VALIDATED & QUEUED
                        </strong>
                    </div>
                </div>

            </div>

            <!-- Itemized Ledger Billing Statement Card Block Wrapper Component -->
            <div class="mobile-receipt-billing-card" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 16px; padding: 16px; box-sizing: border-box; width: 100%;">
                <h3 style="margin: 0 0 10px 0; font-size: 0.85rem; font-weight: 700; color: #1e293b; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 2px solid #f1f5f9; padding-bottom: 6px;">Itemized Billing Statement</h3>
                
                <!-- Live Sub-Items Recalculation Node Array Target -->
                <div id="receipt-items-injector-frame" style="display: flex; flex-direction: column; gap: 8px; width: 100%;"></div>
                
                <!-- Financial Summary Matrix Segment Row Stack -->
                <div style="background: #f8fafc; border-radius: 8px; padding: 12px; margin-top: 12px; border: 1px solid #cbd5e1; display: flex; flex-direction: column; gap: 8px; box-sizing: border-box; width: 100%;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #475569; font-weight: 500;">
                        <span>Filing Processing Subtotal</span>
                        <span id="receipt-subtotal-display" style="font-family: monospace; color: #1e293b; font-weight: 600;">$0.00</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #475569; font-weight: 500;">
                        <span>Government Statutory Registry Fees</span>
                        <span id="receipt-gov-fee-display" style="font-family: monospace; color: #1e293b; font-weight: 600;">$0.00</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 1.1rem; color: #0f172a; font-weight: 700; border-top: 1px dashed #cbd5e1; padding-top: 10px; margin-top: 2px; align-items: center;">
                        <span>Total Paid Amount</span>
                        <span id="receipt-grand-total-display" style="font-family: monospace; color: var(--primary, #00b074); font-weight: 700;">$0.00</span>
                    </div>
                </div>
            </div>

            <!-- Dynamic Registered Entity Corporate Audit Profile Grid Card Frame Component -->
            
                <h3 style="margin: 0 0 12px 0; font-size: 0.85rem; font-weight: 700; color: #1e293b; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-building" style="color: #64748b;"></i> Registered Entity Profile Target
                </h3>
                <div class="profile-mobile-fields-stack" style="display: flex; flex-direction: column; gap: 12px; font-size: 0.9rem; width: 100%; box-sizing: border-box;">
                    <div>
                        <span style="color: #64748b; display: block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; margin-bottom: 2px;">Legal Corporate Name</span>
                        <strong id="receipt-profile-name" style="color: #1e293b; font-weight: 600;">---</strong>
                    </div>
                    <div>
                        <span style="color: #64748b; display: block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; margin-bottom: 2px;">Taxpayer ID / EIN</span>
                        <strong id="receipt-profile-ein" style="color: #1e293b; font-family: monospace; font-weight: 600;">---</strong>
                    </div>
                    <div>
                        <span style="color: #64748b; display: block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; margin-bottom: 2px;">Principal Office Address</span>
                        <strong id="receipt-profile-address" style="color: #1e293b; font-weight: 600;">---</strong>
                    </div>
                </div>
            </div>

            <!-- Opening wrapper hook for Block 2 Client Portal subform injection scripts -->
            <div class="mobile-portal-activation-anchor" style="width: 100%; box-sizing: border-box;">
    `;
};

// ============================================================================ //
// 🎉 STEP 7 PANEL: SUCCESS PORTAL & SECURITY ACCOUNT ACTIVATION (BLOCK 2 MOBILE)
// ============================================================================ //
window.getMobileWizardStepSevenAccountSetupMarkup = function() {
    return `
            <!-- Client Portal Registration Inputs Module Subform Component -->
            <div class="mobile-portal-activation-card" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 16px; padding: 16px; margin-top: 16px; box-sizing: border-box; width: 100%;">
                
                <div style="margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px; width: 100%; box-sizing: border-box;">
                    <h2 style="color: #0f172a; font-size: 1.15rem; font-weight: 700; margin: 0 0 4px 0; display: flex; align-items: center; gap: 8px;">
                        <i class="fa-solid fa-user-plus" style="color: var(--primary, #00b074); font-size: 1rem;"></i> Activate Client Portal
                    </h2>
                    <p style="color: #64748b; font-size: 0.8rem; margin: 0; line-height: 1.4; font-weight: 400;">
                        Claim ownership of your compliance dossier. Establish your security access parameters to monitor state approvals, fetch corporate documents, and track status matrices in real time.
                    </p>
                </div>

                <div id="wizard-account-generation-subform" style="width: 100%; display: flex; flex-direction: column; gap: 12px; box-sizing: border-box;">
                    
                    <!-- Username Email Node Row component -->
                    <div style="display: flex; flex-direction: column; gap: 4px; width: 100%;">
                        <label for="portal_user_email" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Registered Account Username / Email</label>
                        <div style="position: relative; display: flex; align-items: center; width: 100%;">
                            <span style="position: absolute; left: 14px; color: #64748b; font-size: 0.85rem;"><i class="fa-solid fa-envelope"></i></span>
                            <input type="email" id="portal_user_email" required readonly 
                                style="width: 100%; height: 44px; padding: 0 14px 0 40px; font-size: 0.9rem; font-weight: 600; border-radius: 8px; border: 1px solid #cbd5e1; background: #f1f5f9; color: #64748b; cursor: not-allowed; outline: none; box-sizing: border-box;">
                        </div>
                        <span style="font-size: 0.7rem; color: #64748b; font-weight: 400; padding-left: 2px;">Auto-locked to your corporate registry filing email.</span>
                    </div>

                    <!-- Security Password Node Input Field -->
                    <div style="display: flex; flex-direction: column; gap: 4px; width: 100%;">
                        <label for="portal_user_password" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Create Security Password</label>
                        <div style="position: relative; display: flex; align-items: center; width: 100%;">
                            <span style="position: absolute; left: 14px; color: #64748b; font-size: 0.85rem;"><i class="fa-solid fa-key"></i></span>
                            <input type="password" id="portal_user_password" required minlength="8" placeholder="Minimum 8 characters..." 
                                style="width: 100%; height: 44px; padding: 0 14px 0 40px; font-size: 0.9rem; border-radius: 8px; border: 1px solid #cbd5e1; background: #ffffff; color: #1e293b; outline: none; box-sizing: border-box;">
                        </div>
                    </div>

                    <!-- Password Confirmation Input Vector Field Component Row -->
                    <div style="display: flex; flex-direction: column; gap: 4px; width: 100%; margin-bottom: 4px;">
                        <label for="portal_user_password_confirm" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Confirm Security Password</label>
                        <div style="position: relative; display: flex; align-items: center; width: 100%;">
                            <span style="position: absolute; left: 14px; color: #64748b; font-size: 0.85rem;"><i class="fa-solid fa-circle-check"></i></span>
                            <input type="password" id="portal_user_password_confirm" required minlength="8" placeholder="Re-type password..." 
                                style="width: 100%; height: 44px; padding: 0 14px 0 40px; font-size: 0.9rem; border-radius: 8px; border: 1px solid #cbd5e1; background: #ffffff; color: #1e293b; outline: none; box-sizing: border-box;">
                        </div>
                    </div>

                    <!-- Pinned Touch Friendly Gateway Action Submission Initialize Controller -->
                    <button type="button" id="portal-activation-submit-btn" onclick="if(typeof handleClientAccountActivation === 'function'){handleClientAccountActivation(event);}" 
                        style="width: 100%; height: 48px; text-align: center; background: var(--primary, #00b074); color: #ffffff; border: none; font-weight: 700; font-size: 1rem; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2); box-sizing: border-box; display: flex; align-items: center; justify-content: center; gap: 8px; transition: background 0.2s ease;">
                        <i class="fa-solid fa-unlock-keyhole"></i> Initialize Secured Dashboard
                    </button>

                </div>

                <!-- Secure Hashing Cryptography Info Box Frame -->
                <div style="margin-top: 14px; border-top: 1px dashed #cbd5e1; padding-top: 12px; display: flex; align-items: flex-start; gap: 10px; font-size: 0.75rem; color: #475569; line-height: 1.45; box-sizing: border-box; width: 100%;">
                    <span style="color: var(--primary, #00b074); font-size: 0.9rem; margin-top: 1px; flex-shrink: 0;"><i class="fa-solid fa-shield-halved"></i></span>
                    <span><strong>Encrypted Vault Lock:</strong> Portal passwords undergo one-way cryptographic SHA-256 hashing prior to serialization inside database clusters. filings4u staff cannot view or access your security password.</span>
                </div>

            </div>

            <!-- Closing parent container tag structures inherited from Block 1 -->
            </div> 
        </div>
    `;
};
