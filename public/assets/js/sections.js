// Hero Section with Testimonial Carousel
function heroSection() {
    return `
    <section class="relative bg-gray-900 text-white py-20">
        <div class="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
        <div class="absolute inset-0 bg-cover bg-center opacity-20" style="background-image: url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=2000')"></div>
        
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 class="text-5xl font-bold mb-6">MiGreat Germany</h1>
                    <p class="text-2xl mb-4">Your trusted companion for getting a visa and moving for work</p>
                    <p class="text-xl text-gray-300 mb-8">Navigate your journey to Germany with confidence. From visa applications to degree recognition, language learning to job matching - we're here to make your dream of working in Germany a reality.</p>
                    
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="visa-check.html" class="btn-animated inline-flex items-center justify-center px-8 py-3 gradient-bg text-white font-semibold rounded-lg hover:opacity-90 transition">
                            Check Visa Eligibility
                            <i data-lucide="arrow-right" class="ml-2 h-5 w-5"></i>
                        </a>
                        <a href="#services" class="btn-animated inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition">
                            Explore Services
                        </a>
                    </div>
                </div>
                
                <div x-data="heroCarousel()" x-init="init()">
                    <div class="relative carousel-container">
                        <!-- Testimonial Cards -->
                        <div class="carousel-wrapper">
                            <!-- Card 1: Priya Sharma (India - IT) -->
                            <div :class="currentSlide === 0 ? 'carousel-item active' : 'carousel-item'" class="w-full">
                                <div class="testimonial-card bg-white rounded-2xl shadow-2xl p-6 text-gray-900">
                                    <div class="flex items-start space-x-4">
                                        <img src="assets/images/priya-sharma-new.jpg" alt="Priya Sharma" class="w-16 h-16 rounded-full object-cover">
                                        <div class="flex-1">
                                            <h3 class="font-semibold text-lg">Priya Sharma</h3>
                                            <p class="text-sm text-gray-600">Software Engineer</p>
                                            <div class="flex items-center gap-4 my-3">
                                                <div>
                                                    <div class="text-sm text-gray-500">Before</div>
                                                    <div class="text-lg font-bold text-gray-700">₹60,000</div>
                                                </div>
                                                <i data-lucide="arrow-right" class="h-5 w-5 text-red-600"></i>
                                                <div>
                                                    <div class="text-sm text-gray-500">After</div>
                                                    <div class="text-lg font-bold text-green-600">€4,500</div>
                                                </div>
                                            </div>
                                            <p class="text-sm italic text-gray-600">"In Germany, I have excellent working conditions, fair pay, and my skills are truly appreciated. The work-life balance is incredible compared to what I had in India."</p>
                                            <div class="mt-3">
                                                <p class="text-xs text-red-600 font-medium">From India 🇮🇳</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Card 2: Akosua Mensah (Ghana - Healthcare) -->
                            <div :class="currentSlide === 1 ? 'carousel-item active' : 'carousel-item'" class="w-full">
                                <div class="testimonial-card bg-white rounded-2xl shadow-2xl p-6 text-gray-900">
                                    <div class="flex items-start space-x-4">
                                        <img src="assets/images/akosua-mensah-new.jpg" alt="Akosua Mensah" class="w-16 h-16 rounded-full object-cover">
                                        <div class="flex-1">
                                            <h3 class="font-semibold text-lg">Akosua Mensah</h3>
                                            <p class="text-sm text-gray-600">Geriatric Nurse</p>
                                            <div class="flex items-center gap-4 my-3">
                                                <div>
                                                    <div class="text-sm text-gray-500">Before</div>
                                                    <div class="text-lg font-bold text-gray-700">GH₵3,500</div>
                                                </div>
                                                <i data-lucide="arrow-right" class="h-5 w-5 text-red-600"></i>
                                                <div>
                                                    <div class="text-sm text-gray-500">After</div>
                                                    <div class="text-lg font-bold text-green-600">€3,600</div>
                                                </div>
                                            </div>
                                            <p class="text-sm italic text-gray-600">"I came to Germany through a nursing program and now work in elderly care. The salary is 12 times what I earned in Ghana, and I can send money home to help my siblings go to school."</p>
                                            <div class="mt-3">
                                                <p class="text-xs text-red-600 font-medium">From Ghana 🇬🇭</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Card 3: Chidinma Okafor (Nigeria - Hospitality) -->
                            <div :class="currentSlide === 2 ? 'carousel-item active' : 'carousel-item'" class="w-full">
                                <div class="testimonial-card bg-white rounded-2xl shadow-2xl p-6 text-gray-900">
                                    <div class="flex items-start space-x-4">
                                        <img src="assets/images/chidinma-okafor-new.jpg" alt="Chidinma Okafor" class="w-16 h-16 rounded-full object-cover">
                                        <div class="flex-1">
                                            <h3 class="font-semibold text-lg">Chidinma Okafor</h3>
                                            <p class="text-sm text-gray-600">Hotel Manager</p>
                                            <div class="flex items-center gap-4 my-3">
                                                <div>
                                                    <div class="text-sm text-gray-500">Before</div>
                                                    <div class="text-lg font-bold text-gray-700">₦280,000</div>
                                                </div>
                                                <i data-lucide="arrow-right" class="h-5 w-5 text-red-600"></i>
                                                <div>
                                                    <div class="text-sm text-gray-500">After</div>
                                                    <div class="text-lg font-bold text-green-600">€3,200</div>
                                                </div>
                                            </div>
                                            <p class="text-sm italic text-gray-600">"The vocational visa made my move seamless. I now work for a hotel chain in Munich and my salary increased 8 times. My family back home is so proud."</p>
                                            <div class="mt-3">
                                                <p class="text-xs text-red-600 font-medium">From Nigeria 🇳🇬</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Card 4: Wanjiru Kamau (Kenya - Early Childhood Education) -->
                            <div :class="currentSlide === 3 ? 'carousel-item active' : 'carousel-item'" class="w-full">
                                <div class="testimonial-card bg-white rounded-2xl shadow-2xl p-6 text-gray-900">
                                    <div class="flex items-start space-x-4">
                                        <img src="assets/images/wanjiru-kamau-new.jpg" alt="Wanjiru Kamau" class="w-16 h-16 rounded-full object-cover">
                                        <div class="flex-1">
                                            <h3 class="font-semibold text-lg">Wanjiru Kamau</h3>
                                            <p class="text-sm text-gray-600">Kindergarten Teacher</p>
                                            <div class="flex items-center gap-4 my-3">
                                                <div>
                                                    <div class="text-sm text-gray-500">Before</div>
                                                    <div class="text-lg font-bold text-gray-700">KSh 45,000</div>
                                                </div>
                                                <i data-lucide="arrow-right" class="h-5 w-5 text-red-600"></i>
                                                <div>
                                                    <div class="text-sm text-gray-500">After</div>
                                                    <div class="text-lg font-bold text-green-600">€2,800</div>
                                                </div>
                                            </div>
                                            <p class="text-sm italic text-gray-600">"Working in a German kindergarten has been incredibly rewarding. The facilities are world-class and the support for education workers is outstanding."</p>
                                            <div class="mt-3">
                                                <p class="text-xs text-red-600 font-medium">From Kenya 🇰🇪</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

// NEW: How It Works Section
function howItWorksSection() {
    return `
    <section id="get-started" class="py-20 bg-gradient-to-br from-red-50 to-yellow-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Find out which visa you need and how to fulfill your dream of a job abroad in three easy steps</h2>
                <p class="text-xl text-gray-600">Your journey to Germany starts here</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="fade-in card-hover bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
                    <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-3xl font-bold text-white">1</span>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">Check Your Degree</h3>
                    <p class="text-gray-600 mb-4">(if applicable)</p>
                    <p class="text-gray-700">Find out if your qualification is recognized in Germany using our degree checker tool.</p>
                    <a href="degree-check.html" class="inline-block mt-4 text-red-600 font-semibold hover:text-red-700">
                        Check Now →
                    </a>
                </div>
                
                <div class="fade-in card-hover bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
                    <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-3xl font-bold text-white">2</span>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">Check Your Visa Eligibility</h3>
                    <p class="text-gray-700">Take our quick assessment to find out which German visa you qualify for.</p>
                    <a href="visa-check.html" class="inline-block mt-4 text-red-600 font-semibold hover:text-red-700">
                        Start Assessment →
                    </a>
                </div>
                
                <div class="fade-in card-hover bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
                    <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-3xl font-bold text-white">3</span>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">Fill Our Background Survey</h3>
                    <p class="text-gray-700">Help us understand your situation so we can provide personalized support for your journey.</p>
                    <a href="https://docs.google.com/forms/d/1LcyfLhhQoBr2FyHhsk9DyxHymTxrGn1tPZw3hFZQl_M/viewform" target="_blank" class="inline-block mt-4 text-red-600 font-semibold hover:text-red-700">
                        Get Started →
                    </a>
                </div>
            </div>
        </div>
    </section>
    `;
}

// Services Section
function servicesSection() {
    return `
    <section id="services" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
                <p class="text-xl text-gray-600">Comprehensive support for every step of your German migration journey</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="service-card fade-in bg-white border rounded-xl p-6 hover:shadow-lg transition">
                    <div class="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                        <i data-lucide="file-text" class="h-6 w-6 text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Visa Applications</h3>
                    <p class="text-gray-600 mb-4">Expert guidance through German visa processes with 95% success rate</p>
                    <a href="visa-check.html" class="text-red-600 font-semibold hover:text-red-700">Learn More →</a>
                </div>
                          <div class="service-card fade-in bg-white border rounded-xl p-6 hover:shadow-lg transition">
                    <div class="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                        <i data-lucide="graduation-cap" class="h-6 w-6 text-white"></i>                   </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Degree Recognition</h3>
                    <p class="text-gray-600 mb-4">Get your qualifications recognized in Germany based on official anabin database</p>
                    <a href="degree-check.html" class="text-red-600 font-semibold hover:text-red-700">Check Recognition →</a>
                </div>
                
                <div class="service-card fade-in bg-white border rounded-xl p-6 hover:shadow-lg transition opacity-60">
                    <div class="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center mb-4">
                        <i data-lucide="briefcase" class="h-6 w-6 text-gray-500"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">German Language</h3>
                    <p class="text-gray-600 mb-4">Structured learning programs from A1 to C2 level certification</p>
                    <span class="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full">Coming Soon</span>
                </div>
                
                <div class="service-card fade-in bg-white border rounded-xl p-6 hover:shadow-lg transition opacity-60">
                    <div class="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center mb-4">
                        <i data-lucide="book-open" class="h-6 w-6 text-gray-500"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Job Matching</h3>
                    <p class="text-gray-600 mb-4">Connect with German employers looking for your specific skills</p>
                    <span class="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full">Coming Soon</span>
                </div>
            </div>
        </div>
    </section>
    `;
}

// Stats Section
function statsSection() {
    return `
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
                <p class="text-xl text-gray-600">Join the growing community of successful German migrants</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="stat-card scale-in bg-white rounded-xl shadow-lg p-8 text-center">
                    <div class="text-5xl font-bold gradient-bg bg-clip-text text-transparent mb-2">400,000+</div>
                    <div class="text-gray-600">People migrate to Germany for work annually</div>
                </div>
                
                <div class="stat-card scale-in bg-white rounded-xl shadow-lg p-8 text-center">
                    <div class="text-5xl font-bold gradient-bg bg-clip-text text-transparent mb-2">€58,940</div>
                    <div class="text-gray-600">Average annual salary</div>
                </div>
                
                <div class="stat-card scale-in bg-white rounded-xl shadow-lg p-8 text-center">
                    <div class="text-5xl font-bold gradient-bg bg-clip-text text-transparent mb-2">190.13</div>
                    <div class="text-gray-600">Quality of Life Index<br><span class="text-sm">Consistently top ranked (Numbeo Index)</span></div>
                </div>
            </div>
        </div>
    </section>
    `;
}

// Success Stories Section with NEW testimonials from all 4 target countries
function successStoriesSection() {
    return `
    <section id="success-stories" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
                <p class="text-xl text-gray-600">Discover how our clients from India, Ghana, Nigeria, and Kenya achieved their German dreams</p>
            </div>
            
            <div x-data="carousel()" class="relative">
                <!-- Carousel Container -->
                <div class="overflow-hidden">
                    <div class="flex transition-transform duration-500 ease-in-out" :style="'transform: translateX(-' + (currentSlide * 100) + '%)'">
                        <!-- Slide 1: India, Ghana, Nigeria -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                ${successStoryCard('Priya Sharma', 'India 🇮🇳', 'Software Engineer', '₹60,000', '€4,500', 'priya-sharma-avatar.webp', 'In Germany, I have excellent working conditions, fair pay, and my skills are truly appreciated. The work-life balance is incredible compared to what I had in India.')}
                                ${successStoryCard('Rajesh Kumar', 'India 🇮🇳', 'Registered Nurse', '₹35,000', '€3,400', 'success-story-avatar.webp', 'As a nurse in Germany, I\'m treated with respect and dignity. The healthcare system here values its workers, and I can finally support my family properly.')}
                                ${successStoryCard('Amit Patel', 'India 🇮🇳', 'Mechanical Engineer', '₹80,000', '€4,800', 'success-story-avatar.webp', 'Working at a German automotive company has been a dream come true. The engineering standards and innovation here are world-class.')}
                            </div>
                        </div>
                        <!-- Slide 2: Ghana -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                ${successStoryCard('Akosua Mensah', 'Ghana 🇬🇭', 'Geriatric Nurse', 'GH₵3,500', '€3,600', 'success-story-avatar.webp', 'I came to Germany through a nursing program and now work in elderly care. The salary is 12 times what I earned in Ghana, and I can send money home to help my siblings go to school.')}
                                ${successStoryCard('Kwame Osei', 'Ghana 🇬🇭', 'Data Analyst', 'GH₵4,000', '€4,200', 'success-story-avatar.webp', 'The tech scene in Berlin is amazing. I went from struggling to find opportunities in Accra to working for a major fintech company with great benefits.')}
                                ${successStoryCard('Kofi Asante', 'Ghana 🇬🇭', 'Plumber', 'GH₵2,800', '€3,000', 'success-story-avatar.webp', 'I completed my Ausbildung as a plumber and now have a permanent job. The training system in Germany is excellent, and skilled workers are highly valued.')}
                            </div>
                        </div>
                        <!-- Slide 3: Nigeria -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                ${successStoryCard('Chidinma Okafor', 'Nigeria 🇳🇬', 'Software Developer', '₦450,000', '€4,600', 'success-story-avatar.webp', 'The EU Blue Card made my move seamless. I now work for a tech startup in Munich and my salary increased 8 times. My family back home is so proud.')}
                                ${successStoryCard('David Okafor', 'Nigeria 🇳🇬', 'Electrician', '₦180,000', '€2,800', 'david-okafor-avatar.webp', 'I started with an Ausbildung program and now I\'m a certified electrician working on major construction projects. The opportunities here are endless.')}
                                ${successStoryCard('Oluwaseun Adeyemi', 'Nigeria 🇳🇬', 'Civil Engineer', '₦600,000', '€4,400', 'success-story-avatar.webp', 'Working on infrastructure projects in Germany has elevated my career. The professional standards and project scale are incredible.')}
                            </div>
                        </div>
                        <!-- Slide 4: Nigeria & Kenya -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                ${successStoryCard('Emmanuel Nwosu', 'Nigeria 🇳🇬', 'Construction Manager', '₦500,000', '€4,000', 'success-story-avatar.webp', 'Germany\'s construction boom created amazing opportunities. I manage teams on major building projects and earn more than I ever imagined.')}
                                ${successStoryCard('Wanjiru Kamau', 'Kenya 🇰🇪', 'Pediatric Nurse', 'KSh 65,000', '€3,500', 'success-story-avatar.webp', 'Working in a German children\'s hospital has been incredibly rewarding. The facilities are world-class and the support for healthcare workers is outstanding.')}
                                ${successStoryCard('Brian Mwangi', 'Kenya 🇰🇪', 'Cybersecurity Specialist', 'KSh 120,000', '€5,200', 'success-story-avatar.webp', 'Germany\'s demand for cybersecurity experts opened doors I never thought possible. I work for a major bank and the career growth has been phenomenal.')}
                            </div>
                        </div>
                        <!-- Slide 5: Kenya -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                ${successStoryCard('Grace Wambui', 'Kenya 🇰🇪', 'Research Scientist', 'KSh 90,000', '€4,300', 'success-story-avatar.webp', 'I work at a renewable energy research institute in Hamburg. The funding and resources for scientific research in Germany are unmatched.')}
                                ${successStoryCard('Joseph Omondi', 'Kenya 🇰🇪', 'Social Worker', 'KSh 55,000', '€3,100', 'success-story-avatar.webp', 'Working with refugee integration programs in Berlin has been fulfilling. Germany values social workers and provides excellent training and support.')}
                                <div class="bg-gradient-to-br from-red-50 to-yellow-50 rounded-xl shadow-lg p-8 flex items-center justify-center">
                                    <div class="text-center">
                                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Your Story Could Be Next!</h3>
                                        <p class="text-gray-700 mb-6">Join hundreds of successful professionals from India, Ghana, Nigeria, and Kenya who have made Germany their home.</p>
                                        <a href="https://docs.google.com/forms/d/1LcyfLhhQoBr2FyHhsk9DyxHymTxrGn1tPZw3hFZQl_M/viewform" target="_blank" class="inline-flex items-center justify-center px-6 py-3 gradient-bg text-white font-semibold rounded-lg hover:opacity-90 transition">
                                            Get Started Today
                                            <i data-lucide="arrow-right" class="ml-2 h-5 w-5"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Navigation Buttons -->
                <button @click="prev()" class="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition z-10">
                    <i data-lucide="chevron-left" class="h-6 w-6 text-gray-700"></i>
                </button>
                <button @click="next()" class="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition z-10">
                    <i data-lucide="chevron-right" class="h-6 w-6 text-gray-700"></i>
                </button>
                
                <!-- Indicators -->
                <div class="flex justify-center mt-8 space-x-2">
                    <button @click="currentSlide = 0" :class="currentSlide === 0 ? 'bg-red-600' : 'bg-gray-300'" class="w-3 h-3 rounded-full transition"></button>
                    <button @click="currentSlide = 1" :class="currentSlide === 1 ? 'bg-red-600' : 'bg-gray-300'" class="w-3 h-3 rounded-full transition"></button>
                    <button @click="currentSlide = 2" :class="currentSlide === 2 ? 'bg-red-600' : 'bg-gray-300'" class="w-3 h-3 rounded-full transition"></button>
                    <button @click="currentSlide = 3" :class="currentSlide === 3 ? 'bg-red-600' : 'bg-gray-300'" class="w-3 h-3 rounded-full transition"></button>
                    <button @click="currentSlide = 4" :class="currentSlide === 4 ? 'bg-red-600' : 'bg-gray-300'" class="w-3 h-3 rounded-full transition"></button>
                </div>
            </div>
        </div>
    </section>
    `;
}

function successStoryCard(name, country, profession, before, after, image, quote) {
    return `
    <div class="testimonial-card bg-white border rounded-xl shadow-lg p-6 hover:shadow-xl transition">
        <div class="flex items-start space-x-4 mb-4">
            <img src="assets/images/${image}" alt="${name}" class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0">
            <div>
                <h3 class="font-bold text-lg text-gray-900">${name}</h3>
                <p class="text-sm text-gray-600">${country} • ${profession}</p>
            </div>
        </div>
        
        <div class="flex items-center gap-4 my-4 bg-gray-50 p-4 rounded-lg">
            <div>
                <div class="text-xs text-gray-500">Before</div>
                <div class="text-lg font-bold text-gray-700">${before}</div>
            </div>
            <i data-lucide="arrow-right" class="h-5 w-5 text-red-600"></i>
            <div>
                <div class="text-xs text-gray-500">After</div>
                <div class="text-lg font-bold text-green-600">${after}</div>
            </div>
        </div>
        
        <p class="text-sm italic text-gray-600">"${quote}"</p>
    </div>
    `;
}

// Why Germany Section
function whyGermanySection() {
    return `
    <section id="why-germany" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Why Choose Germany?</h2>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white rounded-xl p-6 text-center">
                    <i data-lucide="shield-check" class="h-12 w-12 text-green-600 mx-auto mb-4"></i>
                    <h3 class="text-lg font-semibold text-gray-900 mb-3">Job Security</h3>
                    <p class="text-gray-600 text-sm">Strong labor laws, permanent contracts, and excellent worker protection.</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 text-center">
                    <i data-lucide="clock" class="h-12 w-12 text-blue-600 mx-auto mb-4"></i>
                    <h3 class="text-lg font-semibold text-gray-900 mb-3">Work-Life Balance</h3>
                    <p class="text-gray-600 text-sm">35-40 hour work weeks, 30+ vacation days, flexible working arrangements.</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 text-center">
                    <i data-lucide="trending-up" class="h-12 w-12 text-purple-600 mx-auto mb-4"></i>
                    <h3 class="text-lg font-semibold text-gray-900 mb-3">Career Development</h3>
                    <p class="text-gray-600 text-sm">Excellent training programs and strong apprenticeship systems.</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 text-center">
                    <i data-lucide="globe" class="h-12 w-12 text-indigo-600 mx-auto mb-4"></i>
                    <h3 class="text-lg font-semibold text-gray-900 mb-3">Central Location</h3>
                    <p class="text-gray-600 text-sm">Heart of Europe, easy travel to 26 EU countries.</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 text-center">
                    <i data-lucide="lightbulb" class="h-12 w-12 text-yellow-600 mx-auto mb-4"></i>
                    <h3 class="text-lg font-semibold text-gray-900 mb-3">Innovation Hub</h3>
                    <p class="text-gray-600 text-sm">Leading in automotive, engineering, renewable energy.</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 text-center">
                    <i data-lucide="heart" class="h-12 w-12 text-red-600 mx-auto mb-4"></i>
                    <h3 class="text-lg font-semibold text-gray-900 mb-3">Social Benefits</h3>
                    <p class="text-gray-600 text-sm">Universal healthcare, pension system, unemployment benefits.</p>
                </div>
            </div>
        </div>
    </section>
    `;
}

// CTA Section
function ctaSection() {
    return `
    <section class="py-20 gradient-bg text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-6">Ready to Start Your German Journey?</h2>
            <p class="text-xl mb-8 max-w-2xl mx-auto">Join thousands of successful professionals who have made Germany their home. Let us guide you through every step of the process.</p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://docs.google.com/forms/d/1LcyfLhhQoBr2FyHhsk9DyxHymTxrGn1tPZw3hFZQl_M/viewform" target="_blank" class="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition text-lg">
                    Get Started Today
                    <i data-lucide="arrow-right" class="ml-2 h-5 w-5"></i>
                </a>
                <a href="contact.html" class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition text-lg">
                    Contact Us
                </a>
            </div>
        </div>
    </section>
    `;
}

