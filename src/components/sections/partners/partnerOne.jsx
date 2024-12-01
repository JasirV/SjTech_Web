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

    const divideItemsIntoParts = (items, parts = 4) => {
        const chunkSize = Math.ceil(items.length / parts);
        return Array.from({ length: parts }, (_, index) =>
            items.slice(index * chunkSize, (index + 1) * chunkSize)
        );
    };

    const dividedProducts = divideItemsIntoParts(products);

    return (
        <section className="trust section-padding">
            <h4 className="mb-65 text-center title">Our Products</h4>
            <div className="content-section">
                {dividedProducts.map((part, index) => (
                    <div key={index} className="content-item">
                        <div className="product-items">
                            {part.map((item, itemIndex) => (
                                <div key={itemIndex} className="product-item">
                                    <div className="product-dot"></div>
                                    <p
                                        className="product-name"
                                        title={item.name.length > 25 ? item.name : ''}
                                    >
                                        {item.name.length > 25
                                            ? `${item.name.slice(0, 25)}...`
                                            : item.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PartnerOne;
