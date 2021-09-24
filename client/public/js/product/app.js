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
                ],
                indexProductAPI: [
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                    }
                ],
                optionsFonts: [
                    {
                        value: '"Times New Roman", Times, serif',
                        label: '"Times New Roman", Times, serif'
                    }
                ],
                optionsUser: [
                    {
                        value: 'tran',
                        label: 'tran'
                    }
                ],
                optionsBtn: [
                    {
                        value: '1',
                        label: 'Thêm sản phẩm'
                    },
                    {
                        value: '2',
                        label: 'Thêm API'
                    },
                    {
                        value: '3',
                        label: 'Thêm tải lên'
                    },
                    {
                        value: '4',
                        label: 'Cài đặt'
                    },
                    {
                        value: '5',
                        label: 'Cài đặt giao diện'
                    },
                    {
                        value: '6',
                        label: 'Cài đặt mật khẩu'
                    },
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
            productAPIForm: {
                link: '',
                user: '',
                password: '',
                key: ''
            },
            settingForm:{
                bgcolor: false,
                bgcolorMain: '',
                fonts: ''
            },
            createPasswordForm:{
                btn: [],
                useraccess: [],
                usereditpass: [],
                password: '',
                repassword: ''

            },
            productAPIValidate: {

            },
            createPasswordValidate:{

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
                ]
            },
            multipleSelection: [],
            activeMain: 'index',
            search: '',
            valueAction: '',
            dialogFormCreateVisible: false,
            labelPosition:'top',
            tabPosition: 'left',
            isCreate: false,
            isCreateAPI: false,
            loadingForm: false,
            loadingTable: false,
            activeInstructCreateAPI: ['1','2','3'],
            progress: 0,
            isProgressCreateAPI: false,
            isSettingCreate: false,
            bg: '#FFF',
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
            let that = this;
            that.dialogFormCreateVisible = true;
            that.title = "Thêm sản phẩm mới";
            that.isCreate = true;

            this.setTimeout1sLoading();
        },
        clickCreateAPIProduct(){
            let that = this;
            this.clearForm();
            that.title = "Thêm sản phẩm bằng API";
            that.isCreateAPI = true;

            this.setTimeout1sLoading();

            that.colorCreateAPI = '#909399';
            that.textCreateAPI = '#FFF';
        },
        clickCreateProductSub(){
            let that = this;
            this.clearForm();
            that.isCreate = true;
            that.title = "Thêm sản phẩm mới"
            
            this.setTimeout1sLoading();

            that.colorCreate = '#909399';
            that.textCreate = '#FFF';
        },
        clickCreateSettingProduct(){
            let that = this;
            this.clearForm();
            that.isSettingCreate = true;
            that.title = "Cài đặt"
            
            this.setTimeout1sLoading();

            that.colorCreateSetting = '#909399';
            that.textCreateSetting = '#FFF';
        },
        createProduct(productForm){
            let that = this;
            that.$refs[productForm].validate((valid) => {
                if (valid) {
                  console.log(this.productForm);
                } else {
                  console.log('error submit!!');
                  return false;
                }
            });
        },
        createProductAPI(productAPIForm){
            let that = this;
            that.isProgressCreateAPI = true;
            that.$refs[productAPIForm].validate((valid) => {
                if (valid) {
                    console.log(this.productAPIForm);

                    axios.get(this.productAPIForm.link)
                        .then(function (response) {
                        // handle success
                            console.log(response.data);
                            that.listData.indexProductAPI = response.data;
                        })
                        .catch(function (error) {
                        // handle error
                        console.log(error);
                        })
                        .then(function () {
                        // always executed
                    });
                } else {
                console.log('error submit!!');
                return false;
                }
            });
        },
        createPasswordCreate(createPasswordForm){
            let that = this;
            that.$refs[createPasswordForm].validate((valid) => {
                if (valid) {
                  console.log(that.createPasswordForm);
                } else {
                  console.log('error submit!!');
                  return false;
                }
            });
        },
        deleteRowCreateAPI(index, rows){
            rows.splice(index, 1);
        },
        changeBG(settingForm){
            let that = this;
            if(that.settingForm.bgcolor){
                that.bg = "red";
            }
            else{
                that.bg = "#fff";
            }
        },
        clearForm(){
            let that = this;
            that.isCreate = false;
            that.isCreateAPI = false;
            that.isSettingCreate = false;
            that.colorCreate = '';
            that.colorCreateAPI = '';
            that.colorCreateSetting = '';
            that.textCreateAPI = '';
            that.textCreate = '';
            that.textCreateSetting = '';
        },
        setTimeout1sLoading(){
            let that = this;
            that.loadingForm = true;
            setTimeout(function(){ 
                that.loadingForm = false;
            }, 3000);
        }
    }
};
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')