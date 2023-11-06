import DeDanhGia from '@/components/DeDanhGia';
import React, {useState} from 'react';

const KeHoach = () => {
    const [typeCheck,setTypeCheck] =useState('Đề đánh giá và đề kiểm tra')
    const [typeCount,setTypeCount] = useState(2)
    return (
        <div>
            <DeDanhGia title={'Chỉnh sửa'} typeCheck={typeCheck} typeCount={typeCount}/>
        </div>
    );
};

export default KeHoach;