
import { useNavigate } from 'react-router';
import { productAllData } from '../../../utils/fackData/productallData'
import { useEffect, useState } from 'react';
import { useProduct } from '../../../hooks/useapiHoooks';
const PartnerOne = () => {
    const [productAllDatas,setProductAlllData]=useState([])
    const navigate=useNavigate()
    const divideItemsIntoParts = (items, parts = 4) => {
        const chunkSize = Math.ceil(items?.length / parts);
        return Array.from({ length: parts }, (_, index) =>
            items.slice(index * chunkSize, (index + 1) * chunkSize)
        );
    };
    const {data}=useProduct()
    console.log("datas",data);
    
    const dividedProducts = divideItemsIntoParts(productAllData);
    const handleClicked=(id)=>{
        console.log('hai');
        
        navigate(`/service/service-details/${id}`)
    }
    return (
        <section className="trust section-padding">
            <h4 className="mb-65 text-center title">Our Products</h4>
            <div className="content-section">
                {dividedProducts?.map((part, index) => (
                    <div key={index} className="content-item" >
                        <div className="product-items">
                            {part?.map((item, itemIndex) => (
                                <div key={itemIndex} className="product-item" onClick={()=>{handleClicked(item.id)}}>
                                    <div className="product-dot"></div>
                                    <p
                                        className="product-name"
                                        title={item?.service_name?.length > 25 ? item?.service_name : ''}
                                    >
                                        {item?.service_name?.length > 25
                                            ? `${item.service_name.slice(0, 25)}...`
                                            : item.service_name}
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
