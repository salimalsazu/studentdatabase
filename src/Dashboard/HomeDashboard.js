import React from 'react';
import Lottie from 'lottie-react';
import reader from './dash.json'


const HomeDashboard = () => {
    return (
        <div className='flex justify-center items-center'>
            <Lottie className='w-1/2' animationData={reader} loop={true} />
        </div>
    );
};

export default HomeDashboard;