import { useState } from "react";
import AppleCider from "../assets/apple-cider.jpg";
import CranberryMocktail from "../assets/cranberry-mocktail.jpg";
import HotChocolate from "../assets/hot-chocolate.jpg";
import PumpkinLatte from "../assets/pumpkin-latte.jpg";
import SpicedSangria from "../assets/spiced-sangria.jpg";

export default function SeasonalDrink() {
    const drinks = [
    {
        id: 1,
        name: "Classic Apple Cider",
        description: "Warm, spiced with cinnamon & cloves",
        image: AppleCider,
    },
    {
        id: 2,
        name: "Pumpkin Spice Latte",
        description: "Creamy coffee with pumpkin & spices",
        image: PumpkinLatte,
    },
    {
        id: 3,
        name: "Cranberry Mocktail",
        description: "Tart & sweet, festive & colorful",
        image: CranberryMocktail,
    },
    {
        id: 4,
        name: "Hot Chocolate",
        description: "With marshmallows, perfect for kids",
        image: HotChocolate,
    },
    {
        id: 5,
        name: "Spiced Sangria",
        description: "Red wine with fall fruits & spices",
        image: SpicedSangria,
    },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === drinks.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? drinks.length - 1 : prev - 1));
    };

    return (
        <section className="py-16">
            <div className="mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-orange-800">Seasonal Drinks</h2>

                <div className="relative w-full max-w-7xl mx-auto">
                {/* Carousel Items */}
                <div className="overflow-hidden">
                    <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                    {drinks.map((drink) => (
                        <div
                            key={drink.id}
                            className="min-w-full bg-white shadow-lg overflow-hidden mx-2"
                        >
                        <img
                            src={drink.image}
                            alt={drink.name}
                            className="w-full h-180 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-orange-700 mb-2">
                            {drink.name}
                            </h3>
                            <p className="text-gray-700 mb-4">{drink.description}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition"
                >
                    ‹
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition"
                >
                    ›
                </button>
                </div>
            </div>
        </section>
    );
}
