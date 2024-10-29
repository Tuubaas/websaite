import React from 'react';

const RoleCategories = () => {
  return (
    <div className="bg-[#0f1116] text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Hello, we're websaite. And you are...?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Digital Leader */}
          <div className="space-y-4">
            <div className="text-sm text-blue-400 font-medium">DIGITAL LEADER</div>
            <h3 className="text-2xl font-semibold">You need a professional website without the hassle.</h3>
            <p className="text-gray-400">
              Get a stunning website that matches your competitors, without the overhead of an in-house development team. Perfect for small to medium businesses.
            </p>
          </div>

          {/* Creator */}
          <div className="space-y-4">
            <div className="text-sm text-blue-400 font-medium">CREATOR</div>
            <h3 className="text-2xl font-semibold">You want to focus on your content.</h3>
            <p className="text-gray-400">
              Create and update your website content easily without technical knowledge. Our AI handles the design and implementation while you focus on what matters.
            </p>
          </div>

          {/* Optimizer */}
          <div className="space-y-4">
            <div className="text-sm text-blue-400 font-medium">OPTIMIZER</div>
            <h3 className="text-2xl font-semibold">You want to keep improving.</h3>
            <p className="text-gray-400">
              Easily test new layouts and content to improve your website's performance. Make changes instantly without waiting for developer availability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleCategories;