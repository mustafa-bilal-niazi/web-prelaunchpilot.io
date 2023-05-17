import React from 'react';
import {useState,useEffect} from 'react';

export default function TryFree(){
  

    const set1 : string[] =[
        'Advisory and Financial Services',
        'Technology',
        'Online Retail',
        'Specialist Engineering, Infrastructure and Contractors',
        'Consumer Goods and Services',
        'Industrial Machinery, Gas and Chemicals',
        'Life Sciences',
        'Accommodation and Food Services',
        'Administration, Business Support and Waste Management Services',
        'Educational Services',
        'Arts, Entertainment and Recreation',
        'Wholesale Trade',
        'Retail Trade',
        'Healthcare and Social Assistance',
        'Transportation and Warehousing',
        'Construction',
        'Professional, Scientific and Technical Services',
        'Manufacturing'
    ]

    type Services_list = {
      [key: string]: string[];
    };

    const services_list: Services_list = {
      'productValue': [
        "Functional value ",
        "Experiential value ",
        "Social Value ",
        "Economic value "],
      'productSaleRegion': ['Local','Regional','National','Global'],
      'productType' : ['Product', 'Service','Subscription'],
      'knowSegment': ['Yes', 'No'],
      'Advisory and Financial Services':[
        'AD&D Insurance', 'Agricultural Banks', 'Agricultural Insurance', 'Aircraft Rental Services', 
        'Airline Catering Services', 'Armored Transportation Services', 'Audio & Visual Equipment Rental',
        'Audit Services', 'Auto Extended Warranty Providers', 'Automobile Insurance', 
        'Background Check Services', 'Bankruptcy Lawyers & Attorneys', 'Batting Cages', 
        'Benefit Administration Services', 'Boat Rentals', 'Bond Management', 'Business Brokers', 
        'Business Concierge Services', 'Business Financing', 'Business Information Resellers', 
        'Business Insurance', 'Business Lawyers & Attorneys', 'Business Process Outsourcing Services', 
        'Business Valuation Firms', 'Card Reward Program Services', 'Casting Agencies', 
        'Check Cashing & Payday Loan Services', 'Child Adoption Agencies', 'Claims Adjusting', 
        'Commercial Aircraft Leasing', 'Commercial Auto Insurance', 'Commercial Construction Insurance', 
        'Company Research Services', 'Construction Machinery Rentals', 'Consumer Lawyers & Attorneys', 
        'Contractors\' Insurance', 'Corporate Law Firms', 'Credit Repair Services', 
        'Criminal Lawyers & Attorneys', 'Cryptocurrency Exchanges', 'Customer Care Centers', 
        'Customs Brokers', 'Cyber Liability Insurance', 'Data Center Colocation Services', 
        'Debt Relief Services', 'Dental Insurance', 'Disability Insurance', 
        'Distribution and Logistics Consulting Services', 'Document Management Services', 
        'eDiscovery Consulting Services', 'eDiscovery Software Publishing', 'eTrading Software Developers', 
        'Education Consultants', 'Employee Assistance Program Services', 'Employee Relocation Services', 
        'Employment Law Firms', 'Energy & Utility Consulting Services', 'Entertainment Insurance', 
        'Entertainment Lawyers & Attorneys', 'Estate Lawyers & Attorneys', 'Estate Liquidation Services', 
        'Executive Search Recruiters', 'Expert Networks', 'Expert Witness Consulting Services', 
        'Family Law & Divorce Lawyers & Attorneys', 'Financial Data Service Providers', 'Fleet Car Leasing', 
        'Foreclosure Lawyers & Attorneys', 'Foreign Currency Exchange Services', 'Forensic Accounting Services', 
        'Franchise Resale Brokers & Consultants', 'Group Purchasing Organizations', 'Health & Medical Reinsurance', 
        'Healthcare Consultants', 'Healthcare Lawyers & Attorneys', 'Hedge Funds', 'High Frequency Trading', 
        'HMO Providers', 'Home Furniture Rental', 'Home Medical Equipment Rentals', 'Home Warranty Providers', 
        'Homeowners\' Insurance', 'Identity Theft Insurance', 'Immigration Lawyers & Attorneys', 
        'Installment Lenders', 'Insurance Claims Processing Software', 'Insurance Lawyers & Attorneys', 
        'Intermodal Container Leasing', 'International Law Firms', 'International Trade Financing', 
        'Invoice Factoring', 'Jet Ski Rental', 'Kayak Rental', 'Labor Relations Lawyers & Attorneys', 
        'Libraries & Archives', 'Long Term Care Insurance', 'Marketing Consultants', 'Mediation Services', 
        'Medical Billing Services', 'Medical Claims Processing Services', 'Medical Equipment Rental', 
        'Medical Group Practice Management', 'Medical Malpractice Insurance', 'Medical Patient Financing', 
        'Merchant Banking Services', 'Model Agencies', 'Money Transferring Services', 
        'Motion Picture & Theatrical Equipment Rental', 'Mutual Fund Management', 
        'Nondestructive Testing Services', 'Office Furniture Rental', 'Oil, Gas & Mining Consultants', 'Online Insurance Brokers',  
        'Online Legal Services',  'Online Mortgage Brokers',  'Online Payment Processors',  'Online Stock Brokerages',  
        'Pallet & Skid Rental',  'Party Bus Rentals',  'Pawn Shops',  'PeertoPeer Lending Platforms',  'Pension Fund Management',  
        'Personal Finance & Money Management Software Developers',  'Personal Injury Lawyers & Attorneys',  
        'Pharmaceutical Contract Management Consulting',  'Pharmaceuticals Packing & Labeling Services',  'Portable Toilet Rental',
        'Prepaid Credit & Debit Card Providers',  'Private Banking Services',  'Product Returns Management Services',  
        'Product Warranty Insurance',  'Professional Organizations',  'Property & Casualty Reinsurance',  'Public Opinion Research',
        'Railroad Car Rental & Leasing',  'Real Estate Law Firms',  'Regional Banks',  "Renters' Insurance",  'Repossession Services',
        'Reverse Mortgages Providers',  'Risk Management, Insurance Advisory & Consulting',  'RV & Camper Van Rental',  
        'Serviced Office Leasing',  'Settlement Funding Companies',  'Shared Office Spaces',  'Stenographic Services',  
        'Stock Price & Rating Research',  'Subprime Auto Loans',  'Supply Chain Management Services',  'Tax Lawyers and Attorneys',
        'ThirdParty Data Entry Services',  'ThirdParty Logistics',  'Title Insurance',  'Trademark & Patent Lawyers & Attorneys',
        'Transcription Services',  'Travel Insurance',  'Trial Consultants',  'Typing Services',  'Vision Insurance',  
        'Weather Forecasting Services',  'Workers\' Compensation Insurance'],
      'Technology':[
        '3D Printer Manufacturing', '3D Printing & Rapid Prototyping Services', 
        'Activated Carbon Manufacturing', 'Adult & Pornographic Websites', 'Air Purification Equipment Manufacturing', 
        'ATM Manufacturing', 'Audio and Visual Equipment Repair Services', 'Augmented Reality Software', 
        'Bare Printed Circuit Board Manufacturing', 'Battery Recycling', 'Binoculars Manufacturing', 'Biomass Power', 
        'Biometrics Scan Software', 'Bioplastics Manufacturing', 'Building Lighting Control System Manufacturing', 
        'Business Intelligence Software', 'CAD Software Developers', 'Capacitor Manufacturing', 'Cell Phone Recycling', 
        'Chatbot Software', 'Cloud Security Software', 'Collaboration & Project Management Software', 'Colocation Facilities', 
        'ComputerAided Design Software Developers', 'Conferencing Service Providers', 'Consumer Drone Manufacturing', 
        'Contact Tracing Systems', 'Contactless Payment Systems', 'Cooking Oil Recycling', 'Court Reporting Services',
        'CRM System Providers', 'Cryotherapy', 'Dark Fiber Network Operators', 'Data Backup Software', 'Data Loss Prevention Software',
        'Data Recovery Services', 'Digital Advertising Agencies', 'Digital Forensic Services', 'Document Digitization Services', 
        'EBook Publishing', 'Ecigarette Manufacturing', 'Educational Software', 'Electric Vehicle Charging Stations', 
        'Electricity & Signal Testing Instrument Manufacturing', 'Electronic Access Control System Manufacturing', 
        'Electronic Article Surveillance Product Manufacturing', 'Electronic Design Automation Software Developers', 
        'Electronic Goods Recycling', 'Endpoint Security Software', 'Enterprise Resource Planning Software Developers', 
        'Ethanol Fuel Production', 'ETL & ELT Data Management Software', 'Facial Recognition Software', 'Fantasy Sports Services',
        'FiberOptic Cable Manufacturing', 'Field Service Management Software', 'Film Animation Services', 'Fire & Smoke Alarm Manufacturing',
        'Fleet Telematics Systems', 'Flyboarding Equipment Manufacturing', 'Fraud Detection Software Developers', 
        'Gas Detection Device Manufacturing', 'Geothermal Electricity Plant Operation', 'Headphone Manufacturing', 
        'Home Automation Services', 'HR & Payroll Software', 'Hybrid & Electric Vehicle Manufacturing', 'Identity Management Software', 
        'Identity Theft Protection Services', 'Internet Hosting Services', 'Internet Radio Broadcasting', 'IT Security Consulting',
        'Language Learning Software Developers', 'Learning Management Software', 'LED Manufacturing', 'Lithium Battery Manufacturing',
        'Metal Detector Manufacturing', 'Microprocessor Chip Manufacturing', 'Microscope Manufacturing', 'Music Streaming Services',
        'Night Vision Equipment Manufacturing', 'Nonferrous Metal Recycling', 'Online Payment Processing Software Developers', 
        'Online Recruitment Sites', 'Online Survey Software', 'Optical Character Recognition Software', 
        'Optical CharacterRecognition Software Developers', 'Ordnance Manufacturing', 'Oscilloscope Manufacturing', 
        'Point of Sale Software Developers', 'Power Circuit Breaker Manufacturing', 'Precision Agriculture Systems & Services',
        'Pressure Sensor Manufacturing', 'RealTime Traffic Information Providers', 'Respiratory Protection Equipment Manufacturing',
        'Safe & Vault Manufacturing', 'Scale & Balance Manufacturing', 'Scrap Metal Recycling',
        'SeismicMonitoring Equipment Manufacturing', 'SEO & Internet Marketing Consultants', 'Smart Lighting Manufacturing', 
        'Smart Meter Manufacturing', 'Smart Speaker Manufacturing', 'Smart Thermostat Manufacturing', 'Smartphone App Developers', 
        'Social Network Game Development', 'Social Networking Sites', 'Software Testing Services', 'Solar Farm Developers', 
        'Solar Panel Installation', 'Sonar Device Manufacturing', 'Speech & Voice Recognition Software Developers', 
        'Storage Area Network Software Development', 'Tax Preparation Software Developers', 'Thermostat Manufacturing', 
        'Tire & Rubber Recycling', 'Traffic Light Manufacturing', 'Ultrasonic Cleaning Equipment Manufacturing', 'Urinal Manufacturing', 
        'Variable Message Signage Manufacturing', 'Video Conferencing Software Developers', 'Video Games Software Developers', 
        'Video Games Software Publishing',"Video Management Platform Software","Virtual Data Rooms","Virtual Reality Software",
        "WastetoEnergy Plant Operation","Wearable Device Manufacturing","Web Design Services","Web Domain Name Sales",
        "Website Creation Software Developers","Wind Turbine Installation","Wire Connector Manufacturing",
        "Wireless Internet Service Providers in the US"],
      'Online Retail': [
        "Daily Deals Sites","Digital Music Downloads","Online Air Travel Bookings","Online Antiques & Collectibles Sales",
        "Online Apartment Rental Services","Online Art Sales","Online Audio Equipment Sales","Online Automotive Parts & Accessories Sales",
        "Online Baby & Infant Apparel Sales","Online Baby Product Sales","Online Beer, Wine & Liquor Sales","Online Book Sales",
        "Online Camera & Camcorder Sales","Online Car Dealers","Online Car Rental","Online CD, DVD & DVR Sales",
        "Online Children's Toy Sales","Online Computer & Tablet Sales","Online Computer Software Sales","Online Designer Clothing Sales",
        "Online Electrical Office Equipment Sales","Online Event Ticket Sales","Online Eyeglasses & Contact Lens Sales",
        "Online Flower Shops","Online Gift Vouchers","Online Greeting Card Sales","Online Grocery Sales","Online Gun & Ammunition Sales",
        "Online Handbag & Luggage Sales","Online Hardware & Tool Sales","Online Hobby & Craft Supplies Sales","Online Home Furnishing Sales",
        "Online Hotel Booking","Online Household Furniture Sales","Online Industrial Machinery & Equipment Sales",
        "Online Industrial Supplies Sales","Online Jewelry & Watch Sales","Online Kitchenware Sales","Online Large Kitchen Appliance Sales",
        "Online Medical Supplies Sales","Online Men's Clothing Sales","Online Music Instrument Sales","Online Office & School Supply Sales",
        "Online Office Furniture Sales","Online Original Design TShirt Sales","Online Paint Sales","Online Perfume & Cosmetic Sales",
        "Online Pet Food & Pet Supply Sales","Online Pharmaceutical Sales","Online Photo Printing","Online Plumbing & Electrical Supply Sales",
        "Online Residential Home Sale Listings","Online Scenic & Sightseeing Tour Bookings","Online Sea Travel Bookings","Online Shoe Sales",
        "Online Small Electrical Appliance Sales","Online Sporting Apparel Sales","Online Sporting Goods Sales","Online Sunglasses Sales",
        "Online Television Sales","Online Tour Arrangement Bookings","Online Tutoring Services","Online Video Downloads",
        "Online Video Game Console Sales","Online Video Game Sales","Online Vitamin & Supplement Sales","Online Weight Loss Services",
        "Online Women's Clothing Sales","Video Streaming Services"]
,
      'Specialist Engineering, Infrastructure and Contractors': [
        "Aerospace Engineering Services","Agricultural Engineering Services","Airport Management Services","Airport Terminal Construction",
        "Artificial Grass Turf Installation","Bridge & Structure Painting Contractors","Building Exterior Cleaners",
        "Cell Site Operation and Leasing","Cementing Oil & Gas Well Services","Commercial Property Remodeling",
        "Commercial Shelving Manufacturing","Communication Antenna Construction","Computer Facilities Management Services",
        "Concrete Pipe Manufacturing","Concrete Reinforcing Bar Manufacturing","Construction Project Management Services",
        "Corrosion Protection Engineering Services","Damage Restoration Services","Deck & Patio Construction",
        "Demolition Equipment Manufacturing","Dog Park Design Services","Dredging Services","Dump Truck Services","Dumpster Rental",
        "Editorial Services","Electric Transmission Line & Tower Installation","Elevator Manufacturing","Engineered Wood Product Manufacturing",
        "Escalator Installation & Maintenance","Escalator Manufacturing","Fence & Scaffolding Manufacturing","Fence & Scaffolding Rental",
        "General Freight Trucking (Less Than Truckload)","General Freight Trucking (Truckload)","Hazardous Waste Collection",
        "Heavy-Duty OTR Tire Manufacturing","Hoist & Winch Manufacturing","Hospital Construction","Hotel Construction",
        "House Painting & Decorating Contractors","Hydraulic Fracturing Services","Hydroelectric Power Plant Construction",
        "Indoor Sports Facilities Management","Industrial Design Services","Industrial Engineering Services","Insulation Contractors",
        "Laboratory Design & Build Contractors","Local Refrigerated Trucking","Long-Distance Refrigerated Trucking","Lumber Yards",
        "Marine Salvage Services","Metal Door Manufacturing","Monument Makers","Natural Gas Liquid Processing",
        "Nonresidential Property Managers","Nuclear Power Plant Construction","Offshore Drilling Extraction",
        "Offshore Oil Rig & Platform Construction","Oil and Gas Drilling Equipment Manufacturing","Oil Field Drilling Services",
        "Ornamental & Architectural Metalwork Manufacturing","Overhead Crane Manufacturing","Playground Design Services","Potash Mining",
        "Powder Coating Services","Railroad Track Construction","Reconstituted Wood Product Manufacturing","Residential Property Managers",
        "Restaurant Construction","Retail Store Fixture Dealers","Sandblasting Services","Scaffolding Contractors",
        "Septic, Drain & Sewer Cleaning Services","Sewer & Pipeline Rehabilitation","Sheet Metal Work Manufacturing",
        "Sheet Metal Roofing Manufacturing","Shopping Mall Management","Shortline Railroad Operation","Snowplowing Services",
        "Soil Testing Services","Solar Water Heater Installation","Sports & Athletic Field Construction","Sports Stadium Construction",
        "Street Cleaning Services","Stringed Instrument Manufacturing","Toll Road Operation","Tunnel Construction","Urban Planning Software",
        "Wallpapering Services","Water & Air Quality Testing Services","Water Well Drilling Services","Wind Farm Construction",
        "Window Coverings Wholesaling","Window Installation","Window Washing","Wireless Tower Construction","Wood Chip Manufacturing",
        "Wood Door & Window Manufacturing","Wood Flooring Manufacturing in the US"]
,
      'Consumer Goods and Services': [
        'Acoustic & Electric Guitar','Manufacturing','Acupuncture Schools','Adhesive Tape Manufacturing','Adjustable Bed & Mattress Manufacturing',
        'Adult Stores','Aerial Yoga Classes','Aestheticians','AfterSchool Program Providers','Air Duct Cleaning Services','Air Gun & Airsoft Gun Manufacturing',
        'Airport Shuttle Operators','Aluminum Foil Manufacturing','Anesthesiologists','Animal Control Services','Animal Physical Therapists',
        'Animal Rescue Shelters','AnimalAssisted Therapy','Antique Stores','Archery Ranges','Art Classes','Art Consulting','Art Galleries','Art Installation Services',
        'Art Restoration Services','Art Space Rental','Art Supply Stores','Athleisure Clothing Manufacturing','Athletic Event Organizers','Athletic Shoe Stores',
        'ATV Manufacturing','ATV Rentals & Tour Services','Auction Houses','Audiobook Publishing','Auto Electrical Services','Auto Windshield Repair Services','Baby Food Manufacturing',
        'Backpack & Courier Bag Manufacturing','Bacon Production','Bagel Stores','Bail Bond Services','Bakery Cafes','Ballet Schools','Barbecue & Grill Manufacturing','Barber Shops',
        'Barre Classes','Bartending Schools','BBQ & Outdoor Cooking Stores','BBQ Charcoal Manufacturing','BBQ Sauce Production','Beach Equipment Rental','Beauty Supply Stores',
        'Bed & Mattress Stores',
      'Bicycle Manufacturing',
      'Bike Rental',
      'Bike Tours',
      'Bird Shops',
      'Bleach Manufacturing',
      'Board Game Manufacturing',
      'Boat Part Suppliers',
      'Body Armor Manufacturing',
      'Body Contouring',
      'Body Piercing Studios',
      'Boutique Hotels',
      'Boxing Gyms & Clubs',
      'Boxing Promoters',
      'Breakfast Restaurants & Diners',
      'Brewery Tours',
      'Brewpubs',
      'Bridal Stores',
      'Budget Airlines','Buffet Restaurants',
      'Bungee Jumping Tours',
      'Burger Restaurants',
      'Bus Rental',
      'Cabinet Makers',
      'Cable Shopping Networks',
      'Calligraphy Services',
      'Candle Manufacturing',
      'Cannabis Equipment & Accessory Stores',
      'Car Sharing Providers',
      'Cardio Classes',
      'Carpet Dyeing Services',
      'Cell Phone Repair',
      'Charcoal Grilling Equipment Stores',
      'Charter Schools',
      'Cheese Production',
      "Children's Book Publishing",
      'Chinese Restaurants',
      'Chocolate Stores',
      'Cider Production',
      'Cideries',
      'Cigar Lounges',
      'Classic Car Dealers',
      'Clock Repair Services',
      'Clothing & Apparel Rental',
      'Clothing Alteration Services',
      'Clothing Boutiques',
      'Cocktail Bars',
      'Cocoa & Drinking Chocolate Production',
      'Coffee Creamer Production',
      'Comedy Clubs',
      'Comic Book Publishing',
      'Commercial Cleaning & Sanitation Services',
      'Commercial Embroidery Services',
      'Commercial Window Cleaning Services',
      'Computer Rental',
      'Cookie & Wafer Manufacturing',
      'Cookie Shops',
      'Cooking Classes',
      'Cosmetology & Beauty Schools',
      'Cotton PersonalCare Product Manufacturing',
      'Countertop Manufacturing',
      'Cracker & Biscuits Manufacturing',
      'Craft Beer Production',
      'Craft Spirits Production',
      'Cruise Line Operators',
      'Culinary Arts Schools',
      'Cupcake Stores',
      'Cured Meat Production',
      'Curtain & Drape Manufacturing',
      'Custom Cake Services',
      'Custom Screen Printing',
      'Dance Schools',
      'Dance Studios',
      'Dancewear Stores',
      'Day Camps',
      'Delicatessens',
      'Dental Schools',
      'Deodorant Manufacturing',
      'Dessert Stores',
      'Diaper Manufacturing',
      'Discount Department Stores',
      'Dishwasher Manufacturing',
      'DoItYourself Auto Shops',
      'Dog & Pet Breeders',
      'Dog Training Services',
      'Dog Walking Services',
      'Door Installation & Repair Services',
      'Door Lock & Lockset Manufacturing',
      'Doughnut Stores',
      'Dried Fruit & Vegetable Snack Production',
      'Driving Schools',
      'Dry Pasta Production',
      'Dry Pet Food Production',
      'Durable Baby Goods Stores',
      'DutyFree Shops',
      'Early Childhood Learning Centers',
      'Electric Scooter Rental',
      'Electronic Cigarette & Vape Shops',
      'Engraving Services',
      'Escape Rooms',
      'Escort Services',
      'Ethnic Supermarkets',
      'Event Photography',
      'Exercise Equipment Stores',
      'Extended Stay Hotels',
      'External Sliding Door Manufacturing',
      'Eyebrow Services',
      'Eyeglasses Frames Manufacturing',
      'Farm Equipment Repair',
      'Farm Supply Stores',
      'Farmers Markets',
      'Faucet Manufacturing',
      'Fine Dining Restaurants',
      'Fire Protection and Security System Installation Contractors',
      'Fire Protection Consultants',
      'Firearm Training',
      'Fireplace Services',
      'Fireworks Retailers',
      'Fishing Boat Charter',
      'Flag Manufacturing',
      'Flea Markets',
      'Flight Instructors',
      'Flying Schools',
      'Food Courts & Halls',
      'Food Delivery Services',
      'Food Processor & Blender Manufacturing',
      'Food Safety Training',
      'Food Trucks',
      'French Restaurants',
      'Fresh Bread & Bakery Goods Wholesaling',
      'Frozen Cake & Pastry Manufacturing',
      'Frozen Dough & Batter Production',
      'Frozen Fruit & Juice Production',
      'Frozen Pizza Production',
      'Frozen Potato Product Production',
      'Frozen Vegetable Production',
      'Frozen Yogurt Stores',
      'Furniture Restoration Services',
      'Garage Door Installation',
      'Garage Door Manufacturing',
      'Generator Rental',
      'Ghost Kitchens',
      'Glass Stores',
      'GoKart Racing Tracks',
      'Golf Cart Dealers',
      'Golf Cart Manufacturing',
      'Golf Cart Rentals',
      'Golf Equipment Stores',
      'Golf Instructors',
      'Golf Resorts',
      'Greek Restaurants',
      'Grocery Delivery Services',
      'Grouting Contractors',
      'Guitar Stores',
      'Gum Production',
      'Gun & Ammunition Stores',
      'Gutter Services',
      'Gymnastics Classes',
      'Hair Cleaning Product Manufacturing',
      'Hair Color Product Manufacturing',
      'Hair Extension Services',
      'Hair Removal Services',
      'Hair Remover Product Manufacturing',
      'Hair Salons',
      'Hand Sanitizer Manufacturing',
      'Hang Glider Sightseeing',
      'Hard Seltzer Production',
      'Hat & Cap Stores',
      'Health Retreats',
      'Hearing Aid Stores',
      'High Fructose Corn Syrup Production',
      'Hiking & Outdoor Equipment Stores',
      'Hookah Lounges',
      'Hops Farming',
      'Horse Racing Tracks',
      'Horse Rentals',
      'Horse Training Services',
      'Horseback Tours',
      'Hospitality Management Schools',
      'Hostels',
      'Hot Dog & Hamburger Bun Production',
      'Hot Dog & Sausage Production',
      'Hot Sauce Production',
      'Hot Tub Manufacturing',
      'Household Appliance Stores',
      'Hunting & Fishing Supplies Stores',
      'Hydroponic Growing Equipment Stores',
      'Ice Cream Stores',
      'Ice Delivery Services',
      'Ice Manufacturing',
      'Ice Rinks',
      'Indian Restaurants',
      'Indoor Climbing Walls',
      'Indoor Cycling Workout Classes',
      'Indoor Marble Contractors',
      'Indoor Play Centers',
      'Industrial Chocolate Production',
      'Infant Formula Manufacturing',
      'Interval Training Gyms',
      'Investigation Services',
      'Italian Restaurants',
      'Japanese Restaurants',
      'Jazz Clubs & Lounges',
      'Jewelry Designers',
      'Jewelry Wholesaling',
      'Juice & Smoothie Bars','Karaoke Bars',
      'Karaoke Machine Rental',
      'Karate Studios',
      'Key Duplication Services',
      'Kickboxing Studios',
      'Kitchen & Cookware Stores',
      'Kombucha Production',
      'Korean Restaurants',
      'Lamp & Lighting Stores',
      'LAN Gaming Centers',
      'Language Schools',
      'Laser Tag Arenas',
      'Lawn Mower Rentals',
      'Lawn Sprinkler Installation Contractors',
      'Leather Boot Manufacturing',
      'Leather Cleaning & Repair Services',
      'Licensed Sports Apparel Stores',
      'Limousine & Town Car Services',
      'Lingerie Manufacturing',
      'Lingerie Stores',
      'Lip Care Product Manufacturing',
      'Lipstick Manufacturing',
      'Live Performance Theaters',
      'Locksmiths',
      'Luggage & Leather Goods Stores',
      'Magazine & Newspaper Stands',
      'Magicians',
      'Major Smart Appliance Manufacturing',
      'Makerspace Design Services',
      'Makeup Artists',
      'Mall Carts & Kiosks',
      'Marine Engineering Services',
      'Martial Arts Studios',
      'Massage Schools',
      'Massage Services',
      'Maternity Wear Stores',
      'Mayonnaise Production',
      'Meal Kit Delivery Services',
      'Meal Replacement Product Manufacturing',
      'Meat Alternatives Production',
      'Meat Jerky Production',
      'Meditation Studios',
      'Mediterranean Restaurants',
      'Mexican Restaurants',
      'Microwave Oven Manufacturing',
      'Middle Eastern Restaurants',
      'Miniature Golf Courses',
      'Mixed Martial Arts Studios',
      'Mobile Home Manufacturing',
      'Mobile Storage Services',
      'Motorcycle Rental',
      'Mouthwash Manufacturing',
      'Movie Rental Kiosks',
      'Musical Instrument Rental Services',
      'Musical Instrument Repair Services',
      'Nail Polish Manufacturing',
      'Newswire Services',
      'Nightclubs',
      'Noodle Restaurants',
      'Nursery Schools',
      'Nursing Schools',
      'Office Cleaning Services',
      'Office Equipment Repair Services',
      'Office Equipment Stores',
      'Office Furniture Stores',
      'Office Plant Services',
      'Officiant Services',
      'Olive Oil Production',
      'Online Gambling Services',
      'Online Used Book Sales',
      'Organic Grocery Stores',
      'Organic Snack Production',
      'Outdoor Furniture Manufacturing',
      'Outdoor Marble Contractors',
      'Outdoor Movie Operators',
      'Outlet Stores',
      'Oven & Stove Manufacturing',
      'Paddleboarding Lessons',
      'Paint & Sip Studios',
      'PaintYourOwn Pottery Studios',
      'Paintball Fields',
      'Pancake Restaurants',
      'Paper Cup Manufacturing',
      'Paper Towel Manufacturing',
      'Paperboard Drinking Cup Manufacturing',
      'Parachute Manufacturing',
      'Parasail Tours',
      'Party & Event Planners',
      'Party Supply Rental',
      'Pasta Sauce Production',
      'Patio Coverings',
      'Patisseries and Cake Shops',
      'Peanut Butter Production',
      'Perfume & Fragrance Manufacturing',
      'Perfume & Fragrance Stores',
      'Personal Chef Services',
      'Personal Protective Equipment Manufacturing',
      'Personal Waxing & Nail Salons',
      'Pet Adoption Services',
      'Pet Cremation Services',
      'Pet Food & Supplies Wholesaling',
      'Pet Food Production',
      'Pet Hospice',
      'Pet Insurance',
      'Pet Photography Services',
      'Pet Sitting Services',
      'Pet Training Services',
      'Pet Transportation Services',
      'Pet Waste Products',
      'Petting Zoos & Tourist Farms',
      'Petting Zoos',
      'Photo Booth Rental',
      'Photo Restoration Services',
      'Photography Schools',
      'Piano Repair & Tuning Services',
      'Piano Stores',
      'Picture Framing Stores',
      'Pizza Restaurants',
      'Playground & Park Equipment Manufacturing',
      "PlusSize Men's Clothing Stores",
      "PlusSize Women's Clothing Stores",
      'Poke Shops',
      'Pool & Billiard Halls',
      'Popcorn Production',
      'Potato Chip Production',
      'Potato Farming',
      'PreMade Salsa Production',
      'Premium Pet Food Production',
      'Premium Steak Restaurants',
      'Prepared Frozen Fish Production',
      'Prepared Soups Production',
      'Pressure Washing Services',
      'Pretzel Stores',
      'Private Boat Charters',
      'Private Detective Services',
      'Private Jet Charters',
      'Private Music Classes',
      'Protective Sports Equipment Manufacturing',
      'Psychic Services',
    ],
      
      'Industrial Machinery, Gas and Chemicals': ['a','b','c','d','e'],
      'Life Sciences': ['a','b','c','d','e'],
      'Accommodation and Food Services': ['a','b','c','d','e'],
      'Administration, Business Support and Waste Management Services': ['a','b','c','d','e'],
      'Educational Services': ['a','b','c','d','e'],
      'Arts, Entertainment and Recreation': ['a','b','c','d','e'],
      'Wholesale Trade': ['a','b','c','d','e'],
      'Retail Trade': ['a','b','c','d','e'],
      'Healthcare and Social Assistance': ['a','b','c','d','e'],
      'Transportation and Warehousing': ['a','b','c','d','e'],
      'Construction': ['a','b','c','d','e'],
      'Professional, Scientific and Technical Services': ['a','b','c','d','e'],
      'Manufacturing': ['a','b','c','d','e'],


      }

      interface IService {
        category: string;
        items: string[];
      }
      
      interface IServiceList {
        services: IService[];
      }
      
      interface Props {
        answer1: string;
      }
      
    const [userEmail,setuserEmail] = useState('mustafa@gmail.com')
    const [questionState, setQuestionState] = useState(0)
    const [answer1,setAnswer1]=useState('')
    const [answer2,setAnswer2]=useState('')
    const [answer3,setAnswer3]=useState('')
    const [answer4,setAnswer4]=useState('')
    const [answer5,setAnswer5]=useState('')
    const [answer6,setAnswer6]=useState('')
    const [answer7,setAnswer7]=useState('')
    const [answer8,setAnswer8]=useState('')
    const [answer9,setAnswer9]=useState('')
    const [answer10,setAnswer10]=useState('')
    const [answer11,setAnswer11]=useState('')
    const [answer12,setAnswer12]=useState('')
    const [answer13,setAnswer13]=useState('')
    const [answer14,setAnswer14]=useState('')
    const [resOverview, setResOverview] = useState('');
    const [resIntro, setResIntro] = useState('');
    const [marketBenefits,setMarketBenefits]=useState('');
    const [marketChallenges,setMarketChallenges]=useState('');
    const [productFit,setProductFit]=useState('');
    const [valueMisalignment,setValueMisalignment]=useState('');
    const [marketingMethods,setMarketingMethods]=useState('');
    const [failureSection,setFailureSection]=useState('');
    const [finalSection,setFinalSection]=useState('');



    const getOverview = async () => {
      try {
        const response = await fetch(`http://185.132.176.176/overview?industry=${answer1}`, {
          method: "GET",
          // credentials: 'include',
          // mode: 'no-cors',
          headers: {
            accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        // console.log(responseData.intro)
        setResOverview(responseData.overview);
        setResIntro(responseData.intro);
        // console.log('intro:'+ resIntro)
        // console.log('overview:'+ resOverview)

        // console.log('response: '+ resOverview)
      }
      catch (err) {
        console.error(err);
      }
    };

    const getMarketBenefits = async () => {
      try {
        const response = await fetch(`http://185.132.176.176/market_benefits?industry=${answer1}`, {
          method: "GET",
          // credentials: 'include',
          // mode: 'no-cors',
          headers: {
            accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData)
        // const market_benefits = responseData.get("market-fit")
        // console.log(market_benefits)
        setMarketBenefits(responseData['market-fit']);
        // console.log('intro:'+ resIntro)
        // console.log('overview:'+ resOverview)

        // console.log('response: '+ resOverview)
      }
      catch (err) {
        console.error(err);
      }
    };

    
    const getMarketChallenges = async () => {
      try {
        const response = await fetch(`http://185.132.176.176/market_challenges?industry=${answer1}&answer_q2=${answer2}`, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        // console.log(responseData)
        setMarketChallenges(responseData['market-challenges']);
        // console.log('MarketChallanges:'+ marketChallenges)
      }
      catch (err) {
        console.error(err);
      }
    };

    const getProductFit = async () => {
      try {
        const response = await fetch(`http://185.132.176.176/product_fit?industry=${answer1}&answer_q3=${answer4}&answer_q4=${answer5}&answer_q5=${answer7}&answer_q6=${answer8}&answer_q7=${answer9}`, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        // console.log(responseData)
        setProductFit(responseData['product-fit']);
        // console.log('product-fit'+ productFit)
      }
      catch (err) {
        console.error(err);
      }
    };

    const getValueMisalignment = async () => {
      try {
        const response = await fetch(`http://185.132.176.176/value_misalignment?industry=${answer1}&answer_q3=${answer4}&answer_q7=${answer9}&answer_q8=${answer12}&answer_q8a=${answer13}&answer_q8b=${answer14}`, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        // console.log(responseData)
        setValueMisalignment(responseData['misalignment']);
        // console.log('value-misalignment'+ valueMisalignment)
      }
      catch (err) {
        console.error(err);
      }
    };

    const getMarketingMethods = async () => {
      try {
        const response = await fetch(`http://185.132.176.176/marketing_methods?industry=${answer1}&answer_q5=${answer7}`, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        // console.log(responseData)
        setMarketingMethods(responseData['marketing-methods']);
        // console.log('Marketing Methods'+ marketingMethods)
      }
      catch (err) {
        console.error(err);
      }
    };

    const getFailureSection = async () => {
      try {
        const response = await fetch(`http://185.132.176.176/failure_section?industry=${answer1}&answer_q2=${answer2}`, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData)
        setFailureSection(responseData['failure-reasons']);
        console.log('Failure Section: '+ failureSection)
      }
      catch (err) {
        console.error(err);
      }
    };

    const getFinalSection = async () => {
      try {
        const response = await fetch(`http://185.132.176.176/final_section`, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData)
        setFinalSection(responseData['final']);
        console.log('Final Section'+ finalSection)
      }
      catch (err) {
        console.error(err);
      }
    };

    const question8b = [
      "(meaning it functions better/faster/is more efficient than the competitors' products)",
      "(meaning people will have a better experience than they will get from the competitors' products)",
      "(meaning other people will want to watch or get involved because of the use of your product)",
      "(meaning it makes or saves people money)",
    ];

    const question8bExamples = [
      "Example: A microwave functions faster than using an oven for cooking meals.",
      "Example: a recliner chair provides a more relaxing sitting experience than sitting on a chair that doesn't recline.",
      "Example: Driving a luxury car makes other people perceive that you are making more money than driving an average car does.",
      "Example: Bundling home and auto insurance with the same company saves money",
    ];
    

    const questionSet = [
      'Enter your Email Address',
      'Q1. Which industry does or will your business operate in?',
      `Q2. Do you know which segment of the "${answer1}" industry your business does or will operate in?`,
      'Q2 (a). Enter your segment here',
      'Q3. What will your business be selling?',
      `Q4. Are you already selling your ${answer4} to paying customers?`,
      `Q4 (a). Proximity: Where Are the customers who have already paid for your ${answer4} located? \n Local (your city) Regional (your state or region) National (your country) Global (other countries)?`,
      `Q5. Where are you planning to begin selling your ${answer4}? \n Local (your city) Regional (your state or region) National (your country) Global (other countries)`,
      `Q6. Have you estimated the total market share and revenue potential you can reasonably expect to gain from selling your ${answer4} in this market?`,
      'Q7. Can you say that your product(s) or service(s) are different or better than everyone else?',
      'Q7 a. Describe (in a way that is easy to understand) what makes you different here:',
      `Q7 b. Have people offered to pay you for your ${answer4} after hearing about or seeing your  ${answer4} through an advertisement?`,
      `Q8. Are you filling any unmet needs/wants or solving a problem for customers in your segment of the "${answer1}" industry?`,
      'Q8 a. Describe (In a way that is easy to understand) what unmet need (or want) you are filling or what problem you are solving for customers here:',
      "Q8 b. What's the value customers will receive from your (product):"
    ];

    const nextClick=async()=> {
        if(questionState===0){
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(userEmail)) {
            alert()
          }
          else {
            setQuestionState(questionState + 1);
          }
          
        }
        if(questionState>0 && questionState<15 && questionState!==2 && questionState!==5 && questionState!==9 && questionState!==12){
          if(questionState===1){
            getOverview()
            getMarketBenefits()
          };
          if(questionState===7){
            getMarketingMethods()
          };
          if(questionState===13){
            if(answer9==='Yes' || answer12==='Yes'){
              getValueMisalignment()
            }
          };
          if(questionState===14){
            getFinalSection()
          };
          setQuestionState(questionState+1)
        }
        
        else if (questionState===2 || questionState===5  || questionState===9 || questionState===12){
          if(questionState===2){
            getMarketChallenges()
            getFailureSection()
            if(answer2==='Yes'){
              setQuestionState(questionState+1)
            }
            if(answer2==='No'){
              setQuestionState(questionState+2)
            }
          }
          if(questionState===5){
            if(answer5==='Yes'){
              setQuestionState(questionState+1)
            }
            if(answer5==='No'){
              setQuestionState(questionState+2)
            }
          }
          if(questionState===9){
            // getProductFit()
            if(answer9==='Yes'){
              setQuestionState(questionState+1)
            }
            if(answer9==='No'){
              setQuestionState(questionState+2)
            }
          }
          if(questionState===12){
            if(answer12==='Yes'){
              setQuestionState(questionState+1)
            }
            if(answer12==='No'){
              setQuestionState(questionState+2)
            }
          }
          
        }
    }

    function backClick() {
      if(questionState==3){
        setAnswer3('')
      }
      if(questionState==6){
        setAnswer6('')
      }
      if(questionState==10){
        setAnswer10('')
      }
      if(questionState==13){
        setAnswer13('')
      }
      if(questionState>0 && questionState!==4 && questionState!==7 && questionState!==11 && questionState!==14){
          setQuestionState(questionState-1)
      }
      else if (questionState===4 || questionState===7  || questionState===11 || questionState===14){
        if(questionState===4){
          if(answer2==='Yes'){
            setQuestionState(questionState-1)
          }
          if(answer2==='No'){
            setQuestionState(questionState-2)
          }
        }
        if(questionState===7){
          if(answer5==='Yes'){
            setQuestionState(questionState-1)
          }
          if(answer5==='No'){
            setQuestionState(questionState-2)
          }
        }
        if(questionState===11){
          if(answer9==='Yes'){
            setQuestionState(questionState-1)
          }
          if(answer9==='No'){
            setQuestionState(questionState-2)
          }
        }
        if(questionState===14){
          if(answer12==='Yes'){
            setQuestionState(questionState-1)
          }
          if(answer12==='No'){
            setQuestionState(questionState-2)
          }
        }
      }
    }

    useEffect(() => {
      console.log('Q1: '+answer1);
      console.log('intro: ' +resIntro)
      console.log('Overview: ' +resOverview)
      console.log('Market Benefits: ' +marketBenefits)
      console.log('Product Fit: ' +productFit)
      console.log('value misalignment: ' +valueMisalignment)
      console.log('Marketing methods: ' +marketingMethods)
      console.log('Failure Section: ' +failureSection)
      console.log('Final Section: ' +finalSection)

      console.log('Q2: '+answer2);
      console.log('Q2 a: '+answer3);
      console.log('Q3: '+answer4);
      console.log('Q4: '+answer5);
      console.log('Q4 a: '+answer6);
      console.log('Q5: '+answer7);
      console.log('Q6: '+answer8);
      console.log('Q7: '+answer9);
      console.log('Q7 a: '+answer10);
      console.log('Q7 b '+answer11);
      console.log('Q8: '+answer12);
      console.log('Q8a '+answer13);
      console.log('Q8b '+answer14);

    }, [answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10,answer11,answer12,answer13,answer14,resIntro,resOverview,marketBenefits,finalSection,failureSection,productFit,valueMisalignment]); // log the value of all answers every time any changes
    


    return (
        <>
        <div className="chatscreen">
          <div className="chattext-container">
            <h1 style={{marginTop: 10,marginBottom: 20,fontSize: 35,fontWeight: 700,fontFamily: 'Montserrat,Sans-serif'}}>Validate Your Business Idea In Seconds</h1>
          </div>
          <div className="chatinput-maincontainer">
            <div className="chatinput-container">
                <div style={{fontSize: 18,fontWeight: 500,fontFamily: 'Montserrat,Sans-serif',padding: '4%',textAlign: 'left'}}>{questionSet[questionState]}</div>
                  {questionState===0 && ( <input
                    type="email"
                    value={userEmail}
                    onChange={(event) => setuserEmail(event.target.value)}
                    style={{
                      width: '80%',
                      border: '1px solid black',
                      borderRadius: '5px',
                      padding: '10px',
                    }}
                  />)}
                  {questionState===10 && ( <textarea
                    value={answer10}
                    onChange={(event) => setAnswer10(event.target.value)}
                    className='chatinput'
                    style={{    
                      border:  '4px solid rgba(39, 223, 211, 0.85)',
                      height: '200px', 
                      overflowY:  'scroll',marginLeft: '10%', marginRight: '10%'
                    }}
                  />)}
                  {questionState===13 && ( <textarea
                    value={answer13}
                    onChange={(event) => setAnswer13(event.target.value)}
                    className='chatinput'
                    style={{  
                      border:  '4px solid rgba(39, 223, 211, 0.85)',
                      height: '200px', 
                      overflowY:  'scroll',marginLeft: '10%', marginRight: '10%'
                    }}
                  />)}
                  {questionState>0 && questionState!=10 && questionState!=13 &&
                    <div className='chatinput' id="question-container" style={{    
                      border: questionState !== 2 && questionState!==5 && questionState!==8 && questionState!==9 && questionState!==11 && questionState!==12 ? '4px solid rgba(39, 223, 211, 0.85)' : '0px',
                      height: questionState === 2 || questionState===5 || questionState===8 || questionState===9 || questionState===11 || questionState===12 ? '100px' : '250px', 
                      overflowY: questionState!==2 && questionState!==5 && questionState!==8 && questionState!==9 && questionState!==11 && questionState!==12 ? 'scroll' : 'hidden',marginLeft: '10%', marginRight: '10%'}}>
                      <ul className='ulforchatoptionstext'>
                        
                        {questionState===1 && set1.map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            borderColor: 'black',
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer1 === category ? '#09536a' : 'lightblue',
                            color: answer1 === category ? 'white' : 'black'}} 
                          onClick={() => setAnswer1(category)}>
                              {category}
                              
                          </li>
                        )}
                        
                        {questionState===2 && services_list['knowSegment'].map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer2 === category ? '#09536a' : 'lightblue',
                            color: answer2 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer2(category)}>
                              {category}
                          </li>
                        )}
                        {answer2==="Yes" && questionState===3 && services_list[answer1].map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer3 === category ? '#09536a' : 'lightblue',
                            color: answer3 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer3(category)}>
                              {category}
                          </li>
                        )}
                        {questionState===4 && services_list['productType'].map((category, index) =>
                          <li key={index}
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer4 === category ? '#09536a' : 'lightblue',
                            color: answer4 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer4(category)}>
                              {category}
                          </li>
                        )}
                        {questionState===5 && services_list['knowSegment'].map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer5 === category ? '#09536a' : 'lightblue',
                            color: answer5 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer5(category)}>
                              {category}
                          </li>
                        )}
                        {questionState===6 && services_list['productSaleRegion'].map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer6 === category ? '#09536a' : 'lightblue',
                            color: answer6 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer6(category)}>
                              {category}
                          </li>
                        )}
                        {questionState===7 && services_list['productSaleRegion'].map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer7 === category ? '#09536a' : 'lightblue',
                            color: answer7 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer7(category)}>
                              {category}
                          </li>
                        )}
                        {questionState===8 && services_list['knowSegment'].map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer8 === category ? '#09536a' : 'lightblue',
                            color: answer8 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer8(category)}>
                              {category}
                          </li>
                        )}
                        {questionState===9 && services_list['knowSegment'].map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer9 === category ? '#09536a' : 'lightblue',
                            color: answer9 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer9(category)}>
                              {category}
                          </li>
                        )}
                        
                        {questionState===11 && services_list['knowSegment'].map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer11 === category ? '#09536a' : 'lightblue',
                            color: answer11 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer11(category)}>
                              {category}
                          </li>
                        )}
                        {questionState===12 && services_list['knowSegment'].map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer12 === category ? '#09536a' : 'lightblue',
                            color: answer12 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer12(category)}>
                              {category}
                          </li>
                        )}
                        {questionState===14 && services_list['productValue'].map((category, index) =>
                        <>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer14 === category ? '#09536a' : 'lightblue',
                            color: answer14 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer14(category)}>
                              {category}
                              <span style={{fontSize: 13}}>{question8b[index]}</span>

                          </li>
                          <div style={{textAlign: 'left',paddingLeft: 10,}}>
                            <span style={{fontSize: 13}}>{question8bExamples[index]}</span>
                          </div>
                        </>
                        )}
                      </ul>
                    </div>}
                    <div style={{justifyContent: 'space-between'}}>
                      {questionState>0 && 
                        <button type="button" className='chatinputbtn' onClick={backClick}>Back</button>
                      } 
                      <button type="button" className='chatinputbtn' onClick={nextClick}>Next</button>
                    </div>
              </div>
          </div>
        </div>
      </>    
      )
}