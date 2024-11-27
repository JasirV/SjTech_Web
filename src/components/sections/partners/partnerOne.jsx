import { FaTools, FaCogs, FaBolt, FaShieldAlt, FaBuilding, FaFireAlt, FaArrowsAltV } from 'react-icons/fa';

const PartnerOne = () => {
    const products = [
        { name: 'SS & Glass Handrails', icon: <FaTools /> },
        { name: 'Aluminum Curtain Wall', icon: <FaBuilding /> },
        { name: 'Stainless Steel Cladded Doors', icon: <FaShieldAlt /> },
        { name: 'Stainless Steel Handrails', icon: <FaTools /> },
        { name: 'Aluminum Doors & Window', icon: <FaBuilding /> },
        { name: 'Fire Rated Steel Doors', icon: <FaFireAlt /> },
        { name: 'Mashrabiya', icon: <FaFireAlt /> },
        { name: 'Signage Board', icon: <FaFireAlt /> },
        { name: 'Steel Powder Coated Handrail', icon: <FaTools /> },
        { name: 'ACP-Cladding', icon: <FaCogs /> },
        { name: 'Steel Works', icon: <FaTools /> },
        { name: 'Glass Balustrade', icon: <FaTools /> },
        { name: 'Glass Partitions', icon: <FaTools /> },
        { name: 'Aluminum Louver', icon: <FaTools /> },
        { name: 'Steel Fence', icon: <FaTools /> },
        { name: 'Skylight & Canopy', icon: <FaArrowsAltV /> },
        { name: 'Glass Spyder System', icon: <FaTools /> },
        { name: 'Automatic Sliding Doors', icon: <FaArrowsAltV /> },
        { name: 'Tray and Trunking', icon: <FaTools /> },
        { name: 'LED Screen', icon: <FaTools /> },
        { name: 'Aluminum Handles & Hinges', icon: <FaTools /> },
        { name: 'Silicones', icon: <FaCogs /> },
        { name: 'Fasteners', icon: <FaBolt /> },
        { name: 'U Channels', icon: <FaTools /> },
        { name: 'Ironmongeries', icon: <FaTools /> },
        { name: 'Tubes and Pipes', icon: <FaTools /> },
        { name: 'SS Fittings', icon: <FaTools /> },
        { name: 'Consumables', icon: <FaShieldAlt /> },
        { name: 'Aluminum & Stainless Steel Sheet', icon: <FaCogs /> },
        { name: 'Glass Accessories', icon: <FaTools /> },
        { name: 'Bolts', icon: <FaBolt /> }
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
            {/* <div className="container"> */}
                <h4 className="mb-65 text-center title">Our Products</h4>
                {/* <h4 className="mb-65 text-center title">Our Core Areas of Expertise</h4> */}

                <div className="content-section">
                    {dividedProducts.map((part, index) => (
                        <div key={index} className="content-item">
                            {/* Display products for each part */}
                            <div className="product-items">
                                {part.map((item, itemIndex) => (
                                    <div key={itemIndex} className="product-item">
                                        <div className="icon">{item.icon}</div>
                                        {item.name.length<28?
                                        <p>{item.name}</p>
                                        :
                                        <p>{item.name.slice(0,25)}...</p>
                                    }
                                    </div>
                                ))}
                            </div>

                            {/* Divider between sections */}
                            {index < dividedProducts.length - 1 && (
                                <div className="divider">
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            {/* </div> */}
        </section>
    );
};

export default PartnerOne;
