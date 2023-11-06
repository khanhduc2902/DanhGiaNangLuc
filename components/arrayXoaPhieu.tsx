type DataItem ={
    id: string,
    name: string,
    state: string,
    ob: string,
    obNum: number,
    time :{
        start: string,
        end: string
    },
    voted: string,
    note: string,
}
const data: DataItem[] =[
    {'id':'PDG0108','name':"Đề kiểm tra năng lực ngày 29/7",'state':"Chờ duyệt",'ob':"Nhân viên",'obNum':5,'time':{'start':'23/03/2023','end':'23/03/2023'},'voted':'','note':'sdd'},
    {'id':'PDG0108','name':"ĐỀ IO UV ĐẾN VÒNG PHỎNG VẤN 23/3",'state':"Chờ duyệt",'ob':"Nhân viên",'obNum':5,'time':{'start':'23/03/2023','end':'23/03/2023'},'voted':'','note':'sdd'},
    {'id':'PDG0108','name':"Đề kiểm tra năng lực ngày 29/7",'state':"đã duyệt",'ob':"Nhân viên",'obNum':5,'time':{'start':'23/03/2023','end':'23/03/2023'},'voted':'','note':'sdd'},
    {'id':'PDG0108','name':"ĐỀ KIỂM TRA NĂNG LỰC NHÂN VIÊN NGÀY 20/3",'state':"Chờ duyệt",'ob':"Nhân viên",'obNum':5,'time':{'start':'23/03/2023','end':'23/03/2023'},'voted':'','note':'sdd'},
    {'id':'PDG0108','name':"ĐỀ KIỂM TRA NĂNG LỰC NHÂN VIÊN NGÀY 20/3",'state':"đã duyệt",'ob':"Nhân viên",'obNum':5,'time':{'start':'23/03/2023','end':'23/03/2023'},'voted':'','note':'sdd'},
    {'id':'PDG0108','name':"ĐỀ IO UV ĐẾN VÒNG PHỎNG VẤN 23/3",'state':"Chờ duyệt",'ob':"Nhân viên",'obNum':5,'time':{'start':'23/03/2023','end':'23/03/2023'},'voted':'','note':'sdd'},
    {'id':'PDG0108','name':"Đề test IQ chiều ngày 23.03",'state':"đã duyệt",'ob':"Nhân viên",'obNum':5,'time':{'start':'23/03/2023','end':'23/03/2023'},'voted':'','note':'sdd'},
    {'id':'PDG0108','name':"Đề kiểm tra năng lực ngày 29/7",'state':"đã duyệt",'ob':"Nhân viên",'obNum':5,'time':{'start':'23/03/2023','end':'23/03/2023'},'voted':'','note':'sdd'},
    {'id':'PDG0108','name':"ĐỀ KIỂM TRA NĂNG LỰC NHÂN VIÊN NGÀY 20/3",'state':"Chờ duyệt",'ob':"Nhân viên",'obNum':5,'time':{'start':'23/03/2023','end':'23/03/2023'},'voted':'','note':'sdd'},
    {'id':'PDG0108','name':"Đề test IQ chiều ngày 23.03",'state':"đã duyệt",'ob':"Nhân viên",'obNum':5,'time':{'start':'23/03/2023','end':'23/03/2023'},'voted':'','note':'sdd'}
]


export default data;