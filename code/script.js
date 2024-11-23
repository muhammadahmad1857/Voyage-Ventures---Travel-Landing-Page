const menuContainer = document.querySelector(".menu-container");
const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("active");
  menuContainer.classList.toggle("change");
}
/// Data for the first slider
const firstSliderData = [
  {
    title: "Tropical Beach Getaways",
    price: "$12.99",
    tripDays: "12 days trip",
    rating: "4.9",
    imageUrl: "assets/dummy.png",
  },
  {
    title: "Mountain Adventures",
    price: "$15.99",
    tripDays: "10 days trip",
    rating: "4.8",
    imageUrl: "assets/dummy.png",
  },
  {
    title: "City Escapes",
    price: "$9.99",
    tripDays: "7 days trip",
    rating: "4.7",
    imageUrl: "assets/dummy.png",
  },
  {
    title: "Tropical Beach Getaways",
    price: "$12.99",
    tripDays: "12 days trip",
    rating: "4.9",
    imageUrl: "assets/dummy.png",
  },
  {
    title: "Mountain Adventures",
    price: "$15.99",
    tripDays: "10 days trip",
    rating: "4.8",
    imageUrl: "assets/dummy.png",
  },
  {
    title: "City Escapes",
    price: "$9.99",
    tripDays: "7 days trip",
    rating: "4.7",
    imageUrl: "assets/dummy.png",
  },
];

// Data for the second slider
const secondSliderData = [
  {
    name: "Alice",
    date: "Visited Japan in May 2023",
    title: "Wonderful Journey",
    content: "Exploring Japan with Voyage Ventures was a dream come true.",
    imageUrl: "assets/dummy-image.png",
  },
  {
    name: "Bob",
    date: "Visited Italy in June 2023",
    title: "Enchanting Italy",
    content:
      "From Rome to Venice, Voyage Ventures handled everything perfectly.",
    imageUrl: "assets/dummy-image.png",
  },
  {
    name: "Charlie",
    date: "Visited Egypt in July 2023",
    title: "Egyptian Adventure",
    content: "An unforgettable experience with knowledgeable guides.",
    imageUrl: "assets/dummy-image.png",
  },
  {
    name: "Alice",
    date: "Visited Japan in May 2023",
    title: "Wonderful Journey",
    content: "Exploring Japan with Voyage Ventures was a dream come true.",
    imageUrl: "assets/dummy-image.png",
  },
  {
    name: "Bob",
    date: "Visited Italy in June 2023",
    title: "Enchanting Italy",
    content:
      "From Rome to Venice, Voyage Ventures handled everything perfectly.",
    imageUrl: "assets/dummy-image.png",
  },
  {
    name: "Charlie",
    date: "Visited Egypt in July 2023",
    title: "Egyptian Adventure",
    content: "An unforgettable experience with knowledgeable guides.",
    imageUrl: "assets/dummy-image.png",
  },
];

function initializeSlider(
  sliderWrapperId,
  indicatorId,
  sliderData,
  isFirstSlider = false
) {
  const sliderWrapper = document.getElementById(sliderWrapperId);
  const indicatorContainer = document.getElementById(indicatorId);
  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(sliderData.length / cardsPerSlide);
  let currentSlide = 0;

  // Render testimonials
  function renderCards() {
    sliderWrapper.innerHTML = "";
    const startIdx = currentSlide * cardsPerSlide;
    const endIdx = startIdx + cardsPerSlide;
    const visibleData = sliderData.slice(startIdx, endIdx);

    visibleData.forEach((item) => {
      const card = document.createElement("div");

      // Conditionally render based on slider type
      if (isFirstSlider) {
        card.classList.add("trip__card");

        card.innerHTML = `
          <img src="${item.imageUrl}" alt="${item.title}" class="trip__img" />
          <h3 class="trip__title">${item.title}</h3>
          <p class="trip__days">${item.tripDays}</p>
          <div class="trip__rating_group">
            <p class="trip__star">★</p>
            <p class="trip__rating">${item.rating}</p>
          </div>
          <div class="trip__detail__container">
            <p class="trip__price">${item.price}</p>
            <button class="btn btn-style">View</button>
          </div>
        `;
      } else {
        card.classList.add("testimonial-card");

        card.innerHTML = `
          <div class="testimonial-card-header">
            <img src="${item.imageUrl}" alt="User Image" />
            <div>
              <h3>${item.name}</h3>
              <p>${item.date}</p>
            </div>
          </div>
          <div class="testimonial-card-content">
            <h4>${item.title}</h4>
            <p>${item.content}</p>
          </div>
        `;
      }

      sliderWrapper.appendChild(card);
    });
  }

  // Render indicators
  function renderIndicators() {
    indicatorContainer.innerHTML = "";
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("span");
      dot.classList.add("indicator");
      if (i === currentSlide) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(i));
      indicatorContainer.appendChild(dot);
    }
  }

  // Go to a specific slide
  function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSlider();
  }

  // Update slider
  function updateSlider() {
    renderCards();
    renderIndicators();
  }

  // Auto-play slider
  function autoPlaySlider() {
    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    }, 5000); // 5-second interval
  }

  // Initialize slider
  updateSlider();
  autoPlaySlider();
}

// Initialize both sliders
initializeSlider("slider-wrapper", "indicators", firstSliderData, true);
initializeSlider("slider-wrapper-2", "indicators-2", secondSliderData);
