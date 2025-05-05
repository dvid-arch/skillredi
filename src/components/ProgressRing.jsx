

const ProgressRing = ({ percentage }) => {
  // Simple conic-gradient approach (might need browser prefixes or adjustments)
  const conicGradient = `conic-gradient(#16a34a ${percentage}%, #e5e7eb ${percentage}%)`; // green-600 and gray-200

  return (
    <div className="relative w-16 h-16">
       {/* Background Ring */}
       <div className="absolute inset-0 rounded-full bg-gray-200"></div>
       {/* Progress Ring */}
       <div
          className="absolute inset-0 rounded-full"
          style={{ background: conicGradient }}
       ></div>
       {/* Inner Circle to create the ring effect */}
       <div className="absolute inset-[10px] bg-white rounded-full flex items-center justify-center">
          <span className="text-sm font-semibold text-green-700">{percentage}%</span>
       </div>
    </div>
  );
};


export default ProgressRing;