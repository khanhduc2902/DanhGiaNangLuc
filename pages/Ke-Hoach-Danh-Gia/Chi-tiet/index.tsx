import DeKiemTra from '@/components/DeKiemtra';
import React, { use, useState } from 'react';

const Tester = () => {
    const [typeOf,setTypeOf] =useState(1)
    return (
        <>
            {
                (typeOf === 1)?
                    (<DeKiemTra 
                        name={'Tester 2'}
                        type={'Đề kiểm tra'}
                        quantiy={'1'}
                        creator={'le anh tuan12'}
                        CreateDay={'07/08/2023'}
                        statement={'Đã duyệt'}
                        confirmer={'le anh tuan12'}
                        confirmDay={'07/08/2023'}
                        startDay={'08/08/2023'}
                        endDay={'09/08/2023'}
                        startHour={'07:36'}
                        endHour={'09:36'}
                        around={'Không lặp lại'}
                        note={'7878'}
                    />) : (
                        (typeOf === 2) ? '': ''
                    )
            
            
            }
        </>
    );
};

export default Tester;