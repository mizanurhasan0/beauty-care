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
        image: "./assets/products/Rectangle 47.png"
    }, {
        title: "How to Build a Skincare Routine",
        descirption: "Step-by-step guide to creating the perfect skincare regimen.",
        image: "./assets/products/face.png"
    }, {
        title: "Skincare Tips for Glowing Skin",
        descirption: "Simple, effective tips for achieving a radiant complexion.",
        image: "./assets/products/Rectangle 47.png"
    }, {
        title: "How to Build a Skincare Routine",
        descirption: "Step-by-step guide to creating the perfect skincare regimen.",
        image: "./assets/products/face.png"
    },
];
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