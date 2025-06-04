// Pose Data
const poseData = [
    {
        id: 'sun-salutation',
        name: 'Sun Salutation (Surya Namaskar)',
        image: 'sun-salutation.gif',
        steps: [
            'Stand upright, join palms together in a prayer position.',
            'Inhale, stretch arms overhead and bend slightly backward.',
            'Exhale, bend forward and touch toes.',
            'Inhale, place hands on the floor, extend one leg backward.',
            'Exhale, take the other leg back, forming a plank position.',
            'Lower knees, chest, and chin to the floor.',
            'Inhale, lift chest into Cobra Pose.',
            'Exhale, raise hips into Downward-Facing Dog.',
            'Inhale, bring one leg forward between hands.',
            'Exhale, bring the other leg forward and bend down.',
            'Inhale, stretch arms overhead, slightly bending back.',
            'Exhale, return to standing position.'
        ],
        benefits: [
            'Improves flexibility and blood circulation.',
            'Enhances muscle tone and strength.',
            'Aids weight loss and digestion.',
            'Reduces stress and anxiety.',
            'Improves cardiovascular health.'
        ],
        category: 'sequence'
    },
    {
        id: 'mountain-pose',
        name: 'Mountain Pose (Tadasana)',
        image: 'tadasana.jpg',
        steps: [
            'Stand with feet together, arms by the side.',
            'Distribute weight evenly on both feet.',
            'Engage thigh muscles and lift kneecaps.',
            'Lengthen tailbone toward the floor.',
            'Roll shoulders back and down, arms active.',
            'Hold for 30 seconds to 1 minute.'
        ],
        benefits: [
            'Improves posture and balance.',
            'Strengthens legs and spine.',
            'Increases height in growing children.',
            'Reduces flat feet.',
            'Relieves sciatica pain.'
        ],
        category: 'standing'
    },
    {
        id: 'tree-pose',
        name: 'Tree Pose (Vrikshasana)',
        image: 'treepose.gif',
        steps: [
            'Stand straight, shift weight to left foot.',
            'Place right foot on left inner thigh or calf (avoid knee).',
            'Join palms together in prayer position.',
            'Focus on a point ahead for balance.',
            'Hold for 30 seconds to 1 minute, then switch sides.'
        ],
        benefits: [
            'Enhances concentration and balance.',
            'Strengthens legs and spine.',
            'Improves flexibility of hip joints.',
            'Relieves sciatica pain.',
            'Builds confidence and mental focus.'
        ],
        category: 'standing'
    },
    {
        id: 'downward-dog',
        name: 'Downward-Facing Dog (Adho Mukha Svanasana)',
        image: 'downwarddog.png',
        steps: [
            'Start on hands and knees (tabletop position).',
            'Spread fingers wide, tuck toes under.',
            'Exhale, lift knees off the floor, straightening legs.',
            'Form an inverted V shape with your body.',
            'Press hands firmly into the mat, lengthen spine.',
            'Hold for 1-3 minutes.'
        ],
        benefits: [
            'Stretches hamstrings, calves, and spine.',
            'Increases blood circulation to the brain.',
            'Relieves stress and fatigue.',
            'Strengthens arms and legs.',
            'Helps relieve symptoms of menopause.'
        ],
        category: 'inversion'
    },
    {
        id: 'triangle-pose',
        name: 'Triangle Pose (Trikonasana)',
        image: 'trianglepose.gif',
        steps: [
            'Stand with legs 3-4 feet apart.',
            'Turn right foot out 90 degrees, left foot slightly in.',
            'Extend arms parallel to the ground.',
            'Exhale, reach right hand toward right foot.',
            'Left arm extends upward, gaze at left thumb.',
            'Hold for 30 seconds to 1 minute, then switch sides.'
        ],
        benefits: [
            'Strengthens legs, knees, and arms.',
            'Improves digestion and relieves back pain.',
            'Enhances spinal flexibility.',
            'Reduces stress and anxiety.',
            'Stimulates abdominal organs.'
        ],
        category: 'standing'
    },
    {
        id: 'warrior-pose',
        name: 'Warrior Pose (Virabhadrasana)',
        image: 'virabhadrasana.jpg',
        steps: [
            'Stand with legs 3-4 feet apart.',
            'Turn right foot out 90 degrees, left foot slightly in.',
            'Align right heel with left arch.',
            'Bend right knee to 90 degrees, thigh parallel to floor.',
            'Extend arms parallel to ground, gaze over right hand.',
            'Hold for 30 seconds to 1 minute, then switch sides.'
        ],
        benefits: [
            'Strengthens legs, shoulders, and arms.',
            'Improves stamina and focus.',
            'Helps in weight loss.',
            'Increases lung capacity.',
            'Relieves backaches.'
        ],
        category: 'standing'
    },
    {
        id: 'child-pose',
        name: "Child's Pose (Balasana)",
        image: 'childpose.jpg',
        steps: [
            'Kneel on the floor with big toes touching.',
            'Separate knees hip-width apart.',
            'Exhale, lay torso between thighs.',
            'Extend arms forward or alongside body.',
            'Rest forehead on the floor.',
            'Hold for 30 seconds to several minutes.'
        ],
        benefits: [
            'Relieves back and neck pain.',
            'Calms the mind and reduces stress.',
            'Stretches the lower back and hips.',
            'Helps relieve fatigue and dizziness.',
            'Gently stretches ankles and knees.'
        ],
        category: 'resting'
    },
    {
        id: 'corpse-pose',
        name: 'Corpse Pose (Shavasana)',
        image: 'shavasana.jpg',
        steps: [
            'Lie flat on your back, legs slightly apart.',
            'Arms at sides, palms facing up.',
            'Close eyes, relax entire body.',
            'Breathe naturally, release all tension.',
            'Stay in pose for 5-15 minutes.'
        ],
        benefits: [
            'Reduces stress and anxiety.',
            'Lowers blood pressure.',
            'Enhances relaxation and sleep quality.',
            'Helps relieve headaches and fatigue.',
            'Improves concentration and memory.'
        ],
        category: 'resting'
    },
    {
        id: 'alternate-nostril',
        name: 'Alternate Nostril Breathing (Anulom Vilom)',
        image: 'anulomvilom.jpeg',
        steps: [
            'Sit comfortably with spine straight.',
            'Place left hand on left knee, palm up.',
            'Bring right hand to nose, index and middle fingers folded.',
            'Close right nostril with thumb, inhale through left.',
            'Close left nostril with ring finger, exhale through right.',
            'Inhale through right, close it, exhale through left.',
            'Continue for 5-10 minutes.'
        ],
        benefits: [
            'Balances left and right brain hemispheres.',
            'Reduces stress and anxiety.',
            'Improves respiratory function.',
            'Enhances mental clarity and focus.',
            'Lowers heart rate and blood pressure.'
        ],
        category: 'breathing'
    },
    {
        id: 'skull-shining',
        name: 'Skull Shining Breath (Kapalbhati)',
        image: 'kapalbhati.png',
        steps: [
            'Sit comfortably with spine straight.',
            'Take a deep inhale through both nostrils.',
            'Exhale forcefully through nose, contracting abdomen.',
            'Allow inhales to happen passively.',
            'Start with 20-30 breaths, then rest.',
            'Gradually increase to 100 breaths.'
        ],
        benefits: [
            'Cleanses respiratory system.',
            'Strengthens abdominal muscles.',
            'Improves digestion and metabolism.',
            'Energizes the mind and body.',
            'Helps with weight loss.'
        ],
        category: 'breathing'
    },
    {
        id: 'bee-breath',
        name: 'Bee Breath (Bhramari)',
        image: 'bramari.jpeg',
        steps: [
            'Sit comfortably with spine straight.',
            'Close eyes, place index fingers on cartilage of ears.',
            'Inhale deeply through nose.',
            'Exhale while making a humming sound like a bee.',
            'Feel vibration throughout head.',
            'Repeat 5-10 times.'
        ],
        benefits: [
            'Instantly calms the mind.',
            'Reduces anger and anxiety.',
            'Lowers blood pressure.',
            'Relieves tension and headaches.',
            'Improves concentration.'
        ],
        category: 'breathing'
    },
    {
        id: 'victorious-breath',
        name: 'Victorious Breath (Ujjayi)',
        image: 'ujjayi.png',
        steps: [
            'Sit or stand comfortably.',
            'Constrict back of throat slightly.',
            'Inhale deeply through nose with ocean-like sound.',
            'Exhale through nose with same sound.',
            'Keep breath smooth and controlled.',
            'Continue for 5-10 minutes.'
        ],
        benefits: [
            'Increases oxygen absorption.',
            'Builds internal body heat.',
            'Calms the nervous system.',
            'Improves focus during yoga.',
            'Reduces insomnia.'
        ],
        category: 'breathing'
    }
];

// FAQ Data
const faqData = [
    {
        question: "What are the most common yoga injuries and how can I prevent them?",
        answer: "Common yoga injuries include muscle strains (especially hamstrings), wrist pain, lower back pain, and shoulder injuries. To prevent injuries: always warm up properly, don't push beyond your limits, maintain proper alignment, use props when needed, and listen to your body. If you feel sharp pain, stop immediately.",
        category: "injuries"
    },
    {
        question: "Can yoga help with back pain?",
        answer: "Yes, yoga can be very effective for back pain when practiced correctly. Poses like Cat-Cow, Child's Pose, and gentle twists can help relieve tension and strengthen supporting muscles. However, if you have chronic back pain or injuries, consult a doctor before starting and work with an experienced instructor.",
        category: "health"
    },
    {
        question: "How often should I practice yoga?",
        answer: "For beginners, 2-3 sessions per week is a good start. More experienced practitioners may do 4-6 sessions weekly. Even 10-15 minutes daily is beneficial. Consistency is more important than duration. Listen to your body and allow for rest days.",
        category: "general"
    },
    {
        question: "What's the best time to do yoga?",
        answer: "Morning is ideal as it energizes you for the day and helps establish a routine. Evening practice can help release tension. Avoid practicing right after meals. Ultimately, the best time is when you can be consistent.",
        category: "general"
    },
    {
        question: "Can yoga help with weight loss?",
        answer: "While yoga isn't as calorie-intensive as cardio, it can support weight loss by reducing stress (which causes weight gain), improving metabolism, and building muscle. More active styles like Vinyasa or Power Yoga burn more calories. Yoga also promotes mindful eating habits.",
        category: "health"
    },
    {
        question: "Is yoga safe during pregnancy?",
        answer: "Prenatal yoga is generally safe and beneficial, but avoid intense poses, deep twists, and lying on the belly after the first trimester. Always consult your doctor and work with a prenatal yoga specialist. Focus on gentle stretching and breathing exercises.",
        category: "health"
    },
    {
        question: "What should I wear for yoga?",
        answer: "Wear comfortable, breathable clothing that allows movement but isn't too loose. Fitted tops stay in place during inversions. Yoga is typically done barefoot for better grip and awareness. Avoid heavy perfumes or jewelry that might distract.",
        category: "general"
    },
    {
        question: "How do I know if I'm doing a pose correctly?",
        answer: "Signs of proper alignment: no sharp pain, ability to breathe smoothly, feeling the intended stretch/strength in target areas. Use mirrors, video yourself, or work with an instructor. Technology like our pose recognition can also help provide feedback.",
        category: "poses"
    },
    {
        question: "Can yoga help with anxiety and depression?",
        answer: "Yes, yoga is clinically proven to reduce symptoms of anxiety and depression. Breathing exercises calm the nervous system. Physical poses release tension. Meditation cultivates mindfulness. Regular practice increases GABA levels, which promote relaxation.",
        category: "health"
    },
    {
        question: "What's the difference between yoga and stretching?",
        answer: "While both improve flexibility, yoga is a holistic practice combining physical postures, breath control, meditation, and ethical principles. Yoga builds strength and balance while promoting mind-body awareness. Stretching focuses solely on increasing flexibility.",
        category: "general"
    },
    {
        question: "Should I eat before yoga?",
        answer: "It's best to practice on an empty stomach or after a light snack 1-2 hours before. Heavy meals can cause discomfort during twists and forward bends. After practice, wait 30 minutes before eating to allow energy to redistribute.",
        category: "general"
    },
    {
        question: "How can I modify poses for my limited flexibility?",
        answer: "Use props like blocks, straps, and bolsters. Bend knees in forward folds. Reduce range of motion. Focus on proper alignment over depth. Over time, flexibility will improve. Our app provides modifications for all poses based on your ability level.",
        category: "poses"
    },
    {
        question: "What are the risks of overstretching in yoga?",
        answer: "Overstretching can lead to muscle strains, ligament damage, and joint instability. Signs include pain lasting more than 24 hours, swelling, or reduced range of motion. Always warm up, move gradually, and respect your body's limits to prevent overstretching injuries.",
        category: "injuries"
    },
    {
        question: "Can yoga replace other forms of exercise?",
        answer: "Yoga provides many benefits but may not fully replace cardio or strength training for specific goals. A balanced approach combining yoga with other activities is ideal. However, vigorous yoga styles can provide cardiovascular and strength benefits similar to other exercises.",
        category: "general"
    },
    {
        question: "How do I protect my wrists in yoga?",
        answer: "Distribute weight evenly across the entire hand in poses like Downward Dog. Strengthen wrists with specific exercises. Use modifications like fists or forearms if needed. Avoid locking elbows which transfers more weight to wrists. Build strength gradually.",
        category: "injuries"
    },
    {
        question: "What are the benefits of Corpse Pose (Shavasana)?",
        answer: "Shavasana allows the body to integrate the benefits of practice, reduces stress, lowers blood pressure, calms the nervous system, improves sleep quality, enhances mental clarity, and promotes deep relaxation. It's considered one of the most important poses despite its simplicity.",
        category: "poses"
    },
    {
        question: "Is yoga a religion?",
        answer: "No, yoga is not a religion. While it originated in ancient India with spiritual roots, modern yoga is practiced as a physical and mental discipline by people of all faiths and none. The philosophical aspects are optional. You can practice just the physical postures and breathing.",
        category: "general"
    },
    {
        question: "How can yoga help with posture?",
        answer: "Yoga strengthens core and back muscles while increasing spinal flexibility. Poses like Mountain Pose teach proper alignment. Regular practice counteracts effects of sitting and screen time by opening the chest and shoulders. Body awareness improves, helping maintain better posture off the mat.",
        category: "health"
    },
    {
        question: "What should I do if I feel dizzy during yoga?",
        answer: "Stop immediately and come into Child's Pose or lie down. Breathe deeply. Dizziness can result from dehydration, low blood sugar, or moving too quickly between poses. Hydrate before practice, avoid practicing in extreme heat initially, and move mindfully between poses.",
        category: "injuries"
    },
    {
        question: "How long does it take to see benefits from yoga?",
        answer: "Some benefits like stress reduction and improved sleep may be felt immediately. Physical changes like increased flexibility and strength typically show in 4-8 weeks with regular practice. Deeper benefits like emotional balance develop over months to years of consistent practice.",
        category: "general"
    }
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Show home page by default
    showSection('home');
    
    // Initialize pose list
    initializePoseList();
    
    // Initialize FAQ list
    initializeFAQList();
    
    // Initialize progress data
    initializeProgressData();
    
    // Set up form submission
    document.getElementById('healthForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveHealthProfile();
    });
    
    // Set up navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
            
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
            document.querySelector('.hamburger').classList.remove('active');
        });
    });
    
    // Initialize chatbot with some common questions
    initializeChatbot();
});

// Show a specific section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show target section
    document.getElementById(sectionId).style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Initialize the pose list
function initializePoseList() {
    const poseList = document.getElementById('poseList');
    
    // Group poses by category
    const categories = {
        standing: [],
        inversion: [],
        resting: [],
        breathing: [],
        sequence: []
    };
    
    poseData.forEach(pose => {
        categories[pose.category].push(pose);
    });
    
    // Add poses to the list by category
    for (const category in categories) {
        if (categories[category].length > 0) {
            // Add category heading
            const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
            const categoryItem = document.createElement('li');
            categoryItem.className = 'pose-category';
            categoryItem.textContent = categoryName + ' Poses';
            poseList.appendChild(categoryItem);
            
            // Add poses for this category
            categories[category].forEach(pose => {
                const poseItem = document.createElement('li');
                poseItem.className = 'pose-item';
                poseItem.textContent = pose.name;
                poseItem.onclick = () => showPose(pose.id);
                poseList.appendChild(poseItem);
            });
        }
    }
}

// Search poses
function searchPoses() {
    const input = document.getElementById('poseSearch');
    const filter = input.value.toUpperCase();
    const poseList = document.getElementById('poseList');
    const poseItems = poseList.getElementsByClassName('pose-item');
    
    for (let i = 0; i < poseItems.length; i++) {
        const poseName = poseItems[i].textContent || poseItems[i].innerText;
        if (poseName.toUpperCase().indexOf(filter) > -1) {
            poseItems[i].style.display = "";
        } else {
            poseItems[i].style.display = "none";
        }
    }
    
    // Show/hide category headings based on visible poses
    const categories = poseList.getElementsByClassName('pose-category');
    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        let hasVisiblePoses = false;
        let nextElement = category.nextElementSibling;
        
        while (nextElement && nextElement.classList.contains('pose-item')) {
            if (nextElement.style.display !== 'none') {
                hasVisiblePoses = true;
                break;
            }
            nextElement = nextElement.nextElementSibling;
        }
        
        category.style.display = hasVisiblePoses ? '' : 'none';
    }
}

// Show pose details
function showPose(poseId) {
    const pose = poseData.find(p => p.id === poseId);
    if (!pose) return;
    
    const poseDetails = document.getElementById('poseDetails');
    poseDetails.innerHTML = `
        <h2>${pose.name}</h2>
        <img src="${pose.image}" alt="${pose.name}" class="pose-image">
        <h3>Steps:</h3>
        <ol>
            ${pose.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
        <h3>Benefits:</h3>
        <ul>
            ${pose.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
        </ul>
    `;
    
    // Update active pose in sidebar
    document.querySelectorAll('.pose-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Find the pose item and make it active
    const poseItems = document.querySelectorAll('.pose-item');
    for (let i = 0; i < poseItems.length; i++) {
        if (poseItems[i].textContent === pose.name) {
            poseItems[i].classList.add('active');
            break;
        }
    }
    
    // Scroll to top of pose details
    poseDetails.scrollTo(0, 0);
}

// Initialize FAQ list
function initializeFAQList() {
    const faqList = document.getElementById('faqList');
    
    faqData.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.dataset.category = faq.category;
        
        const faqQuestion = document.createElement('div');
        faqQuestion.className = 'faq-question';
        faqQuestion.innerHTML = `
            <span>${faq.question}</span>
            <span>+</span>
        `;
        
        const faqAnswer = document.createElement('div');
        faqAnswer.className = 'faq-answer';
        faqAnswer.innerHTML = `<p>${faq.answer}</p>`;
        
        faqQuestion.addEventListener('click', () => {
            faqAnswer.classList.toggle('show');
            faqQuestion.querySelector('span:last-child').textContent = 
                faqAnswer.classList.contains('show') ? '−' : '+';
        });
        
        faqItem.appendChild(faqQuestion);
        faqItem.appendChild(faqAnswer);
        faqList.appendChild(faqItem);
    });
}

// Filter FAQs by category
function filterFAQs(category) {
    const faqItems = document.querySelectorAll('.faq-item');
    const categoryButtons = document.querySelectorAll('.faq-category-btn');
    
    // Update active category button
    categoryButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show/hide FAQs based on category
    faqItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Save health profile
function saveHealthProfile() {
    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        weight: document.getElementById('weight').value,
        height: document.getElementById('height').value,
        bp: document.getElementById('bp').value,
        goals: document.getElementById('goals').value,
        diseases: document.getElementById('diseases').value,
        medications: document.getElementById('medications').value,
        experience: document.getElementById('experience').value
    };
    
    // Save to localStorage (in a real app, this would go to a server)
    localStorage.setItem('healthProfile', JSON.stringify(formData));
    
    // Show success message
    alert('Health profile saved successfully!');
    
    // Update recommendations based on profile
    updateRecommendations(formData);
}

// Update recommendations based on health profile
function updateRecommendations(profile) {
    // In a real app, this would generate personalized recommendations
    console.log('Generating recommendations for:', profile);
}

// Initialize progress data
function initializeProgressData() {
    // In a real app, this would come from a server or localStorage
    const progressData = {
        currentStreak: 7,
        totalSessions: 24,
        favoritePose: 'Downward-Facing Dog',
        achievements: [
            {
                title: 'Mastered Tree Pose',
                description: 'Held for 60 seconds on each side',
                icon: '🏆'
            },
            {
                title: '7-Day Streak',
                description: 'Practiced yoga for 7 consecutive days',
                icon: '🌟'
            },
            {
                title: 'First Meditation',
                description: 'Completed 10-minute guided meditation',
                icon: '🧘'
            }
        ]
    };
    
    // Update progress stats
    document.getElementById('currentStreak').textContent = `${progressData.currentStreak} days`;
    document.getElementById('totalSessions').textContent = progressData.totalSessions;
    document.getElementById('favoritePose').textContent = progressData.favoritePose;
    
    // Update achievements
    const achievementsList = document.getElementById('achievementsList');
    achievementsList.innerHTML = '';
    
    progressData.achievements.forEach(achievement => {
        const achievementItem = document.createElement('div');
        achievementItem.className = 'achievement-item';
        achievementItem.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-text">
                <p>${achievement.title}</p>
                <p>${achievement.description}</p>
            </div>
        `;
        achievementsList.appendChild(achievementItem);
    });
}

// Initialize chatbot
function initializeChatbot() {
    // Add some quick question buttons
    const quickQuestions = [
        "What's a good beginner pose?",
        "How can yoga help with stress?",
        "What should I do for back pain?",
        "How often should I practice?"
    ];
    
    const messagesContainer = document.getElementById('chatbotMessages');
    
    quickQuestions.forEach(question => {
        const quickQuestion = document.createElement('div');
        quickQuestion.className = 'message bot-message quick-question';
        quickQuestion.textContent = question;
        quickQuestion.onclick = () => {
            document.getElementById('chatbotInput').value = question;
            sendMessage();
        };
        messagesContainer.appendChild(quickQuestion);
    });
}

// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Navigate to a section
function navigateTo(sectionId) {
    const sectionLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    if (sectionLink) {
        sectionLink.click();
    }
}