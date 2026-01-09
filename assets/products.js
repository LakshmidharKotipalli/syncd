const productData = {
    necklace: [
        {
            id: "n1",
            name: "Aeterna Diamond Pendant",
            price: 4200,
            image: "assets/images/luxury_necklace_1_1767966878616.png",
            badge: "Signature",
            description: "A brilliant round-cut diamond suspended on an 18k white gold delicate chain. A timeless statement of elegance."
        },
        {
            id: "n2",
            name: "Celestial Gold Choker",
            price: 2800,
            image: "assets/images/luxury_necklace_1_1767966878616.png",
            badge: "Handcrafted",
            description: "Interlocking textures of solid 24k gold, designed to catch the light at every angle. Modern luxury at its peak."
        },
        {
            id: "n3",
            name: "Heirloom Emerald Drop",
            price: 7500,
            image: "assets/images/luxury_necklace_1_1767966878616.png",
            badge: "Rare",
            description: "A deep green Zambian emerald surrounded by a halo of micro-pave diamonds. A piece for generations."
        },
        {
            id: "n4",
            name: "Infinite Platinum Chain",
            price: 1200,
            image: "assets/images/luxury_necklace_1_1767966878616.png",
            badge: "Minimalist",
            description: "Pure platinum links crafted with precision. Substantial yet understated, the perfect daily companion."
        }
    ],
    earrings: [
        {
            id: "e1",
            name: "Luna Pearl Studs",
            price: 950,
            image: "assets/images/luxury_earrings_1_1767966892753.png",
            badge: "Classic",
            description: "Perfectly matched South Sea pearls with 18k yellow gold mountings. Lustrous and sophisticated."
        },
        {
            id: "e2",
            name: "Aura Diamond Hoops",
            price: 3600,
            image: "assets/images/luxury_earrings_1_1767966892753.png",
            badge: "Polished",
            description: "Inside-outside diamond hoops featuring 2 carats of brilliant-cut diamonds. Radiance from every direction."
        },
        {
            id: "e3",
            name: "Solstice Drop Earrings",
            price: 2100,
            image: "assets/images/luxury_earrings_1_1767966892753.png",
            badge: "Bestseller",
            description: "Art deco inspired drops with geometric patterns and delicate filigree work in rose gold."
        },
        {
            id: "e4",
            name: "Nova Sapphire Studs",
            price: 4800,
            image: "assets/images/luxury_earrings_1_1767966892753.png",
            badge: "Limited",
            description: "Deep blue Ceylon sapphires set in a starburst of diamonds. Captivating and majestic."
        }
    ],
    bracelet: [
        {
            id: "b1",
            name: "Elysian Diamond Bangle",
            price: 5400,
            image: "assets/images/luxury_bracelet_1_1767966908812.png",
            badge: "Exclusive",
            description: "A sleek 18k white gold bangle encrusted with a double row of princess-cut diamonds. Architectural beauty."
        },
        {
            id: "b2",
            name: "Seraphina Gold Cuff",
            price: 3200,
            image: "assets/images/luxury_bracelet_1_1767966908812.png",
            badge: "Artisanal",
            description: "Hand-hammered gold cuff that reflects a heritage of craftsmanship. Bold yet remarkably comfortable."
        },
        {
            id: "b3",
            name: "Amara Chain Link",
            price: 1500,
            image: "assets/images/luxury_bracelet_1_1767966908812.png",
            badge: "Modern",
            description: "Sturdy 14k gold links with a high-polish finish. Features our signature 'sync'd' hidden clasp."
        },
        {
            id: "b4",
            name: "Zenith Tennis Bracelet",
            price: 9800,
            image: "assets/images/luxury_bracelet_1_1767966908812.png",
            badge: "Elite",
            description: "The ultimate luxury. 5 carats of VVS diamonds set in a flexible platinum mounting for maximum fire."
        }
    ]
};

const Cart = {
    get: () => JSON.parse(localStorage.getItem("cart")) || [],
    save: (cart) => localStorage.setItem("cart", JSON.stringify(cart)),
    add: (product, qty) => {
        let cart = Cart.get();
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            existing.quantity += qty;
        } else {
            cart.push({ ...product, quantity: qty });
        }
        Cart.save(cart);
        window.dispatchEvent(new Event('cartUpdated'));
    },
    updateQty: (index, change) => {
        let cart = Cart.get();
        cart[index].quantity += change;
        if (cart[index].quantity < 1) cart.splice(index, 1);
        Cart.save(cart);
        window.dispatchEvent(new Event('cartUpdated'));
    },
    getTotal: () => {
        return Cart.get().reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    getCount: () => {
        return Cart.get().reduce((sum, item) => sum + item.quantity, 0);
    },
    clear: () => {
        Cart.save([]);
        window.dispatchEvent(new Event('cartUpdated'));
    }
};
