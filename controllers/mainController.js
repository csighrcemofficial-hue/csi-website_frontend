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
    
   
    // Upcoming Events
    $scope.upcomingEvents = [
        {
            title: "Codex",
            day: "04",
            month: "Feb",
            time: "10:00 AM - 4:00 PM",
            description: "Hands-on workshop on Artificial Intelligence and Machine Learning fundamentals.",
            type: "Coding Competition"
        },
        
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