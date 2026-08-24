const categories = {
  logo: {
    title: "Logo Design",
    description:
      "Memorable logo marks, identity symbols, and clean brand foundations.",
  },
  "social-media": {
    title: "Social Media Design",
    description:
      "Premium posts, banners, stories, and campaign visuals for digital platforms.",
  },
  "htl-brands": {
    title: "HTL Brands",
    description:
      "Brand visuals, identity layouts, and polished presentation assets.",
  },
  branding: {
    title: "Branding Designing",
    description:
      "Complete branding visuals, identity mockups, and presentation-ready brand systems.",
  },
  "tshirt-branding": {
    title: "T-Shirt Branding",
    description:
      "Merch graphics, apparel layouts, and wearable brand concepts.",
  },
  posters: {
    title: "Posters",
    description:
      "Bold promotional posters for events, offers, launches, and campaigns.",
  },
  "visiting-cards": {
    title: "Visiting Cards",
    description:
      "Professional card systems with strong hierarchy and brand clarity.",
  },
  flyers: {
    title: "Flyers",
    description:
      "Marketing flyers, offer sheets, and clean print-ready campaign layouts.",
  },
  websites: {
    title: "Websites",
    description:
      "Responsive portfolio, business, and landing page designs with modern UI.",
  },
  uiux: {
    title: "UI/UX Design",
    description:
      "User-focused screens, dashboards, design flows, and product interfaces.",
  },
};

const projectDetails = {
  logo: [
    { title: "Signature Brand Mark", desc: "Premium minimalist logo designed for modern high-tech companies." },
    { title: "Modern Letter Logo", desc: "Clever monogram incorporating clean geometric shapes and letters." },
    { title: "Premium Logo System", desc: "Full brand typography, logo variants, and brand guidelines system." }
  ],
  "social-media": [
    { title: "Launch Post Set", desc: "Sleek dark and maroon Instagram post templates designed to catch eyeballs." },
    { title: "Story Campaign", desc: "Interactive stories with clean typography and modern product showcases." },
    { title: "Promo Banner Pack", desc: "Web and social banners designed for marketing announcements and launches." },
    { title: "Social Media Campaign", desc: "Additional post creative designed for consistent campaign visibility." }
  ],
  "htl-brands": [
    { title: "HTL Identity Board", desc: "A cohesive visual style guide including fonts, palettes, and brand assets." },
    { title: "Brand Campaign Look", desc: "Visual branding design for a summer product campaign." },
    { title: "Product Visual Set", desc: "Polished graphics and renders demonstrating products in use." }
  ],
  branding: [
    { title: "Branding Design 1", desc: "Complete brand presentation artwork with polished layout and visual identity details." },
    { title: "Branding Design 2", desc: "Branding concept artwork prepared for clear client presentation and portfolio viewing." },
    { title: "Branding Design 3", desc: "Premium branding composition with clean identity visuals and campaign-ready styling." }
  ],
  "tshirt-branding": [
    { title: "Typography Tee", desc: "Bold typographic chest print layouts with vector details." },
    { title: "Graphic Merch Concept", desc: "Illustrative streetwear merch design with modern typography." },
    { title: "Streetwear Drop", desc: "Full t-shirt line graphics, patterns, and retail product layouts." }
  ],
  posters: [
    { title: "Event Poster", desc: "Premium event poster with rich gradients and bold headers." },
    { title: "Product Poster", desc: "High-contrast poster promoting a premium gadget launch." }
  ],
  "visiting-cards": [
    { title: "Minimal Business Card", desc: "Elegant dual-sided card utilizing black paper and gold/maroon foil details." },
    { title: "Premium Personal Card", desc: "Clean vertical business card design focusing on clear contact hierarchy." },
    { title: "Brand Card Set", desc: "Company-wide employee business cards matching official branding." },
    { title: "Executive Visiting Card", desc: "A refined business card layout with strong contact hierarchy and brand presence." }
  ],
  flyers: [
    { title: "Service Flyer", desc: "Corporate service offerings brochure designed with clean grid columns." },
    { title: "Offer Flyer", desc: "Promotional flyer with QR code and active call-to-action blocks." },
    { title: "Event Flyer", desc: "Vibrant music event print flyer with modern styling." }
  ],
  websites: [
    { title: "Portfolio Website", desc: "Modern agency-style portfolio built with glassmorphism overlays and grid layout." },
    { title: "Business Landing Page", desc: "SaaS business landing page design optimized for lead capture." },
    { title: "Creative Web Layout", desc: "Interactive magazine layout featuring bold dark/maroon visual themes." }
  ],
  uiux: [
    { title: "Mobile App Screen", desc: "FinTech mobile dashboard with clean dark theme UI and smooth components." },
    { title: "Dashboard Interface", desc: "Detailed analytical dashboard UI featuring interactive widgets and charts." },
    { title: "Web App Experience", desc: "Collaboration platform interface layout focusing on user accessibility." }
  ]
};

// Each project card points to its own relevant portfolio artwork.
// Original assets are preserved, with distinct generated variants for missing project images.
const projectImages = {
  logo: ["images/Logo Design 1.jpg", "images/Logo Design 2.jpg", "images/Logo Design 3.jpg"],
  "social-media": [
    "images/social  media post 1.jpg",
    "images/social  media post 2.jpg",
    "images/social  media post 3.jpg",
    "images/social  media post 4.jpg"
  ],
  "htl-brands": ["images/HTL Brand 1.jpg", "images/HTL Brand 2.jpg", "images/HTL Brand 3.jpg"],
  branding: ["images/Branding Design 1.jpg", "images/Branding Design 2.jpg", "images/Branding Design 3.jpg"],
  "tshirt-branding": [
    "images/Typography Tee r shirt.jpg",
    "images/Graphic Merch Concept t shirt.jpg",
    "images/Streetwear Drop t shirt.jpg"
  ],
  posters: ["images/Poster design 1.jpg", "images/Poster design 2.jpg"],
  "visiting-cards": [
    "images/visiting card 1.jpg",
    "images/visiting card 2.jpg",
    "images/visiting card 3.jpg",
    "images/visiting card 4.jpg"
  ],
  flyers: ["images/Flayer design 1.jpg", "images/Flayer design 2.jpg", "images/Flayer design 3.jpg"],
  websites: ["images/websites 1.jpg", "images/websites 2.jpg", "images/websites 3.jpg"],
  uiux: ["images/UI UX Design 1.jpg", "images/UI UX Design 2.jpg", "images/UI UX Design 3.jpg"]
};

const projects = Object.entries(projectDetails).flatMap(([category, items]) =>
  items.map((item, index) => ({
    title: item.title,
    category,
    image: projectImages[category]?.[index] || projectImages[category]?.[0] || "images/hero image.png",
    description: item.desc
  }))
);

const webCategories = ['websites', 'uiux'];
const graphicCategories = ['logo', 'social-media', 'htl-brands', 'branding', 'tshirt-branding', 'posters', 'visiting-cards', 'flyers'];
const bookingEmail = "designohaseeb@gmail.com";
const bookingLocations = {
  Pakistan: {
    code: "+92",
    cities: ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta", "Sialkot", "Hyderabad"]
  },
  India: {
    code: "+91",
    cities: ["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat"]
  },
  "United Arab Emirates": {
    code: "+971",
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"]
  },
  "Saudi Arabia": {
    code: "+966",
    cities: ["Riyadh", "Jeddah", "Makkah", "Madinah", "Dammam", "Khobar", "Taif", "Tabuk"]
  },
  "United States": {
    code: "+1",
    cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Dallas", "San Francisco", "Miami", "Seattle"]
  },
  "United Kingdom": {
    code: "+44",
    cities: ["London", "Manchester", "Birmingham", "Liverpool", "Leeds", "Glasgow", "Edinburgh", "Bristol"]
  },
  Canada: {
    code: "+1",
    cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa", "Edmonton", "Winnipeg", "Quebec City"]
  },
  Australia: {
    code: "+61",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra", "Gold Coast"]
  },
  Germany: {
    code: "+49",
    cities: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Dusseldorf"]
  },
  Turkey: {
    code: "+90",
    cities: ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya", "Konya", "Adana"]
  },
  Qatar: {
    code: "+974",
    cities: ["Doha", "Al Wakrah", "Al Rayyan", "Lusail", "Al Khor", "Dukhan"]
  },
  Oman: {
    code: "+968",
    cities: ["Muscat", "Salalah", "Sohar", "Nizwa", "Sur", "Rustaq"]
  }
};

function getBookingServices() {
  return Object.entries(categories).map(([key, item]) => ({
    key,
    title: item.title
  }));
}

function renderPortfolioPage() {
  if (document.body.dataset.page !== "portfolio") return;

  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get("category");
  const typeParam = params.get("type");

  let filteredProjects = [];
  let title = "Portfolio";
  let description = "Browse selected design work.";

  if (categoryParam && categories[categoryParam]) {
    filteredProjects = projects.filter(p => p.category === categoryParam);
    title = categories[categoryParam].title;
    description = categories[categoryParam].description;
  } else if (typeParam === "website") {
    filteredProjects = projects.filter(p => webCategories.includes(p.category));
    title = "Website Projects";
    description = "Modern responsive websites, custom landing pages, and user-focused UI/UX design concepts.";
  } else if (typeParam === "graphic") {
    filteredProjects = projects.filter(p => graphicCategories.includes(p.category));
    title = "Graphic Designing Projects";
    description = "Premium logo marks, social media campaigns, HTL brand visuals, branding designs, posters, flyers, and visiting cards.";
  } else {
    // Default fallback
    filteredProjects = projects.filter(p => p.category === "logo");
    title = categories["logo"].title;
    description = categories["logo"].description;
  }

  const categoryTitle = document.querySelector("#categoryTitle");
  const categoryDescription = document.querySelector("#categoryDescription");
  const categoryCount = document.querySelector("#categoryCount");
  const projectGrid = document.querySelector("#projectGrid");

  if (categoryTitle) categoryTitle.textContent = title;
  if (categoryDescription) categoryDescription.textContent = description;
  if (categoryCount) categoryCount.textContent = filteredProjects.length;

  if (projectGrid) {
    if (filteredProjects.length === 0) {
      projectGrid.innerHTML = `<div class="no-projects" style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--black); font-weight: bold;">No projects found in this category.</div>`;
    } else {
      projectGrid.innerHTML = filteredProjects
        .map(
          (project) => `
            <article class="project-card">
              <div class="project-image">
                <img src="${project.image}" alt="${project.title}" />
              </div>
              <div class="project-body">
                <span>${categories[project.category].title}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <button class="project-view-button" type="button" data-project-image="${escapeEmailHtml(project.image)}" data-project-title="${escapeEmailHtml(project.title)}">View Project <span>&rarr;</span></button>
              </div>
            </article>
          `
        )
        .join("");
    }
  }

  initializeProjectPreview();
}

function initializeProjectPreview() {
  let preview = document.querySelector("#projectPreviewModal");

  if (!preview) {
    preview = document.createElement("div");
    preview.id = "projectPreviewModal";
    preview.className = "project-preview-modal";
    preview.setAttribute("aria-hidden", "true");
    preview.innerHTML = [
      '<div class="project-preview-backdrop" data-preview-close="true"></div>',
      '<div class="project-preview-card" role="dialog" aria-modal="true" aria-label="Project image preview">',
      '<button class="project-preview-close" type="button" aria-label="Close image preview" data-preview-close="true">&times;</button>',
      '<img class="project-preview-image" src="" alt="" />',
      '<h3 class="project-preview-title"></h3>',
      '</div>'
    ].join("");
    document.body.appendChild(preview);

    preview.addEventListener("click", function (event) {
      if (event.target && event.target.dataset.previewClose === "true") {
        closeProjectPreview();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && preview.classList.contains("is-open")) {
        closeProjectPreview();
      }
    });
  }

  const projectGrid = document.querySelector("#projectGrid");
  if (!projectGrid || projectGrid.dataset.previewBound === "true") return;

  projectGrid.dataset.previewBound = "true";
  projectGrid.addEventListener("click", function (event) {
    const button = event.target.closest(".project-view-button");
    if (!button) return;

    openProjectPreview(button.dataset.projectImage || "", button.dataset.projectTitle || "Project image");
  });
}

function openProjectPreview(image, title) {
  const preview = document.querySelector("#projectPreviewModal");
  if (!preview || !image) return;

  const previewImage = preview.querySelector(".project-preview-image");
  const previewTitle = preview.querySelector(".project-preview-title");

  previewImage.src = image;
  previewImage.alt = title;
  previewTitle.textContent = title;
  preview.classList.add("is-open");
  preview.setAttribute("aria-hidden", "false");
  document.body.classList.add("preview-open");
}

function closeProjectPreview() {
  const preview = document.querySelector("#projectPreviewModal");
  if (!preview) return;

  preview.classList.remove("is-open");
  preview.setAttribute("aria-hidden", "true");
  document.body.classList.remove("preview-open");
}

function showSuccessAlert() {
  const options = {
    icon: "success",
    title: "Successfully filled form",
    text: "We will contact you as soon as possible.",
    confirmButtonColor: "#840001"
  };

  if (window.Swal) {
    return window.Swal.fire(options);
  }

  alert(options.title + ". " + options.text);
  return Promise.resolve();
}

function showErrorAlert(message) {
  if (window.Swal) {
    return window.Swal.fire({
      icon: "error",
      title: "Message not sent",
      text: message,
      confirmButtonColor: "#840001"
    });
  }

  alert(message);
  return Promise.resolve();
}

function escapeEmailHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendFormEmail(subject, body, replyTo) {
  if (window.location.protocol === "file:") {
    throw new Error("Please submit the form from https://designohaseeb.vercel.app.");
  }

  // FormSubmit provides the email delivery layer for this static Vercel site.
  // It supports JSON/AJAX submissions without exposing SMTP credentials in the browser.
  const response = await fetch("https://formsubmit.co/ajax/designohaseeb@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      _subject: subject,
      _replyto: replyTo || bookingEmail,
      _template: "table",
      _honey: "",
      message: body
    })
  });

  let result = {};
  try {
    result = await response.json();
  } catch (error) {
    result = { message: "The email service returned an invalid response." };
  }

  if (!response.ok || result.success === false || result.success === "false") {
    throw new Error(result.message || "Email sending failed. Please try again.");
  }

  return "OK";
}

function setFormBusy(form, isBusy) {
  const submitButton = form.querySelector('button[type="submit"]');
  if (!submitButton) return;

  if (isBusy) {
    submitButton.dataset.originalText = submitButton.textContent;
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;
  } else {
    submitButton.textContent = submitButton.dataset.originalText || "Submit";
    submitButton.disabled = false;
  }
}

function initializeBookingForm() {
  const form = document.getElementById("bookingForm");
  const serviceMenu = document.getElementById("serviceSelectMenu");
  const status = document.getElementById("bookingStatus");

  if (!form || !serviceMenu) {
    return;
  }

  const serviceOptions = getBookingServices()
    .map(function (service) {
      return '<label class="google-option booking-check-option"><input type="checkbox" name="services" value="' + service.title + '" /><span>' + service.title + '</span></label>';
    })
    .join("");

  serviceMenu.innerHTML = serviceOptions;

  form.addEventListener("reset", function () {
    if (status) status.textContent = "";
  });

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const data = new FormData(form);
    const selectedServices = Array.from(form.querySelectorAll('input[name="services"]:checked')).map(function (input) {
      return input.value;
    });

    if (!selectedServices.length) {
      if (status) status.textContent = "Please select at least one service.";
      serviceMenu.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const subject = "New Booking Form - " + (data.get("brand") || data.get("name") || "DesignoHaseeb");
    const body = [
      "New DesignoHaseeb booking form submission",
      "",
      "Email: " + data.get("email"),
      "Full Name: " + data.get("name"),
      "Whatsapp: " + data.get("whatsapp"),
      "Business/Brand Name: " + (data.get("brand") || "Not provided"),
      "Website/Social Links: " + (data.get("links") || "Not provided"),
      "Business/Brand Brief: " + (data.get("business") || "Not provided"),
      "Services: " + selectedServices.join(", "),
      "Budget: " + data.get("budget"),
      "Timeline: " + data.get("timeline"),
      "Confirmation: " + (data.get("confirmation") || "Not confirmed")
    ].join("\n");

    if (status) status.textContent = "Sending your form details...";
    setFormBusy(form, true);

    try {
      await sendFormEmail(subject, body, data.get("email"));
      await showSuccessAlert();
      form.reset();
      if (status) status.textContent = "";
    } catch (error) {
      if (status) status.textContent = "Email sending failed. Please try again.";
      await showErrorAlert(error && error.message ? error.message : "Email sending failed. Please try again.");
    } finally {
      setFormBusy(form, false);
    }
  });
}

function initializeContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("contactStatus");

  if (!form) return;

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const data = new FormData(form);
    const subject = "New Contact Message - " + data.get("subject");
    const body = [
      "New DesignoHaseeb contact message",
      "",
      "Name: " + data.get("name"),
      "Email: " + data.get("email"),
      "Subject: " + data.get("subject"),
      "",
      "Message:",
      data.get("message")
    ].join("\n");

    if (status) status.textContent = "Sending your message...";
    setFormBusy(form, true);

    try {
      await sendFormEmail(subject, body, data.get("email"));
      await showSuccessAlert();
      form.reset();
      if (status) status.textContent = "";
    } catch (error) {
      if (status) status.textContent = "Email sending failed. Please try again.";
      await showErrorAlert(error && error.message ? error.message : "Email sending failed. Please try again.");
    } finally {
      setFormBusy(form, false);
    }
  });
}

// Global scroll and load events
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    document.querySelectorAll(".dropdown-trigger").forEach((trigger) => {
      trigger.setAttribute("role", "button");
      trigger.setAttribute("tabindex", "0");
      trigger.addEventListener("keydown", (event) => {
        if ((event.key === "Enter" || event.key === " ") && window.innerWidth <= 768) {
          event.preventDefault();
          trigger.closest(".dropdown")?.classList.toggle("is-open");
        }
      });
      trigger.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          trigger.closest(".dropdown")?.classList.toggle("is-open");
        }
      });
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        siteNav.querySelectorAll(".is-open").forEach((item) => item.classList.remove("is-open"));
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        siteNav.classList.remove("is-open");
        siteNav.querySelectorAll(".is-open").forEach((item) => item.classList.remove("is-open"));
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      }
    });
  }

  const floatingBar = document.getElementById("scrollFloatingBar");
  if (floatingBar) {
    window.addEventListener("scroll", () => {
      // Toggle floating categories buttons when scrolled past 350px
      if (window.scrollY > 350) {
        floatingBar.classList.add("visible");
      } else {
        floatingBar.classList.remove("visible");
      }
    });
  }

  renderPortfolioPage();
  initializeBookingForm();
  initializeContactForm();
});




