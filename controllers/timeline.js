document.addEventListener("DOMContentLoaded", () => {
  // Timeline data for multiple years
  const timelineData = [
    {
      year: "2023-24",
      description: "Milestones and highlights from 2023-24",
      events: [
        {
          title: "Android and Web Development",
          date: "05/08/2023",
          type: "TECH WORKSHOP",
          description: "The session covered an introduction to Web and Android Development, including applications, AngularJS, and NodeJS, and benefited the participants.",
          participants: "43",
          speaker: "Mr. Subham Dangat",
          image: "assets/EVENTS/2023-24EVENTS/5AUG23.png"
        },
        {
          title: "SALESFORCE DECODING THE BUZZ",
          date: "11/08/2023",
          type: "INTERACTIVE SESSION",
          description: "An expert lecture on Salesforce – Decoding the Buzz introduced students to Salesforce fundamentals, components, and cloud services.",
          participants: "61",
          speaker: "Mr. Darshan R. Chahajed",
          image: "assets/EVENTS/2023-24EVENTS/11AUG23.jpg"
        },
        {
          title: "Personality Development, Communication Skills and Personal Hygiene",
          date: "22/08/2023",
          type: "SOFT SKILLS SEMINAR",
          description: "A seminar focused on personal hygiene, communication skills, and personality development for professional growth.",
          participants: "159",
          speaker: "Harshita Raman",
          image: "assets/EVENTS/2023-24EVENTS/22AUG23.png"
        },
        {
          title: "Higher Education and Work Opportunities in UK",
          date: "26/10/2023",
          type: "SEMINAR",
          description: "A seminar on Higher Education and Work Opportunities in the UK guided students on admissions, scholarships, and career prospects abroad.",
          participants: "72",
          speaker: "Mr. Sumit Acharya",
          image: "assets/EVENTS/2023-24EVENTS/26OCT23.jpg"
        },
        
        {
          title: "IBM Cloud Skill Development Program",
          date: "26/02/2024",
          type: "TECH WORKSHOP",
          description: "An IBM-funded skill development program introduced students to cloud platforms, AI, and Python using Jupyter, with a focus on cloud computing fundamentals.",
          participants: "208",
          speaker: "Mr. Akshay Chaskar & Mr. Vikas Prajapati",
          image: "assets/EVENTS/2023-24EVENTS/26FEB24.jpg"
        },
      ]
    },
    {
      year: "2024-25",
      description: "Innovation & collaboration in 2024-25",
      events: [
        {
          title: "Pathway to GRE/GMAT Excellence",
          date: "09/08/2024",
          type: "WORKSHOP",
          description: "The workshop equipped students with essential insights to confidently navigate the study abroad application process and build a strong foundation for their academic pursuits",
          participants: "170",
          speaker: "Mr. Nitin Lathe",
          image: "assets/EVENTS/2024-25EVENTS/9AUG24.png"
        },
         {
          title: "Higher Studies in USA",
          date: "21/08/2024",
          type: "EXPERT SESSION",
          description: "An detailed session on standardized tests such as GRE, GMAT, SAT, TOEFL, and IELTS guided students aspiring for higher studies in the USA. The workshop provided effective study strategies, personalized planning tips, and insights into building a strong academic profile for studying abroad.",
          participants: "87",
          speaker: "Mr. Subhash Pol",
          image: "assets/EVENTS/2024-25EVENTS/21AUG24.jpg"
        },
         {
          title: "Web Wizard Hunt Competition",
          date: "04/10/2024",
          type: "CODING COMPETITION",
          description: "A technical competition organized on Engineer’s Day to encourage students to apply their web and technical knowledge in a creative and problem-solving manner.",
          participants: "20",
          topWinner: "John Doe",
          image: "assets/EVENTS/2024-25EVENTS/4OCT24.jpg"
        },
        {
          title: "Bootstrap and Django Workshop",
          date: "05/10/2024",
          type: "TECH WORKSHOP",
          description: "Hands-on workshop covering basics of Bootstrap and understanding of Django for building dynamic and responsive websights.",
          participants: "83",
          speaker: "Mr. Sumit Surana",
          image: "assets/EVENTS/2024-25EVENTS/05OCT24.jpg"
        },
        { title: "Frontend Designing using AngularJS",
          date: "13/01/2025",
          type: "TECH WORKSHOP",
          description: "Web designing being a vital IT skill, the program aimed to enhance students’ industry readiness for internships and placements. AngularJS training was conducted by an industry expert to achieve this objective.",
          participants: "80",
          speaker: "Mr. Gorakh Kharat",
          image: "assets/EVENTS/2024-25EVENTS/13JAN25.jpg"
        },
          { title: "UI/UX Workshop",
          date: "30/01/2025",
          type: "TECH WORKSHOP",
          description: "The workshop provided practical insights into UI/UX design principles, tools, and best practices for real-world applications.",
          participants: "90",
          speaker: "Mr. Vinayak Mule",
          image: "assets/EVENTS/2024-25EVENTS/30JAN25.jpg"
        },
        {
          title: "Android App Development with Kotlin",
          date: "03/04/2025",
          type: "TECH WORKSHOP",
          description: "The workshop provided hands-on training in Android app development using Kotlin, covering core concepts, UI design, API integration, and debugging.",
          participants: "92",
          speaker: "Mr. Pratik Sonawane",
          image: "assets/EVENTS/2024-25EVENTS/3APR25.jpg"
        },
        {
          title: "Industry Expert Session on “AI in Agriculture”",
          date: "22/04/2025",
          type: "EXPERT SESSION",
          description: "The session highlighted the role of Artificial Intelligence in agriculture, focusing on precision farming, crop monitoring, yield prediction, and data-driven solutions for improving productivity.",
          participants: "50",
          speaker: " Mr. Nishant Chalasany & Mr. Lalitkumar Sakare",
          image: "assets/EVENTS/2024-25EVENTS/22APR25.jpg"
        },
      ]
    },
    {
      year: "2025-26",
      description: "Future-ready initiatives in 2025-26",
      events: [
        {
          title: "Byte Brawl",
          date: "01/08/2025",
          type: "CODING COMPETITION",
          description: "The competition tested participants’ programming knowledge, logical thinking, and teamwork through quiz-based assessment and collaborative coding challenges. The event encouraged problem-solving skills, time management, and coordinated team effort.",
          participants: "104",
          topWinner: "Team ",
          image: "assets/EVENTS/2025-26EVENTS/1AUG25.jpg"
        },
        {
          title: "Advanced Backend Programming Bootcamp",
          date: "18/09/2025",
          type: "TECH BOOTCAMP",
          description: "The bootcamp provided in-depth insights into backend programming, REST API development, and deployment through hands-on learning. It helped students bridge the gap between theory and industry practices.",
          participants: "58",
          speaker: " Mr. Rushikesh Phalke",
          image: "assets/EVENTS/2025-26EVENTS/18SEP25.jpg"
        },
        {
          title: "Amravati Quantum Valley Hackathon – All India Level Bootcamp–3",
          date: "06/01/2026",
          type: "TECH BOOTCAMP",
          description: "The bootcamp offered hands-on training in quantum computing, introducing students to fundamentals, real-world applications, and quantum cloud platforms such as IBM Quantum, SKD Rings, and QBraID.",
          participants: "38",
          speaker: "Mr. Rushikesh Ubale, Mr. Prudhvi Pinnaka & Mr. Harshit Gupta",
          image: "assets/EVENTS/2025-26EVENTS/6JAN26.jpg"
        },
      ]
    },

  ];

  // Function to render timeline for a given year
  function renderTimeline(year) {
    const container = document.getElementById("timelineContainer");
    const yearTitle = document.getElementById("yearTitle");
    const yearDesc = document.getElementById("yearDesc");

    // Clear existing timeline
    container.innerHTML = "";

    // Find year data
    const data = timelineData.find(y => y.year === year);
    if (!data) return;

    // Set year header
    yearTitle.textContent = data.year + " Events";
    yearDesc.textContent = data.description;

    // Create event cards
    data.events.forEach(event => {
      const cardWrapper = document.createElement("div");
      cardWrapper.className = "relative pl-16 pb-24";

      cardWrapper.innerHTML = `
        <!-- Calendar icon -->
        <div class="absolute left-[-11px] top-4 w-11 h-11 bg-[#0A192F] border-4 rounded-full glow-point flex items-center justify-center">
          <span class="material-symbols-outlined text-white text-xl">calendar_today</span>
        </div>

        <!-- Date text -->
        <div class="absolute left-[-80px]  
  lg:left-[-140px] top-6 font-bold text-xl text-white/90 hidden md:block">
  ${event.date}
</div>


        <!-- Event Card -->
        <div class="event-card rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[200px] min-h-[240px] md:min-h-[300px] lg:min-h-[350px] w-full transform transition-all hover:scale-[1.01] hover:border-white/20">
          <!-- Image -->
          <div class="lg:w-[35%] aspect-square
  sm:aspect-[4/3]
  lg:aspect-auto
  lg:h-auto
  relative
  group
  bg-slate-900/50
  overflow-hidden">

            <img src="${event.image}" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity">
          </div>

          <!-- Content -->
          <div class="lg:w-[45%] p-6 lg:p-10 flex flex-col justify-between">
            <div>
              <p class="md:hidden text-sm text-white font-semibold mb-2">${event.date}</p>

              <span class="inline-block mb-3 px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] font-bold uppercase tracking-wider rounded">
                ${event.type}
              </span>
              <h2 class="text-[24px] font-bold mb-4 text-white leading-tight">${event.title}</h2>
              <p class="text-[14px] text-white/70 leading-relaxed mb-8">
                ${event.description}
              </p>
            </div>
            <div class="pt-6 border-t border-white/10">
              <div class="flex items-center justify-between gap-8">
                <div class="flex items-center gap-4">
                  <div class="bg-white/10 p-3 rounded-xl border border-white/10  aspect-square w-12 flex items-center justify-center">
                    <span class="material-symbols-outlined text-white">groups</span>
                  </div>
                  <div>
                    <p class="text-[12px] text-white/40 uppercase tracking-widest font-bold">Participants</p>
                    <p class="text-[18px] font-bold text-white">${event.participants}</p>
                  </div>
                </div>
               ${event.topWinner
    ? `
     <div class="flex items-center gap-4">
  <div class="relative">
    <div
      class="w-12 h-12 flex items-center justify-center rounded-full
             bg-amber-400 border-2 border-[#0A192F]">
      <span class="material-symbols-outlined text-[22px] text-[#0A192F]">
        emoji_events
      </span>
    </div>
  </div>

  <div>
    <p class="text-[12px] text-white/40 uppercase tracking-widest font-bold">
      Top Winner
    </p>
    <p class="text-[16px] font-semibold text-white">
      ${event.topWinner}
    </p>
  </div>
</div>
    `
    : `
        <div class="flex items-center gap-4">
          <div class="bg-purple-500/20 p-3 rounded-xl border border-purple-500/30  aspect-square w-12 flex items-center justify-center">
            <span class="material-symbols-outlined text-purple-300">mic</span>
          </div>
          <div>
            <p class="text-[12px] text-white/40 uppercase tracking-widest font-bold">Speaker</p>
            <p class="text-[16px] font-semibold text-white">${event.speaker}</p>
          </div>
        </div>
    `
}

              </div>
            </div>
          </div>
        </div>
      `;

      container.appendChild(cardWrapper);
    });
  }

  // Check URL for ?year=2023 etc.
  const params = new URLSearchParams(window.location.search);
const year = params.get("year") || "2023-24";

  renderTimeline(year);
});
