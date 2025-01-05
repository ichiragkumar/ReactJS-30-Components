import { shopitems } from '../lib/shopitems';

export const ShopItemApp = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {shopitems && shopitems.length > 0 ? (
        shopitems.map((eachitem) => (
          <div
            key={eachitem.id}
            className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center transition transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={eachitem.image}
              alt={eachitem.name}
              className="w-32 h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-white text-lg font-semibold mb-2">{eachitem.name}</h3>
            <p className="text-gray-400 text-sm">Price: ${eachitem.price}</p>
            <p className="text-gray-400 text-sm">Quantity: {eachitem.quantity}</p>
            <p className="text-gray-400 text-sm">Rating: {eachitem.rating} ★</p>
            <p className="text-gray-400 text-sm">Discount: {eachitem.discount}%</p>
          </div>
        ))
      ) : (
        <p className="text-white text-center">No items available</p>
      )}
    </div>
  );
};
