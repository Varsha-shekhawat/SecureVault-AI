export default function MenuItem({
    icon: Icon,
    title,
    active = false,
}) {
    return (
        <div
            className={`
            flex items-center gap-3
            px-4 py-3
            rounded-xl
            cursor-pointer
            transition-all
            duration-200
            ${
                active
                    ? "bg-[#EEF3ED] text-[#557A5A]"
                    : "hover:bg-[#F6F5F2] text-gray-700"
            }
        `}
        >
            <Icon size={20} />

            <span className="font-medium">
                {title}
            </span>
        </div>
    );
}