import React, { useEffect, useState } from 'react'

const useLoading = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 200);
    
        return () => clearTimeout(timer);
      }, []);

    return [loading]
}

export default useLoading