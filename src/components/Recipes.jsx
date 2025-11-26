export default function CookingTips() {
    return (
        <div className="cooking-tips max-w-7xl mx-auto px-4 py-12">

            {/* Section Title */}
            <h2 className="text-3xl font-bold text-center mb-10">Thanksgiving Favorites</h2>

            {/* === Row 1 (3 cards) === */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">

                {/* Card 1 */}
                <div className="w-full sm:w-[48%] lg:w-[30%] bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
                    <h3 className="text-xl mb-3">Roast the Perfect Turkey</h3>
                    <p className="text-gray-600 mb-4">
                        Use a herb-infused butter rub under the skin to lock in moisture and add flavor.
                        Roast at a steady temperature and let the turkey rest for 20 minutes before carving to keep it juicy.
                    </p>
                    <b className="block text-orange-700 mb-1">Pro Tip</b>
                    <p>Baste every 30 minutes using American Harvest’s seasoned broth for extra richness.</p>
                </div>

                {/* Card 2 */}
                <div className="w-full sm:w-[48%] lg:w-[30%] bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
                    <h3 className="text-xl mb-3">Build Flavorful Stuffing</h3>
                    <p className="text-gray-600 mb-4">
                        Start with toasted bread, sautéed vegetables, and warm herbs to give your stuffing depth and aroma.
                    </p>
                    <b className="block text-orange-700 mb-1">Pro Tip</b>
                    <p>Add warm broth little by little — the stuffing should be moist, not mushy.</p>
                </div>

                {/* Card 3 */}
                <div className="w-full sm:w-[48%] lg:w-[30%] bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
                    <h3 className="text-xl mb-3">Sweet Potatoes Made Easy</h3>
                    <p className="text-gray-600 mb-4">
                        Bake whole sweet potatoes until soft, then mash with butter and maple syrup for a silky texture.
                    </p>
                    <b className="block text-orange-700 mb-1">Pro Tip</b>
                    <p>Use American Harvest’s organic sweet potatoes for a naturally sweeter flavor.</p>
                </div>
            </div>

            {/* === Row 2 (centered 2 cards) === */}
            <div className="flex flex-wrap justify-center gap-8">

                {/* Card 4 */}
                <div className="w-full sm:w-[48%] lg:w-[30%] bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
                    <h3 className="text-xl  mb-3">Perfect Pie Crust</h3>
                    <p className="text-gray-600 mb-4">
                        Keep your ingredients chilled and avoid overworking the dough for a flaky, golden crust.
                    </p>
                    <b className="block text-orange-700 mb-1">Pro Tip</b>
                    <p>Chill the dough before baking to help it hold its shape beautifully.</p>
                </div>

                {/* Card 5 */}
                <div className="w-full sm:w-[48%] lg:w-[30%] bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
                    <h3 className="text-xl mb-3">Warm Seasonal Drinks</h3>
                    <p className="text-gray-600 mb-4">
                        Simmer apple cider with cinnamon sticks, cloves, and orange slices for a cozy fall drink.
                    </p>
                    <b className="block text-orange-700 mb-1">Pro Tip</b>
                    <p>Add a splash of American Harvest’s honey to deepen the flavor.</p>
                </div>

            </div>
        </div>
    );
}
