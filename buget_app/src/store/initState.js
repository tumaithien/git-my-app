import { v4 as uuidv4 } from 'uuid';

const initState ={
    listDataIncome:[
        {
            id: uuidv4(),
            description: 'Chi tiền ăn sáng tháng 01/2021',
            amount: -1800000
        },
        {
            id: uuidv4(),
            description: 'Thu nhap thang 01',
            amount: 6000000
        },
        {
            id: uuidv4(),
            description: 'Chi tiền nước uống tháng 01/2021',
            amount: -200000
        },
        {
            id: uuidv4(),
            description: 'Thu nhập bên ngoài 08/01/2021',
            amount: 50000
        },
        {
            id: uuidv4(),
            description: 'Tiền thưởng dự án ngoài chưa lấy',
            amount: 1000000
        },
        {
            id: uuidv4(),
            description: 'Tiền đi chơi',
            amount: -1000000
        }
    ]
}

export default initState