const getGuideSteps = (guide) => {
    if (!guide) return [];

    const serviceSteps = Array.isArray(guide?.services)
        ? guide.services.flatMap((service) =>
              (Array.isArray(service?.steps) ? service.steps : []).map((step, index) => ({
                  ...step,
                  serviceName:
                      step?.serviceName ||
                      service?.serviceName ||
                      service?.serviceId ||
                      "Service",
                  stepNumber: step?.stepNumber ?? index + 1
              }))
          )
        : [];

    if (serviceSteps.length) return serviceSteps;

    if (Array.isArray(guide?.steps) && guide.steps.length) return guide.steps;

    return [];
};

const guidesData = [
    {
        id: "ura-tin-individual",
        title: "How to Register for an Individual URA Tax TIN",
        category: "Civic & Tax",
        agency: "Uganda Revenue Authority (URA)",
        icon: "fa-file-invoice-dollar",
        color: "bg-emerald-50 text-emerald-600 border-emerald-200",
        cost: "100% Free (No government or agent fees)",
        time: "10 - 20 Minutes (Online)",
        location: "URA Portal (www.ura.go.ug) or any physical URA Station / TaxHub nationwide",
        link: "https://ura.go.ug",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/placeholder_ura_tin",
        description: "A Tax Identification Number (TIN) is a unique 10-digit identity code issued free of charge by URA. You need it in Uganda to get formal employment, open a bank account, buy land/property worth over 50 Million UGX, register a company, or clear goods at customs.",
        support: {
            tollFree: "0800 117 000 / 0800 217 000",
            email: "services@ura.go.ug",
            whatsapp: "+256 772 140 000",
            headquarters: "URA Tower, Plot 1-4, Nakawa Industrial Area, Kampala"
        },
        documents: [
            "Ugandan Citizens: Valid National ID (NIN number)",
            "Foreign Residents: Valid Passport + Work Permit / Alien ID",
            "Refugees: UNHCR Refugee Card or OPM Attestation Letter",
            "Active personal email address (must be able to access inbox immediately)",
            "Active phone number (registered in taxpayer name for SMS OTPs)",
            "Physical Address details (District, County, Sub-county, Parish, Village)"
        ],
        steps: [
            {
                title: "Step 1: Go to the Official URA Website",
                desc: "Open your web browser and visit www.ura.go.ug. Click e-Services, then TIN Registration or Instant TIN."
            },
            {
                title: "Step 2: Choose Individual & Verify Your Email",
                desc: "Select Individual, type your active email address, and click Send Code. Open your email, copy the 6-digit verification code, return to the portal, and verify it."
            },
            {
                title: "Step 3: Enter Your National ID (NIN)",
                desc: "Select Ugandan Citizen, then enter your 14-character NIN and birth date. The portal validates the record against NIRA."
            },
            {
                title: "Step 4: Fill in Your Contact Information",
                desc: "Add your phone number, district, county, sub-county, parish, village, and source of income. If employed, include your employer TIN if required."
            },
            {
                title: "Step 5: Review and Submit",
                desc: "Review all information carefully, tick the declaration box, complete the captcha, and click Submit. Registration is free."
            },
            {
                title: "Step 6: Receive Your TIN and Download the Certificate",
                desc: "URA sends your 10-digit TIN by SMS and email. Log back in, open My Certificates, and download your TIN certificate."
            }
        ],
        troubleshooting: [
            {
                issue: "NIRA System Timeout Error",
                solution: "Retry early in the morning or later in the evening. If the system is still unavailable, visit a physical URA office for manual help."
            },
            {
                issue: "Email Already Registered Error",
                solution: "Use a different email address or recover a previous account if you already registered."
            }
        ]
    },

    {
        id: "ura-tin-corporate",
        title: "How to Register for a Non-Individual (Company/Business) URA Tax TIN",
        category: "Civic & Tax",
        agency: "Uganda Revenue Authority (URA)",
        icon: "fa-building",
        color: "bg-blue-50 text-blue-600 border-blue-200",
        cost: "100% Free (Online via URSB Integration)",
        time: "1 - 2 Working Days",
        location: "URA Web Portal (www.ura.go.ug) / URSB Online Services System",
        link: "https://ura.go.ug",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/placeholder_ura_corporate_tin",
        description: "A mandatory corporate Tax Identification Number for registered Limited Liability Companies, Partnerships, NGOs, Cooperatives, and Trusts operating in Uganda.",
        support: {
            tollFree: "0800 117 000 / 0800 217 000",
            email: "services@ura.go.ug",
            whatsapp: "+256 772 140 000",
            headquarters: "URA Tower, Plot 1-4, Nakawa Industrial Area, Kampala"
        },
        documents: [
            "Valid URSB Certificate of Incorporation or Registration",
            "Memorandum & Articles of Association (MEMARTS) or Partnership Deed",
            "Valid Individual TINs and National IDs for at least two Company Directors",
            "Official company email address and active corporate phone number",
            "Physical business address details (Plot Number, Building Name, Street, District)"
        ],
        steps: [
            {
                title: "Step 1: Access URA Non-Individual TIN Workspace",
                desc: "Go to www.ura.go.ug, click e-Services, then select Non-Individual TIN Registration."
            },
            {
                title: "Step 2: Enter URSB Registration Number & Validate Business",
                desc: "Choose the entity type, enter the URSB registration number and incorporation date, then validate the business details."
            },
            {
                title: "Step 3: Add Directors & Tax Representative",
                desc: "Enter the TINs and NINs of at least two directors and assign a tax representative."
            },
            {
                title: "Step 4: Provide Business Address and Accounting Period",
                desc: "Add the business’ physical address and select the financial year period."
            },
            {
                title: "Step 5: Review and Submit the Corporate Application",
                desc: "Check that all director and company details are correct, accept the declaration, and submit the form."
            },
            {
                title: "Step 6: Download the Corporate TIN Certificate",
                desc: "After approval, log in to the URA portal and download the corporate TIN certificate."
            }
        ]
    },

    {
        id: "ura-prn-payment",
        title: "How to Generate a PRN & Pay Taxes on the URA Portal",
        category: "Payments & PRN",
        agency: "Uganda Revenue Authority (URA)",
        icon: "fa-credit-card",
        color: "bg-purple-50 text-purple-600 border-purple-200",
        cost: "PRN Generation is Free (You pay only the tax liability or statutory fee)",
        time: "5 Minutes",
        location: "URA Portal / Mobile Money (*165# or *185#) / Commercial Banks nationwide",
        link: "https://ura.go.ug",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/placeholder_ura_prn",
        description: "A Payment Registration Number (PRN) is a mandatory 13-digit code generated on the URA website whenever you pay tax, stamp duty, motor vehicle fees, court fees, or penalties in Uganda.",
        documents: [
            "Your 10-digit URA TIN",
            "Exact payment amount in Ugandan Shillings (UGX)",
            "Mobile Money account (MTN/Airtel) or Bank account details"
        ],
        steps: [
            {
                title: "Step 1: Open the URA Payment Registration Page",
                desc: "Go to www.ura.go.ug and click e-Services, then Payment Registration or Generate PRN."
            },
            {
                title: "Step 2: Enter Your TIN and Select Tax Head",
                desc: "Enter your 10-digit TIN and choose the correct tax head for the payment reason."
            },
            {
                title: "Step 3: Enter the Amount and Payment Mode",
                desc: "Enter the exact amount and choose Mobile Money or Bank Teller as your payment method."
            },
            {
                title: "Step 4: Submit and Save the PRN",
                desc: "Submit the form and save the generated 13-digit PRN before paying."
            },
            {
                title: "Step 5: Pay Using Mobile Money or Bank",
                desc: "Use the list of payment options to complete the payment. Keep the receipt or confirmation message."
            },
            {
                title: "Step 6: Confirm Payment in the Ledger",
                desc: "Check your phone SMS and the URA portal to confirm that the payment status shows PAID."
            }
        ]
    },

    {
        id: "ura-nil-returns",
        title: "How to File a URA Nil Return (Avoid Penalties)",
        category: "Tax Compliance",
        agency: "Uganda Revenue Authority (URA)",
        icon: "fa-file-signature",
        color: "bg-amber-50 text-amber-600 border-amber-200",
        cost: "100% Free",
        time: "5 Minutes",
        location: "URA Web Portal (www.ura.go.ug)",
        link: "https://ura.go.ug",
        image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/placeholder_ura_nil_returns",
        description: "If you have an active URA TIN but earned zero income or did not run business operations during a tax year/month, you MUST legally file a Nil Return on the URA portal before the deadline to avoid penalties.",
        documents: [
            "Active 10-digit URA TIN",
            "URA Web Portal Password"
        ],
        steps: [
            {
                title: "Step 1: Log In to the URA Portal",
                desc: "Open www.ura.go.ug, click Login, and enter your TIN and password."
            },
            {
                title: "Step 2: Go to Returns",
                desc: "From your dashboard, open Returns and select File Nil Return."
            },
            {
                title: "Step 3: Pick the Tax Type and Return Period",
                desc: "Select the tax obligation and the period for which you are filing a nil return."
            },
            {
                title: "Step 4: Submit and Download the Receipt",
                desc: "Submit the nil return and download the acknowledgement receipt as proof of compliance."
            }
        ]
    },

    {
        id: "ura-password-reset",
        title: "How to Recover Lost TIN or Reset URA Password",
        category: "Account Recovery",
        agency: "Uganda Revenue Authority (URA)",
        icon: "fa-key",
        color: "bg-red-50 text-red-600 border-red-200",
        cost: "100% Free",
        time: "3 - 5 Minutes",
        location: "URA Web Portal (www.ura.go.ug)",
        link: "https://ura.go.ug",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/placeholder_ura_reset",
        description: "Recover your forgotten 10-digit URA Tax Identification Number or reset your e-Tax portal account password using your registered email address or National ID.",
        documents: [
            "National Identification Number (NIN)",
            "Registered mobile phone number or email inbox"
        ],
        steps: [
            {
                title: "Step 1: Open the Recovery Page",
                desc: "Go to the URA login page and select Forgot Password or Find My TIN."
            },
            {
                title: "Step 2: Enter Your NIN and Recovery Details",
                desc: "Enter your NIN and your registered phone number or email, then request the OTP or recovery link."
            },
            {
                title: "Step 3: Verify and Set a New Password",
                desc: "Use the OTP sent to your email or phone, then create a new secure password and save it."
            }
        ]
    },

    {
        id: "ura-motor-vehicle-transfer",
        title: "How to Transfer Motor Vehicle / Motorcycle Ownership",
        category: "Vehicles & Property",
        agency: "Uganda Revenue Authority (URA)",
        icon: "fa-car",
        color: "bg-indigo-50 text-indigo-600 border-indigo-200",
        cost: "Transfer Fees + Stamp Duty (1% of vehicle value, minimum UGX 30,000 PRN)",
        time: "1 to 3 Working Days",
        location: "URA Portal / Physical Vehicle Inspection Center",
        link: "https://ura.go.ug",
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/placeholder_ura_vehicle",
        description: "Legal transfer of motor vehicle or motorcycle registration logbook from seller to buyer in Uganda using URA e-Tax portal transfer PINs.",
        documents: [
            "Original Vehicle Logbook",
            "Signed Transfer Form (Form 10) & Sales Agreement",
            "Active URA TINs for both Seller and Buyer",
            "Copies of National IDs for both parties"
        ],
        steps: [
            {
                title: "Step 1: Seller Initiates Transfer",
                desc: "The seller logs into the URA portal and initiates transfer using the vehicle registration number and buyer TIN."
            },
            {
                title: "Step 2: Buyer Accepts and Generates PRN",
                desc: "The buyer accepts the transfer and generates the payment PRN for transfer and stamp duty."
            },
            {
                title: "Step 3: Pay and Complete Transfer",
                desc: "Pay the required fees, then submit the logbook and payment evidence to the registry or vehicle office for completion."
            }
        ]
    },

    {
        id: "express-passport",
        title: "How to Apply for Ordinary or Express Passport Step by Step in Uganda",
        category: "Identification",
        agency: "Directorate of Citizenship & Immigration Control",
        icon: "fa-passport",
        color: "bg-blue-50 text-blue-600 border-blue-200",
        cost: "UGX 400,000 (Express) and UGX 250,000 Normal (Ordinary) Fee",
        time: "3 - 5 Working Days",
        location: "DCIC Headquarters, Kyambogo",
        link: "https://passports.go.ug",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/placeholder_passport",
        description: "Step-by-step procedure to acquire a machine-readable or e-passport through the Ministry of Internal Affairs online portal.",
        documents: [
            "National Identity Card (NIN)",
            "Recommendation letter from LC1 & GIS0",
            "Birth Certificate / Baptism Card",
            "Bank Payment Receipt (PRN)"
        ],
        steps: [
            {
                title: "Step 1: Access the Passport Portal",
                desc: "Open the official passport portal and start a new application."
            },
            {
                title: "Step 2: Fill Out the Application Form",
                desc: "Complete the application form with your personal details, contact details, and chosen passport type."
            },
            {
                title: "Step 3: Enter Nationality, Origin, and Parent Details",
                desc: "Provide resident and origin information, citizenship status, spouse details, next of kin, and recommender details as required."
            },
            {
                title: "Step 4: Review and Submit",
                desc: "Review all the details and submit the application. Print the generated PDF form if required by the portal."
            },
            {
                title: "Step 5: Pay the Required Fee",
                desc: "Use the generated payment reference to pay the passport fee via a bank or mobile money."
            },
            {
                title: "Step 6: Schedule an Appointment",
                desc: "Return to the portal to schedule your appointment for document review or biometric capture."
            },
            {
                title: "Step 7: Check Application Status",
                desc: "Check your application progress until the passport is ready for collection."
            }
        ]
    },

    {
        id: "uganda-driving-permit-system",
        title: "Uganda Driving Permit System (UDLS / MoWT) Complete Guide",
        category: "Transport & Travel",
        agency: "Ministry of Works & Transport (Uganda Driver Licensing System - UDLS)",
        icon: "fa-id-card",
        color: "bg-amber-50 text-amber-600 border-amber-200",
        cost: "Varies by service (UGX 25,000 to UGX 330,000+)",
        time: "Same-day card issuance (1 to 2 hours at Kyambogo / Regional UDLS centers)",
        location: "Kyambogo (Main Head Office) / Regional Issuance Centers (Gulu, Arua, Mbale, Jinja, Mbarara, Fort Portal, Hoima)",
        link: "https://services.works.go.ug",
        portal: "https://udls.co.ug",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/usMF93DdE-Q",
        description: "Complete guide covering applying for, renewing, updating, and replacing a Ugandan driving permit. Includes fee schedules, class eligibility, and payment instructions.",
        support: {
            tollFree: "0800 211 002",
            email: "info@udls.co.ug",
            officialPortal: "https://udls.co.ug",
            eservicesPortal: "https://services.works.go.ug"
        },
        documents: [
            "National ID / NIN (Ugandans), Valid Passport + Visa/Work Permit (Foreigners), or Refugee Identity Card",
            "Medical Examination Form UCDP1 (Stamped by a registered Doctor/Optometrist)",
            "Driving School Training Completion Certificate",
            "Learner Driving Permit (Provisional Card)",
            "IOV Police Certificate of Competence",
            "Paid URA Payment Receipts (PRNs)"
        ],
        steps: [
            {
                title: "Step 1: Choose the Service You Need",
                desc: "Select the correct service on the official portal, such as a new permit, renewal, class extension, replacement, or foreign permit exchange."
            },
            {
                title: "Step 2: Check the Requirements and Fee",
                desc: "Review the official fee and required documents before you begin. Confirm the exact amount and method of payment on the official portal."
            },
            {
                title: "Step 3: Gather the Required Documents",
                desc: "Collect all required documents, including ID, medical form, test certificates, and payment evidence."
            },
            {
                title: "Step 4: Start the Application",
                desc: "Complete the application on the official portal or the required service page and submit carefully."
            },
            {
                title: "Step 5: Pay the Fee",
                desc: "Generate the required PRN and pay the exact amount through an accepted payment method."
            },
            {
                title: "Step 6: Complete the Required Test or Verification",
                desc: "Attend any required medical, practical, or identity verification steps before final permit issuing."
            },
            {
                title: "Step 7: Visit UDLS for Biometrics or Collection",
                desc: "If instructed, attend the nearest UDLS office with your documents and receipt for biometrics and final collection."
            },
            {
                title: "Step 8: Collect Your Permit",
                desc: "Collect the permit when notified by the system or office, and keep the payment and collection receipts."
            }
        ],
        feeStructure: {
            learnerPermit: {
                standardClasses: 60000,
                motorcycleClassesOnly: 40000,
                validityDuration: "3 Months"
            },
            policeIovTestFee: {
                feePerClassAttempt: 25000
            },
            newFullPermit: {
                validity1Year: 135000,
                validity3Years: 230000,
                validity5Years: 330000
            },
            permitRenewal: {
                standardClasses: { yr1: 130000, yr3: 210000, yr5: 310000 },
                motorcycleClassesOnly: { yr1: 70000, yr3: 100000, yr5: 200000 },
                lapsedRule: "Permits expired over 24 months require an IOV practical retest (UGX 25,000) before renewal."
            },
            classExtension: {
                standardClasses: 121000,
                motorcycleClassesOnly: 60000,
                policeTestFee: 25000
            },
            duplicatePermit: {
                replacementFee: 121000,
                policeAbstractFee: 10000,
                gazetteAdvertFee: 30000
            },
            foreignExchangePermit: {
                validity1Year: 135000,
                validity3Years: 230000,
                validity5Years: 330000
            }
        },
        vehicleClasses: [
            { class: "A1", category: "Light Motorcycles (up to 125cc / 11kW)", minAge: 18, prerequisites: "None" },
            { class: "A", category: "Heavy Motorcycles (over 125cc / 11kW)", minAge: 18, prerequisites: "None" },
            { class: "B1", category: "Tricycles and Quadricycles (Tuk-tuks)", minAge: 18, prerequisites: "None" },
            { class: "B", category: "Passenger Cars & Light Goods (up to 3,500kg, max 8 passengers)", minAge: 18, prerequisites: "None" },
            { class: "BE", category: "Class B Vehicle towing heavy trailer (> 750kg)", minAge: 19, prerequisites: "Hold Class B" },
            { class: "C1", category: "Medium Goods Vehicles (3,500kg to 7,500kg)", minAge: 21, prerequisites: "Hold Class B for 2+ years" },
            { class: "C", category: "Heavy Commercial Goods Vehicles / Trucks (> 7,500kg)", minAge: 25, prerequisites: "Hold Class C1" },
            { class: "CE", category: "Heavy Goods Vehicle with Heavy Trailer (Articulated Trucks)", minAge: 25, prerequisites: "Hold Class C" },
            { class: "D1", category: "Light Passenger Vehicles / Minibuses (9 to 16 seats)", minAge: 21, prerequisites: "Hold Class B for 2+ years" },
            { class: "D", category: "Heavy Passenger Vehicles / Coasters & Buses (over 16 seats)", minAge: 25, prerequisites: "Hold Class D1" },
            { class: "DE", category: "Heavy Passenger Bus towing trailer", minAge: 25, prerequisites: "Hold Class D" },
            { class: "F", category: "Engineering Plant & Heavy Machinery (Bulldozers, Excavators)", minAge: 18, prerequisites: "Specialized Training" },
            { class: "G", category: "Agricultural & Industrial Tractors", minAge: 18, prerequisites: "None" }
        ],
        paymentGuide: {
            onlinePortal: "services.works.go.ug or www.ura.go.ug",
            mobileMoney: {
                mtnCode: "*165# -> Option 4 (Payments) -> Option 7 (URA Fees) -> Enter PRN",
                airtelCode: "*185# -> Option 4 (Pay Bills) -> Option 7 (URA Fees) -> Enter PRN"
            },
            overTheCounter: "Any URA-integrated commercial bank (Centenary, Stanbic, Absa, DFCU, Equity, etc.)"
        },
        services: [
            {
                serviceId: "new-permit",
                serviceName: "New Driving Permit Application",
                totalCost: "UGX 220,000 - 415,000 (Learner + IOV Test + Main Permit + Driving School)",
                requiredDocuments: [
                    "National ID / NIN (Ugandans), Valid Passport + Visa/Work Permit (Foreigners), or Refugee Identity Card",
                    "Medical Examination Form UCDP1 (Stamped by registered Doctor/Optometrist)",
                    "Driving School Training Completion Certificate",
                    "Learner Driving Permit (Provisional Card)",
                    "IOV Police Certificate of Competence",
                    "Paid URA Payment Receipts (PRNs)"
                ],
                steps: [
                    {
                        stepNumber: 1,
                        title: "Apply & Get Learner Permit First",
                        desc: "Generate a PRN for the learner permit and pay via mobile money or bank. Then visit UDLS with your National ID to capture biometrics."
                    },
                    {
                        stepNumber: 2,
                        title: "Undergo Medical Examination",
                        desc: "Take the UCDP1 form to a registered medical doctor or optometrist for assessment and signature."
                    },
                    {
                        stepNumber: 3,
                        title: "Enroll in a Licensed Driving School",
                        desc: "Present your learner permit and medical form to a certified driving school to receive training and completion documents."
                    },
                    {
                        stepNumber: 4,
                        title: "Pay & Pass IOV Driving Test",
                        desc: "Generate the IOV test PRN, pay the fee, and report to the testing center."
                    },
                    {
                        stepNumber: 5,
                        title: "Apply Online & Upload Documents",
                        desc: "Log into udls.co.ug or services.works.go.ug, upload your documents, and complete the application."
                    },
                    {
                        stepNumber: 6,
                        title: "Generate URA PRN & Pay Main Permit Fee",
                        desc: "Select the permit duration and pay the required URA fee using an accepted method."
                    },
                    {
                        stepNumber: 7,
                        title: "UDLS Biometrics Capture",
                        desc: "Visit Kyambogo or a regional UDLS office for final photo, fingerprint, and signature capture."
                    },
                    {
                        stepNumber: 8,
                        title: "Collect Your Smart Permit Card",
                        desc: "Collect the permit card when the office notifies you that processing is complete."
                    }
                ]
            },
            {
                serviceId: "permit-renewal",
                serviceName: "Driving Permit Renewal",
                totalCost: "UGX 130,000 - 335,000 (Based on validity & vehicle class)",
                requiredDocuments: [
                    "Original Expired Driving Permit Card",
                    "National ID (NIN) / Passport / Refugee ID",
                    "Stamped Medical Form UCDP1",
                    "Paid URA Renewal PRN Receipt",
                    "IOV Certificate of Competence (Only if permit has been expired over 2 years)"
                ],
                steps: [
                    {
                        stepNumber: 1,
                        title: "Medical Check & Retest Check",
                        desc: "If expired more than 2 years, pay the IOV retest fee and pass the practical exam before renewal."
                    },
                    {
                        stepNumber: 2,
                        title: "Generate Renewal PRN & Pay",
                        desc: "Open the renewal service on the official portal, choose duration, generate the PRN, and pay."
                    },
                    {
                        stepNumber: 3,
                        title: "Biometrics & Collection at UDLS",
                        desc: "Bring the expired permit, medical form, ID, and receipt to UDLS for verification and collection."
                    }
                ]
            }
        ]
    },

    {
        id: "ursb-business",
        title: "Registering a Company Name with URSB",
        category: "Business & Licensing",
        agency: "Uganda Registration Services Bureau",
        icon: "fa-briefcase",
        color: "bg-purple-50 text-purple-600 border-purple-200",
        cost: "UGX 24,000 (Reservation) + UGX 100,000 (Registration)",
        time: "2 - 3 Working Days",
        location: "URSB HQ, Kampala / OBR Portal",
        link: "https://ursb.go.ug",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/placeholder_ursb",
        description: "Official procedure for reserving a business name, incorporating a limited liability company, and acquiring incorporation certificates.",
        documents: [
            "Proposed Company Names (At least 3 options)",
            "National IDs of all Directors and Shareholders",
            "Physical Registered Office Address",
            "Articles and Memorandum of Association"
        ],
        steps: [
            {
                title: "Create URSB OBR Account",
                desc: "Sign up on the Online Business Registration (OBR) portal using your email and phone number."
            },
            {
                title: "Name Reservation",
                desc: "Submit up to three preferred company names for availability check and approval by URSB."
            },
            {
                title: "Fill Incorporation Particulars",
                desc: "Enter director details, share capital distribution, and beneficial ownership information."
            },
            {
                title: "Pay Fees via URA PRN",
                desc: "Pay the name reservation and registration fees through a bank or mobile money using the generated PRN."
            },
            {
                title: "Download Certificate",
                desc: "Once approved by the registrar, download your certificate of incorporation."
            }
        ]
    },

    {
        id: "bus-travel",
        title: "Intercity Bus Booking & Travel Guide (Kampala - Upcountry)",
        category: "Transport & Travel",
        agency: "Private Coach Operators (YY, Link, Global, Gateway)",
        icon: "fa-bus",
        color: "bg-rose-50 text-rose-600 border-rose-200",
        cost: "UGX 30,000 - 80,000 (Depending on Route)",
        time: "Instant Booking",
        location: "Namayiba, Usafi, or Kisenyi Bus Terminals",
        link: "https://ugandabusschedules.com",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/placeholder_bus_travel",
        description: "Practical guide to booking safe upcountry bus travel from Kampala to Gulu, Mbarara, Fort Portal, Mbale, and Arua.",
        documents: [
            "Valid National ID or Phone for Mobile Ticket",
            "Luggage tags for secure tracking"
        ],
        steps: [
            {
                title: "Choose Bus Operator & Terminal",
                desc: "Identify the bus company serving your destination and go to the correct terminal."
            },
            {
                title: "Book Ticket in Advance",
                desc: "Buy the ticket from the terminal office or through the operator’s mobile payment system."
            },
            {
                title: "Arrive Early for Boarding",
                desc: "Report to the terminal at least 45 minutes before departure for luggage loading and seat allocation."
            },
            {
                title: "Secure Luggage Token",
                desc: "Ensure your baggage is tagged and you receive a matching luggage token before boarding."
            }
        ]
    },

    {
        id: "land-title",
        title: "Land Title Verification & Search at Ministry of Lands",
        category: "Civic & Tax",
        agency: "Ministry of Lands, Housing and Urban Development",
        icon: "fa-landmark",
        color: "bg-indigo-50 text-indigo-600 border-indigo-200",
        cost: "UGX 10,000 per Search",
        time: "1 Working Day",
        location: "MLHUD Zonal Offices / National Lands Information Portal",
        link: "https://mlhud.go.ug",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/placeholder_land_title",
        description: "Protect yourself from land fraud by conducting an official land search and title verification before purchasing property.",
        documents: [
            "Block and Plot Number / Copy of Title",
            "National ID of the Searcher",
            "Mobile Money or Bank Payment Receipt"
        ],
        steps: [
            {
                title: "Access the National Lands Information System",
                desc: "Log onto the MLHUD portal or visit the ministry records office desk."
            },
            {
                title: "Provide Plot Details",
                desc: "Enter the accurate Block number, Plot number, and District where the land is located."
            },
            {
                title: "Pay the Search Fee",
                desc: "Generate the payment reference and pay the UGX 10,000 search fee through an approved method."
            },
            {
                title: "Review the Official Search Report",
                desc: "Check the report to confirm ownership, encumbrances, and any caveats before buying the property."
            }
        ]
    }
];

export { guidesData, getGuideSteps };
