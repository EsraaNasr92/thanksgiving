import dessertImg from '../assets/dessert-spotlight.jpg';

export default function DessertSpotlight() {
    return (
        <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 my-16 px-4">
            {/* Dessert Image */}
            <div className="lg:w-1/2">
                <img
                src={dessertImg}
                alt="Maple Pecan Pie"
                className="w-full rounded-xl shadow-lg"
                />
            </div>

            {/* Recipe & Text */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-4xl font-bold mb-4">Maple Pecan Pie</h2>
                <p className="text-gray-700 mb-4">
                A classic Thanksgiving dessert made simple: flaky pie crust, a sweet maple filling, and crunchy pecans on top. Perfect for family gatherings!
                </p>

                <h3 className="text-xl font-semibold mb-2">Pro Tip:</h3>
                <p className="text-gray-700 mb-6">
                Toast the pecans lightly before adding them to the pie. This brings out their natural flavor and makes your pie extra fragrant and crunchy.
                </p>
            </div>
        </section>

    );
}
