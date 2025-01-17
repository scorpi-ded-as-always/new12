// const modal = document.getElementById('imageModal');
// const modalImg = document.getElementById('modalImage');
// const closeBtn = document.querySelector('.modal-close');
// const prevBtn = document.querySelector('.modal-prev');
// const nextBtn = document.querySelector('.modal-next');
// const images = document.querySelectorAll('.gallery-image');
// let currentImageIndex = 0;

// const openModal = (image, index) => {
//     modal.classList.add('active');
//     modalImg.src = image.src;
//     modalImg.alt = image.alt;
//     currentImageIndex = index;
//     document.body.style.overflow = 'hidden';
// };

// const closeModal = () => {
//     modal.classList.remove('active');
//     document.body.style.overflow = '';
// };

// const showNextImage = () => {
//     fadeOut(() => {
//         currentImageIndex = (currentImageIndex + 1) % images.length;
//         updateImage();
//         fadeIn();
//     });
// };

// const showPrevImage = () => {
//     fadeOut(() => {
//         currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
//         updateImage();
//         fadeIn();
//     });
// };

// const updateImage = () => {
//     modalImg.src = images[currentImageIndex].src;
//     modalImg.alt = images[currentImageIndex].alt;
// };

// const fadeOut = (callback) => {
//     modalImg.classList.add('out');
//     setTimeout(() => {
//         callback();
//     }, 300); // Match this duration with the CSS transition duration
// };

// const fadeIn = () => {
//     modalImg.classList.remove('out');
// };

// images.forEach((image, index) => {
//     image.addEventListener('click', () => openModal(image, index));
//     image.addEventListener('keydown', (e) => {
//         if (e.key === 'Enter' || e.key === ' ') {
//             e.preventDefault();
//             openModal(image, index);
//         }
//     });
// });

// closeBtn.addEventListener('click', closeModal);
// nextBtn.addEventListener('click', showNextImage);
// prevBtn.addEventListener('click', showPrevImage);

// document.addEventListener('keydown', (e) => {
//     if (!modal.classList.contains('active')) return;
    
//     switch(e.key) {
//         case 'Escape':
//             closeModal();
//             break;
//         case 'ArrowRight':
//             showNextImage();
//             break;
//         case 'ArrowLeft':
//             showPrevImage();
//             break;
//     }
// });

// modal.addEventListener('click', (e) => {
//     if (e.target === modal) closeModal();
// });


// Select modal and related elements
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const prevImage = document.getElementById('prevImage');
const nextImage = document.getElementById('nextImage');
const closeBtn = document.querySelector('.modal-close');
const prevBtn = document.querySelector('.modal-prev');
const nextBtn = document.querySelector('.modal-next');
const images = document.querySelectorAll('.gallery-image');
let currentImageIndex = 0;

// Function to open the modal
const openModal = (image, index) => {
    modal.classList.add('active');
    modalImg.src = image.src;
    modalImg.alt = image.alt;
    currentImageIndex = index;
    updatePreviewImages();
    document.body.style.overflow = 'hidden'; // Disable scrolling
};

// Function to close the modal
const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
};

// Function to show the next image
const showNextImage = () => {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Loop back to the first image
    updateImage();
};

// Function to show the previous image
const showPrevImage = () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Loop back to the last image
    updateImage();
};

// Function to update the displayed image in the modal
const updateImage = () => {
    modalImg.src = images[currentImageIndex].src;
    modalImg.alt = images[currentImageIndex].alt;
    updatePreviewImages(); // Update the preview images
};

// Function to update the preview images
const updatePreviewImages = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length; // Previous image index
    const nextIndex = (currentImageIndex + 1) % images.length; // Next image index
    prevImage.src = images[prevIndex].src; // Set previous image source
    nextImage.src = images[nextIndex].src; // Set next image source
};

// Add click event listeners to each gallery image
images.forEach((image, index) => {
    image.addEventListener('click', () => openModal(image, index));
});

// Add event listeners for modal controls
closeBtn.addEventListener('click', closeModal);
nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return; // Only listen when modal is active
    
    switch(e.key) {
        case 'Escape':
            closeModal(); // Close modal on Escape key
            break;
        case 'ArrowRight':
            showNextImage(); // Show next image on right arrow
            break;
        case 'ArrowLeft':
            showPrevImage(); // Show previous image on left arrow
            break;
    }
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});