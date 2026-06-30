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

