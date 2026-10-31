// Step-by-step guides data referenced by script ID
const guidesData = [
    {
        id: "ura-tin",
        title: "How to Register for a URA Tax TIN",
        category: "Civic & Tax",
        agency: "Uganda Revenue Authority (URA)",
        icon: "fa-file-invoice-dollar",
        color: "bg-emerald-50 text-emerald-600 border-emerald-200",
        cost: "Free (Online)",
        time: "1 - 2 Hours",
        location: "URA Portal / Any URA Station",
        link: "https://ura.go.ug",
        description: "A Tax Identification Number (TIN) is mandatory for employment, opening bank accounts, property purchase, and business operations in Uganda.",
        documents: [
            "National ID (NIN) or Alien Identification Card",
            "Active Personal Phone Number",
            "Active Personal Email Address",
            "Physical Residential Address Details"
        ],
        steps: [
            {
                title: "Visit the Official URA Web Portal",
                desc: "Go to the official URA e-services portal and click on 'Register for TIN'."
            },
            {
                title: "Select Taxpayer Type",
                desc: "Choose 'Individual' for personal TIN registration or 'Non-Individual' for corporate/company registration."
            },
            {
                title: "Enter NIN & Personal Details",
                desc: "Input your National Identification Number (NIN). The system will auto-populate verified NIRA data."
            },
            {
                title: "Complete Contact Information",
                desc: "Provide your working mobile number and email address where verification OTPs will be sent."
            },
            {
                title: "Submit & Print TIN Certificate",
                desc: "Verify all entries and submit. Download and print your generated Tax Identification Number (TIN) certificate PDF."
            }
        ]
    },
    {
        id: "express-passport",
        title: "Applying for an Express Ugandan Passport",
         title: "How to apply for ordinary or express passport step by step in uganda",
        category: "Identification",
        agency: "Directorate of Citizenship & Immigration Control",
        icon: "fa-passport",
        color: "bg-blue-50 text-blue-600 border-blue-200",
        cost: "UGX 400,000 (Ordinary) + Express Fee",
        time: "3 - 5 Working Days",
        location: "DCIC Headquarters, Kyambogo",
        link: "https://passports.go.ug",
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
                desc: "Navigate to the official passport application portal ."
                      "Go to any browser, type : www.passports.go.ug."
                      "OR click the link above :visit portal; to access the official site."
                      "link: "https://passports.go.ug."
                    
            },
            {
                title: "Fill Out Application Form",
                desc: "Select 'Express Application', fill in your biographical data, and upload required passport-size photos."
            },
            {
                title: "Generate Payment PRN",
                desc: "Generate a Payment Reference Number (PRN) and pay via mobile money or approved commercial banks."
            },
            {
                title: "Book Appointment & Biometrics",
                desc: "Schedule your appointment date, print the application summary form, and visit Kyambogo for fingerprinting."
            },
            {
                title: "Collection",
                desc: "Receive an SMS notification when your express passport is ready for pickup at Kyambogo."
            }
        ]
    },
    {
        id: "driving-permit",
        title: "New Driving Permit Application (UDPS / SafeDEAL)",
        category: "Transport & Travel",
        agency: "Uganda Driving Permit System (Face Technologies)",
        icon: "fa-id-card",
        color: "bg-amber-50 text-amber-600 border-amber-200",
        cost: "UGX 130,000 - 250,000 (Based on Class)",
        time: "1 Working Day (Express)",
        location: "Kymantindeke / Regional Offices",
        link: "https://www.udps.go.ug",
        description: "How to transition from a learner's permit or renew your full Ugandan driving license through authorized evaluation centers.",
        documents: [
            "Valid Learner Driving Permit",
            "Certificate of Competence from IOV",
            "National ID (NIN)",
            "URA Payment Receipt (PRN)"
        ],
        steps: [
            {
                title: "Undergo Eye Test & Medical",
                desc: "Visit an authorized medical optometrist and doctor to clear your fitness for driving."
            },
            {
                title: "Pass Inspectorate of Vehicles (IOV) Test",
                desc: "Book and pass the practical driving test conducted by the Uganda Police IOV."
            },
            {
                title: "Generate URA PRN Payment",
                desc: "Log onto URA portal, generate payment registration for driving permit fees according to your vehicle classes."
            },
            {
                title: "Visit Licensing Office for Biometrics",
                desc: "Take your paperwork and payment slips to Kyambogo or regional issuance centers for photo & fingerprint capture."
            },
            {
                title: "Print & Collect Permit",
                desc: "Wait for processing and receive your smart driving card on the same day."
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
        description: "Protect yourself from land fraud by conducting an official official land search and title verification before purchasing property.",
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
