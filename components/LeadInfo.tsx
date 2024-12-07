import Image from "next/image";

const LeadInfo = () => {
    return (
        <div>
            <section className="lead-info bg-white shadow-md rounded-lg p-6 flex justify-between items-center">
                {/* Left Section */}
                <div className="left">
                    <p className="text-yellow-600">Connected</p>
                    <h2 className="text-4xl font-semibold text-gray-800">Mamta Naik</h2>
                    <p className="text-gray-400 mt-4 flex items-center">
                        <Image className="rounded-full inline mr-2" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" width={28} height={28} alt="image" />
                        Dvip Patel
                    </p>
                </div>
                {/* Right Section */}
                <div className="right flex space-x-2">
                    <button className="text-green-800 bg-green-200 px-4 py-2 rounded">Create Account</button>
                    <button className="text-yellow-800 bg-yellow-200 px-4 py-2 rounded">Create Contact</button>
                </div>
            </section>

            {/* Tabs Section */}
            <section className="tabs mt-6">
                <div className="flex space-x-4 border-b-2 border-gray-200">
                    <button className="py-2 px-4 text-gray-600">Basic Details</button>
                    <button className="py-2 px-4 text-gray-600">Account Details</button>
                    <button className="py-2 px-4 text-gray-600">Lead Details</button>
                    <button className="py-2 px-4 text-gray-600">Teams</button>
                    <button className="py-2 px-4 text-[#3c5365] border-b-2 border-[#3c5365]">Other Contact</button>
                </div>
            </section>
        </div>
    );
};

export default LeadInfo;