const ProgressBar = ({ percentage }) => {
    const max = 10;
    const activeCount = Math.round(percentage / 10); // Scale from 0-10
    return (
        <div className="flex flex-col gap-[2px]">
            {Array(max)
                .fill()
                .map((_, idx) => {
                    const isActive = idx >= max - activeCount;
                    return (
                        <div
                            key={idx}
                            className={`w-[15px] h-[4px] rounded-md ${isActive ? "bg-secondary" : "bg-gray-500"}`}
                        ></div>
                    );
                })}
        </div>
    );
};

const Card = ({
    title,
    percentage,
    icon
}) => {
    return (
        <div>
            <div className="flex space-x-2">
                <div>
                    <div className="w-[80px] h-[80px] bg-[#222d3d] flex justify-center items-center rounded-md">
                        <img src={icon} className="w-[40px] h-auto" alt="" />
                    </div>
                </div>
                <div>
                    <span className="text-primary dark:text-white text-xs">{percentage} %</span>
                    <ProgressBar percentage={percentage} />
                </div>
            </div>
            <span className="text-primary dark:text-white text-sm font-semibold">{title}</span>
        </div>
    );
};

export default Card;
