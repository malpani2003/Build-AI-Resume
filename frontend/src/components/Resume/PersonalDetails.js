import React from "react";

const PersonalDetails = ({ data, onChange, disabled }) => {
  return (
    <div>
      <label htmlFor="name" className="block text-lg font-medium text-gray-700">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter Your Name"
        value={data.name}
        onChange={onChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        disabled={disabled}
        required
      />

      <label
        htmlFor="email"
        className="block text-lg font-medium text-gray-700 mt-4"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter Your Email"
        value={data.email}
        onChange={onChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        disabled={disabled}
        required
      />

      <label
        htmlFor="phone"
        className="block text-lg font-medium text-gray-700 mt-4"
      >
        Phone
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Enter Your Phone Number"
        value={data.phone}
        onChange={onChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        disabled={disabled}
        required
      />

      <label
        htmlFor="address"
        className="block text-lg font-medium text-gray-700 mt-4"
      >
        Address
      </label>
      <input
        type="text"
        id="address"
        name="address"
        placeholder="Enter Your Address"
        value={data.address}
        onChange={onChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        disabled={disabled}
        required
      />

      <label
        htmlFor="gitHubUrl"
        className="block text-lg font-medium text-gray-700 mt-4"
      >
        Git-Hub URL
      </label>
      <input
        type="url"
        id="giturl"
        name="giturl"
        placeholder="Enter Your GitHub URL"
        value={data.giturl}
        onChange={onChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        disabled={disabled}
        required
      />

      <label
        htmlFor="portfolio"
        className="block text-lg font-medium text-gray-700 mt-4"
      >
        Portfolio URL
      </label>
      <input
        type="url"
        id="portfolio"
        name="portfolio"
        placeholder="Enter Your Portfolio URL"
        value={data.portfolio}
        onChange={onChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        disabled={disabled}
        required
      />
    </div>
  );
};

export default PersonalDetails;
