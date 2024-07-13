
document.addEventListener('DOMContentLoaded', () => {
    
    const skills = document.querySelectorAll('.skill');
    const certifications = document.querySelectorAll('.certification');

    function loadSkills() {
        skills.forEach((skill, index) => {
            setTimeout(() => {
                skill.classList.add('loaded');
            }, index * 500); // Adjust the delay as needed
        });
    }

    function loadCertifications() {
        certifications.forEach((certification, index) => {
            setTimeout(() => {
                certification.classList.add('loaded');
            }, index * 500); // Adjust the delay as needed
        });
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'certifications') {
                    loadSkills();
                    loadCertifications();
                }
            } else {
                skills.forEach(skill => {
                    skill.classList.remove('loaded');
                });
                certifications.forEach(certification => {
                    certification.classList.remove('loaded');
                });
            }
        });
    });

    observer.observe(document.querySelector('#certifications'));

    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    const sections = document.querySelectorAll('.content-section');

    window.showSection = function (sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
                section.classList.add('fade-slide-in');
                
            } else {
                section.classList.remove('fade-slide-in');
                section.style.display = 'none';
            }
        });
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };
});

