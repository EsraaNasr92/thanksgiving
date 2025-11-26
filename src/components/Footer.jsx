export default function Footer() {
    return (
        <footer className="text-orange-800 py-6 mt-16">
        <div className="container mx-auto text-center">
            <p className="mb-2">
            Thanksgiving Recipe Hub – Inspiring families to cook with American Harvest products
            </p>
            <p className="text-sm">
            &copy; {new Date().getFullYear()} Made with ❤️ by <a href="https://esraa.dev" className="underline hover:text-orange-600">esraa.dev</a>
            </p>
        </div>
        </footer>
    );
}

