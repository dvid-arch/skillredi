

const ProgressBar = ({ progress, total, xp }) => {
    const percentage = total > 0 ? (progress / total) * 100 : 0;
    console.log(percentage)
    return (
        <div className="flex items-center gap-2">
            <div className="w-64 h-2 bg-gray-200 rounded-full ">
                <div style={{ width: `${percentage}%` }} className="h-2 bg-green-600 rounded-full"></div>

            </div>
            <span className="text-sm font-medium">
                {xp && `${Math.round(progress)} / ${Math.round(total)} XP`}
            </span>

        </div>
    );
};

export default ProgressBar;