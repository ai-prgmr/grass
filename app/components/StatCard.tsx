import React from "react";

const StatCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
  color: string;
}> = ({ icon, title, value, color }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${color} mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};
export default StatCard;
