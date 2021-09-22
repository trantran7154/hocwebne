Vue.component('w-ckeditor-vue', window['w-ckeditor-vue'])
var Main = {
    data() {
        return {
            tableData: [
                {
                    code: 'BP-1',
                    name: 'Bàn phím đẹp và chất lượng',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZiaXVSwY4TApXOC6LgwaIDdKJQ4MC0xr3GA&usqp=CAU',
                    category: 'Dụng cụ máy tính',
                    price: '400.000 VNĐ',
                    view: '20',
                    describe: 'Bàn phím có kích thước mỏng, kiểu dáng bắt mắt không chỉ giúp tiết kiệm được diện tích mà còn tạo tính thẩm mỹ cho không gian làm việc. Ngoài ra, bạn còn có thể điều chỉnh chiều cao bằng cách gấp lại hoặc mở rộng đôi chân vững chắc để tăng độ nghiên của bàn phím thêm 8 độ.',
                    content: 'Bàn tay của bạn sẽ tận hưởng những phím bấm thấp, yên tĩnh và bố trí phím tiêu chuẩn với đầy đủ kích thước F-phím và phím số. Với bàn phím Logitech K120 USB, bạn chỉ cần cắm nó vào cổng USB trên máy tính để bàn, máy tính xách tay hoặc máy tính netbook và bắt đầu sử dụng nó ngay lập tức.',
                    datecreate: '2016-05-01',
                    datemodified: '2016-05-01',
                    usercreate: 'trân',
                    usermodified: 'trân',
                    active: true,
                    bin: false,
                    follow: false,
                    note: false,
                },
                {
                    code: 'BP-2',
                    name: 'Bàn phím đẹp và chất lượng',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZiaXVSwY4TApXOC6LgwaIDdKJQ4MC0xr3GA&usqp=CAU',
                    category: 'Dụng cụ máy tính',
                    price: '400.000 VNĐ',
                    view: '20',
                    describe: 'Bàn phím có kích thước mỏng, kiểu dáng bắt mắt không chỉ giúp tiết kiệm được diện tích mà còn tạo tính thẩm mỹ cho không gian làm việc. Ngoài ra, bạn còn có thể điều chỉnh chiều cao bằng cách gấp lại hoặc mở rộng đôi chân vững chắc để tăng độ nghiên của bàn phím thêm 8 độ.',
                    content: 'Bàn tay của bạn sẽ tận hưởng những phím bấm thấp, yên tĩnh và bố trí phím tiêu chuẩn với đầy đủ kích thước F-phím và phím số. Với bàn phím Logitech K120 USB, bạn chỉ cần cắm nó vào cổng USB trên máy tính để bàn, máy tính xách tay hoặc máy tính netbook và bắt đầu sử dụng nó ngay lập tức.',
                    datecreate: '2016-05-01',
                    datemodified: '2016-05-01',
                    usercreate: 'trân',
                    usermodified: 'trân',
                    active: false,
                    bin: false,
                    follow: false,
                    note: false,
                }
            ],
            listData:{
                tabsMain: [
                    {
                        label: 'Tất cả sản phẩm',
                        name: 'index'
                    },
                    {
                        label: 'Theo dõi',
                        name: 'follow'
                    },
                    {
                        label: 'Chú ý',
                        name: 'note'
                    },
                    {
                        label: 'Thùng rác',
                        name: 'bin'
                    }
                ],
                optionsAction: [
                    {
                        label: 'Theo dõi',
                        value: '1'
                    },
                    {
                        label: 'Chú ý',
                        value: '2'
                    },
                    {
                        label: 'Đưa vào thùng rác',
                        value: '3'
                    },
                    {
                        label: 'Khôi phục',
                        value: '4'
                    }
                ],
                optionsCategory: [
                    {
                        label: 'Dụng cụ máy tính',
                        value: '1'
                    },
                    {
                        label: 'Phần mềm',
                        value: '2'
                    },
                    {
                        label: 'Phần cứng',
                        value: '3'
                    }
                ]
            },
            fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
            productForm: {
                code:'',
                name:'',
                image:'',
                category: [],
                price:'',
                view:'',
                describe:'',
                content:'',
                active: true
            },
            productValidation: {
                name: [
                    {  
                        required: true, 
                        message: 'Vui lòng nhập tên sản phẩm', 
                        trigger: 'change' 
                    },
                    {
                        max: 200,
                        message: 'Vượt quá số lần cho phép', 
                        trigger: 'change' 
                    }
                ],
                code: [
                    {
                        max: 10,
                        message: 'Vượt quá số lần cho phép', 
                        trigger: 'change' 
                    }
                ],
                price: [
                    {
                        max: 50,
                        message: 'Vượt quá số lần cho phép', 
                        trigger: 'change' 
                    }
                ],
                describe: [
                    {
                        max: 500,
                        message: 'Vượt quá số lần cho phép', 
                        trigger: 'change' 
                    }
                ],
                view: [
                    {
                        max: 50,
                        message: 'Vượt quá số lần cho phép', 
                        trigger: 'change' 
                    }
                ],
            },
            multipleSelection: [],
            activeMain: 'index',
            search: '',
            valueAction: '',
            dialogFormCreateVisible: false,
            labelPosition:'top'
        }
    },
    mounted() {

    },
    methods: {
        uploadImages(){
            const preview = document.getElementById('myImage');
            const file = document.querySelector('input[type=file]').files[0];
            const reader = new FileReader();

            reader.addEventListener("load", function () {
                // convert image file to base64 string
                preview.src = reader.result;
            }, false);

            if (file) {
                reader.readAsDataURL(file);
            }
        },
        clickCreateProduct(){
            this.dialogFormCreateVisible = true,
            this.title = "Thêm sản phẩm"
        }
    }
};
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')