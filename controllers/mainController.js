angular.module('csiApp')
.controller('MainController', ['$scope', '$http', function($scope, $http) {
    
    // Current year
    $scope.currentYear = new Date().getFullYear();
    
    // Statistics
   // Update stats in your controller
$scope.stats = [
    { value: 736, plus: true, label: 'Students Registered' },
    { value: 12, plus: true, label: 'Activities Conducted' },
    { value: 652, plus: true, label: 'Students Benefited' },
    { value: '2024-25', plus: false, label: 'Current Academic Year' }
];

// Add binary animation initialization
$scope.initBinaryAnimation = function() {
    setTimeout(() => {
        const container = document.querySelector('.binary-animation');
        if (container) {
            // Generate random binary digits for animation
            const digits = container.querySelectorAll('.binary-digit');
            digits.forEach(digit => {
                // Random start position
                const left = Math.random() * 100;
                const delay = Math.random() * 5;
                const duration = 10 + Math.random() * 20;
                
                digit.style.left = `${left}%`;
                digit.style.animationDuration = `${duration}s`;
                digit.style.animationDelay = `${delay}s`;
                
                // Randomly change binary digit
                setInterval(() => {
                    digit.textContent = Math.random() > 0.5 ? '1' : '0';
                }, 500);
            });
        }
    }, 1000);
};

// Call initialization
$scope.initBinaryAnimation();
    
    // Chapter Objectives
    $scope.objectives = [
        "Gain exposure to the latest trends and advancements in the IT industry",
        "Enhance technical and professional skills through workshops, seminars, and competitions",
        "Encourage innovation, research, and collaborative learning",
        "Build a network with industry experts, academicians, and fellow technocrats"
    ];
    
    // Yearly Statistics
    $scope.yearlyStats = [
        { year: '2024-25', students: 736 },
        { year: '2023-24', students: 550 },
        { year: '2022-23', students: 452 },
        { year: '2021-22', students: 410 },
        { year: '2020-21', students: 350 }
    ];
    
    // Recent Activities
    $scope.activities = [
        {
            title: "Pathway to GRE/GMAT Excellence",
            date: "09/08/2024",
            description: "Expert session focusing on preparation strategies for GRE/GMAT exams.",
            tags: ["Expert Session", "Career"],
            image: "assets/activity-images/gre-session.jpg"
        },
        {
            title: "Frontend Designing with AngularJS",
            date: "13-17/01/2025",
            description: "5-day skill development program covering modern frontend development.",
            tags: ["Workshop", "Web Development"],
            image: "assets/activity-images/angular-workshop.jpg"
        },
        {
            title: "Android App Development with Kotlin",
            date: "03-04/04/2025",
            description: "Hands-on workshop on building Android applications using Kotlin.",
            tags: ["Workshop", "Mobile Development"],
            image: "assets/activity-images/android-workshop.jpg"
        },
        {
            title: "Salesforce - Decoding the Buzz",
            date: "11/08/2023",
            description: "Expert lecture on Salesforce platform and career opportunities.",
            tags: ["Expert Lecture", "Cloud"],
            image: "assets/activity-images/salesforce-session.jpg"
        },
        {
            title: "IBM Cloud Skill Development",
            date: "26-28/02/2024",
            description: "3-day intensive program on IBM Cloud technologies and services.",
            tags: ["Training", "Cloud Computing"],
            image: "assets/activity-images/ibm-cloud.jpg"
        },
        {
            title: "Higher Education in UK",
            date: "26/10/2023",
            description: "Expert session on higher education and work opportunities in United Kingdom.",
            tags: ["Career", "Study Abroad"],
            image: "assets/activity-images/uk-education.jpg"
        }
    ];
    
    // Upcoming Events
    $scope.upcomingEvents = [
        {
            title: "AI/ML Workshop",
            day: "15",
            month: "Mar",
            time: "10:00 AM - 4:00 PM",
            description: "Hands-on workshop on Artificial Intelligence and Machine Learning fundamentals.",
            type: "Workshop"
        },
        {
            title: "Hackathon 2024",
            day: "22",
            month: "Mar",
            time: "24 Hours",
            description: "Annual coding competition with exciting prizes and recognition.",
            type: "Competition"
        },
        {
            title: "Industry Connect",
            day: "05",
            month: "Apr",
            time: "2:00 PM - 5:00 PM",
            description: "Networking session with IT industry leaders and recruiters.",
            type: "Networking"
        }
    ];
    
    // Winners/Achievements
    $scope.winners = [
        {
            name: "Team Innovators",
            position: "1st Place Hackathon 2023",
            achievement: "Developed an AI-powered healthcare solution",
            image: "assets/winners/team1.jpg"
        },
        {
            name: "Sarah Johnson",
            position: "Best Project Award",
            achievement: "Blockchain-based voting system",
            image: "assets/winners/student1.jpg"
        },
        {
            name: "Tech Wizards",
            position: "National Finalists",
            achievement: "Represented college at national level competition",
            image: "assets/winners/team2.jpg"
        },
        {
            name: "Michael Chen",
            position: "Research Excellence",
            achievement: "Published paper in IEEE conference",
            image: "assets/winners/student2.jpg"
        }
    ];
    
    // Newsletter
    $scope.newsletterSubscribers = 1250;
    $scope.newsletterEmail = "";
    
    $scope.subscribeNewsletter = function() {
        if ($scope.newsletterEmail) {
            alert('Thank you for subscribing to our newsletter!');
            $scope.newsletterSubscribers++;
            $scope.newsletterEmail = "";
        }
    };
    
    // Smooth scrolling for anchor links
    $scope.scrollTo = function(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    // Initialize with current data
    $http.get('api/activities.json').then(function(response) {
        // You can update activities from API if needed
    }).catch(function(error) {
        console.log('Using default data');
    });
}]);