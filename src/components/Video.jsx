import Thanksgiving from '../assets/thanksgiving.mp4';

export default function Video() {
    return (
        <section className="w-full py-12">
            <div className="w-full">
                {/* Responsive Video */}
                <div className="relative">
                    <video
                        src={Thanksgiving}
                        className="w-full h-[600px] object-cover"
                        controls={false}
                        autoPlay
                        loop
                        muted
                    />
                </div>
            </div>
        </section>
    );
}
