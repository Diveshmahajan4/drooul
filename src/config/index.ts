export const PRODUCT_CATEGORIES = [
    {
        label: "UI Kits",
        value: "ui_kits" as const,
        featured: [
            {
                name: 'Editor picks',
                href: '#',
                imageSrc: '/ui-kits/mixed.jpg',
            },
            {
                name: 'New Arrivals',
                href: '#',
                imageSrc: '/ui-kits/blue.jpg'
            },
            {
                name: 'Best Sellers',
                href: '#',
                imageSrc: '/ui-kits/purple.jpg'
            },
        ]
    },
    {
        label: "Icons",
        value: "icons" as const,
        featured: [
            {
                name: 'Favorite Icon picks',
                href: '#',
                imageSrc: '/icons/picks.jpg',
            },
            {
                name: 'New Arrivals',
                href: '#',
                imageSrc: '/icons/new.jpg'
            },
            {
                name: 'Bestselling Icons',
                href: '#',
                imageSrc: '/icons/bestsellers.jpg'
            },
        ]
    },
]