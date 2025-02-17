
import { useNavigate } from 'react-router';
// import { productAllData } from '../../../utils/fackData/productallData'
import { useEffect, useState } from 'react';
import { useProduct } from '../../../hooks/useapiHoooks';
import Preloader from '../../ui/preloader';
const PartnerOne = () => {
    const navigate=useNavigate()
    const divideItemsIntoParts = (items, parts = 4) => {
        const chunkSize = Math.ceil(items?.length / parts);
        return Array.from({ length: parts }, (_, index) =>
            items?.slice(index * chunkSize, (index + 1) * chunkSize)
        );
    };
    const {data:productAllData,isLoading}=useProduct()
    
    const dividedProducts = divideItemsIntoParts(productAllData);
    const handleClicked=(id)=>{
        
        navigate(`/service/service-details/${id}`)
    }
    return (
        <section className="trust section-padding">
    <h4 className="mb-65 text-center title">Our Products</h4>
    <div className="content-section">
        {isLoading? (
            // Loading Skeleton
            <>
            {[...Array(4)].map((_,i)=>(
            <divv key={i} className="content-item skeleton">
                <div className="product-items skeleton">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="product-item skeleton-item">
                            <div className="product-dot skeleton-dot"></div>
                            <p className="product-name skeleton-text"></p>
                        </div>
                    ))}
                </div>
            </divv>
            ))}
            </>
        ) : (
            dividedProducts?.map((part, index) => (
                <div key={index} className="content-item">
                    <div className="product-items">
                        {part?.map((item, itemIndex) => (
                            <div key={itemIndex} className="product-item" onClick={() => { handleClicked(item._id); }}>
                                <div className="product-dot"></div>
                                <p
                                    className="product-name"
                                    title={item?.service_name?.length > 25 ? item?.service_name : ''}
                                >
                                    {item?.service_name?.length > 25
                                        ? `${item?.service_name?.slice(0, 25)}...`
                                        : item?.service_name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))
        )}
    </div>
</section>

    );
};

export default PartnerOne;
