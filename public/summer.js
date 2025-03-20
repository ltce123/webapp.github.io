const crops = [
    {
        name: "Carrot",
        image: "./img/carrot.jpg",
        details: [
            "Spacing: 1 inch apart, 3 inches between rows",
            "Planting depth: ¼ inch",
            "Fertilizer: Very low nitrogen (nitrogen increases foliage)",
            "Sunlight: 6-8 hours",
            "Required temp: 55-80°F",
            "Plant type: Root vegetable",
            "Scientific name: Daucus carota",
            "Water: Keep soil moist",
            "Soil type: Very loose, well-draining (remove stones)",
            "Grow time: 65-80 days",
            "Ripe: Pick when desired"
        ]
    },
    {
        name: "Tomato",
        image: "./img/tomato.jpg",
        details: [
            "Spacing: 18-24 inches for a single stem",
            "Planting depth: ½ inch",
            "Fertilizer: Balanced, low on nitrogen",
            "Sunlight: At least 6-8 hours (more for larger varieties)",
            "Required temp: 55-85°F",
            "Plant type: Fruiting",
            "Scientific name: Solanum lycopersicum",
            "Water: Keep soil consistently moist, around once per week",
            "Soil type: Rich, loose, well-draining",
            "Grow time: 60-100 days, depends on variety",
            "Ripe: When fruit reaches final color"
        ]
    },
    {
        name: "Peppers",
        image: "./img/peppers.jpg",
        details: [
            "Spacing: No less than 12 inches",
            "Planting depth: ½ inch",
            "Fertilizer: Well-balanced, not high in nitrogen",
            "Sunlight: At least 6 hours a day",
            "Required temp: 70-80°F",
            "Plant type: Fruiting",
            "Scientific name: Capsicum",
            "Water: Water deeply once per week, increase as plant grows",
            "Soil type: Sandy and loamy, boost with compost",
            "Grow time: 60-90 days",
            "Ripe: Either when large and green or when final color is reached"
        ]
    },
    {
        name: "Cucumber",
        image: "./img/cucumber.jpg",
        details: [
            "Spacing: 36-60 inches apart",
            "Planting depth: ½ inch",
            "Fertilizer: Balanced, low in nitrogen",
            "Sunlight: At least 8 hours a day",
            "Required temp: 70-85°F",
            "Plant type: Fruiting",
            "Scientific name: Cucumis sativus",
            "Water: Keep soil consistently moist",
            "Soil type: Rich, loose, well-draining",
            "Grow time: 50-70 days",
            "Ripe: When firm and green"
        ]
    },
    {
        name: "Corn",
        image: "./img/corn.jpg",
        details: [
            "Spacing: 9-12 inches apart",
            "Planting depth: 1-2 inches",
            "Fertilizer: High in nitrogen",
            "Sunlight: At least 8 hours a day",
            "Required temp: 60-95°F",
            "Plant type: Grain",
            "Scientific name: Zea mays",
            "Water: Water deeply once per week",
            "Soil type: Rich, well-draining",
            "Grow time: 60-100 days",
            "Ripe: When kernels are full and milky"
        ]
    },
    {
        name: "Zucchini",
        image: "./img/zucchini.jpg",
        details: [
            "Spacing: 24-36 inches apart",
            "Planting depth: 1 inch",
            "Fertilizer: Balanced, low in nitrogen",
            "Sunlight: At least 6-8 hours",
            "Required temp: 70-95°F",
            "Plant type: Fruiting",
            "Scientific name: Cucurbita pepo",
            "Water: Keep soil consistently moist",
            "Soil type: Rich, loose, well-draining",
            "Grow time: 40-50 days",
            "Ripe: When firm and green"
        ]
    },
    {
        name:"Garlic",
        image:"./img/garlic.jpg",
        details:[
            "-spacing: 4-6 inches apart",

            "-planting depth: 3-5 inches deep depending on amount of mulch",

            "-fertilizer: high nitrogen, balanced",

            "-sunlight: 6-8 hours",

            "-required temp: -35-80 ​​°F",

            "-plant type: bulbing plant",
            
            "-scientific name: Allium sativum",

            "-water: keep soil moist, increase if leaves turn yellow",

            "-soil: well draining, loose (remove stones)"
        ]
    }
];

const cropContainer = document.getElementById("cropp-container");

crops.forEach(crop => {
    const cropCard = document.createElement("div");
    cropCard.classList.add("cropp-card");

    cropCard.innerHTML = `
        <img src="${crop.image}" alt="${crop.name}">
        <h2>${crop.name}</h2>
        <ul>
            ${crop.details.map(detail => `<li>${detail}</li>`).join("")}
        </ul>
    `;

    cropContainer.appendChild(cropCard);
});
// hamburger menu
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navbar = document.getElementById('navbar');

    mobileMenuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Close menu when clicking a nav item
    document.querySelectorAll('#navbar li a').forEach(item => {
        item.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
});