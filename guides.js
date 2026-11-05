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
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/placeholder_ura_tin",
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
                desc: "Go to the official URA e-services portal and click on 'Register for TIN'.",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
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
                desc: "• <span style=\"color: #1e40af; font-weight: 500;\">Click in the space bar and choose BY BIRTH of you're born in uganda or BY REGISTRATION if you want to to become a Ugandan citizen or BY NEUTRALIZATION. </span>"
            },
            {
                title: "SPOUSE",
                desc: "Generate a Payment Reference Number (PRN) and pay via mobile money or approved commercial banks."
            },
            {
                title: "PARENTS DETAILS",
                desc: "Generate a Payment Reference Number (PRN) and pay via mobile money or approved commercial banks."
            },
            {
                title: "NEXT OF KIN",
                desc: "Generate a Payment Reference Number (PRN) and pay via mobile money or approved commercial banks."
            }, 
            {
                title: "RECOMMENDER",
                desc: "Generate a Payment Reference Number (PRN) and pay via mobile money or approved commercial banks."
            },
            {
                title: "PAYMENT",
                desc: "Generate a Payment Reference Number (PRN) and pay via mobile money or approved commercial banks."
            },
            {
                title: "REVIEW AND SUBMIT",
                desc: "Generate a Payment Reference Number (PRN) and pay via mobile money or approved commercial banks."
            },
            {
                title: "SCHEDULE AN APPOINTMENT",
                desc: "Generate a Payment Reference Number (PRN) and pay via mobile money or approved commercial banks."
            },
            {
                title: "CHECK APPLICATION STATUS",
                desc: "Generate a Payment Reference Number (PRN) and pay via mobile money or approved commercial banks."
            },
            {
                title: "CORRECTION",
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
        location: "Kyambogo / Regional Offices",
        link: "https://www.udps.go.ug",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/placeholder_driving_permit",
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
