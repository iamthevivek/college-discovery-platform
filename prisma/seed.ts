import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.college.createMany({
    data: [
      {
        name: "IIT Bombay",
        location: "Mumbai",
        state: "Maharashtra",
        fees: 220000,
        rating: 4.9,
        type: "Engineering",
        courses: ["CSE", "Mechanical", "Electrical"],
        placements: {
          placementRate: 98,
          averagePackage: 2500000,
          highestPackage: 5000000,
        },
        description: "Top engineering institute in India.",
      },

      {
        name: "IIT Delhi",
        location: "Delhi",
        state: "Delhi",
        fees: 230000,
        rating: 4.8,
        type: "Engineering",
        courses: ["CSE", "Civil", "Electrical"],
        placements: {
          placementRate: 97,
          averagePackage: 2400000,
          highestPackage: 4500000,
        },
        description: "Premier IIT with excellent placements.",
      },

      {
        name: "IIT Madras",
        location: "Chennai",
        state: "Tamil Nadu",
        fees: 210000,
        rating: 4.9,
        type: "Engineering",
        courses: ["AI", "Mechanical", "ECE"],
        placements: {
          placementRate: 98,
          averagePackage: 2300000,
          highestPackage: 4200000,
        },
        description: "One of the best IITs in India.",
      },

      {
        name: "NIT Trichy",
        location: "Tiruchirappalli",
        state: "Tamil Nadu",
        fees: 180000,
        rating: 4.7,
        type: "Engineering",
        courses: ["CSE", "Mechanical", "Civil"],
        placements: {
          placementRate: 95,
          averagePackage: 1800000,
          highestPackage: 3800000,
        },
        description: "Top NIT with strong placements.",
      },

      {
        name: "BITS Pilani",
        location: "Pilani",
        state: "Rajasthan",
        fees: 450000,
        rating: 4.8,
        type: "Engineering",
        courses: ["CSE", "ECE", "Biotech"],
        placements: {
          placementRate: 96,
          averagePackage: 2100000,
          highestPackage: 4400000,
        },
        description: "Private engineering institute with top placements.",
      },

      {
        name: "VIT Vellore",
        location: "Vellore",
        state: "Tamil Nadu",
        fees: 200000,
        rating: 4.5,
        type: "Engineering",
        courses: ["CSE", "AI", "Cyber Security"],
        placements: {
          placementRate: 92,
          averagePackage: 1200000,
          highestPackage: 3000000,
        },
        description: "Popular private engineering college.",
      },

      {
        name: "SRM University",
        location: "Chennai",
        state: "Tamil Nadu",
        fees: 250000,
        rating: 4.4,
        type: "Engineering",
        courses: ["CSE", "AI", "Cloud Computing"],
        placements: {
          placementRate: 90,
          averagePackage: 1000000,
          highestPackage: 2800000,
        },
        description: "Top private university in South India.",
      },

      {
        name: "COEP Technological University",
        location: "Pune",
        state: "Maharashtra",
        fees: 95000,
        rating: 4.7,
        type: "Engineering",
        courses: ["Mechanical", "Civil", "CSE"],
        placements: {
          placementRate: 93,
          averagePackage: 1100000,
          highestPackage: 2600000,
        },
        description: "Historic engineering college in Maharashtra.",
      },

      {
        name: "PICT Pune",
        location: "Pune",
        state: "Maharashtra",
        fees: 130000,
        rating: 4.6,
        type: "Engineering",
        courses: ["CSE", "IT", "ECE"],
        placements: {
          placementRate: 94,
          averagePackage: 1200000,
          highestPackage: 3200000,
        },
        description: "Strong placement-focused engineering college.",
      },

      {
        name: "MIT WPU",
        location: "Pune",
        state: "Maharashtra",
        fees: 280000,
        rating: 4.3,
        type: "Engineering",
        courses: ["AI", "Data Science", "Robotics"],
        placements: {
          placementRate: 88,
          averagePackage: 900000,
          highestPackage: 2400000,
        },
        description: "Modern private university in Pune.",
      },

      {
        name: "G.H.Raisoni College Of Engineering And Management",
        location: "Jalgaon",
        state: "Maharashtra",
        fees: 95000,
        rating: 4.2,
        type: "Engineering",
        courses: ["CSE", "AI & DS", "Mechanical", "Civil"],
        placements: {
          placementRate: 82,
          averagePackage: 650000,
          highestPackage: 1800000,
        },
        description: "Leading engineering and management college in Jalgaon.",
      },

      {
        name: "AIIMS Delhi",
        location: "Delhi",
        state: "Delhi",
        fees: 50000,
        rating: 4.9,
        type: "Medical",
        courses: ["MBBS", "Nursing"],
        placements: {
          placementRate: 99,
          averagePackage: 2000000,
          highestPackage: 3500000,
        },
        description: "India's top medical college.",
      },

      {
        name: "CMC Vellore",
        location: "Vellore",
        state: "Tamil Nadu",
        fees: 80000,
        rating: 4.8,
        type: "Medical",
        courses: ["MBBS", "MD"],
        placements: {
          placementRate: 97,
          averagePackage: 1600000,
          highestPackage: 2600000,
        },
        description: "Premier private medical college.",
      },

      {
        name: "AFMC Pune",
        location: "Pune",
        state: "Maharashtra",
        fees: 60000,
        rating: 4.8,
        type: "Medical",
        courses: ["MBBS", "BSc Nursing"],
        placements: {
          placementRate: 96,
          averagePackage: 1700000,
          highestPackage: 2500000,
        },
        description: "Military medical college with excellent academics.",
      },

      {
        name: "IIM Ahmedabad",
        location: "Ahmedabad",
        state: "Gujarat",
        fees: 320000,
        rating: 4.9,
        type: "Management",
        courses: ["MBA", "PGDM"],
        placements: {
          placementRate: 99,
          averagePackage: 3500000,
          highestPackage: 7000000,
        },
        description: "India's top MBA institute.",
      },

      {
        name: "IIM Bangalore",
        location: "Bangalore",
        state: "Karnataka",
        fees: 310000,
        rating: 4.8,
        type: "Management",
        courses: ["MBA", "Executive MBA"],
        placements: {
          placementRate: 98,
          averagePackage: 3300000,
          highestPackage: 6800000,
        },
        description: "Top management college in India.",
      },

      {
        name: "IIM Calcutta",
        location: "Kolkata",
        state: "West Bengal",
        fees: 300000,
        rating: 4.8,
        type: "Management",
        courses: ["MBA", "Finance"],
        placements: {
          placementRate: 98,
          averagePackage: 3200000,
          highestPackage: 6500000,
        },
        description: "Premier B-school in India.",
      },

      {
        name: "FMS Delhi",
        location: "Delhi",
        state: "Delhi",
        fees: 50000,
        rating: 4.7,
        type: "Management",
        courses: ["MBA"],
        placements: {
          placementRate: 98,
          averagePackage: 3000000,
          highestPackage: 5800000,
        },
        description: "Best ROI MBA college in India.",
      },

      {
        name: "XLRI Jamshedpur",
        location: "Jamshedpur",
        state: "Jharkhand",
        fees: 250000,
        rating: 4.7,
        type: "Management",
        courses: ["MBA HR", "PGDM"],
        placements: {
          placementRate: 97,
          averagePackage: 2800000,
          highestPackage: 5000000,
        },
        description: "Top HR and management institute.",
      },

      {
        name: "St. Xavier's College",
        location: "Mumbai",
        state: "Maharashtra",
        fees: 45000,
        rating: 4.5,
        type: "Arts",
        courses: ["BA", "Psychology", "English"],
        placements: {
          placementRate: 78,
          averagePackage: 500000,
          highestPackage: 1200000,
        },
        description: "Famous arts and science college.",
      },

      {
        name: "Fergusson College",
        location: "Pune",
        state: "Maharashtra",
        fees: 30000,
        rating: 4.6,
        type: "Arts",
        courses: ["BA", "BSc", "Economics"],
        placements: {
          placementRate: 75,
          averagePackage: 450000,
          highestPackage: 1000000,
        },
        description: "Historic college in Pune.",
      },

      {
        name: "Loyola College",
        location: "Chennai",
        state: "Tamil Nadu",
        fees: 50000,
        rating: 4.5,
        type: "Arts",
        courses: ["BA", "BCom", "Visual Communication"],
        placements: {
          placementRate: 80,
          averagePackage: 550000,
          highestPackage: 1500000,
        },
        description: "Top arts college in South India.",
      },

      {
        name: "Christ University",
        location: "Bangalore",
        state: "Karnataka",
        fees: 140000,
        rating: 4.4,
        type: "Arts",
        courses: ["BBA", "BA", "Media Studies"],
        placements: {
          placementRate: 88,
          averagePackage: 700000,
          highestPackage: 1800000,
        },
        description: "Popular multidisciplinary university.",
      },

      {
        name: "Delhi University",
        location: "Delhi",
        state: "Delhi",
        fees: 25000,
        rating: 4.7,
        type: "Arts",
        courses: ["BA", "Political Science", "History"],
        placements: {
          placementRate: 82,
          averagePackage: 650000,
          highestPackage: 1600000,
        },
        description: "India's leading central university.",
      },

      {
        name: "Jamia Millia Islamia",
        location: "Delhi",
        state: "Delhi",
        fees: 40000,
        rating: 4.5,
        type: "Arts",
        courses: ["Mass Communication", "BA", "Law"],
        placements: {
          placementRate: 81,
          averagePackage: 600000,
          highestPackage: 1500000,
        },
        description: "Top public central university.",
      },

      {
        name: "Symbiosis Institute of Technology",
        location: "Pune",
        state: "Maharashtra",
        fees: 320000,
        rating: 4.3,
        type: "Engineering",
        courses: ["CSE", "AI", "ECE"],
        placements: {
          placementRate: 87,
          averagePackage: 950000,
          highestPackage: 2400000,
        },
        description: "Top private engineering institute.",
      },

      {
        name: "Walchand College of Engineering",
        location: "Sangli",
        state: "Maharashtra",
        fees: 90000,
        rating: 4.5,
        type: "Engineering",
        courses: ["Mechanical", "Civil", "IT"],
        placements: {
          placementRate: 90,
          averagePackage: 850000,
          highestPackage: 2100000,
        },
        description: "Government aided engineering college.",
      },

      {
        name: "Thapar Institute of Engineering",
        location: "Patiala",
        state: "Punjab",
        fees: 350000,
        rating: 4.5,
        type: "Engineering",
        courses: ["CSE", "AI", "Robotics"],
        placements: {
          placementRate: 91,
          averagePackage: 1500000,
          highestPackage: 3000000,
        },
        description: "Renowned engineering university.",
      },

      {
        name: "Manipal Institute of Technology",
        location: "Manipal",
        state: "Karnataka",
        fees: 400000,
        rating: 4.6,
        type: "Engineering",
        courses: ["CSE", "ECE", "Mechanical"],
        placements: {
          placementRate: 92,
          averagePackage: 1400000,
          highestPackage: 3200000,
        },
        description: "Popular private engineering college.",
      },

      {
        name: "KIIT University",
        location: "Bhubaneswar",
        state: "Odisha",
        fees: 280000,
        rating: 4.3,
        type: "Engineering",
        courses: ["CSE", "AI", "Biotech"],
        placements: {
          placementRate: 88,
          averagePackage: 1000000,
          highestPackage: 2200000,
        },
        description: "Large multidisciplinary university.",
      },
    ],
  })

  console.log("✅ 30+ colleges added successfully")
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })