export default function MenuCard({ item }) {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
            <img
                src={item.image}
                alt={item.title}
                className="h-[175px] w-full object-cover"
            />

            <div className="px-5 py-4 text-center">

                <p className="text-base font-bold text-[#b83243]">
                    {item.price}
                </p>

                <h2 className="mt-4 text-sm font-bold text-black">
                    {item.title}
                </h2>

                <p className="mt-4 text-xs leading-5 text-black">
                    {item.description}
                </p>

            </div>
        </div>
    );
}