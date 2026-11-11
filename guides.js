// Step-by-step guides data referenced by script ID
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
                title: "Access the Passport Portal",
                link: "https://passports.go.ug",
                desc: "<span style=\"color: #1e40af; font-weight: 500;\">Navigate to the official passport application portal. Go to your browser, type www.passports.go.ug, or click the link to access the site. It will display the Ministry of Internal Affairs Directorate of Citizenship & Immigration Control portal.</span>"
            },
            {
                title: "Fill Out Application Form",
                desc: "Complete the online application form using these steps:<br><br>" +
                "• <span style=\"color: #FFD700; font-weight: 500;\">'STEP ONE'.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">Select 'Apply for Passport' and click 'Start New Application'.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">Accept the terms and conditions by clicking the 'Accept' box.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">Click 'START' and scroll down to fill in your personal information.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">Input your valid phone number starting with the country code (e.g., +256700000001).</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">Input a valid email address (e.g., nsambajohn@gmail.com).</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">Choose a security question from the dropdown and type your answer.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">Enter the verification text shown in the captcha image, then click 'Save and Continue'.</span><br><br>" +
                "• <span style=\"color: #FFD700; font-weight: 500;\">'STEP TWO'.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">After save and continue, the next step is the application.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">Here you are going to choose passport type, type of application, priority, place of submission and place of collection.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">Passport type: Click the space box below and choose the passport type accordingly, eg 'Ordinary - For general Ugandans, Diplomatic - For only Ugandan diplomats, And Service / Official - For high-level Government officials'.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">Type of application: Click the space box below and choose, eg 'New application for only those who never got passport before, Renewal for those who ever got but gets expired, Change of details for those who got passport before but they have information to change on their passports, Damaged for those when their passport got spoiled AND Lost for only who lost their passports'.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">Priority: Click the space box below and choose your priority. If you want ordinary, click ordinary; if you want express, click express based on period you want your passport. For ordinary UGX 250,000 (1-2 weeks), for express UGX 400,000 (2-3 days).</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">Place of submission: Click the space box and choose where easily you can go to make your passport, eg Jinja, central office Kampala, Arua, Gulu, choose one according to where you are.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">Place of collection: Click the space box below and choose the place where you will find your passport when it is done. Note: The place of submission you choose, I recommend you to be the place of collection for easy access.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">After filling that information, click save and continue.</span>"
            },
            {
                title: "THE APPLICANT",
                desc: "• <span style=\"color: #FFD700; font-weight: 500;\">'PERSONAL DETAILS'.</span><br>" +
                "HERE you are going to put your personal details as it is on your NATIONAL ID:<br><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">PUT a surname eg NANYONJO and a Given name eg CATHY.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">Put a NATIONAL ID NO (NIN) eg CM980471001GHK or CF980471001GHK.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">Choose your gender, eg male or female.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">PUT your date of birth as it is on your NATIONAL ID.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">Marital status, click the space bar and select eg single, married, divorced, etc, choose one.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">Country of BIRTH, put UGANDA, Place of birth, put a place you were born eg KAYUNGA, profession/occupation, CLICK in the space bar and select one eg EDUCATION.</span><br>" +
                "• <span style=\"color: #FFD700; font-weight: 500;\">'RESIDENTIAL ADDRESS'.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">CLICK the space bar and choose your country of residence eg UGANDA.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">DISTRICT, click the space box and choose your district eg kampala, kayunga, kamuli, etc NOTE: THE DISTRICT YOU CHOOSE MUST BE THE ONE ON YOUR NATIONAL ID.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">PLOT NO, you can put it if you know it eg 001, if you don't know, you can leave it.</span><br>" +
                "• <span style=\"color: #FFD700; font-weight: 500;\">DETAILS OF ORIGIN.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">HERE, on country select uganda, DISTRICT, select your district which is on your national ID, PLOT NO, put it eg 001, if you don't know, leave it.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">APPLICANT'S TRIBE, click in the space bar and select your tribe eg baamba, baganda, basoga, bagisu, choose one.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">Give details of your clan, I recommend you to leave it, but you can put it if you know it.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">Names of descendants, here you put your grandmother and grandfather's name eg Name of Descendant 1, NANTEZA, Descendant 2, KITAKA.</span><br>" +
                "• <span style=\"color: #1e40af; font-weight: 500;\">CLICK save and continue.</span>"
            },
            {
                title: "CITIZENSHIP",
                desc: "• <span style=\"color: #1e40af; font-weight: 500;\">Click in the space bar and choose BY BIRTH if you're born in Uganda or BY REGISTRATION if you want to become a Ugandan citizen or BY NATURALIZATION.</span>"
            },
            {
                title: "SPOUSE",
                desc: "HERE YOU PUT YOUR HUSBAND OR WIFE'S NAMES if you have, if you don't have, leave it."
            },
            {
                title: "PARENTS DETAILS",
                desc: "• <span style=\"color: #FFD700; font-weight: 500;\">'FATHER'S DETAILS'.</span><br>" +
                      "• <span style=\"color: #1e40af; font-weight: 500;\">HERE you are going to put your father's surname eg SENYONJO and given name eg FRED and on status, click in the space bar and choose, if Alive, put alive, if deceased, put deceased, put his date of birth, country of birth eg uganda, place of birth eg luweero, put his National ID NO (NIN), country of residence, put uganda, put a district on his National ID, Plot number, put it if you know it if you don't know, leave it, Nationality, click in the space bar and choose UGANDAN, Father's tribe, click in the space bar and choose your father's tribe eg Basoga.</span><br>" +
                      "• <span style=\"color: #FFD700; font-weight: 500;\">'MOTHER'S DETAILS'.</span><br>" +
                      "• <span style=\"color: #1e40af; font-weight: 500;\">HERE you are going to put your mother's information as it is on National ID After click SAVE AND CONTINUE .</span>"
            },
            {
                title: "NEXT OF KIN",
                desc: "• <span style=\"color: #1e40af; font-weight: 500;\">HERE you put the details of the person you trust as your next of kin, could be your brother or sister or your daughter or son, anyone you trust but must have a National ID.</span>"
            }, 
            {
                title: "RECOMMENDER",
                desc: "• <span style=\"color: #1e40af; font-weight: 500;\">Here you put information of the person who recommended you, his or her names on national ID, NIN no, every information. NOTE: IF YOU DON'T HAVE A RECOMMENDER, whatsapp me at +256762166117, I will recommend you.</span>"
            },
            {
                title: "REVIEW AND SUBMIT",
                desc: "• <span style=\"color: #1e40af; font-weight: 500;\">Here you can review your details before submitting them, after confirming everything is right, then you submit AFTER THE SYSTEM WILL GENERATE FOR YOU A PDF FOR YOUR INFORMATION then go to any printer and print that information NOTE IT SHOULD BE 6Pages .</span>"
            },
            {
                title: "PAYMENT",
                desc: "• <span style=\"color: #1e40af; font-weight: 500;\">Here you are going to go to make a payment over the bank or using your mobile money AFTER Printing your information Look the second page which has payment AND TAKE THAT COPY TO BANK AND MAKE PAYMENT OR copy the PRN on it and make payment using MOBILE MONEY.</span>"
            },
            {
                title: "SCHEDULE AN APPOINTMENT",
                desc: "• <span style=\"color: #1e40af; font-weight: 500;\">Here, after everything is done, payment, details, you come back to the browser and type passports.go.ug, then click on schedule appointment, they will ask you to put some information eg your surname, date of birth and your passport ID eg W003543275, then submit, after some time you will receive a message on your phone telling you when to go for passport processing.</span>"
            },
            {
                title: "CHECK APPLICATION STATUS",
                desc: "• <span style=\"color: #1e40af; font-weight: 500;\">Here you check if your passport is ready to pick. Go to any browser and type passports.go.ug, click check status, put your surname, date of birth and passport number eg W003543275, if it's ready, you will find ready, if not yet, you will find pending.</span>"
            },
            {
                title: "CORRECTION",
                desc: "• <span style=\"color: #1e40af; font-weight: 500;\">Here you will get a message on your phone saying your passport is ready, go to the place of collection you registered eg central office Kampala Kyambogo, for your passport, time and date.</span><br>" +
                      "• <span style=\"color: #1e40af; font-weight: 500;\">FOR MORE VIDEO EXPLANATION, WATCH THE VIDEO ABOVE, FOR SUPPORT, whatsapp +256762166117.</span>"
            }
        ]
    },
    {
    id: "driving-permit-complete-suite",
    title: "Uganda Driving Permit System - Complete Services Guide",
    category: "Transport & Travel",
    agency: "Ministry of Works & Transport (Uganda Driver Licensing System - UDLS)",
    icon: "fa-id-card",
    color: "bg-amber-50 text-amber-600 border-amber-200",
    cost: "Varies by transaction (UGX 25,000 to UGX 330,000+)",
    time: "Same-day card issuance (1 to 2 hours at Kyambogo / Regional UDLS centers)",
    location: "Kyambogo (Main Head Office) / Regional Issuance Centers (Gulu, Arua, Mbale, Jinja, Mbarara, Fort Portal, Hoima)",
    link: "https://services.works.go.ug",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    videoEmbed: "https://www.youtube.com/embed/usMF93DdE-Q",
    description: "Complete unified code object containing step-by-step guides, payment instructions, class eligibility rules, customer support contacts, and exact URA/UDLS fee breakdowns for all driving permit services in Uganda.",
    
    // 1. CUSTOMER SUPPORT & ASSISTANCE CONTACTS
    supportContacts: {
        tollFreeHelpline: "0800 211 002",
        officialEmail: "info@udls.co.ug",
        officialPortal: "https://udls.co.ug",
        eservicesPortal: "https://services.works.go.ug"
    },

    // 2. OFFICIAL FEE STRUCTURE & PRICING
    feeStructure: {
        learnerPermit: {
            standardClasses: 60000, // Class B, C, D, E etc. (3 Months validity)
            motorcycleOnly: 40000   // Class A1, A, B1 only
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
            lapsedRule: "Permits expired >2 years are classified as lapsed and require a mandatory IOV practical retest (UGX 25,000) prior to renewal"
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

    // 3. VEHICLE CLASS ELIGIBILITY MATRIX
    vehicleClasses: [
        { class: "A1", category: "Light Motorcycles (up to 125cc / 11kW)", minAge: 18, prerequisites: "None" },
        { class: "A", category: "Heavy Motorcycles (over 125cc / 11kW)", minAge: 18, prerequisites: "None" },
        { class: "B1", category: "Tricycles and Quadricycles (Tuk-tuks)", minAge: 18, prerequisites: "None" },
        { class: "B", category: "Passenger Cars & Light Goods (up to 3,500kg, max 8 passengers)", minAge: 18, prerequisites: "None" },
        { class: "BE", category: "Class B Vehicle towing heavy trailer (> 750kg)", minAge: 19, prerequisites: "Hold Class B" },
        { class: "C1", category: "Medium Goods Vehicles (3,500kg to 7,500kg)", minAge: 21, prerequisites: "Hold Class B for at least 2 years" },
        { class: "C", category: "Heavy Commercial Goods Vehicles / Heavy Trucks (> 7,500kg)", minAge: 25, prerequisites: "Hold Class C1" },
        { class: "CE", category: "Heavy Goods Vehicle with Heavy Trailer (Articulated Trucks)", minAge: 25, prerequisites: "Hold Class C" },
        { class: "D1", category: "Light Passenger Vehicles / Minibuses (9 to 16 passenger seats)", minAge: 21, prerequisites: "Hold Class B for at least 2 years" },
        { class: "D", category: "Heavy Passenger Vehicles / Coasters & Buses (over 16 seats)", minAge: 25, prerequisites: "Hold Class D1" },
        { class: "DE", category: "Heavy Passenger Bus towing trailer", minAge: 25, prerequisites: "Hold Class D" },
        { class: "F", category: "Engineering Plant & Heavy Machinery (Graders, Bulldozers, Excavators)", minAge: 18, prerequisites: "Specialized Training" },
        { class: "G", category: "Agricultural & Industrial Tractors", minAge: 18, prerequisites: "None" }
    ],

    // 4. PAYMENT PORTAL INSTRUCTIONS
    paymentGuide: {
        onlinePortal: "services.works.go.ug or www.ura.go.ug",
        mobileMoneyChannels: {
            mtnCode: "*165# -> Option 4 (Payments) -> Option 7 (URA Fees) -> Enter PRN",
            airtelCode: "*185# -> Option 4 (Pay Bills) -> Option 7 (URA Fees) -> Enter PRN"
        },
        overTheCounter: "Any URA-integrated commercial bank (Stanbic, Centenary, Absa, DFCU, Equity, etc.)"
    },

    // 5. STEP-BY-STEP SERVICE GUIDES
    services: [
        {
            serviceId: "new-permit",
            serviceName: "1. New Driving Permit Application",
            totalCost: "UGX 220,000 - 415,000 (Learner + IOV Test + Main Permit + Driving School)",
            requiredDocuments: [
                "National ID / NIN (Ugandans), Valid Passport + Visa/Work Permit (Foreigners), or Refugee Identity Card",
                "Medical Examination Form UCDP1 (Stamped by registered Doctor/Optometrist)",
                "Driving School Training Completion Certificate",
                "Learner Driving Permit (Provisional Card)",
                "IOV Police Certificate of Competence",
                "Paid URA Receipts / PRNs"
            ],
            steps: [
                {
                    stepNumber: 1,
                    title: "Apply & Obtain Learner Permit First",
                    desc: "Do this: Log onto services.works.go.ug or URA portal, generate PRN for 'Learner Permit' (UGX 60,000 or UGX 40,000 for motorcycle), and pay via mobile money or bank. After this: Report to UDLS with your National ID to capture biometrics and collect your physical Learner Permit."
                },
                {
                    stepNumber: 2,
                    title: "Undergo Medical Examination",
                    desc: "Do this: Download Medical Form UCDP1 from UDLS portal and take it to a registered medical doctor or optometrist. After this: Doctor conducts physical and visual eye checks, then signs and stamps the form."
                },
                {
                    stepNumber: 3,
                    title: "Enroll in a Licensed Driving School",
                    desc: "Do this: Present your Learner Permit and Medical Form to a certified driving school for theory and practical lessons. After this: Complete driving lessons to receive your official Driving School Completion Certificate."
                },
                {
                    stepNumber: 4,
                    title: "Pay & Pass IOV Driving Test",
                    desc: "Do this: Generate URA PRN for Inspectorate of Vehicles (IOV) Test Fee (UGX 25,000 per class), pay via mobile money (*165# / *185#) or bank, and report to IOV center with your driving instructor. After this: Pass the practical driving test to have your police Certificate of Competence transmitted to UDLS."
                },
                {
                    stepNumber: 5,
                    title: "Apply Online & Upload Scanned Documents",
                    desc: "Do this: Log into udls.co.ug / services.works.go.ug, fill in personal details, select 'Get a New Driver License', and upload clear PDF/JPG scans (under 5MB each) of National ID/Passport, stamped Medical Form, IOV Certificate, and Driving School Certificate. After this: System verifies document completeness."
                },
                {
                    stepNumber: 6,
                    title: "Generate URA PRN & Pay Full Permit Fee",
                    desc: "Do this: On the portal, select permit duration (1 Year: UGX 135,000 | 3 Years: UGX 230,000 | 5 Years: UGX 330,000), generate PRN, and clear payment via bank or Mobile Money. After this: Print payment confirmation receipt."
                },
                {
                    stepNumber: 7,
                    title: "UDLS Office Biometrics Capture",
                    desc: "Do this: Walk into Kyambogo or regional UDLS office carrying your original National ID, stamped Medical Form, IOV certificate, Learner Permit, and paid receipts. After this: UDLS staff scan physical files and capture facial photo, fingerprints, and digital signature."
                },
                {
                    stepNumber: 8,
                    title: "Wait & Collect Smart Permit Card",
                    desc: "Do this: Relax in the waiting lounge. After this: Collect your official physical Ugandan Driving Permit card on the same day (usually ready within 1 to 2 hours)."
                }
            ]
        },
        {
            serviceId: "permit-renewal",
            serviceName: "2. Driving Permit Renewal (Expired or Lapsed Permit)",
            totalCost: "UGX 130,000 - 335,000 (Based on validity, vehicle class & lapse status)",
            requiredDocuments: [
                "Original Expired Driving Permit Card",
                "National ID (NIN) / Passport / Refugee ID",
                "Stamped Medical Form UCDP1 (Mandatory if over 40 years old or if permit is lapsed)",
                "Paid URA Renewal Receipt (PRN)",
                "IOV Certificate of Competence (Only required if permit has been expired >2 years)"
            ],
            steps: [
                {
                    stepNumber: 1,
                    title: "Check Permit Status & Medical Check",
                    desc: "Do this: If your permit has been expired for over 2 years, pay UGX 25,000 PRN for IOV retest and pass practical exam first. Complete Medical Form UCDP1 with a doctor if required."
                },
                {
                    stepNumber: 2,
                    title: "Apply Online & Upload Supporting Documents",
                    desc: "Do this: Log into udls.co.ug, select 'Renewing a Driver License', enter NIN or permit number, and upload old permit scan, National ID, medical form, and IOV retest certificate (if lapsed)."
                },
                {
                    stepNumber: 3,
                    title: "Pay Renewal PRN Fee",
                    desc: "Do this: Select renewal duration (1, 3, or 5 years), generate PRN, and pay via bank or Mobile Money (*165#/*185#)."
                },
                {
                    stepNumber: 4,
                    title: "Collect Renewed Card at UDLS",
                    desc: "Do this: Present expired card, medical form, ID, and paid PRN receipt to any UDLS center. After this: Re-verify biometrics and collect your new renewed card on the spot."
                }
            ]
        },
        {
            serviceId: "duplicate-permit",
            serviceName: "3. Duplicate Permit (Lost, Stolen, or Defaced Card)",
            totalCost: "UGX 121,000 URA Fee + Police Abstract & Gazette Notice Expenses",
            requiredDocuments: [
                "Official Police Loss Report / Abstract",
                "Newspaper Gazette Loss Announcement (published at least 2 weeks prior)",
                "National ID / Passport / Refugee ID",
                "Defaced/Damaged card (if replacing damaged card)"
            ],
            steps: [
                {
                    stepNumber: 1,
                    title: "Obtain Police Report & Publish Notice",
                    desc: "Do this: File loss report at police station for a Police Abstract, then publish a public loss notification in a recognized national newspaper."
                },
                {
                    stepNumber: 2,
                    title: "Pay Duplicate Permit PRN",
                    desc: "Do this: Log into services.works.go.ug / URA portal, select 'Duplicate Driving Permit', generate PRN for UGX 121,000, and clear payment."
                },
                {
                    stepNumber: 3,
                    title: "Biometrics & Replacement Collection",
                    desc: "Do this: Take Police Abstract, newspaper cutting, ID, and paid PRN receipt to UDLS office. After this: Verification team checks system database and re-issues your duplicate smart card."
                }
            ]
        },
        {
            serviceId: "class-extension",
            serviceName: "4. Class Extension (Adding New Vehicle Category)",
            totalCost: "UGX 146,000 - 181,000 (Extension Fee + IOV Test Fee)",
            requiredDocuments: [
                "Valid Existing Ugandan Driving Permit",
                "Driving School Certificate for target vehicle class",
                "Police IOV Certificate of Competence for new class",
                "Stamped Medical Form UCDP1 (Mandatory for medium/heavy commercial & passenger classes)"
            ],
            steps: [
                {
                    stepNumber: 1,
                    title: "Train & Pass IOV Practical Test",
                    desc: "Do this: Complete driving lessons for target class (e.g., C1, C, D1, D, E), pay UGX 25,000 IOV test PRN, and pass police driving exam."
                },
                {
                    stepNumber: 2,
                    title: "Pay Class Extension Fee",
                    desc: "Do this: Access services.works.go.ug, select 'Class Extension', enter current permit number, generate PRN (UGX 121,000 standard or UGX 60,000 motorcycle), and pay."
                },
                {
                    stepNumber: 3,
                    title: "Card Update at UDLS",
                    desc: "Do this: Hand in current driving permit card along with IOV certificate, medical form, and paid receipt at UDLS center. After this: Receive updated permit printing all your verified driving classes."
                }
            ]
        },
        {
            serviceId: "foreign-conversion",
            serviceName: "5. Foreign License Conversion (Foreign Exchange)",
            totalCost: "UGX 135,000 - 330,000 (Based on converted validity duration)",
            requiredDocuments: [
                "Valid Original Foreign Driving License",
                "Certified English Translation (if foreign license is not in English)",
                "Valid Original Passport + Valid Resident Visa / Work Permit / Alien ID (minimum 1 year validity)",
                "Stamped Medical Examination Form UCDP1"
            ],
            steps: [
                {
                    stepNumber: 1,
                    title: "Medical Checkup & Verification",
                    desc: "Do this: Get physical/visual health checked on Form UCDP1 by a registered doctor and ensure work visa/passport details match foreign license."
                },
                {
                    stepNumber: 2,
                    title: "Pay Foreign Exchange PRN",
                    desc: "Do this: Select 'Foreign License Conversion' on services.works.go.ug or URA portal, pick validity (1 Yr: UGX 135,000 | 3 Yrs: UGX 230,000 | 5 Yrs: UGX 330,000), generate PRN, and pay."
                },
                {
                    stepNumber: 3,
                    title: "Biometrics & Permit Conversion at UDLS",
                    desc: "Do this: Report to UDLS office with original foreign license, passport, visa/work permit, medical form, and paid PRN receipt. After this: Capture biometrics and receive equivalent Ugandan Driving Permit card."
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
                desc: "Pay name reservation and registration fees through bank or mobile money using the generated PRN."
            },
            {
                title: "Download Certificate",
                desc: "Once reviewed and approved by registrars, download your official Certificate of Incorporation."
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
                desc: "Identify the bus company servicing your destination (e.g., Link for Fort Portal, YY for Eastern routes)."
            },
            {
                title: "Book Ticket in Advance",
                desc: "Visit the terminal booking office or use mobile money USSD codes provided by the bus company to secure seats."
            },
            {
                title: "Arrive Early for Boarding",
                desc: "Report to the terminal at least 45 minutes before departure for luggage loading and seating."
            },
            {
                title: "Secure Luggage Token",
                desc: "Ensure all heavy baggage is tagged and you receive a corresponding luggage token before boarding."
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
                desc: "Log onto the MLHUD e-services portal or visit the ministry records office desk."
            },
            {
                title: "Provide Plot Details",
                desc: "Input accurate Block number, Plot number, and District where the land is situated."
            },
            {
                title: "Pay Official Search Fee",
                desc: "Generate payment reference and pay UGX 10,000 via mobile money or approved bank."
            },
            {
                title: "Review Search Report",
                desc: "Examine the official search printout confirming rightful ownership, encumbrances, and caveats."
            }
        ]
    }
];
