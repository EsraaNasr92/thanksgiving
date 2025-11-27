import Drink from "../assets/drinks.jpg";
import Pie from "../assets/pie.jpg";
import Stuffing from "../assets/stuffing.jpg";
import sweetPotatoes from "../assets/sweet-potatoes.jpg";
import Turkey from "../assets/turkey.jpg";

export default function CookingTips() {
    const tips = [
        {
            title: "Roast the Perfect Turkey",
            img: Turkey,
            text: "Use a herb-infused butter rub under the skin to lock in moisture and add flavor.",
            tip: "Baste every 30 minutes using American Harvest’s seasoned broth.",
        },
        {
            title: "Build Flavorful Stuffing",
            img: Stuffing,
            text: "Start with toasted bread, sautéed vegetables, and warm herbs for aroma and depth.",
            tip: "Add broth gradually — stuffing should be moist, not mushy.",
        },
        {
            title: "Sweet Potatoes Made Easy",
            img: sweetPotatoes,
            text: "Bake them whole until soft, then mash with butter and maple syrup.",
            tip: "Use American Harvest’s organic sweet potatoes for natural sweetness.",
        },
        {
            title: "Perfect Pie Crust",
            img: Pie,
            text: "Keep ingredients cold and avoid overworking the dough for flakiness.",
            tip: "Chill the dough before baking so it holds its shape.",
        },
        {
            title: "Warm Seasonal Drinks",
            img: Drink,
            text: "Simmer apple cider with cinnamon, cloves, and orange slices.",
            tip: "Add a splash of American Harvest honey to deepen the flavor.",
        },
    ];

    return (
        <div className="cooking-tips max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-12">
                Thanksgiving Favorites
            </h2>

            <div className="flex flex-wrap justify-center gap-10">
                {tips.map((item, i) => (
                    <div
                        key={i}
                        className="w-full sm:w-[48%] lg:w-[30%] bg-white shadow-md rounded-xl p-6 
                        hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-55 object-cover rounded-lg mb-4"
                        />

                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.text}</p>

                        <b className="block text-[var(--third-color)] mb-1">Pro Tip</b>
                        <p>{item.tip}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
