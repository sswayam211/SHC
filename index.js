// header section 
try {
    let navBar = document.querySelector('header nav');
    let slider = document.querySelector('.slider');

    window.addEventListener('scroll', () => {
        let currentScroll = window.scrollY;

        if (currentScroll > slider.clientHeight / 10) {
            navBar.style.background = "black";
        }
        else {
            navBar.style.background = "transparent";
        }
    })
} catch (err) {
    console.log(err);
}




// slider button click section 
try {
    function scollToAbout() {
        let sliderHeight = document.querySelector('.slider').clientHeight;
        let headerHeight = document.querySelector('header nav').clientHeight;
        scrollTo({
            top: (sliderHeight - headerHeight),
            behavior: 'smooth',
        });
    }
}
catch (err) {
    console.log(err);
}


// service section (chnage service automatically and on click)
try {
    let services = [
        {
            image: 'images/service-archicture.png',
            heading: 'Architecture Design',
            content: 'Architectural design in construction focuses on creating functional, aesthetically appealing, and structurally sound buildings. It involves space planning, material selection, sustainability, and compliance with regulations. Architects blend creativity with engineering principles to optimize usability, efficiency, and environmental impact, ensuring designs meet both practical needs and artistic vision.',
            link: ''
        },
        {
            image: 'images/service-interior.png',
            heading: 'Interior Design',
            content: 'Interior design in construction focuses on creating functional, aesthetically pleasing spaces by integrating architecture, materials, lighting, and furniture. It ensures efficient space planning, enhances user experience, and aligns with safety standards. Thoughtful design choices improve comfort, productivity, and overall ambiance, blending creativity with structural integrity for lasting impact.',
            link: ''
        },
        {
            image: 'images/service-construction.png',
            heading: 'Construction Management',
            content: 'Construction management oversees planning, coordination, and execution of projects to ensure timely completion within budget and quality standards. It involves resource allocation, risk management, and communication among stakeholders. Effective construction management enhances efficiency, safety, and sustainability, ensuring projects meet regulatory requirements while optimizing cost and time.',
            link: ''
        },
    ];

    let serviceOptions = document.querySelectorAll('.services .services-options .service ul li');
    let serviceImage = document.querySelector('.services .service-details .service-image img');
    let serviceHeading = document.querySelector('.services .service-details .service-detail h2');
    let serviceContent = document.querySelector('.services .service-details .service-detail p');
    let serviceLink = document.querySelector('.services .service-details .service-detail .button a');
    let contentChangeInterval;
    let contentChangeTimeOut;

    function changeServiceContent(e) {
        serviceOptions.forEach((service) => {
            service.classList.remove("active")
        });
        serviceOptions[e].classList.add('active')

        serviceImage.src = services[e].image;
        serviceHeading.innerHTML = services[e].heading;
        serviceContent.innerHTML = services[e].content;
        serviceLink.href = services[e].link;
    }

    serviceOptions.forEach((service) => {
        service.addEventListener('click', () => {
            clearInterval(contentChangeInterval);
            clearTimeout(contentChangeTimeOut);
            contentChangeTimeOut = setTimeout(() => {
                contentChangeInterval = setInterval(() => {
                    count++;
                    if (count === serviceOptions.length) {
                        count = 0;
                    }
                    changeServiceContent(count)
                }, 5000);
            }, 5000);
        })
    });

    let count = 0;
    changeServiceContent(count);

    contentChangeInterval = setInterval(() => {
        count++;
        if (count === serviceOptions.length) {
            count = 0;
        }
        changeServiceContent(count)
    }, 5000);

} catch (err) {
    console.log(err);
}



// project section (show clicked projects)
try {
    // let projects = document.querySelectorAll("projects .project-details .project-detail");
    // let close = document.querySelector(".projects .clicked-project .close-clicked-project");
    let clickedProject = document.querySelector(".projects .clicked-project");

    function showClickedProject(e) {
        console.log(e.querySelector('.image').style.backgroundImage.slice(4, -1).replace(/"/g, ""));
        let imageSrc = e.querySelector('.image').style.backgroundImage.slice(4, -1).replace(/"/g, "");

        clickedProject.classList.remove('d-none');
        clickedProject.children[1].src = imageSrc;
        document.body.style.overflow = 'hidden';
    }

    function hideClickedProject() {
        clickedProject.classList.add("d-none");
        document.body.style.overflow = 'visible';
    }
} catch (err) {
    console.log(err);
}



// chnaging Client Testimonials
try {
    let clientTestimonials = document.querySelectorAll('.client-testimonials .reviews .review');
    let dots = document.querySelectorAll('.client-testimonials .dots .dot');
    let count = 0;

    function showTestimonials(count) {
        clientTestimonials.forEach(element => {
            element.classList.add('d-none');
            element.style.opacity = '0';
        });
        dots.forEach(dot => {
            dot.classList.remove("active");
        })
        clientTestimonials[count].classList.remove('d-none');
        clientTestimonials[count].style.opacity = '1';

        dots[count].classList.add("active");
    }

    showTestimonials(count);
    count++;

    setInterval(() => {
        if (count >= clientTestimonials.length) {
            count = 0;
        }
        showTestimonials(count);
        count++
    }, 5000);

} catch (err) {
    console.log(err);
}
