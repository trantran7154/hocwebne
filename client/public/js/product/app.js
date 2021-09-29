Vue.component('w-ckeditor-vue', window['w-ckeditor-vue'])
var Main = {
    data() {
        return {
            tableData: [],
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
                ],
                timelineHistory: [
                    {
                        content: 'tran đã thay đổi sản phẩm vào',
                        timestamp: '26/09/2021'
                    },
                    {
                        content: 'tran đã thay đổi sản phẩm vào',
                        timestamp: '26/09/2021'
                    },
                    {
                        content: 'tran đã thay đổi sản phẩm vào',
                        timestamp: '26/09/2021'
                    }
                ],
                tableHistory: [
                    {
                        content: 'tran đã thay đổi sản phẩm vào',
                        dateCreate: '26/09/2021',
                        ip: '172.172.168',
                        userCreate: 'tran'
                    },
                    {
                        content: 'tran đã thay đổi sản phẩm vào',
                        dateCreate: '26/09/2021',
                        ip: '172.172.168',
                        userCreate: 'tran'
                    },
                    {
                        content: 'tran đã thay đổi sản phẩm vào',
                        dateCreate: '26/09/2021',
                        ip: '172.172.168',
                        userCreate: 'tran'
                    }
                ],
                tabsHistory: [
                    {
                        label: 'Tổng lịch sử',
                        name: 'all'
                    },
                    {
                        label: 'Lịch sử truy cập',
                        name: 'access'
                    },
                    {
                        label: 'Lịch sử thay đổi',
                        name: 'change'
                    }
                ],
                radioStatusNote: [
                    {
                        label: 'Rất quan trọng'
                    },
                    {
                        label: 'Quan trọng'
                    },
                    {
                        label: 'Bình thường'
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
                percentdiscount: 0,
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
            settingEditForm:{
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
            noteForm: [
                {
                    content: '',
                    status: 'Bình thường',
                    title: '',
                    date: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
                }
            ],
            productAPIValidate: {

            },
            createPasswordValidate:{

            },
            noteValidate:{

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
                percentdiscount: [
                    {
                        pattern: /^[0-9]$|^[1-9][0-9]$|^(100)$/,
                        message: 'Phần trăm chỉ từ 0 đến 100', 
                        trigger: 'change' 
                    }
                ],
                price: [
                    {
                        pattern: /[0-9]/,
                        message: 'Giá sản phẩm là số chứ không phải là chữ', 
                        trigger: 'change' 
                    }
                ]
            },
            multipleSelection: [],
            activeMain: 'index',
            search: '',
            valueAction: '',
            dialogFormCreateVisible: false,
            dialogFormEditVisible: false,
            dialogFormDetailsVisible: false,
            dialogFormNoteVisible: false,
            labelPosition:'top',
            tabPosition: 'left',
            isCreate: false,
            isCreateAPI: false,
            isEdit: false,
            isProgressCreateAPI: false,
            isSettingCreate: false,
            isSettingEdit: false,
            isUploadImage: false,
            loadingForm: false,
            loadingTable: false,
            activeInstructCreateAPI: ['1','2','3'],
            activeDetailsProduct: 'body',
            activeHistory: 'all',
            progress: 0,
            bg: '#FFF',
            reverseHistory: true,
            radioHistory: 'Tổng lịch sử'
        }
    },
    mounted() {
        this.loadProduct();
    },
    methods: {
        uploadImages(){
            let that = this;
            that.isUploadImage = true;
            const preview = document.getElementById('myImage');
            const file = document.querySelector('input[type=file]').files[0];
            const reader = new FileReader();

            reader.addEventListener("load", function () {
                preview.src = reader.result;
            }, false);

            if (file) {
                reader.readAsDataURL(file);
            }
        },
        remoteUploadImage(){
            let that = this;

            const preview = document.getElementById("myImage");
            preview.src = '/images/no-image-1.jpg';

            that.productForm.image = null;
            that.isUploadImage = false;
        },
        clickCreateProduct(){
            let that = this;
            that.dialogFormCreateVisible = true;
            that.title = "Thêm sản phẩm mới";
            that.isCreate = true;

            this.setTimeout1sLoading();
        },
        clickEditProduct(row){
            let that = this;
            this.clearForm();
            this.productForm = JSON.parse(JSON.stringify(row));
            that.dialogFormEditVisible = true;
            that.title = "Sửa sản phẩm - " + row.name;
            that.isEdit = true;
        },
        clickDetailsProduct(row){
            let that = this;
            this.clearForm();
            that.dialogFormDetailsVisible = true;
            that.title = "Xem chi tiết sản phẩm - " + row.name;
            
            that.code = row.code;
            that.name = row.name;
            that.image = row.image;
            that.category = row.category;
            that.price = row.price;
            that.view = row.view;
            that.describe = row.describe;
            that.content = row.content;
            that.dateCreate = row.dateCreate;
            that.dateModified = row.dateModified;
            that.userCreate = row.userCreate; 
            that.userModified = row.userModified;
            that.active = row.active;
            that.bin = row.bin;
            that.follow = row.follow;
            that.note = row.note;

            that.activeColor = row.active ? 'success' : 'default';
            that.activeText = row.active ? 'Hoạt động' : 'Không hoạt động';

            that.followColor = row.follow ? 'success' : 'default';
            that.followText = row.follow ? 'Đang theo dõi' : 'Chưa theo dõi';

            that.noteColor = row.follow ? 'success' : 'default';
            that.noteText = row.follow ? 'Đang chú ý' : 'Chưa chú ý';

            that.binColor = row.bin ? 'success' : 'default';
            that.binText = row.bin ? 'Yes' : 'No';
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
        clickEditSettingProduct(){
            let that = this;
            this.clearForm();
            that.isSettingEdit = true;
            that.title = "Cài đặt"
            
            this.setTimeout1sLoading();

            that.colorEditSetting = '#909399';
            that.textEditSetting = '#FFF';
        },
        clickBinProduct(row){
            let that = this;
            that.$confirm('Bạn có chắc muốn xóa sản phẩm - '+ row.name +' vào thùng rác?', 'Cảnh báo', {
                confirmButtonText: 'Xác nhận',
                cancelButtonText: 'Hủy',
                type: 'warning'
                }).then(() => {
                   that.$notify({
                        title: 'Thành công',
                        message: 'Xóa ['+ row.name +'] vào thùng rác thành công!',
                        type: 'success'
                    });
                }).catch(() => {
                this.$notify.error({
                    title: 'Thất bại',
                    message: 'Xóa ['+ row.name +'] thất bại!'
                });        
            });
        },
        clickFollowProduct(row){
            console.log(row._id);
        },
        clickNoteProduct(row){
            let that = this;
            this.clearForm();
            that.dialogFormNoteVisible = true;
            that.title = "Chú ý sản phẩm - " + row.name;
        },
        loadProduct(){
            let that = this;
            const link = '/product/index';
            axios.get(link)
                .then(function (response) {
                    console.log(response.data);
                    that.tableData = response.data;
                })
                .catch(function (error) {
                console.log(error);
                })
                .then(function () {
                });
        },
        createProduct(productForm){
            let that = this;
            that.$refs[productForm].validate((valid) => {
                if (valid) {
                    const link = '/product/create';
                    axios.get(link,{
                                params: JSON.parse(JSON.stringify(that.productForm))
                            })
                            .then(function (response) {
                                that.loadProduct();

                                that.$notify({
                                    title: 'Thành công',
                                    message: 'Thêm sản phẩm ['+ that.productForm.name +'] thành công!',
                                    type: 'success'
                                });
                            })
                            .catch(function (error) {
                            console.log(error);
                            })
                            .then(function () {
                            });
                            this.dialogFormCreateVisible = false;
                } else {
                  console.log('error submit!!');
                  return false;
                }
            });
        },
        createNoteProduct(noteForm){
            let that = this;
            that.$refs[noteForm].validate((valid) => {
                if (valid) {
                  console.log(this.noteForm);
                  that.$notify({
                        title: 'Thành công',
                        message: 'Thêm chú ý ['+ that.noteForm.title +'] thành công!',
                        type: 'success'
                    });
                } else {
                     this.$notify.error({
                        title: 'Thất bại',
                        message: 'Xóa ['+ row.name +'] thất bại!'
                    });     
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
                            console.log(response.data);
                            that.listData.indexProductAPI = response.data;
                        })
                        .catch(function (error) {
                        console.log(error);
                        })
                        .then(function () {
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
        handleClickDetails(){   
            let that = this;
            if(that.activeDetailsProduct == 'history')
            {
                that.titleHis = 'Tổng lịch sử';
            }
            else
            {
                console.log("error");
            }
        },
        handleClickHistorySub(){
            let that = this;
            if(that.activeHistory == 'all')
            {
                that.titleHis = 'Tổng lịch sử';
            }
            else if(that.activeHistory == 'access')
            {
                that.titleHis = 'Lịch sử truy cập';
            }
            else if(that.activeHistory == 'change')
            {
                that.titleHis = 'Lịch sử thay đổi';
            }
            else
            {
                console.log("error");
            }
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
        changeEditBG(settingEditForm){
            let that = this;
            if(that.settingEditForm.bgcolor){
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
            that.isEdit = false;
            that.isSettingEdit = false;
            that.colorCreate = '';
            that.colorCreateAPI = '';
            that.colorCreateSetting = '';
            that.colorEditSetting = '';
            that.textCreateAPI = '';
            that.textCreate = '';
            that.textCreateSetting = '';
            that.textEditSetting = '';
        },
        setTimeout1sLoading(){
            let that = this;
            that.loadingForm = true;
            setTimeout(function(){ 
                that.loadingForm = false;
            }, 3000);
        },
        sumMoney(productForm){
            let that = this;
            const price = (that.productForm.price * (100 - that.productForm.percentdiscount))/100;
            const sumPrice = price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
            return sumPrice;
        },
        resetProductForm(productForm){
            let that = this;
            that.$refs[productForm].resetFields();
        }
    }
};
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')