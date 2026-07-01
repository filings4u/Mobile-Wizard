// ============================================================================
// DYNAMIC LAYOUT FRAME GENERATOR FOR STEP 3 (ZERO TEXT HARDCODING)
// ============================================================================
window.getMobileWizardStepThreeMarkup = function() {
    return `
        <div class="step3-marketplace-viewport-wrapper" style="display: flex; flex-direction: column; gap: 16px; width: 100%; box-sizing: border-box;">
            <!-- Target Injection Node for your Marketplace Scanner -->
            <div id="wizard-dynamic-upsells-render-target" class="mobile-wizard-grid-viewport-shell" style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
                <div style="display: flex; align-items: center; justify-content: center; padding: 30px; color: #64748b;">
                    <i class="fa-solid fa-spinner fa-spin" style="margin-right: 8px; color: #10b981;"></i>
                    <span>Scanning dynamic compliance options...</span>
                </div>
            </div>
        </div>
    `;
};

function renderTargetUpsellsListPanel() { 
    const renderTarget = document.getElementById("wizard-dynamic-upsells-render-target"); 
    if (!renderTarget) { 
        console.warn("[Marketplace] Render target element '#wizard-dynamic-upsells-render-target' not found in DOM."); 
        return null; 
    } 

    // FIXED: Point directly to your active structured catalog reference array
    const serviceRouteKey = window.routeActiveServiceKey || "new-entrant-audit";
    const unifiedCatalogItems = typeof window.getCategoryAddonsByServiceKey === "function" ? 
        window.getCategoryAddonsByServiceKey(serviceRouteKey) : {};

    if (Object.keys(unifiedCatalogItems).length > 0) { 
        let marketplaceCardsHtml = ""; 
        const mappingCoordinates = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {}; 

        Object.keys(unifiedCatalogItems).forEach(catalogSlug => { 
            const item = unifiedCatalogItems[catalogSlug]; 
            if (!item) return; 

            const itemDesc = item.description || item.desc || ""; 
            if (!itemDesc || itemDesc.trim() === "") return; 

            const stateTrackingKey = mappingCoordinates[catalogSlug] || catalogSlug; 
            const isFlagTrue = window[stateTrackingKey] === true || window[stateTrackingKey] === "yes" || String(window[stateTrackingKey]) === "true"; 
            const itemName = item.label || item.name; 
            const itemPrice = parseFloat(item.price) || 0; 

            marketplaceCardsHtml += ` 
                <div class="upsell-market-card" style="background:#ffffff; border:1px solid var(--border, #e2e8f0); padding:16px; border-radius:8px; display:flex; gap:16px; align-items:center; justify-content:space-between; box-sizing:border-box; width:100%; transition:all 0.2s ease; margin-bottom: 12px;"> 
                    <div style="display:flex; flex-direction:column; gap:4px; min-width:0; flex:1;"> 
                        <span style="font-weight:800; font-size:1rem; color:var(--navy, #0a1f44);">${itemName}</span> 
                        <p style="margin:0; font-size:0.85rem; color:var(--slate, #64748b); line-height:1.4;">${itemDesc}</p> 
                    </div> 
                    <div style="display:flex; flex-direction:column; align-items:flex-end; gap:8px; flex-shrink:0;"> 
                        <span style="font-family:monospace; font-weight:700; color:var(--primary, #10b981); font-size:1.1rem;">$${itemPrice.toFixed(2)}</span> 
                        <label style="display:flex; align-items:center; gap:6px; font-size:0.8rem; font-weight:700; color:var(--navy, #0a1f44); cursor:pointer; margin:0;"> 
                            <input type="checkbox" class="upsell-checkbox" id="${stateTrackingKey}" data-price="${itemPrice}" data-name="${itemName}" style="width:18px; height:18px; cursor:pointer;" ${isFlagTrue ? 'checked' : ''} onchange="handleBackgroundUpsellTogglePass(this)"> Activate 
                        </label> 
                    </div> 
                </div>`; 
        }); 
        
        renderTarget.innerHTML = marketplaceCardsHtml; 
    } else {
        renderTarget.innerHTML = `<div style="text-align:center; padding:24px; color:#64748b;">No optional compliance add-ons found for this tracking layout.</div>`;
    }

    window.unifiedCatalogItems = unifiedCatalogItems; 
    return unifiedCatalogItems; 
}


// ============================================================================
// SYSTEM BOOTSTRAP INITIALIZATION FLOWS
// ============================================================================
// Read existing phone browser session contexts BEFORE setting default false keys
const cacheKey = "f4u_wizard_onboarding_state";
let activeLocalStorageState = {};
try {
    activeLocalStorageState = JSON.parse(localStorage.getItem(cacheKey) || "{}");
} catch(e) {}

// Instantiate your global configuration parameters down into variable memory allocations safely
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

// Expose access handlers safely up to the core layout routers window spaces
window.renderTargetUpsellsListPanel = renderTargetUpsellsListPanel;




/**
 * Syncs marketplace checklist boxes immediately down to global state tokens memory registers
 * and dynamically injects values into both backend and wizard-native invoice arrays.
 * @param {HTMLInputElement} checkboxNode - Active selected marketplace checkbox element.
 */
function handleBackgroundUpsellTogglePass(checkboxNode) { 
    if (!checkboxNode || typeof checkboxNode !== 'object') return; 

    // CRITICAL EXECUTION GUARD: Break out instantly if a state save sequence is currently executing
    if (window.isMarketplaceCurrentlySyncingStateMatrix) return;

    const targetFlagKey = checkboxNode.id; 
    if (!targetFlagKey) { 
        console.warn("[Sync Engine] Toggle failed: Checkbox is missing a valid 'id' attribute."); 
        return; 
    } 

    const isChecked = Boolean(checkboxNode.checked); 
    const protectedKeys = ["location", "document", "window", "history", "navigator", "init", "atob", "btoa", "open", "close", "name"]; 

    // 1. Set the runtime lock status to freeze out recursive calculation triggers
    window.isMarketplaceCurrentlySyncingStateMatrix = true;

    // Immediately sync the visual state variable to the global window scope tracker safely 
    if (!protectedKeys.includes(targetFlagKey) && typeof window[targetFlagKey] !== "function") { 
        window[targetFlagKey] = isChecked; 
    } 

    const windowKeys = Object.keys(window); 
    const activeBillingNodes = []; 

    // Locate standard billing payloads 
    for (let i = 0; i < windowKeys.length; i++) { 
        const key = windowKeys[i]; 
        try { 
            if (window[key] && typeof window[key] === 'object' && window[key].active_addons_list !== undefined) { 
                activeBillingNodes.push(key); 
            } 
        } catch (e) { 
            // Cross-origin container safety block filter pass 
        } 
    } 

    // Resolve structural naming coordinates mapping parameters 
    const inverseCoordinatesMap = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {}; 
    const catalogSlug = Object.keys(inverseCoordinatesMap).find(function(key) { 
        return inverseCoordinatesMap[key] === targetFlagKey; 
    }) || targetFlagKey; 

    const addonNameAttr = checkboxNode.getAttribute("data-name") || checkboxNode.getAttribute("data-label") || catalogSlug; 
    const addonPriceAttr = parseFloat(checkboxNode.getAttribute("data-price")) || parseFloat(checkboxNode.value) || 0.00; 
    const compiledAddonRecord = { id: catalogSlug, name: addonNameAttr, price: addonPriceAttr, label: addonNameAttr }; 

    // 2. Pass Phase 1: Update explicit backend tracking payload tables 
    activeBillingNodes.forEach(function(nodeKey) { 
        const targetPayload = window[nodeKey]; 
        if (!targetPayload || !Array.isArray(targetPayload.active_addons_list)) return; 
        
        if (isChecked) { 
            const isAlreadyListed = targetPayload.active_addons_list.some(function(addon) { 
                return ((addon && typeof addon === 'object') ? addon.id : addon) === catalogSlug; 
            }); 
            if (!isAlreadyListed) { 
                targetPayload.active_addons_list.push(compiledAddonRecord); 
            } 
        } else { 
            targetPayload.active_addons_list = targetPayload.active_addons_list.filter(function(addon) { 
                return ((addon && typeof addon === 'object') ? addon.id : addon) !== catalogSlug; 
            }); 
        } 
    }); 

    // 3. PASS PHASE 2: CRITICAL WIZARD SUMMARY INTEGRATION 
    if (!window.currentCartState) { 
        window.currentCartState = {}; 
    } 
    if (!Array.isArray(window.currentCartState.addons)) { 
        window.currentCartState.addons = []; 
    } 

    if (isChecked) { 
        const isCartDuplicate = window.currentCartState.addons.some(function(addon) { 
            return addon && addon.name === addonNameAttr; 
        }); 
        if (!isCartDuplicate) { 
            window.currentCartState.addons.push({ name: addonNameAttr, price: addonPriceAttr }); 
            console.log(`[Funnel Sync] Synced "${addonNameAttr}" into Step 5 cart state review array.`); 
        } 
    } else { 
        window.currentCartState.addons = window.currentCartState.addons.filter(function(addon) { 
            return addon && addon.name !== addonNameAttr; 
        }); 
        console.log(`[Funnel Sync] Scrubbed "${addonNameAttr}" out of Step 5 cart state review array.`); 
    } 

    // 4. Force skin color highlight adjustments over your card wrappers 
    if (typeof window.autoSkinSelectedUpsellCards === "function") { 
        window.autoSkinSelectedUpsellCards(); 
    } 

    // 5. Fire running invoice total recalculation loops live 
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } else if (typeof window.runPricingMatrixDataCrawlPass === "function") { 
        window.runPricingMatrixDataCrawlPass(); 
    } 

    // 6. Write current state selections cleanly to localStorage caches 
    if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") { 
        window.cacheAndRestoreWizardFormStatesVanilla(false); 
    }

    // 7. Cleanly release the execution lock out so future click events can process natively
    window.isMarketplaceCurrentlySyncingStateMatrix = false;
} 

// Bind cleanly back into universal global window scope references safely
window.handleBackgroundUpsellTogglePass = handleBackgroundUpsellTogglePass;




// ============================================================================ //
// 📊 MEMORY ENGINE STABILIZER (REPAIRED ASYNCHRONOUS TARGET VERIFICATION)      //
// ============================================================================ //
(function stabilizeRuntimeSync() { 
    /** 
     * Safety Guard: Verifies that the HTML layout is ready before triggering a render 
     */ 
    function safeInitialMarketplaceRender() { 
        const hasContainer = document.getElementById("wizard-dynamic-upsells-render-target"); 
        
        // Only trigger rendering if the user is actively view-docked on Step 3
        if (hasContainer) { 
            if (typeof window.renderTargetUpsellsListPanel === "function") { 
                window.renderTargetUpsellsListPanel(); 
            } 
        } else if (window.currentWizardActiveStep === 3) {
            // Only schedule a loop if the user is on Step 3 but the container hasn't finished painting yet
            console.log("[Marketplace Guard] HTML render container pending on step 3. Scheduling synchronization pass..."); 
            setTimeout(safeInitialMarketplaceRender, 50); 
        } 
    } 

    const dbRoot = window.STATE_PRICING || {};
    const centralDatabase = dbRoot.packages || {};
    if (Object.keys(centralDatabase).length > 0) { 
        safeInitialMarketplaceRender(); 
        return; 
    } 

    // Intercept modifications to your true data-driven pricing script file natively
    let currentDbVal = window.STATE_PRICING; 
    Object.defineProperty(window, 'STATE_PRICING', { 
        get() { 
            return currentDbVal; 
        }, 
        set(newVal) { 
            currentDbVal = newVal; 
            console.log("[Marketplace Guard] Central state-pricing payload initialization caught.");
            // Trigger target layout rendering verification loops safely
            safeInitialMarketplaceRender(); 
        }, 
        configurable: true, 
        enumerable: true 
    }); 
})(); 

// Hook into your primary DOM ready event queue pass securely 
document.addEventListener("DOMContentLoaded", () => { 
    const renderTarget = document.getElementById("wizard-dynamic-upsells-render-target"); 
    if (renderTarget && typeof window.renderTargetUpsellsListPanel === "function") { 
        window.renderTargetUpsellsListPanel(); 
    } 
});



// ============================================================================ // 
// 🗃️ MASTER MARKETPLACE DATABASE REFERENCE (ISOLATED RUNTIME CONFIGURATION)    // 
// ============================================================================ // 
window.MASTER_UPSELLS_CATALOG = { 
    // --- SERVICE CATEGORY 1: NEW ENTRANT AUDIT REGISTRATION --- 
    "new-entrant-audit": [ 
        { id: "corporate-veil-lock", name: "Corporate Veil Protection & Minutes", price: 295.00, tier: "Enterprise Security", description: "Bulletproofs your company asset separation boundaries to legally isolate your personal belongings from corporate liabilities." }, 
        { id: "hazmat-liability-shield", name: "HAZMAT & Safety Management Protocol", price: 450.00, tier: "Specialized Risk", description: "Comprehensive procedural templates and safety training materials to keep hazardous cargo loads compliant with federal standards." }, 
        { id: "cargo-indemnity-audit", name: "Cargo Indemnity & Freight Liability Audit", price: 185.00, tier: "Asset Security", description: "Reviews your freight contracts and carrier policies to insulate your margins from sudden cargo loss disputes." }, 
        { id: "regulatory-defense-retainer", name: "DOT Enforcement Regulatory Defense (1 Year)", price: 599.00, tier: "Comprehensive Coverage", description: "Provides 12 months of legal protection and advisory support to defend your operations during federal audits or citations." }, 
        { id: "unified-carrier-reg-shield", name: "UCR Annual Filing Protection Shield", price: 125.00, tier: "Asset Security", description: "Automates your multi-state carrier registrations to avoid local road stops and state crossing penalty traps." }, 
        { id: "biennial-update-lock", name: "Automated MCS-150 Biennial Update Lock", price: 95.00, tier: "Compliance Lock", description: "Schedules and processes mandatory updates to your motor carrier records, preventing system deactivation." }, 
        { id: "driver-monitoring-feed", name: "Continuous Driver MVR Monitoring Feed", price: 160.00, tier: "Specialized Risk", description: "Real-time background alert monitoring to instantly log state motor vehicle record flags across your team of active drivers." } 
    ], 
    // --- SERVICE CATEGORY 2: GENERAL DOT AUTHORITY FILINGS --- 
    "dot-authority": [ 
        { id: "process-agent-boc3", name: "Blanket Process Agent Filing (BOC-3)", price: 75.00, tier: "Authority Essentials", description: "Fulfills your mandatory federal filing requirement by designating authorized legal agents across all 50 US states." }, 
        { id: "scac-alpha-code", name: "SCAC Alpha Code Registration Matrix", price: 110.00, tier: "Authority Essentials", description: "Secures your unique standard carrier alpha code to authorize customs clearance and intermodal freight routing protocols." }, 
        { id: "ifr-tax-account-setup", name: "IFTA Fuel Tax Account Setup Assistance", price: 220.00, tier: "Tax Compliance", description: "Establishes your international fuel tax agreement framework to ensure fuel tax parameters report cleanly." }, 
        { id: "kyu-weight-distance", name: "Kentucky KYU Weight-Distance Number", price: 90.00, tier: "State Permits", description: "Registers your heavy vehicle parameters to clear weight-distance reporting frameworks inside Kentucky." }, 
        { id: "ny-hut-permit", name: "New York HUT Highway Use Tax Permit", price: 115.00, tier: "State Permits", description: "Acquires mandatory highway use tax authorization parameters to operate over New York transport networks." }, 
        { id: "nm-wdt-permit", name: "New Mexico WDT Weight-Distance Permit", price: 95.00, tier: "State Permits", description: "Establishes weight distance distance compliance variables cleanly for operations traversing New Mexico state lines." }, 
        { id: "or-weight-receipt", name: "Oregon Weight Receipt & Bond Setup", price: 195.00, tier: "State Permits", description: "Secures active highway mileage bond parameters to authorize operational visibility inside Oregon." } 
    ], 
    // --- SERVICE CATEGORY 3: CORPORATION SETUP & TAX EXEMPTIONS --- 
    "corp-formation": [ 
        { id: "ein-tax-id-expedite", name: "Federal EIN Tax ID Assignment Expedite", price: 65.00, tier: "Corporate Setup", description: "Accelerates your federal employer identification number acquisition to clear business bank account setups instantly." }, 
        { id: "llc-operating-agreement", name: "Custom LLC Operating Agreement Draft", price: 85.00, tier: "Corporate Setup", description: "Structures clear corporate ownership rules and distribution tracking benchmarks customized to your core team parameters." }, 
        { id: "s-corp-election-filing", name: "IRS Subchapter S-Corporation Election Filing", price: 145.00, tier: "Tax Strategy", description: "Registers subchapter s classification status to protect earnings streams from dual corporate taxation penalties." }, 
        { id: "corp-by-laws-package", name: "Corporate By-Laws & Share Certificates Set", price: 95.00, tier: "Corporate Setup", description: "Compiles formal organizational bylaws alongside authenticated certificates to secure investment parameters." }, 
        { id: "registered-agent-year", name: "Premium Registered Agent Service (1 Full Year)", price: 150.00, tier: "Enterprise Security", description: "Establishes your required local physical legal address compliance bounds to intercept agency documentation safely." }, 
        { id: "dun-bradstreet-setup", name: "Dun & Bradstreet Business Credit Profile Setup", price: 175.00, tier: "Corporate Setup", description: "Launches your unique DUNS identification lookup profile to jumpstart institutional credit score tracking." }, 
        { id: "trademark-name-lock", name: "Corporate Trademark Name Search & Lock", price: 325.00, tier: "Enterprise Security", description: "Full multi-jurisdictional availability audits to securely protect your corporate brand logo text parameters." } 
    ] 
}; 

// --- BACKWARDS COMPATIBLE STEP 2 HARDCODED UPSELL RECORDS --- 
window.STEP_2_UPSELLS_REFERENCE = { 
    "assemble-dqf": { name: "Assemble Driver Qualification Files (DQF)", price: 79.00 }, 
    "drug-consortium": { name: "DOT Drug & Alcohol Consortium Enrollment", price: 149.00 }, 
    "hos-review": { name: "Hours of Service (HOS) Log Audit Pre-Review", price: 195.00 }, 
    "maintenance-ledger": { name: "Vehicle Maintenance Ledger & Inspection Set", price: 85.00 }, 
    "expert-consultation": { name: "Independent Pre-Audit Consultation Package", price: 250.00 } 
}; 

// Global Configuration Property State Keys Registry Map 
window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP = { 
    "assemble-dqf": "customSelectedAssembleDqfActive", 
    "drug-consortium": "customSelectedDrugConsortiumActive", 
    "hos-review": "customSelectedHosReviewActive", 
    "maintenance-ledger": "customSelectedMaintenanceLedgerActive", 
    "expert-consultation": "customSelectedExpertConsultationActive", 
    "corporate-veil-lock": "customSelectedCorporateVeilLockActive", 
    "hazmat-liability-shield": "customSelectedHazmatLiabilityShieldActive", 
    "cargo-indemnity-audit": "customSelectedCargoIndemnityAuditActive", 
    "regulatory-defense-retainer": "customSelectedRegulatoryDefenseRetainerActive", 
    "unified-carrier-reg-shield": "customSelectedUcrShieldActive", 
    "biennial-update-lock": "customSelectedBiennialLockActive", 
    "driver-monitoring-feed": "customSelectedMvrMonitoringActive", 
    "process-agent-boc3": "customSelectedBoc3Active", 
    "scac-alpha-code": "customSelectedScacActive", 
    "ifr-tax-account-setup": "customSelectedIftaActive", 
    "kyu-weight-distance": "customSelectedKyuActive", 
    "ny-hut-permit": "customSelectedHutActive", 
    "nm-wdt-permit": "customSelectedWdtActive", 
    "or-weight-receipt": "customSelectedOregonActive", 
    "ein-tax-id-expedite": "customSelectedEinActive", 
    "llc-operating-agreement": "customSelectedOperatingAgreementActive", 
    "s-corp-election-filing": "customSelectedSCorpActive", 
    "corp-by-laws-package": "customSelectedByLawsActive", 
    "registered-agent-year": "customSelectedAgentActive", 
    "dun-bradstreet-setup": "customSelectedDnbActive", 
    "trademark-name-lock": "customSelectedTrademarkActive" 
}; 

/**
 * 🟢 CENTRAL ROUTER ACCESS POINT: 
 * Resolves exact items strictly by the customer's chosen tracking route.
 */
function getCategoryAddonsByServiceKey(serviceKey) {
    const fallbackKey = "new-entrant-audit";
    const lookupKey = String(serviceKey || window.routeActiveServiceKey || fallbackKey).toLowerCase().trim();
    
    // Explicitly pull only the list array linked directly to that category keyword slot
    const targetAddonsList = window.MASTER_UPSELLS_CATALOG[lookupKey] || window.MASTER_UPSELLS_CATALOG[fallbackKey] || [];
    
    const dictionaryPayload = {};
    targetAddonsList.forEach(item => {
        if (item && item.id) {
            dictionaryPayload[item.id] = item;
        }
    });
    return dictionaryPayload;
}

// Instantiate all variable parameters down into standard tracking scopes 
Object.values(window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP).forEach(k => { 
    if (window[k] === undefined) window[k] = false; 
});

window.getCategoryAddonsByServiceKey = getCategoryAddonsByServiceKey;





// ============================================================================ // 
// 🔑 SECURE TRANSACTION DISPATCH MECHANICS (VANILLA JS - FULLY REPAIRED) 
// ============================================================================ // 
async function executeOnboardingTransactionPayloadSubmitVanilla() { 
    const cardNumNode = document.getElementById('checkout_card_num'); 
    const cardExpNode = document.getElementById('checkout_card_exp'); 
    const cardCvvNode = document.getElementById('checkout_card_cvv'); 
    
    const cardNum = cardNumNode ? cardNumNode.value.replace(/\s+/g, '') : ''; 
    const cardExp = cardExpNode ? cardExpNode.value : ''; 
    const cardCvv = cardCvvNode ? cardCvvNode.value : ''; 

    // Validate critical billing input structures before submission 
    if (!cardNum || cardNum.length < 15) { 
        alert("Payment validation failed: Card account number parameters invalid."); 
        return; 
    } 
    if (!cardExp || !cardExp.includes('/')) { 
        alert("Payment validation failed: Expiration envelope format invalid."); 
        return; 
    } 
    if (!cardCvv || cardCvv.length < 3) { 
        alert("Payment validation failed: Security verification code CVV parameter invalid."); 
        return; 
    } 

    const nextBtn = document.getElementById('mobile-continue-btn') || document.getElementById('wizard-next-trigger-btn') || document.querySelector('.btn-wizard-main'); 
    let originalBtnHtml = ""; 
    let originalBtnBg = ""; 
    
    if (nextBtn) { 
        originalBtnHtml = nextBtn.innerHTML; 
        originalBtnBg = nextBtn.style.background; 
        nextBtn.disabled = true; 
        nextBtn.style.setProperty("background", "#64748b", "important"); 
        nextBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Transaction...'; 
    } 

    // Resilient state recovery: Read dynamic keys safely from system state 
    const currentServiceKey = window.routeActiveServiceKey || ""; 
    const currentPlanKey = window.routeActivePlanKey || ""; 
    const selectedJurisdiction = window.selectedFormationStateCode || ""; 

    // Dynamic Add-ons extraction loop (ZERO HARDCODING) 
    let auxiliaryAddonsArray = []; 
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => { 
        const identityMap = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {}; 
        const matchFound = checkbox.checked && ( checkbox.hasAttribute('data-product-key') || Object.values(identityMap).includes(checkbox.id) ); 
        if (matchFound) { 
            const targetId = checkbox.getAttribute('data-product-key') || checkbox.id; 
            auxiliaryAddonsArray.push(targetId); 
        } 
    }); 

    // 🔄 DYNAMIC METADATA PACKAGING ENGINE (NO HARDCODING) 
    let collectedFormMetadata = {}; 
    const masterContainer = document.getElementById("master-onboarding-form") || document.getElementById("dynamic-onboarding-fields-root") || document.body; 
    
    masterContainer.querySelectorAll("input, select, textarea").forEach(element => { 
        const fieldKey = element.id || element.name; 
        
        // Skip financial elements, security fields, and passwords natively
        if (fieldKey && !fieldKey.includes("checkout_card") && element.type !== "password") { 
            // FIXED: Exclude upsell checkboxes from the general questionnaire metadata block
            if (element.classList.contains('upsell-checkbox') || element.classList.contains('addon-checkbox')) {
                return;
            }

            if (element.type === "checkbox") { 
                // Store standard questionnaire choices using your system's unified data strings
                collectedFormMetadata[fieldKey] = element.checked ? "yes" : "no"; 
            } else if (element.value && element.value.trim() !== "") { 
                collectedFormMetadata[fieldKey] = element.value.trim(); 
            } 
        } 
    }); 

    // 🌐 DISPATCH PAYLOAD TO PROCESSING GATEWAY PIPELINE 
    try { 
        const processingPayload = { 
            service: currentServiceKey, 
            plan: currentPlanKey, 
            state: selectedJurisdiction, 
            addons: auxiliaryAddonsArray, 
            metadata: collectedFormMetadata, 
            session_hash: window.f4u_session_hash || "" 
        }; 
        
        console.log("[Gateway System] Dispatching complete checkout payload: ", processingPayload); 

        const targetGatewayEndpoint = window.STRIPE_PROCESSING_API_ROUTE || "/api/checkout/process"; 
        const serverResponse = await fetch(targetGatewayEndpoint, { 
            method: "POST", 
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify(processingPayload) 
        }); 
        
        const runtimeResultStatus = await serverResponse.json(); 
        
        if (serverResponse.ok && runtimeResultStatus.success) { 
            console.log("[Gateway System] Payment cleared successfully."); 
            
            if (typeof window.navigateMobileWizardStep === "function") { 
                const currentIdx = window.currentWizardActiveStep || 6; 
                const mathematicalOffsetDirection = 7 - currentIdx; 
                window.navigateMobileWizardStep(mathematicalOffsetDirection); 
            } else if (typeof window.goToNextWizardStep === "function") { 
                window.goToNextWizardStep(7); 
            } else { 
                window.currentWizardActiveStep = 7; 
                if(typeof renderActiveWorkflowStepView === "function") renderActiveWorkflowStepView(); 
            } 
        } else { 
            throw new Error(runtimeResultStatus.message || "Gateway rejection encountered."); 
        } 
    } catch (checkoutError) { 
        console.error("[Transaction Process Error] Dispatch pipeline aborted:", checkoutError); 
        alert(`Payment Processing Failed: ${checkoutError.message}`); 
        
        // Restore button accessibility states dynamically 
        if (nextBtn) { 
            nextBtn.disabled = false; 
            nextBtn.style.background = originalBtnBg; 
            nextBtn.innerHTML = originalBtnHtml; 
        } 
    } 
} 

window.executeOnboardingTransactionPayloadSubmitVanilla = executeOnboardingTransactionPayloadSubmitVanilla;



// ============================================================================ // 
// 💳 MASTER TRANSACTION SUBMISSION ROUTER (COMBINED & WRAPPED) 
// ============================================================================ // 
async function executeOnboardingTransactionPayloadSubmitVanilla() { 
    console.log("[Stripe Dispatch] Packing customer inputs and preparing secure gateway channels..."); 
    
    let liveStripe = window.stripeInstance; 
    let liveElements = window.stripeElementsContainer; 
    let livePaymentElement = window.stripePaymentElementInstance; 

    if (!liveStripe && typeof Stripe !== "undefined") { 
        window.stripeInstance = Stripe('pk_live_51TTy4i0dNjSlvyScbq19wWCQjOhDKdFMUzkV4Et4ok1NAWFFab4qV2KyZB5CwAp6dAvpLSuMZq2xKAR3BZ1gfuTM00KtmvEgc4'); 
        liveStripe = window.stripeInstance; 
    } 

    if (!liveStripe || !livePaymentElement || !liveElements) { 
        alert("Stripe Integration Failure: The secure gateway payment component has not finished mounting inside Step 6."); 
        return; 
    } 

    // FIXED: Target your true master mobile navbar button ID sequence path explicitly
    var activeNextButtonReference = document.getElementById('mobile-continue-btn') || document.getElementById('wizard-next-trigger-btn') || document.getElementById('poa-next-btn') || document.querySelector("#step-panel-6 .btn-wizard-main"); 
    
    if (activeNextButtonReference) { 
        activeNextButtonReference.disabled = true; 
        activeNextButtonReference.style.background = '#64748b'; 
        activeNextButtonReference.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Secure Payment...'; 
    } 

    let auxiliaryAddonsArray = []; 
    if (window.currentCartState && Array.isArray(window.currentCartState.addons)) { 
        window.currentCartState.addons.forEach(addon => { 
            if(addon.id) auxiliaryAddonsArray.push(addon.id); 
        }); 
    } else { 
        document.querySelectorAll('.addon-checkbox:checked, .upsell-checkbox:checked').forEach(checkbox => { 
            auxiliaryAddonsArray.push(checkbox.id || checkbox.getAttribute('data-id')); 
        }); 
    } 

    const extractProductionFieldValue = (elementIdentifier) => { 
        const targetNode = document.getElementById(elementIdentifier) || document.querySelector(`[name="${elementIdentifier}"]`) || document.querySelector(`[name="${elementIdentifier}[]"]`); 
        return targetNode ? targetNode.value.trim() : ''; 
    }; 

    const safeServiceKey = window.routeActiveServiceKey || ""; 
    const safePlanKey = window.routeActivePlanKey || ""; 
    const targetRunningGrandTotal = window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || 0; 
    const targetRunningGovFee = window.computedWizardStateGovernmentFee || 0; 

    const primarySubmissionPayloadData = { 
        transaction_hash_id: window.f4u_tx_session_hash || "", 
        target_service_id: safeServiceKey, 
        deployment_speed_tier: safePlanKey, 
        authority_jurisdiction: extractProductionFieldValue('wizard-target-jurisdiction') || extractProductionFieldValue('formation_state'), 
        legal_entity_name: extractProductionFieldValue('llc_proposed_name') || extractProductionFieldValue('ent_legal_name') || extractProductionFieldValue('company_name'), 
        taxpayer_ein: extractProductionFieldValue('llc_existing_ein_field') || extractProductionFieldValue('ent_ein') || '', 
        office_address_street: extractProductionFieldValue('ent_address_street') || extractProductionFieldValue('member_street_1'), 
        office_address_city: extractProductionFieldValue('ent_address_city') || extractProductionFieldValue('member_city_1'), 
        office_address_zip: extractProductionFieldValue('ent_address_zip') || extractProductionFieldValue('member_zip_1'), 
        communications_email: extractProductionFieldValue('company_email') || extractProductionFieldValue('portal_user_email'), 
        active_addons_list: auxiliaryAddonsArray, 
        printed_signature_auth: extractProductionFieldValue('poa_typed_signature') || extractProductionFieldValue('signature_input'), 
        digital_signature_raster_vector: localStorage.getItem("poa-signature-pad-data") || null, 
        financials_subtotal_amount: targetRunningGrandTotal - targetRunningGovFee, 
        financials_grand_total_charge: targetRunningGrandTotal, 
        client_session_timestamp: new Date().toISOString() 
    }; 

    try { 
        sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(primarySubmissionPayloadData)); 
    } catch (sessionCacheError) { 
        console.error("[Storage Error] Receipt serialization failed:", sessionCacheError); 
    } 

    if (typeof window.processFinalSecureCheckoutSubmission === "function") { 
        try { 
            await window.processFinalSecureCheckoutSubmission(primarySubmissionPayloadData); 
        } catch (backendError) { 
            console.error("[Database Sync Error] Pre-checkout registry failed:", backendError); 
        } 
    } else { 
        console.warn("[Database Sync Warning] window.processFinalSecureCheckoutSubmission missing from memory runtime mapping layers."); 
    } 

    // FIXED: Routes the confirmation back cleanly to your true main domain success page asset
    const successRedirectionUrl = "https://filings4u.com"; 
    const communicationEmailValue = primarySubmissionPayloadData.communications_email || ''; 

    try { 
        const { error } = await liveStripe.confirmPayment({ 
            elements: liveElements, 
            confirmParams: { 
                return_url: successRedirectionUrl, 
                receipt_email: communicationEmailValue 
            } 
        }); 

        if (error) { 
            alert("Payment Transaction Rejected: " + error.message); 
            if (activeNextButtonReference) { 
                activeNextButtonReference.disabled = false; 
                activeNextButtonReference.style.background = '#10b981'; 
                activeNextButtonReference.innerHTML = ' Complete Order & Submit'; 
            } 
        } 
    } catch (stripeGatewayException) { 
        console.error("[Stripe Connection Error] Critical network exception caught:", stripeGatewayException); 
        if (activeNextButtonReference) { 
            activeNextButtonReference.disabled = false; 
            activeNextButtonReference.style.background = '#10b981'; 
            activeNextButtonReference.innerHTML = ' Complete Order & Submit'; 
        } 
    } 
} 

window.executeOnboardingTransactionPayloadSubmitVanilla = executeOnboardingTransactionPayloadSubmitVanilla;


window.executeDynamicAddonCompilation = function() { 
    const c = window._tempAddonContext; 
    if (!c) return; 

    // Evaluate flags dynamically against your window options memory registers 
    Object.keys(c.EXTENSIBLE_ADDON_CATALOG).forEach(flagKey => { 
        const isFlagTrue = window[flagKey] === true || window[flagKey] === "yes" || String(window[flagKey]) === "true"; 
        if (!isFlagTrue) return; 
        
        const addon = c.EXTENSIBLE_ADDON_CATALOG[flagKey]; 
        if (!addon || !addon.id) return; 
        if (c.localizedProcessedIds.includes(addon.id)) return; 
        
        c.incrementalAddonTotal += addon.price; 
        c.descriptiveInvoiceRowsHtml += ` 
            <div class="summary-item-row" data-id="${addon.id}" style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; margin-top: 4px; padding: 2px 0;"> 
                <span>+ ${addon.name}</span> 
                <span style="font-family: monospace; font-weight: 600;">$${addon.price.toFixed(2)}</span> 
            </div>`; 
        c.localizedProcessedIds.push(addon.id); 
    }); 

    const aggregatedFilingSubtotal = c.baseTierPrice + c.incrementalAddonTotal; 
    const finalizedGrandTotal = aggregatedFilingSubtotal + c.baseGovAgencyFee; 

    // SAFE DOM RENDERING HOOK 
    const invoiceContainer = document.getElementById('summary-purchase-rows-container') || document.getElementById('checkout-invoice-rows-container'); 
    
    if (invoiceContainer) { 
        // FIXED: Check for a dedicated sub-wrapper to hold add-ons, or build one if it's missing
        let addonWrapper = invoiceContainer.querySelector('#wizard-invoice-addons-sub-wrapper');
        
        if (!addonWrapper) {
            addonWrapper = document.createElement('div');
            addonWrapper.id = 'wizard-invoice-addons-sub-wrapper';
            addonWrapper.style.width = '100%';
            invoiceContainer.appendChild(addonWrapper);
        }
        
        // Safely refresh ONLY the add-on segment text layout to prevent base package duplications
        addonWrapper.innerHTML = c.descriptiveInvoiceRowsHtml; 
    } 

    // Sync legacy and sidebar displays elements anchors pools safely 
    const subtotalDisplays = ["invoice-subtotal-display", "subtotal-display"]; 
    subtotalDisplays.forEach(id => { 
        const el = document.getElementById(id); 
        if (el) el.textContent = '$' + aggregatedFilingSubtotal.toFixed(2); 
    }); 

    const govDisplays = ["summary-gov-fees-display", "invoice-gov-fees-display", "gov-fees-display"]; 
    govDisplays.forEach(id => { 
        const el = document.getElementById(id); 
        if (el) el.textContent = '$' + c.baseGovAgencyFee.toFixed(2); 
    }); 

    const grandDisplays = ["summary-grand-total-display", "invoice-grand-total-display", "grand-total-display", "checkout-total-display", "payment-gateway-total-display", "wizard-sticky-total-value"]; 
    grandDisplays.forEach(id => { 
        const el = document.getElementById(id); 
        if (el) el.textContent = '$' + finalizedGrandTotal.toFixed(2); 
    }); 

    window.wizardCalculatedFinalTotalAmount = finalizedGrandTotal; 
    return { addonTotal: c.incrementalAddonTotal, subtotal: aggregatedFilingSubtotal, grandTotal: finalizedGrandTotal }; 
};


// ============================================================================ //
// 📊 MODULE 4: REPAIRED REACTIVE STATE INTERCEPTOR ENGINE                      //
// ============================================================================ //
(function attachAgnosticStateInterceptors() { 
    // FIXED: Added your true active database registry target key right into the tracking list
    const targetedMemoryHooks = ['STATE_PRICING', 'CENTRAL_ADDON_DB', 'UPSELLS_ROUTER_DATABASE', 'UPSELL_ADDON_REGISTRY']; 
    
    targetedMemoryHooks.forEach(hookKey => { 
        let internalValue = window[hookKey]; 
        
        Object.defineProperty(window, hookKey, { 
            get() { 
                return internalValue; 
            }, 
            set(newValue) { 
                internalValue = newValue; 
                console.log(`[Marketplace Interceptor] Data update registered on window.${hookKey}`);
                
                // Trigger a clean paint the exact millisecond the async tier script finishes loading data 
                if (newValue && typeof newValue === 'object') { 
                    if (window.currentWizardActiveStep === 3 && typeof window.renderTargetUpsellsListPanel === "function") { 
                        window.renderTargetUpsellsListPanel(); 
                    } 
                } 
            }, 
            configurable: true, 
            enumerable: true 
        }); 
    }); 
})(); 

// Re-evaluate if the DOM finishes updates 
document.addEventListener("DOMContentLoaded", () => { 
    if (window.currentWizardActiveStep === 3 && typeof window.renderTargetUpsellsListPanel === "function") { 
        window.renderTargetUpsellsListPanel(); 
    } 
}); 

// ============================================================================ //
// MEMORY ENGINE STABILIZER (Monitors data mutation without breaking global vars) //
// ============================================================================ //
(function stabilizeRuntimeSync() { 
    // Execute right away if data is already loaded in memory 
    const dbRoot = window.STATE_PRICING || {};
    const centralDatabase = dbRoot.packages || window.CENTRAL_ADDON_DB || {};
    
    if (Object.keys(centralDatabase).length > 0) { 
        if (window.currentWizardActiveStep === 3 && typeof window.renderTargetUpsellsListPanel === "function") { 
            window.renderTargetUpsellsListPanel(); 
        } 
    } 

    /** 
     * Syncs marketplace checklist boxes immediately down to global state tokens memory registers 
     * and dynamically injects values into the active transaction summary payloads. 
     * @param {HTMLInputElement} checkboxNode - Active selected marketplace checkbox element. 
     */ 
    function handleBackgroundUpsellTogglePass(checkboxNode) { 
        if (!checkboxNode || typeof checkboxNode !== 'object') return; 

        // CRITICAL RECURSION GUARD: Stop execution if an automated state cache cycle is actively running
        if (window.isMarketplaceCurrentlySyncingStateMatrix) return;

        const targetFlagKey = checkboxNode.id; 
        if (!targetFlagKey) { 
            console.warn("[Sync Engine] Toggle failed: Checkbox is missing a valid 'id' attribute."); 
            return; 
        } 

        const isChecked = Boolean(checkboxNode.checked); 
        const protectedKeys = ["location", "document", "window", "history", "navigator", "init", "atob", "btoa", "open", "close", "name"];

        // Set the active synchronization lock flag to prevent stack overflows
        window.isMarketplaceCurrentlySyncingStateMatrix = true;

        // 1. UPDATE THE LIVE GLOBAL MEMORY STATE VARIABLE 
        if (!protectedKeys.includes(targetFlagKey) && typeof window[targetFlagKey] !== "function") {
            window[targetFlagKey] = isChecked; 
        }

        // 2. AGNOSTIC PAYLOAD INJECTION ENGINE (ZERO HARDCODING) 
        const windowKeys = Object.keys(window); 
        const activeBillingNodes = []; 

        for (let i = 0; i < windowKeys.length; i++) { 
            const key = windowKeys[i]; 
            try { 
                // Guard against cross-origin iframe security errors or null references 
                if (window[key] && typeof window[key] === 'object' && window[key].active_addons_list !== undefined) { 
                    activeBillingNodes.push(key); 
                } 
            } catch (e) { 
                // Silent catch for locked security descriptors on window properties 
            } 
        } 

        // Cross-reference global tracking coordinates map backwards to discover the short database slug name 
        const inverseCoordinatesMap = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {}; 
        const catalogSlug = Object.keys(inverseCoordinatesMap).find(key => inverseCoordinatesMap[key] === targetFlagKey) || targetFlagKey; 
        
        const addonNameAttr = checkboxNode.getAttribute("data-name") || checkboxNode.getAttribute("data-label") || catalogSlug; 
        const addonPriceAttr = parseFloat(checkboxNode.getAttribute("data-price")) || parseFloat(checkboxNode.value) || 0.00; 
        const compiledAddonRecord = { id: catalogSlug, name: addonNameAttr, price: addonPriceAttr, label: addonNameAttr };

        activeBillingNodes.forEach(nodeKey => { 
            const targetPayload = window[nodeKey]; 
            if (!targetPayload || !Array.isArray(targetPayload.active_addons_list)) return; 

            if (isChecked) { 
                // Avoid creating double entries in the data schema 
                const isAlreadyListed = targetPayload.active_addons_list.some(addon => { 
                    const currentId = (addon && typeof addon === 'object') ? addon.id : addon; 
                    return currentId === catalogSlug; 
                }); 
                if (!isAlreadyListed) { 
                    // Inject the complete item configuration into the active transaction matrix list array 
                    targetPayload.active_addons_list.push(compiledAddonRecord); 
                    console.log(`[Sync Engine] Successfully injected active asset payload tracking data: "${catalogSlug}"`); 
                } 
            } else { 
                // Filter out and scrub item options immediately if the user deselects them 
                targetPayload.active_addons_list = targetPayload.active_addons_list.filter(addon => { 
                    const currentId = (addon && typeof addon === 'object') ? addon.id : addon; 
                    return currentId !== catalogSlug; 
                }); 
                console.log(`[Sync Engine] Successfully scrubbed disabled item payload tracking data: "${catalogSlug}"`); 
            } 
        }); 

        // 3. STEP 5 CART REVIEWS REAL-TIME INTEGRATION
        if (!window.currentCartState) {
            window.currentCartState = {};
        }
        if (!Array.isArray(window.currentCartState.addons)) {
            window.currentCartState.addons = [];
        }

        if (isChecked) {
            const isCartDuplicate = window.currentCartState.addons.some(addon => addon && addon.name === addonNameAttr);
            if (!isCartDuplicate) {
                window.currentCartState.addons.push({ name: addonNameAttr, price: addonPriceAttr, id: catalogSlug });
            }
        } else {
            window.currentCartState.addons = window.currentCartState.addons.filter(addon => addon && addon.name !== addonNameAttr);
        }

        // 4. AUTOMATED PRICING MATRIX UPDATES 
        if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
            window.updateDynamicPricingMatrixVanilla(); 
        } 

        if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") { 
            window.cacheAndRestoreWizardFormStatesVanilla(false); 
        } 

        // Safely unlock the processing thread so future taps execute natively
        window.isMarketplaceCurrentlySyncingStateMatrix = false;
    } 

    // Ensure the window scope retains ownership over the operational handler channel 
    window.handleBackgroundUpsellTogglePass = handleBackgroundUpsellTogglePass; 
})();



// ============================================================================ //
// 📊 MODULE 2D: ACCREDITED STEP 5 ITEMIZATION & PRICING ENGINE                //
// ============================================================================ //
function executeMarketplaceSummaryRenderLoop() { 
    const rowsContainer = document.getElementById("summary-purchase-rows-container"); 
    const subtotalDisplay = document.getElementById("summary-subtotal-display"); 
    const grandTotalDisplay = document.getElementById("summary-grand-total-display"); 
    const govFeesDisplay = document.getElementById("summary-gov-fees-display"); 

    if (!rowsContainer) { 
        console.warn("[Marketplace Summary] Container `#summary-purchase-rows-container` not found."); 
        return; 
    } 

    // 1. WIPE PREVIOUSLY INJECTED UPSELLS TO PREVENT DUPLICATION ON STEP RETRIES 
    const structuralUpsellRows = rowsContainer.querySelectorAll('.runtime-upsell-summary-row'); 
    structuralUpsellRows.forEach(row => row.remove()); 

    // 2. RETRIEVE THE SAME DYNAMIC DATASETS COMPILED BY STEP 3 
    let catalog = window.unifiedCatalogItems; 
    if (!catalog || Object.keys(catalog).length === 0) { 
        if (typeof window.renderTargetUpsellsListPanel === "function") { 
            catalog = window.renderTargetUpsellsListPanel() || {}; 
        } else { 
            console.error("[Marketplace Summary] Step 3 Catalog missing. Cannot evaluate checkout matrix."); 
            return; 
        } 
    } 

    const identityStateMap = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {}; 
    let addedUpsellHTML = ""; 
    let aggregateUpsellCost = 0; 

    // 3. PARSE ONLY SELECTED ALLOWLISTED ITEMS 
    Object.keys(catalog).forEach(itemKey => { 
        const item = catalog[itemKey]; 
        const checkboxId = identityStateMap[itemKey] || itemKey; 

        // Check if the checkbox is checked in the live DOM, or fallback to state flag checks
        const checkedInputNode = document.getElementById(checkboxId); 
        
        // FIXED: Explicitly handle string evaluation matches ("yes"/"true") passed down from background storage caches
        const isCurrentlySelected = checkedInputNode ? 
            checkedInputNode.checked : 
            (window[checkboxId] === true || window[checkboxId] === "yes" || String(window[checkboxId]) === "true"); 

        if (isCurrentlySelected) { 
            const parsedItemPrice = parseFloat(item.price) || 0; 
            aggregateUpsellCost += parsedItemPrice; 
            
            // Construct receipt line items matching your application framework layout 
            addedUpsellHTML += ` 
                <div class="runtime-upsell-summary-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; border: 1px solid var(--border, #e2e8f0); border-radius: 8px; background: #ffffff; box-sizing: border-box; width: 100%; margin-bottom: 8px;"> 
                    <div style="display: flex; flex-direction: column; min-width: 0; flex: 1;"> 
                        <span style="font-weight: 700; font-size: 0.95rem; color: var(--navy, #0a1f44); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"> 
                            ${item.name || itemKey} 
                        </span> 
                        ${item.tier ? `<small style="color: var(--slate, #64748b); font-weight: 500; margin-top: 2px;">${item.tier}</small>` : ''} 
                    </div> 
                    <div style="font-weight: 800; font-size: 1.05rem; color: var(--primary, #10b981); white-space: nowrap; font-family: monospace;"> 
                        +$${parsedItemPrice.toFixed(2)} 
                    </div> 
                </div>`; 
        } 
    }); 

    // 4. APPEND GENERATED ADD-ONS TO THE TOP-LEVEL RECEIPT FRAME 
    if (addedUpsellHTML !== "") { 
        rowsContainer.insertAdjacentHTML('beforeend', addedUpsellHTML); 
    } 

    // 5. MATH ENGINE UPDATES: Parse base pricing variables to compute final sums 
    let foundationFilingCost = 0; 
    
    if (typeof window.getBaseFilingCost === "function") { 
        foundationFilingCost = parseFloat(window.getBaseFilingCost()) || 0; 
    } else {
        // FIXED: Extract the raw base package price directly from our centralized window structure
        const activePlanData = typeof window.getActivePlanDetails === "function" ? window.getActivePlanDetails() : null;
        if (activePlanData && activePlanData.price) {
            foundationFilingCost = parseFloat(activePlanData.price) || 0;
        } else if (subtotalDisplay && !window.hasCalculatedInitialBaseSummaryCost) {
            // Safe guard: only read from the DOM once on initial load to prevent compounding loops
            const sanitizedCostString = subtotalDisplay.textContent.replace(/[^0-9.]/g, ''); 
            window.hasCalculatedInitialBaseSummaryCost = parseFloat(sanitizedCostString) || 0;
            foundationFilingCost = window.hasCalculatedInitialBaseSummaryCost;
        } else {
            foundationFilingCost = window.hasCalculatedInitialBaseSummaryCost || 0;
        }
    }

    // Safely extract processing fees from structural government indicators 
    const establishedGovFees = govFeesDisplay ? parseFloat(govFeesDisplay.textContent.replace(/[^0-9.]/g, '')) || 0 : 0; 

    // Compute final combined total balances 
    const comprehensiveSubtotal = foundationFilingCost + aggregateUpsellCost; 
    const comprehensiveGrandTotal = comprehensiveSubtotal + establishedGovFees; 

    // 6. UPDATE DISPLAY SLATES 
    if (subtotalDisplay) { 
        subtotalDisplay.textContent = `$${comprehensiveSubtotal.toFixed(2)}`; 
    } 
    if (grandTotalDisplay) { 
        grandTotalDisplay.textContent = `$${comprehensiveGrandTotal.toFixed(2)}`; 
    } 

    // Sync global scopes records cleanly for checkout engines references
    window.computedWizardGrandTotalAmount = comprehensiveGrandTotal;
    window.computedWizardStateGovernmentFee = establishedGovFees;

    console.log(`[Marketplace Summary] Pipeline completed successfully. Add-ons cost: $${aggregateUpsellCost.toFixed(2)}.`); 
} 

window.executeMarketplaceSummaryRenderLoop = executeMarketplaceSummaryRenderLoop;



// ============================================================================ // 
// ⚡ MASTER UNIFIED INTERCEPTOR: Global execution interceptor for upsell clicks 
// ============================================================================ // 
/** 
 * Intercepts selection shifts and synchronizes variables directly down to global trackers. 
 * @param {HTMLInputElement} checkboxElement - Active clicked selection checkbox node. 
 */ 
window.executeUpsellStateToggleIntercept = function(checkboxElement) { 
    if (!checkboxElement) return; 

    // CRITICAL RUNTIME LOCK: Stop execution if an automated state cache cycle is actively running
    if (window.isGlobalUpsellSyncInterceptorLockedVanilla) return;

    // Prioritizes target property attributes, fallback straight to element ID metrics
    const linkedStateProperty = checkboxElement.getAttribute("data-state-property") || checkboxElement.getAttribute("data-state") || checkboxElement.id || checkboxElement.name; 
    
    if (!linkedStateProperty) { 
        console.warn("[Sync Interceptor] Aborted: Selection element is missing a valid tracking property key."); 
        return; 
    } 

    const isChecked = Boolean(checkboxElement.checked); 
    const rawPropertyKey = String(linkedStateProperty).trim(); 
    const protectedKeys = ["location", "document", "window", "history", "navigator", "init", "atob", "btoa", "open", "close", "name"];

    // Activate the runtime lock flag to freeze out recursive calculation triggers safely
    window.isGlobalUpsellSyncInterceptorLockedVanilla = true;

    // 1. Immediately sync the interaction status down to global tracking window variables 
    if (!protectedKeys.includes(rawPropertyKey) && typeof window[rawPropertyKey] !== "function") {
        window[rawPropertyKey] = isChecked; 
    }

    // Auto-synchronize flat snake case variations to guarantee cross-file compatibility 
    const flatSnakeKey = rawPropertyKey.toLowerCase().replace(/[-]/g, '_'); 
    if (!protectedKeys.includes(flatSnakeKey) && typeof window[flatSnakeKey] !== "function") {
        window[flatSnakeKey] = isChecked; 
    }
    
    console.log(`[Upsell State Sync] Variable window.${rawPropertyKey} updated live to: ${isChecked}`); 

    // 2. SUMMARY CORES BRIDGING: Simultaneously sync options to the Step 5 review card state arrays 
    if (!window.currentCartState) { 
        window.currentCartState = { addons: [] }; 
    } 
    if (!Array.isArray(window.currentCartState.addons)) { 
        window.currentCartState.addons = []; 
    } 

    const addonLabelName = checkboxElement.getAttribute("data-name") || checkboxElement.getAttribute("data-label") || rawPropertyKey; 
    const addonPriceAmount = parseFloat(checkboxElement.getAttribute("data-price")) || parseFloat(checkboxElement.value) || 0.00; 

    if (isChecked) { 
        const isCartDuplicate = window.currentCartState.addons.some(addon => addon.name === addonLabelName); 
        if (!isCartDuplicate) { 
            window.currentCartState.addons.push({ name: addonLabelName, price: addonPriceAmount, id: rawPropertyKey }); 
            console.log(`[Funnel Hook] Synced "${addonLabelName}" into Step 5 cart state list.`); 
        } 
    } else { 
        window.currentCartState.addons = window.currentCartState.addons.filter(addon => addon.name !== addonLabelName); 
        console.log(`[Funnel Hook] Scrubbed "${addonLabelName}" from Step 5 cart state list.`); 
    } 

    // 3. Force visual element card highlight updates 
    if (typeof window.autoSkinSelectedUpsellCards === "function") { 
        window.autoSkinSelectedUpsellCards(); 
    } 

    // 4. Force running invoice total recalculation loops live 
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } 

    // 5. Populate and refresh your Step 5 purchase summary panels if active on screen 
    if (typeof window.populatePurchaseSummaryReviewMatrix === "function") { 
        window.populatePurchaseSummaryReviewMatrix(); 
    } else if (typeof window.executeMarketplaceSummaryRenderLoop === "function") {
        // Fallback connection to your Step 5 desktop compilation framework matrix
        window.executeMarketplaceSummaryRenderLoop();
    }

    // 6. Push current session selections down to localStorage cache files 
    if (typeof window.saveWizardFormStatesVanilla === "function") { 
        window.saveWizardFormStatesVanilla(); 
    } else if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
        window.cacheAndRestoreWizardFormStatesVanilla(false);
    }

    // 7. Cleanly release the lock out so future user click interactions process natively
    window.isGlobalUpsellSyncInterceptorLockedVanilla = false;
};

// COMPATIBILITY HOOK: Bind your Step 3 checkboxes directly to this unified state handler
window.handleBackgroundUpsellTogglePass = window.executeUpsellStateToggleIntercept;


// ============================================================================ //
// 📊 MEMORY ENGINE STABILIZER (ASYNCHRONOUS SYSTEM PROPERTY PROTECTOR)        //
// ============================================================================ //
// Watch your true active data engine node context safely
let currentDbVal = window.STATE_PRICING || window.CENTRAL_ADDON_DB; 
Object.defineProperty(window, 'STATE_PRICING', { 
    get() { return currentDbVal; }, 
    set(newVal) { 
        currentDbVal = newVal; 
        if (newVal && typeof newVal === 'object') { 
            window.auxiliaryAddonsArray = Object.keys(newVal.packages || newVal); 
        } 
        if (window.currentWizardActiveStep === 3 && typeof window.renderTargetUpsellsListPanel === "function") { 
            window.renderTargetUpsellsListPanel(); 
        } 
    }, 
    configurable: true, 
    enumerable: true 
}); 

document.addEventListener("DOMContentLoaded", () => { 
    if (window.currentWizardActiveStep === 3 && typeof window.renderTargetUpsellsListPanel === "function") { 
        window.renderTargetUpsellsListPanel(); 
    } 
}); 

window.handleBackgroundUpsellTogglePass = window.executeUpsellStateToggleIntercept; 

// ============================================================================ //
// 📊 UNIFIED DATA-DRIVEN MATRIX ENGINE: UI BINDINGS INJECTIONS                 //
// ============================================================================ //
function finalizePricingMatrixUiRender() { 
    const ctx = window._tempCalcContext || {}; 
    
    // FETCH: Resolve baseline core service parameters live from our parsed URL functions
    const currentService = window.routeActiveServiceKey || "";
    const activePlanData = typeof window.getActivePlanDetails === "function" ? window.getActivePlanDetails() : {};
    
    // Isolate base rates from add-on array totals cleanly
    const basePrice = parseFloat(ctx.baseTierPrice) || parseFloat(activePlanData.price) || 0;
    const addonPrice = parseFloat(ctx.incrementalAddonTotal) || 0;

    let baseGovAgencyFee = 0; 
    let stateDropdown = document.getElementById("wizard_state_select") || document.getElementById("state_select") || document.getElementById("ar_principal_state"); 
    let selectedStateCode = window.selectedFormationStateCode || (stateDropdown ? stateDropdown.value : null); 
    let stateFriendlyName = selectedStateCode || ""; 

    if (selectedStateCode && window.STATE_FILING_FEES && window.STATE_FILING_FEES[selectedStateCode]) { 
        let stateFeeData = window.STATE_FILING_FEES[selectedStateCode]; 
        stateFriendlyName = stateFeeData.name || selectedStateCode; 
        let mapKeyA = currentService ? currentService.replace(/-/g, "_") : ""; 
        let mapKeyB = currentService ? currentService.replace(/_/g, "-") : ""; 
        let discoveredFee = stateFeeData[mapKeyA] || stateFeeData[mapKeyB] || stateFeeData[currentService]; 
        
        if (discoveredFee !== undefined && discoveredFee !== null) { 
            baseGovAgencyFee = parseFloat(discoveredFee) || 0; 
        } 
    } else { 
        baseGovAgencyFee = parseFloat(ctx.planConfig?.gov_fee) || parseFloat(window.computedWizardStateGovernmentFee) || 0; 
    } 

    let agencyTariff = 0; 
    if (window.FILINGS4U_GOVERNMENT_PRICING && currentService && window.FILINGS4U_GOVERNMENT_PRICING[currentService]) { 
        agencyTariff = parseFloat(window.FILINGS4U_GOVERNMENT_PRICING[currentService]) || 0; 
    } 

    // Complete the final arithmetic equations tracking pass safely
    const dynamicTotalValue = basePrice + addonPrice + baseGovAgencyFee + agencyTariff; 

    window.computedWizardGrandTotalAmount = dynamicTotalValue; 
    window.computedWizardStateGovernmentFee = baseGovAgencyFee; 

    // Core targeting displays parameters
    const dynamicInvoiceArea = document.getElementById("summary-purchase-rows-container") || document.getElementById("matrix-invoice-rows-container") || document.getElementById("checkout-invoice-rows-container"); 
    const dynamicTotalElement = document.getElementById("summary-grand-total-display") || document.getElementById("matrix-invoice-grand-total") || document.getElementById("grand-total-display"); 

    if (dynamicInvoiceArea) { 
        let appendStateFeeRow = ctx.descriptiveInvoiceRowsHtml || ""; 
        
        if (baseGovAgencyFee > 0 && !appendStateFeeRow.includes("Mandatory")) { 
            appendStateFeeRow += ` 
                <div class="summary-item-row government-fee-row" style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; font-weight: 500; margin-bottom: 6px;"> 
                    <span>+ Mandatory ${stateFriendlyName} Filing Fee</span> 
                    <span style="font-family: monospace; font-weight: 600;">$${baseGovAgencyFee.toFixed(2)}</span> 
                </div>`; 
        } 
        
        let addonWrapper = dynamicInvoiceArea.querySelector('#wizard-invoice-addons-sub-wrapper');
        if (addonWrapper) {
            if (!dynamicInvoiceArea.querySelector('.government-fee-row') && baseGovAgencyFee > 0) {
                addonWrapper.insertAdjacentHTML('afterend', `
                    <div class="summary-item-row government-fee-row" style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; font-weight: 500; margin-top: 6px;">
                        <span>+ Mandatory ${stateFriendlyName} Filing Fee</span>
                        <span style="font-family: monospace; font-weight: 600;">$${baseGovAgencyFee.toFixed(2)}</span>
                    </div>`);
            }
        } else {
            dynamicInvoiceArea.innerHTML = appendStateFeeRow; 
        }
    } 

    if (dynamicTotalElement) { 
        dynamicTotalElement.innerText = `$${dynamicTotalValue.toFixed(2)}`; 
    } 
}


// ============================================================================ //
// 📊 UNIFIED DATA-DRIVEN MATRIX ENGINE: CORES PIPELINE RUNNER                  //
// ============================================================================ //
window.updateDynamicPricingMatrixVanilla = function(state) { 
    // Dynamic context mapping
    const activeStatePayload = state || window.currentCartState || {}; 
    const isCoreEngineReady = typeof window.executeCleanInvoiceCalculationPass === "function" && typeof window.runPricingMatrixDataCrawlPass === "function"; 

    if (!isCoreEngineReady) { 
        // FIXED: Safe dynamic contextual extraction closure execution pass loop
        setTimeout(function() { 
            window.updateDynamicPricingMatrixVanilla(); 
        }, 50); 
        return; 
    } 

    // Directly fires straight-line procedures sequentially
    window.executeCleanInvoiceCalculationPass(activeStatePayload); 
    window.runPricingMatrixDataCrawlPass(); 

    // Fire the final user interface display bindings pass cleanly 
    if (typeof window.finalizePricingMatrixUiRender === "function") { 
        window.finalizePricingMatrixUiRender(); 
    } else { 
        console.error("[Matrix Engine Pipeline] Critical failure: 'finalizePricingMatrixUiRender' is uninitialized."); 
    } 
}; 

window.updateWizardFinalTotalAmountMatrix = function() { 
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } 
};
