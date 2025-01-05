import { useState } from 'react';

export const AmericanExpressCard = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [location, setLocation] = useState('');


  const validateCardNumber = (number) => /^[0-9]{15}$/.test(number); 
  const validateExpiryDate = (date) => {
    const currentDate = new Date();
    const [month, year] = date.split('/').map((part) => parseInt(part, 10));
    if (month < 1 || month > 12 || year < currentDate.getFullYear() % 100) {
      return false;
    }
    const expiryDate = new Date(`20${year}`, month - 1);
    return expiryDate > currentDate;
  };

  return (
    <div className="flex p-6 bg-gray-900 text-white rounded-lg shadow-lg w-full max-w-md mx-auto border border-gray-700">
      <div className="w-1/2 pr-4">
        <h1 className="text-3xl font-bold mb-6">American Express Card</h1>

        <div className="mb-4">
          <label className="block text-sm mb-2">Enter Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2">Enter Your Card Number</label>
          <input
            type="text"
            placeholder="Enter Your Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className={`w-full p-2 bg-gray-800 text-white rounded border transition focus:outline-none ${
              validateCardNumber(cardNumber) ? 'border-green-500' : 'border-red-500'
            }`}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2">Enter Your Expiry Date (MM/YY)</label>
          <input
            type="text"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className={`w-full p-2 bg-gray-800 text-white rounded border transition focus:outline-none ${
              validateExpiryDate(expiryDate) ? 'border-green-500' : 'border-red-500'
            }`}
          />
        </div>

        <div>
            <label htmlFor="card-type" className="block text-sm mb-2">Enter your location</label>
            <input type="text" placeholder='Enter Your Location' value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
        </div>
      </div>

      <div className="w-1/2 border-l border-gray-700 pl-4">
        <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
        <div className="mb-4">
          <p className="text-sm">Your Name</p>
          <h3 className="text-lg font-medium transition-transform ease-in-out duration-300">
            {name || 'Your Name Here'}
          </h3>
        </div>
        <div className="mb-4">
          <p className="text-sm">Your Card Number</p>
          <h3 className="text-lg font-medium transition-transform ease-in-out duration-300">
            {cardNumber || 'XXXX XXXXXX XXXXX'}
          </h3>
        </div>
        <div>
          <p className="text-sm">Expiry Date</p>
          <h3 className="text-lg font-medium transition-transform ease-in-out duration-300">
            {expiryDate || 'MM/YY'}
          </h3>
        </div>
        <div>
            <p>Location</p>
            <h3 className="text-lg font-medium transition-transform ease-in-out duration-300">
                {location}
            </h3>
        </div>
      </div>
    </div>
  );
};
