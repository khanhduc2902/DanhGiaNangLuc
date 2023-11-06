type DataItem ={
    name: string,
    state: string,
    creator: string,
    voted: number,
    time :{
        start: string,
        end: string
    },
}
const data: DataItem[] =[
    {'name':"Đề kiểm tra năng lực ngày 29/7",'state':"Chờ duyệt",'creator':"CÔNG TY CỔ PHẦN THANH TOÁN HƯNG HÀ",'voted':1,'time':{'start':'23/03/2023','end':'23/03/2023'}},
    {'name':"ĐỀ IO UV ĐẾN VÒNG PHỎNG VẤN 23/3",'state':"Chờ duyệt",'creator':"CÔNG TY CỔ PHẦN THANH TOÁN HƯNG HÀ",'voted':12,'time':{'start':'23/03/2023','end':'23/03/2023'}},
    {'name':"Đề kiểm tra năng lực ngày 29/7",'state':"đã duyệt",'creator':"CÔNG TY CỔ PHẦN THANH TOÁN HƯNG HÀ",'voted':4,'time':{'start':'23/03/2023','end':'23/03/2023'}},
    {'name':"ĐỀ KIỂM TRA NĂNG LỰC NHÂN VIÊN NGÀY 20/3",'state':"Chờ duyệt",'creator':"CÔNG TY CỔ PHẦN THANH TOÁN HƯNG HÀ",'voted':5,'time':{'start':'23/03/2023','end':'23/03/2023'}},
    {'name':"ĐỀ KIỂM TRA NĂNG LỰC NHÂN VIÊN NGÀY 20/3",'state':"đã duyệt",'creator':"CÔNG TY CỔ PHẦN THANH TOÁN HƯNG HÀ",'voted':2,'time':{'start':'23/03/2023','end':'23/03/2023'}},
    {'name':"ĐỀ IO UV ĐẾN VÒNG PHỎNG VẤN 23/3",'state':"Chờ duyệt",'creator':"CÔNG TY CỔ PHẦN THANH TOÁN HƯNG HÀ",'voted':1,'time':{'start':'23/03/2023','end':'23/03/2023'}},
    {'name':"Đề test IQ chiều ngày 23.03",'state':"đã duyệt",'creator':"CÔNG TY CỔ PHẦN THANH TOÁN HƯNG HÀ",'voted':4,'time':{'start':'23/03/2023','end':'23/03/2023'}},
    {'name':"Đề kiểm tra năng lực ngày 29/7",'state':"đã duyệt",'creator':"CÔNG TY CỔ PHẦN THANH TOÁN HƯNG HÀ",'voted':8,'time':{'start':'23/03/2023','end':'23/03/2023'}},
    {'name':"ĐỀ KIỂM TRA NĂNG LỰC NHÂN VIÊN NGÀY 20/3",'state':"Chờ duyệt",'creator':"CÔNG TY CỔ PHẦN THANH TOÁN HƯNG HÀ",'voted':2,'time':{'start':'23/03/2023','end':'23/03/2023'}},
    {'name':"Đề test IQ chiều ngày 23.03",'state':"đã duyệt",'creator':"CÔNG TY CỔ PHẦN THANH TOÁN HƯNG HÀ",'voted':4,'time':{'start':'23/03/2023','end':'23/03/2023'}}
]


export default data;