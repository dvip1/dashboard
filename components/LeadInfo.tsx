
const LeadInfo = () => {
  return (
    <div className="lead-info bg-white shadow-md rounded-lg p-6">
      {/* Lead ID */}
      <h2 className="text-xl font-semibold text-gray-800">LE-010071</h2>

      {/* Lead Name */}
      <h3 className="text-lg font-medium text-gray-600 mt-2">Mamta Naik</h3>

      {/* Assignment Info */}
      <p className="text-sm text-gray-500 mt-2">Assigned to: <span className="font-medium text-gray-700">Aniruddh Naidu</span></p>
    </div>
  );
};

export default LeadInfo;
