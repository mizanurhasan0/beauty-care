// Menu Items
const menuItems = [
    {
        title: "About",
        href: "/"
    },
    {
        title: "Product",
        href: "/"
    },
    {
        title: "Contact",
        href: "/"
    },
    {
        title: "Skincare Blog",
        href: "/"
    }
]

const categoryData = [
    {
        title: "Cleansers",
        count: "10",
        image: "./assets/products/night_cream.png"
    },
    {
        title: "Moisturizers",
        count: "16",
        image: "./assets/products/night_cream.png"
    },
    {
        title: "Masks",
        count: "10",
        image: "./assets/products/night_cream.png"
    },
    {
        title: "Sunscreems",
        count: "54",
        image: "./assets/products/night_cream.png"
    },
    {
        title: "Serums",
        count: "34",
        image: "./assets/products/night_cream.png"
    }
];
const products = [
    {
        title: "Glow Guard Serum",
        category: "Moisturizers",
        price: "32",
        image: "./assets/products/Frame 41.png"
    },
    {
        title: "Glow Guard Serum",
        category: "Cleansers",
        price: "32",
        image: "./assets/products/Frame 42.png"
    }, {
        title: "Glow Guard Serum",
        category: "Musks",
        price: "32",
        image: "./assets/products/Frame 43.png"
    }, {
        title: "Glow Guard Serum",
        category: "Serums",
        price: "32",
        image: "./assets/products/Frame 44.png"
    },
    {
        title: "Glow Guard Serum",
        category: "Serums",
        price: "32",
        image: "./assets/products/Frame 44.png"
    },
    {
        title: "Glow Guard Serum",
        category: "Serums",
        price: "32",
        image: "./assets/products/Frame 42.png"
    },
    {
        title: "Glow Guard Serum",
        category: "Serums",
        price: "32",
        image: "./assets/products/Frame 44.png"
    },
    {
        title: "Glow Guard Serum",
        category: "Serums",
        price: "32",
        image: "./assets/products/Frame 41.png"
    }
];
const users = [
    {
        name: "Emily Thompson",
        level: "Dermatologist",
        descirption: "After using this serum for just a week, I noticed a significant improvement in my skin’s texture and radiance. As a dermatologist, I highly recommend it.",
        image: "./assets/persons/avatar1.png"
    },
    {
        name: "Carlos Diaz",
        level: "Skincare Enthusiast",
        descirption: "I’ve tried countless products over the years, but nothing compares to this! My skin has never looked so clear and vibrant!",
        image: "./assets/persons/avatar3.png"
    },
    {
        name: "Rachel Nguyen",
        level: "Beauty Influencer",
        descirption: "This moisturizer is a game changer! My skin feels soft and hydrated all day. I’ve incorporated it into my daily routine and can’t imagine living without it!",
        image: "./assets/persons/avatar2.png"
    },
]
const news = [
    {
        title: "How to Build a Skincare Routine",
        descirption: "Step-by-step guide to creating the perfect skincare regimen.",
        image: "./assets/products/face.png"
    },
    {
        title: "Skincare Tips for Glowing Skin",
        descirption: "Simple, effective tips for achieving a radiant complexion.",
        image: "./assets/products/looson.png"
    }, {
        title: "How to Build a Skincare Routine",
        descirption: "Step-by-step guide to creating the perfect skincare regimen.",
        image: "./assets/products/face.png"
    }, {
        title: "Skincare Tips for Glowing Skin",
        descirption: "Simple, effective tips for achieving a radiant complexion.",
        image: "./assets/products/face.png"
    }, {
        title: "How to Build a Skincare Routine",
        descirption: "Step-by-step guide to creating the perfect skincare regimen.",
        image: "./assets/products/looson.png"
    }, {
        title: "Skincare Tips for Glowing Skin",
        descirption: "Simple, effective tips for achieving a radiant complexion.",
        image: "./assets/products/face.png"
    }, {
        title: "How to Build a Skincare Routine",
        descirption: "Step-by-step guide to creating the perfect skincare regimen.",
        image: "./assets/products/face.png"
    },
];
const newsData = [
    {
        id: 1,
        title: "Clean Ingedients",
        descirption: "We use only the safest, most effective ingredients. No parabens, sulfates, or synthetic fragrances",
        image: "./assets/020-medical.svg"
    },
    {
        id: 2,
        title: "Cruelty-Free",
        descirption: "No testing on animals, ever. We are certified cruelty-free and stand against animal cruelty in all its forms.",
        image: "./assets/026-paraben free.svg"
    },
    {
        id: 3,
        title: "Eco-Friendly Packaging",
        descirption: "We use only the safest, most effective ingredients",
        image: "./assets/028-organic product.svg"
    },
    {
        id: 4,
        title: "Dermatologist Approved",
        descirption: "We use only the safest, most effective ingredients",
        image: "./assets/001-cruelty free.svg"
    },
]
const appendContent = (container, items, templateFn) => {
    items.forEach((item, idx) => {
        const div = document.createElement('div');
        div.innerHTML = templateFn(item, idx);
        container.appendChild(div);
    });
};

// Menu List
appendContent(
    document.getElementById('menuItems'),
    menuItems,
    ({ title, href }) => `<li class="skew-hover"><a href="${href}">${title}</a></li>`
);

// Category List
appendContent(
    document.getElementById('product_category'),
    categoryData,
    ({ title, count, image }) => `
        <div class="cat-item flex relative">
            <h2 class="text-8xl font-medium">${title}</h2>
            <p class="text-4xl">${count}</p>
            <img class="cat-item-img opacity-0 absolute transform-center left-1/2 right-1/2" src="${image}" alt="${title}" />
        </div>
    `
);
// New Arrivals
appendContent(
    document.getElementById('newArrivalProducts'),
    products.slice(0, 4),
    ({ title, category, price, image }) => `
        <div>
            <div class="cartImage"><img src="${image}" alt="${title}" /></div>
            <p class="text-sm">${category}</p>
            <p class="text-2xl">${title}</p>
            <p class="text-2xl font-bold" style="color: var(--border-color);">$${price}</p>
        </div>
    `
);


// Top Selling Products
appendContent(
    document.getElementById('topSellingProducts'),
    products,
    ({ title, category, price, image }) => `
        <div>
            <div class="cartImage"><img src="${image}" alt="${title}" /></div>
            <p class="text-sm">${category}</p>
            <p class="text-2xl">${title}</p>
            <p class="text-2xl font-bold" style="color: var(--border-color);">$${price}</p>
        </div>
    `
);

// Blog News
appendContent(
    document.getElementById('newsBlogs'),
    news,
    ({ title, descirption, image }, idx) => `
                     <div class="card-2 flex ${idx % 2 === 0 ? 'even' : 'odd'}">
                                <div class="font-medium px-10 flex flex-col justify-between py-10">
                                    <div>
                                        <div class="flex">
                                            <p class="font-mollie text-5xl">${title}
                                            </p>
                                            <img src="./assets/star.svg" alt="img" />
                                        </div>
                                        <p class="">${descirption}
                                        </p>
                                    </div>
                                    <div>
                                        <button class="infoBtn">Discover Now</button>
                                    </div>
                                </div>
                                <img src="${image}" alt="face" />
                            </div>
    `
);
// User Testomonial
appendContent(
    document.getElementById('userList'),
    users,
    ({ name, descirption, image, level }, idx) => `
                     <div class="text-center">
                    <div class="">
                        <img src="${image}" alt="avatar 1" class="rounded-full" style="width:114px;height:114px"/>
                    </div>

                    <img src="./assets/Stars.png" alt="star" />


                    <p class="text-lg py-10">
                        ${descirption}
                    </p>
                    <div class="text-center">
                        <p class="text-xl">${name}</p>
                        <p class="text-base opacity-60">${level}</p>
                    </div>
                </div>
    `
);

// Why Choose our product
appendContent(
    document.getElementById('decisionChoice'),
    newsData,
    ({ title, descirption, image }, idx) => `
                    <div class="flex ${idx % 2 === 0 ? '' : 'flex-row-reverse'} gap-6 ${idx + 1 === 4 ? '' : 'border-b-1'} pb-4">
                                <div class="rounded-full flex item-center justify-center"
                                    style="background-color: var(--third-color); min-width: 72px;height: 72px;">
                                    <img src="${image}" alt="logo" />
                                </div>
                                <div>
                                    <p class="text-2xl">${idx + 1}. ${title}</p>
                                    <p class="text-base">
                                    ${descirption}
                                    </p>
                                </div>
                            </div>
    `
);
// Accordioan
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const toggleIcon = header.querySelector('.toggle-icon');
        // Close all other open content
        document.querySelectorAll('.accordion-content').forEach(item => item !== content ? item.style.display = 'none' : '');

        // Toggle the clicked content
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        content.style.display === 'block' ? toggleIcon.textContent = '+' : toggleIcon.textContent = '-';
    });
});
