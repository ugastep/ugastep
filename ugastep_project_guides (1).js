// Step-by-step guides data referenced by script ID
const guidesData = [
    {
        id: "ura-tin-individual",
        title: "How to Register for an Individual URA Tax TIN",
        category: "Civic & Tax",
        agency: "Uganda Revenue Authority (URA)",
        icon: "fa-file-invoice-dollar",
        color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
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
                desc: "WHERE TO GO: Open your web browser on a phone or computer and type 'www.ura.go.ug'.\n\nWHAT TO DO: Look at the top menu bar, click on 'e-Services', and then click on 'TIN Registration' (or click the main button that says 'Instant TIN').\n\nWHAT'S NEXT: The website will open a clean online registration form. Move to Step 2 to choose your tax category.",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
            },
            {
                title: "Step 2: Choose 'Individual' & Verify Your Email Address",
                desc: "WHERE TO GO: The taxpayer category section at the top of the form.\n\nWHAT TO DO: Click on 'Individual'. Type your active email address (Example: john.kato@gmail.com) and click 'Send Code'. Open your email inbox in a new browser tab, copy the 6-digit security code sent by URA (Example: 849201), switch back to the URA page, type the code into the box, and click 'Verify'.\n\nWHAT'S NEXT: Once your email is verified, the portal unlocks the identity verification section. Move to Step 3.",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
            },
            {
                title: "Step 3: Enter Your National ID (NIN) to Auto-Load Your Details",
                desc: "WHERE TO GO: The identity details section on the portal.\n\nWHAT TO DO: Select 'Ugandan Citizen'. Look at your National ID card and type your 14-character NIN (Example: CM90012345678A) and your exact Date of Birth. Click 'Validate'. The portal will talk directly to NIRA to automatically bring up your official legal names, date of birth, and gender.\n\nWHAT'S NEXT: Your personal details are now locked and verified against official government records. Move to Step 4 to fill in your contact and location details."
            },
            {
                title: "Step 4: Fill in Your Phone Number, Address & Income Source",
                desc: "WHERE TO GO: The contact, location, and employment fields.\n\nWHAT TO DO: Enter your active phone number (Example: 0772000000). Select your primary source of income from the dropdown list (Example: Select 'Employment' if employed, or 'Business' if self-employed). Select your residence details from the drop-down menus: District (e.g., Kampala), County (e.g., Kyadondo), Sub-County (e.g., Nakawa), Parish, and Village. If employed, enter your employer's TIN to link PAYE taxes.\n\nWHAT'S NEXT: Now that all required fields are complete, move to Step 5 to double-check and submit."
            },
            {
                title: "Step 5: Review Your Details and Click 'Submit' (UGX 0 Cost)",
                desc: "WHERE TO GO: Bottom of the registration page.\n\nWHAT TO DO: Scroll back up to review all inputs for accuracy. Tick the declaration box stating 'I declare that the information provided is true'. Solve the security captcha challenge (tick 'I am not a robot') and click the green 'Submit' button. Cost: UGX 0. No payment or processing fees are required.\n\nWHAT'S NEXT: The system will generate your TIN instantly or within 24 hours. Move to Step 6 to get your TIN certificate."
            },
            {
                title: "Step 6: Receive Your 10-Digit TIN & Download Your Certificate",
                desc: "WHERE TO GO: Your phone SMS, email inbox, and www.ura.go.ug login page.\n\nWHAT TO DO: Check your phone and email. URA will send your new 10-digit TIN (Example: 1012345678) and temporary password. Re-open www.ura.go.ug, click 'Login' at the top right, enter your TIN and password, go to 'My Certificates', and click 'Download TIN Certificate' to print your PDF.\n\nWHAT'S NEXT: You now have an active TIN! Keep your credentials safe for bank, employer, or business needs."
            }
        ],
        troubleshooting: [
            {
                issue: "NIRA System Timeout Error",
                solution: "WHAT TO DO NEXT: If the site says NIRA is unavailable, servers are busy. Retry early in the morning (before 8 AM) or late evening, or visit a physical URA branch for manual assistance."
            },
            {
                issue: "Email Already Registered Error",
                solution: "WHAT TO DO NEXT: Each email can only link to one TIN. Type a different email address or use account recovery if you registered previously."
            }
        ]
    },
    {
        id: "ura-tin-corporate",
        title: "How to Register for a Non-Individual (Company/Business) URA Tax TIN",
        category: "Civic & Tax",
        agency: "Uganda Revenue Authority (URA)",
        icon: "fa-building",
        color: "bg-blue-500/10 text-blue-400 border-blue-500/30",
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
                desc: "WHERE TO GO: Go to www.ura.go.ug -> Click 'e-Services' -> Select 'Non-Individual TIN Registration'.\n\nWHAT TO DO: Click 'Start New Registration' to begin the corporate tax portal application.\n\nWHAT'S NEXT: Move to Step 2 to enter your business incorporation details."
            },
            {
                title: "Step 2: Enter URSB Registration Number & Validate Business",
                desc: "WHERE TO GO: Business Registration Details section on the portal.\n\nWHAT TO DO: Select your entity type (e.g., Limited Liability Company). Type your exact URSB Registration Number (Example: 80020000123456) and Incorporation Date. Click 'Validate'. The portal pulls verified company names and share structure from URSB databases.\n\nWHAT'S NEXT: Move to Step 3 to add directors and your designated tax representative."
            },
            {
                title: "Step 3: Enter Directors' TINs & Designate Tax Representative",
                desc: "WHERE TO GO: Directors and Officers section.\n\nWHAT TO DO: Input the active individual TINs and NINs of at least two company directors. Assign one director or qualified accountant as the official Tax Representative responsible for submitting monthly/annual tax filings.\n\nWHAT'S NEXT: Move to Step 4 to specify physical company premises and financial dates."
            },
            {
                title: "Step 4: Provide Business Address & Financial Year Period",
                desc: "WHERE TO GO: Address and Accounting details section.\n\nWHAT TO DO: Enter physical office location details (Example: Plot 12, Kampala Road, Kingdom Kampala Building, Nakawa Division). Select your financial accounting cycle (e.g., July 1st to June 30th).\n\nWHAT'S NEXT: Move to Step 5 to review corporate entries and submit."
            },
            {
                title: "Step 5: Review & Submit Corporate Application (UGX 0 Cost)",
                desc: "WHERE TO GO: Application summary and declaration footer.\n\nWHAT TO DO: Double-check that all director TINs and URSB data match your official company documents. Tick the legal declaration box, complete the captcha challenge, and click 'Submit'. Processing cost is free (UGX 0).\n\nWHAT'S NEXT: Move to Step 6 to receive and print your Corporate TIN Certificate."
            },
            {
                title: "Step 6: Receive Corporate Credentials & Download Certificate",
                desc: "WHERE TO GO: Official company email inbox and www.ura.go.ug login dashboard.\n\nWHAT TO DO: Once approved by URA (within 24 hours), check company email for your 10-digit Corporate TIN (Example: 5001234567) and portal password. Log in at www.ura.go.ug, go to 'My Certificates', and download the PDF for commercial bank account opening."
            }
        ]
    },
    {
        id: "ura-prn-payment",
        title: "How to Generate a PRN & Pay Taxes on the URA Portal",
        category: "Civic & Tax",
        agency: "Uganda Revenue Authority (URA)",
        icon: "fa-credit-card",
        color: "bg-purple-500/10 text-purple-400 border-purple-500/30",
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
                desc: "WHERE TO GO: Go to www.ura.go.ug.\n\nWHAT TO DO: Click 'e-Services' on the top navigation bar, then click 'Payment Registration' (Generate PRN).\n\nWHAT'S NEXT: The e-Payment portal will open. Move to Step 2 to identify yourself and choose the tax head."
            },
            {
                title: "Step 2: Enter Your TIN & Select Tax Head",
                desc: "WHERE TO GO: Taxpayer and Payment Type section.\n\nWHAT TO DO: Type your 10-digit TIN (Example: 1012345678). Your name will display automatically. Click on the 'Tax Head' dropdown menu and select the payment reason (Example: Select 'Income Tax', 'Stamp Duty', 'Motor Vehicle Registration', or 'Local Service Tax').\n\nWHAT'S NEXT: Move to Step 3 to specify the exact amount of money to pay."
            },
            {
                title: "Step 3: Enter Payment Amount & Select Mode of Payment",
                desc: "WHERE TO GO: Payment Details section.\n\nWHAT TO DO: Type the exact amount in Shillings into the 'Amount' box (Example: 100000 for UGX 100,000). Under 'Payment Mode', select how you plan to complete payment: choose 'Mobile Money' or 'Bank Teller'.\n\nWHAT'S NEXT: Move to Step 4 to generate your official 13-digit payment code."
            },
            {
                title: "Step 4: Click 'Submit' & Save Your 13-Digit PRN",
                desc: "WHERE TO GO: Screen output popup after clicking submit.\n\nWHAT TO DO: Click the green 'Submit' button. The portal displays a payment slip containing a 13-digit reference code called a PRN (Example: 2240001234567). Write down this 13-digit number or take a screenshot.\n\nWHAT'S NEXT: Move to Step 5 to execute the payment using your phone or bank."
            },
            {
                title: "Step 5: Execute Payment via Mobile Money or Bank Branch",
                desc: "WHERE TO GO: Mobile phone USSD or any commercial bank teller desk.\n\nWHAT TO DO (Mobile Money):\n• MTN: Dial *165# -> Select 'Pay Taxes / URA' -> Enter 13-digit PRN -> Confirm taxpayer name -> Enter PIN.\n• Airtel: Dial *185# -> Select 'Pay Taxes / URA' -> Enter 13-digit PRN -> Confirm details -> Enter PIN.\nWHAT TO DO (Bank): Walk into any commercial bank counter, present your 13-digit PRN, and hand over cash.\n\nWHAT'S NEXT: Move to Step 6 to verify that URA received your money."
            },
            {
                title: "Step 6: Receive Confirmation SMS & Check Tax Ledger",
                desc: "WHERE TO GO: Your phone SMS and www.ura.go.ug login dashboard.\n\nWHAT TO DO: Within 2 minutes, you will receive payment confirmation via SMS. Log into your URA account, go to 'My Tax Ledger', and verify that the payment status displays 'PAID'. Keep the SMS receipt for your records."
            }
        ]
    },
    {
        id: "ura-nil-returns",
        title: "How to File a URA Nil Return (Avoid Penalties)",
        category: "Civic & Tax",
        agency: "Uganda Revenue Authority (URA)",
        icon: "fa-file-signature",
        color: "bg-amber-500/10 text-amber-400 border-amber-500/30",
        cost: "100% Free",
        time: "5 Minutes",
        location: "URA Web Portal (www.ura.go.ug)",
        link: "https://ura.go.ug",
        image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/placeholder_ura_nil_returns",
        description: "If you have an active URA TIN but earned zero income or did not run business operations during a tax year/month, you MUST legally file a 'Nil Return' on the URA portal before the deadline (June 30th for annual income tax) to avoid automatic late-filing fines of UGX 200,000+ per return.",
        documents: [
            "Active 10-digit URA TIN",
            "URA Web Portal Password"
        ],
        steps: [
            {
                title: "Step 1: Log into the URA Portal Workspace",
                desc: "WHERE TO GO: Open www.ura.go.ug and click the red 'Login' button at the top right.\n\nWHAT TO DO: Enter your 10-digit TIN (Example: 1012345678) and password, solve the math captcha (e.g., 5 + 3 = 8), and click 'Login'.\n\nWHAT'S NEXT: Your e-Tax dashboard will open. Move to Step 2 to access returns."
            },
            {
                title: "Step 2: Navigate to Returns -> File Nil Return",
                desc: "WHERE TO GO: Main portal navigation bar inside your dashboard.\n\nWHAT TO DO: Click on 'Returns' on the top menu, then select 'File Nil Return' from the dropdown list.\n\nWHAT'S NEXT: Move to Step 3 to select the tax type and period."
            },
            {
                title: "Step 3: Select Tax Obligation & Return Period",
                desc: "WHERE TO GO: Nil Return input fields.\n\nWHAT TO DO: Under 'Tax Obligation', select 'Income Tax - Individual' (or 'VAT' if registered). Select the return period start and end date (e.g., From 01/07/2025 To 30/06/2026 for annual returns).\n\nWHAT'S NEXT: Move to Step 4 to submit your Nil return."
            },
            {
                title: "Step 4: Submit Return & Download Acknowledgement Receipt",
                desc: "WHERE TO GO: Submission prompt.\n\nWHAT TO DO: Click 'Submit'. The system will process your return and display an acknowledgement receipt confirming zero tax liability. Click 'Download Receipt' and save the PDF copy.\n\nWHAT'S NEXT: You are completely compliant! No fine will be charged to your TIN for that period."
            }
        ]
    },
    {
        id: "ura-password-reset",
        title: "How to Recover Lost TIN or Reset URA Password",
        category: "Civic & Tax",
        agency: "Uganda Revenue Authority (URA)",
        icon: "fa-key",
        color: "bg-red-500/10 text-red-400 border-red-500/30",
        cost: "100% Free",
        time: "3 - 5 Minutes",
        location: "URA Web Portal (www.ura.go.ug)",
        link: "https://ura.go.ug",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/placeholder_ura_reset",
        description: "Recover your forgotten 10-digit URA Tax Identification Number or reset your e-Tax portal account password instantly using your registered email address or National ID.",
        documents: [
            "National Identification Number (NIN)",
            "Registered mobile phone number or email inbox"
        ],
        steps: [
            {
                title: "Step 1: Access URA Login / Recovery Page",
                desc: "WHERE TO GO: Go to www.ura.go.ug -> Click 'Login' -> Click 'Forgot Password?' or 'Find My TIN'.\n\nWHAT TO DO: Choose whether you are recovering your TIN number or resetting your portal password.\n\nWHAT'S NEXT: Move to Step 2 to enter your registered details."
            },
            {
                title: "Step 2: Enter National ID (NIN) & Request OTP",
                desc: "WHERE TO GO: Identity recovery form.\n\nWHAT TO DO: Type your 14-character NIN (Example: CM90012345678A) and registered email or phone number. Click 'Send Reset Link / OTP'.\n\nWHAT'S NEXT: Move to Step 3 to verify identity and set a new password."
            },
            {
                title: "Step 3: Enter OTP & Set New Password",
                desc: "WHERE TO GO: Email inbox / SMS and portal reset screen.\n\nWHAT TO DO: Open the SMS/email sent by URA, copy the reset code, paste it into the portal prompt, and type a new secure password (must include letters, numbers, and a symbol like Ura#2026).\n\nWHAT'S NEXT: Click 'Save Password'. You can now log into your URA portal account immediately."
            }
        ]
    },
    {
        id: "ura-motor-vehicle-transfer",
        title: "How to Transfer Motor Vehicle / Motorcycle Ownership",
        category: "Transport & Travel",
        agency: "Uganda Revenue Authority (URA)",
        icon: "fa-car",
        color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
        cost: "Transfer Fees + Stamp Duty (1% of vehicle value, minimum UGX 30,000 PRN)",
        time: "1 to 3 Working Days",
        location: "URA Portal / Physical Vehicle Inspection Center",
        link: "https://ura.go.ug",
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/placeholder_ura_vehicle",
        description: "Legal transfer of motor vehicle or motorcycle (boda-boda) registration logbook from a seller to a buyer in Uganda using URA e-Tax portal transfer PINs.",
        documents: [
            "Original Vehicle Logbook",
            "Signed Transfer Form (Form 10) & Sales Agreement",
            "Active URA TINs for both Seller and Buyer",
            "Copies of National IDs for both parties"
        ],
        steps: [
            {
                title: "Step 1: Seller Initiates Transfer on URA Portal",
                desc: "WHERE TO GO: Seller logs into www.ura.go.ug -> Click 'Motor Vehicle' -> Select 'Initiate Ownership Transfer'.\n\nWHAT TO DO: Seller enters vehicle registration number (e.g., UBG 123X) and buyer's 10-digit TIN. System generates a Seller Transfer PIN.\n\nWHAT'S NEXT: Move to Step 2 for buyer acceptance."
            },
            {
                title: "Step 2: Buyer Accepts Transfer & Generates PRN",
                desc: "WHERE TO GO: Buyer logs into www.ura.go.ug -> Click 'Motor Vehicle' -> Select 'Accept Ownership Transfer'.\n\nWHAT TO DO: Buyer enters vehicle number and Seller Transfer PIN. Portal calculates statutory stamp duty (1%) and transfer fees, then generates a payment PRN.\n\nWHAT'S NEXT: Move to Step 3 to pay the PRN fees."
            },
            {
                title: "Step 3: Pay Transfer Fees & Submit Logbook for Printing",
                desc: "WHERE TO GO: Mobile Money (*165#/*185#) or Bank -> Physical URA Vehicle Registry Center.\n\nWHAT TO DO: Pay the PRN fee via Mobile Money or Bank. Take physical vehicle inspection report, original logbook, sales agreement, and payment receipts to the nearest URA vehicle licensing office (e.g., Nakawa / regional branch) to collect your new digital logbook.\n\nWHAT'S NEXT: Ownership transfer is 100% complete!"
            }
        ]
    },
    {
        id: "express-passport",
        title: "How to Apply for Ordinary or Express Passport Step by Step in Uganda",
        category: "Identification",
        agency: "Directorate of Citizenship & Immigration Control",
        icon: "fa-passport",
        color: "bg-blue-500/10 text-blue-400 border-blue-500/30",
        cost: "UGX 400,000 (Express) and UGX 250,000 Normal (Ordinary) Fee",
        time: "3 - 5 Working Days",
        location: "DCIC Headquarters, Kyambogo",
        link: "https://passports.go.ug",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/placeholder_passport",
        description: "Step-by-step procedure to acquire a machine-readable or e-passport through the Ministry of Internal Affairs online portal.",
        documents: [
            "National Identity Card (NIN)",
            "Recommendation letter from LC1 & GISO",
            "Birth Certificate / Baptism Card",
            "Bank Payment Receipt (PRN)"
        ],
        steps: [
            {
                title: "Step 1: Access the Official Passport Portal",
                link: "https://passports.go.ug",
                desc: "WHERE TO GO: Open your browser and navigate to www.passports.go.ug.\n\nWHAT TO DO: Verify you are on the Ministry of Internal Affairs Directorate of Citizenship & Immigration Control portal.\n\nWHAT'S NEXT: Click 'Apply for Passport' to start your application."
            },
            {
                title: "Step 2: Start New Application & Security Setup",
                desc: "WHAT TO DO:\n• Select 'Apply for Passport' and click 'Start New Application'.\n• Accept the terms and conditions and click 'START'.\n• Input your valid phone number with country code (e.g., +256700000001) and a valid email address.\n• Choose a security question, type your answer, solve the captcha, and click 'Save and Continue'."
            },
            {
                title: "Step 3: Choose Passport Type, Priority & Office",
                desc: "WHAT TO DO:\n• Passport Type: Select 'Ordinary' (for general citizens), 'Diplomatic', or 'Service/Official'.\n• Application Type: Select 'New Application', 'Renewal', 'Change of Details', 'Damaged', or 'Lost'.\n• Priority: Choose 'Ordinary' (UGX 250,000, 1–2 weeks) or 'Express' (UGX 400,000, 2–3 days).\n• Place of Submission & Collection: Select your preferred center (e.g., Central Office Kyambogo, Jinja, Gulu, Arua, Mbarara). Keeping submission and collection at the same office is recommended."
            },
            {
                title: "Step 4: Enter Personal & Origin Details",
                desc: "WHAT TO DO:\n• Enter your Surname, Given Name, 14-character NIN (e.g., CM980471001GHK), Gender, and Date of Birth exactly as printed on your National ID.\n• Fill in your Marital Status, Country & Place of Birth, and Occupation.\n• Residential & Origin Address: Select your District (matching your National ID), Tribe, and names of grandparents/descendants, then click 'Save and Continue'."
            },
            {
                title: "Step 5: Citizenship, Spouse & Parents Details",
                desc: "WHAT TO DO:\n• Citizenship: Select 'By Birth', 'By Registration', or 'By Naturalization'.\n• Spouse: Enter spouse names if married (or leave blank if single).\n• Parents Details: Enter full names, status (Alive/Deceased), NIN, birth place, district, and tribe for both your Father and Mother."
            },
            {
                title: "Step 6: Next of Kin & Recommender Details",
                desc: "WHAT TO DO:\n• Next of Kin: Provide full names, contact details, and NIN of a trusted relative or friend.\n• Recommender: Enter the details and NIN of a Ugandan citizen with a National ID who knows you (not an immediate family member)."
            },
            {
                title: "Step 7: Generate PRN, Pay Fees & Schedule Appointment",
                desc: "WHAT TO DO:\n• Review all entered details carefully and submit your application.\n• Generate your Payment Registration Number (PRN) and pay via Mobile Money or any commercial bank.\n• Return to www.passports.go.ug, click 'Schedule Appointment', enter your surname, date of birth, and application ID to book your biometric enrollment date at Kyambogo or your selected regional office."
            },
            {
                title: "Step 8: Biometric Enrollment & Passport Collection",
                desc: "WHAT TO DO:\n• Attend your appointment with your printed application form, PRN payment receipt, original National ID, and recommender ID copy.\n• Track status online at www.passports.go.ug under 'Check Status'. Once you receive an SMS notification that your passport is ready, visit your collection center with your National ID and receipt to pick it up."
            }
        ]
    },
    {
        id: "driving-permit",
        title: "New Driving Permit Application (UDLS / SafeDEAL)",
        category: "Transport & Travel",
        agency: "Uganda Driver Licensing System (UDLS) / Ministry of Works",
        icon: "fa-id-card",
        color: "bg-amber-500/10 text-amber-400 border-amber-500/30",
        cost: "UGX 220,000 - 415,000 (Based on validity selected: 1, 3, or 5 Years)",
        time: "30 Days (Mandatory learner window) + 1 Day (Express printing)",
        location: "Kyambogo / Regional Offices (Gulu, Mbarara, Mbale, Jinja, Arua, Fort Portal)",
        link: "https://udls.co.ug",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/placeholder_driving_permit",
        description: "How to transition from a medical check to a learner's permit, pass the IOV test, and obtain your full Ugandan driving license through authorized UDLS evaluation centers.",
        documents: [
            "National ID (NIN) or Valid Passport",
            "Medical Examination Form UCDP1 (signed & stamped by doctor)",
            "Proof of Enrollment from a licensed driving school",
            "Valid 3-Month Learner Driving Permit",
            "Certificate of Competence from IOV (stamped on permit)",
            "URA Payment Receipt (PRN)"
        ],
        steps: [
            {
                title: "Step 1: Undergo Eye Test & Medical Examination",
                desc: "WHAT TO DO: Download Medical Form UCDP1 from the UDLS portal, then visit an authorized medical doctor or optometrist to complete your vision and physical fitness evaluation.\n\nEXAMPLE: Go to an approved clinic, pass the eye chart test, and get the medical practitioner to sign and officially stamp your UCDP1 form (valid for up to 6 months)."
            },
            {
                title: "Step 2: Generate URA PRN & Get Learner's Permit",
                desc: "WHAT TO DO: Go to the URA portal (ura.go.ug), generate a Payment Registration Number (PRN) for a Learner Driving Permit (UGX 60,000 for Class B), pay via Mobile Money or bank, then visit UDLS for biometrics.\n\nEXAMPLE: Choose Ministry of Works - Learner Permit, pay via MTN/Airtel Mobile Money, then bring your stamped UCDP1 form and National ID to UDLS Kyambogo to capture your photo and fingerprints for your 3-month Learner's Permit."
            },
            {
                title: "Step 3: Train at Driving School & Book IOV Test",
                desc: "WHAT TO DO: Enroll in an accredited driving school to take practical driving and road sign lessons, then have the school book your official police test.\n\nEXAMPLE: Attend 2 to 4 weeks of driving practice with an instructor. Because individual applicants cannot self-book the IOV test, your driving school will officially register and schedule you for testing."
            },
            {
                title: "Step 4: Pass Inspectorate of Vehicles (IOV) Test",
                desc: "WHAT TO DO: Generate a URA PRN for the Inspectorate of Vehicles (IOV) test fee (UGX 25,000), pay it, and sit for the practical and road safety driving test with Uganda Police officers.\n\nEXAMPLE: Go to the IOV testing yard with your instructor and Learner's Permit. Once you pass the parking and road maneuvers, the officer will stamp your Learner's Permit with the Certificate of Competence (valid for 12 months)."
            },
            {
                title: "Step 5: Observe 30-Day Window & Pay Full Permit Fee",
                desc: "WHAT TO DO: Wait until at least 30 days have passed from the date your Learner's Permit was issued, then log onto the URA portal to generate a PRN for your full driving permit card based on desired validity and pay digitally.\n\nFEES: 1 Year = UGX 135,000 | 3 Years = UGX 230,000 | 5 Years = UGX 330,000 (Class B). Cash is not accepted at UDLS counters."
            },
            {
                title: "Step 6: Visit Licensing Office for Biometrics & Collect Permit",
                desc: "WHAT TO DO: Take your original IOV-stamped Learner's Permit, National ID, and URA receipt to Kyambogo or a regional branch for final biometric verification and smart card issuance.\n\nWHAT'S NEXT: Complete a fast fingerprint verification and collect your printed plastic Smart Driving Card within 30 to 60 minutes on the same day."
            }
        ]
    },
    {
        id: "ursb-business",
        title: "Registering a Company Name with URSB",
        category: "Business & Licensing",
        agency: "Uganda Registration Services Bureau",
        icon: "fa-briefcase",
        color: "bg-purple-500/10 text-purple-400 border-purple-500/30",
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
                title: "Step 1: Create URSB OBR Account",
                desc: "WHAT TO DO: Visit the URSB Online Business Registration portal (obr.ursb.go.ug) and register an individual or entity user account.\n\nEXAMPLE: Click 'Register Account', enter your email, phone number, and National ID details, and verify via SMS OTP."
            },
            {
                title: "Step 2: Name Reservation",
                desc: "WHAT TO DO: Submit up to three proposed company names in order of preference for an availability search and reservation.\n\nEXAMPLE: Enter 'Apex Technologies Ltd' as Choice 1, 'Apex Tech Uganda Ltd' as Choice 2, and pay the UGX 24,000 reservation fee via URA PRN. Wait 24 hours for URSB registrar approval."
            },
            {
                title: "Step 3: Fill Incorporation Particulars",
                desc: "WHAT TO DO: Fill out the online incorporation forms on the OBR portal detailing directors, shareholders, share capital, and office location.\n\nEXAMPLE: Enter director NIN numbers, assign share percentages, specify your physical address in Kampala, and upload signed Memorandum & Articles of Association."
            },
            {
                title: "Step 4: Pay Fees via URA PRN",
                desc: "WHAT TO DO: Generate a Payment Registration Number (PRN) for company registration fees (approx. UGX 100,000 + stamp duty based on share capital) and pay via bank or mobile money."
            },
            {
                title: "Step 5: Download Certificate of Incorporation",
                desc: "WHAT TO DO: Wait for the URSB registrar to review your uploaded documentation and issue your digital Certificate of Incorporation.\n\nWHAT'S NEXT: Once your application status turns to 'Approved', log into your OBR dashboard and download your official PDF Certificate of Incorporation."
            }
        ]
    },
    {
        id: "bus-travel",
        title: "Intercity Bus Booking & Travel Guide (Kampala - Upcountry)",
        category: "Transport & Travel",
        agency: "Private Coach Operators (YY, Link, Global, Gateway)",
        icon: "fa-bus",
        color: "bg-rose-500/10 text-rose-400 border-rose-500/30",
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
                title: "Step 1: Choose Bus Operator & Terminal",
                desc: "WHAT TO DO: Identify the bus company servicing your destination (e.g., Link Bus for Fort Portal/Kasese, YY Coaches for Mbale/Soroti/Lira, Global/Gateway for Mbarara/Kabale)."
            },
            {
                title: "Step 2: Book Ticket in Advance",
                desc: "WHAT TO DO: Visit the official terminal booking office (Namayiba, Kisenyi, or Usafi) or use official mobile money merchant codes provided by the bus company to secure your seat."
            },
            {
                title: "Step 3: Arrive Early for Boarding",
                desc: "WHAT TO DO: Report to the terminal at least 45 minutes before scheduled departure for ticket verification, luggage loading, and boarding."
            },
            {
                title: "Step 4: Secure Luggage Token",
                desc: "WHAT TO DO: Ensure all heavy baggage placed in the under-cabin boot is tagged and you receive a matching paper or SMS luggage token before departure."
            }
        ]
    },
    {
        id: "land-title",
        title: "Land Title Verification & Search at Ministry of Lands",
        category: "Civic & Tax",
        agency: "Ministry of Lands, Housing and Urban Development",
        icon: "fa-landmark",
        color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
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
                title: "Step 1: Access the National Lands Information System",
                desc: "WHAT TO DO: Log onto the MLHUD e-services portal or visit the Ministry Zonal Office (MZO) records desk covering the district where the land is located."
            },
            {
                title: "Step 2: Provide Plot & Block Details",
                desc: "WHAT TO DO: Input the accurate County, Block number, Plot number, and District as printed on the copy of the Certificate of Title."
            },
            {
                title: "Step 3: Pay Official Search Fee (UGX 10,000)",
                desc: "WHAT TO DO: Generate a URA payment reference (PRN) and pay the statutory UGX 10,000 search fee via Mobile Money or approved commercial bank."
            },
            {
                title: "Step 4: Review Official Search Report",
                desc: "WHAT TO DO: Examine the signed official search statement confirming the registered proprietor, acreage, and whether there are any mortgages, caveats, or court encumbrances."
            }
        ]
    }
];
