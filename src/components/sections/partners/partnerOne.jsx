const PartnerOne = () => {
    const products = [
        { name: 'SS & Glass Handrails' },
        { name: 'Aluminum Curtain Wall' },
        { name: 'Stainless Steel Cladded Doors' },
        { name: 'Stainless Steel Handrails' },
        { name: 'Aluminum Doors & Window' },
        { name: 'Fire Rated Steel Doors' },
        { name: 'Mashrabiya' },
        { name: 'Signage Board' },
        { name: 'Steel Powder Coated Handrail' },
        { name: 'ACP-Cladding' },
        { name: 'Steel Works' },
        { name: 'Glass Balustrade' },
        { name: 'Glass Partitions' },
        { name: 'Aluminum Louver' },
        { name: 'Steel Fence' },
        { name: 'Skylight & Canopy' },
        { name: 'Glass Spyder System' },
        { name: 'Automatic Sliding Doors' },
        { name: 'Tray and Trunking' },
        { name: 'LED Screen' },
        { name: 'Aluminum Handles & Hinges' },
        { name: 'Silicones' },
        { name: 'Fasteners' },
        { name: 'U Channels' },
        { name: 'Ironmongeries' },
        { name: 'Tubes and Pipes' },
        { name: 'SS Fittings' },
        { name: 'Consumables' },
        { name: 'Aluminum & Stainless Steel Sheet' },
        { name: 'Glass Accessories' },
        { name: 'Bolts' },
    ];

    // Function to divide the items into 4 parts (each part containing 5 items)
    const divideItemsIntoParts = (items, parts = 4) => {
        const chunkSize = Math.ceil(items.length / parts);
        const chunks = [];
        for (let i = 0; i < items.length; i += chunkSize) {
            chunks.push(items.slice(i, i + chunkSize));
        }
        return chunks;
    };

    // Divide the products into 4 parts
    const dividedProducts = divideItemsIntoParts(products);

    return (
        <section className="trust section-padding">
            <h4 className="mb-65 text-center title">Our Products</h4>
            <div className="content-section">
                {dividedProducts.map((part, index) => (
                    <div key={index} className="content-item">
                        {/* Display products for each part */}
                        <div className="product-items">
                            {part.map((item, itemIndex) => (
                                <div key={itemIndex} className="product-item">
                                    <div className="product-dot"></div>
                                    {item.name.length < 28 ? (
                                        <p>{item.name}</p>
                                    ) : (
                                        <p>{item.name.slice(0, 25)}...</p>
                                    )}
                                </div>
                            ))}
                        </div>
                        {/* Divider between sections */}
                        {index < dividedProducts.length - 1 && (
                            <div className="divider"></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PartnerOne;
