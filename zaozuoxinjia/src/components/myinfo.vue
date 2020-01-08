<template>
  <div style="width:100%;height:auto">
    <div class="zhanghao">
      <img src="../assets/home-img/show-img1.jpg" alt />
      <div class="binding">
        <h1>账号绑定</h1>
        <div class="youxiang"></div>
        <div class="youxiang weixin"></div>
        <div class="phone"></div>
        <p class="bindmore">绑定更多</p>
      </div>
      <div class="infowapper">
        <div style="height:50px"></div>
        <img src="../assets/home-img/myinfo-img2.png" alt />
        <p>新晋造作生活家</p>
      </div>
    </div>
    <div class="bankcard">
      <h4>管理银行卡</h4>
      <div class="addcard">+ 添加银行卡</div>
    </div>
    <div class="address">
      <div class="address-con">
        <h4>我的收获地址</h4>
        <p  v-for="(item,key) in addressInfo" :key="key" style="font-size:16px;color:white;margin-bottom:20px">{{key+1}}:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.province}} {{item.city}}/收货人：{{item.name}}/{{item.phonenumber}}<el-button type="text" icon='el-icon-close' @click="deleteaddress(index)"></el-button></p>
        <div class="add-address" @click="dialogFormVisible = true">+ 添加新的收货地址</div>
      </div>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form >
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="province" placeholder="省">
              <el-option v-for="item in provinceList" :key="item.value" :value="item.value"></el-option>
            </el-select>

            <el-select v-model="city" placeholder="市">
              <el-option v-for="item in cityList" :key="item.value" :value="item.value"></el-option>
            </el-select>
            <p>添加收货人信息</p>
            <el-input v-model="name" style="margin-bottom:20px" placeholder="收货人姓名"></el-input>
            <el-input v-model="phonenumber" placeholder="收货人手机号码"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="changeAddress(),changedialogFormVisible()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      province:'',
      provinceList:[
        {
          value:'北京',
          city:[
            {
              value:'北京'
            }
          ]
        },
        {
          value:'广东',
          city:[
            {
              value:'广州'
            },
            {
              value:'深圳'
            }
          ]
        },
        {
          value:'四川',
          city:[
            {
              value:'成都'
            },
            {
              value:'乐山'
            }
          ]
        },
        {
          value:'河南',
          city:[
            {
              value:'郑州'
            },
            {
              value:'洛阳'
            }
          ]
        }
      ],
      cityList:[],
      city:'',
      name:'',
      phonenumber:'',
      addressInfo:[]
    };
  },
  methods:{
    changeAddress(){
      // alert(1)
      this.addressInfo.push({
        province:this.province,
        city:this.city,
        name:this.name,
        phonenumber:this.phonenumber
      })
    },
    changedialogFormVisible(){
      // alert(1)
      this.dialogFormVisible = false
    },
    deleteaddress(index){
      this.addressInfo.splice(index,1)
    }
  },
  computed: {

  },
  watch:{
    province(value){
      this.city = ''
      this.cityList =  this.provinceList.filter((item,index)=>{
        return item.value === this.province
      })[0].city
      // alert(JSON.stringify(this.cityList))
    }
  }
};
</script>

<style>
.zhanghao {
  width: 1046px;
  height: 164px;
  padding: 30px;
  margin: 0 auto;
}
.zhanghao > img {
  width: 120px;
  height: 120px;
  float: left;
  margin: 22px 30px 22px 0;
  border-radius: 50%;
}
.binding {
  width: 33%;
  height: 106px;
  float: right;
  margin: 22px 0;
  padding: 0 70px 0 38px;
  border-left: #c9c9c9 1px solid;
}
.binding > h1 {
  font-size: 20px;
  line-height: 20px;
  font-weight: 400;
  text-align: left;
}
.youxiang {
  position: relative;
  float: left;
  margin: 50px 35px 0 0;
  background-color: #a0a0a0;
  cursor: pointer;
  width: 36px;
  height: 36px;
  background-image: url("../assets/home-img/myinfo-img1.png");
  background-repeat: no-repeat;
  background-position: -36px 0;
}
.youxiang::after {
  content: "";
  position: absolute;
  top: 9px;
  right: -18px;
  height: 18px;
  border-right: 1px solid #ddd;
}
.weixin {
  background-position: -72px 0;
}
.phone {
  position: relative;
  float: left;
  margin: 50px 35px 0 0;
  background-color: #32b16c;
  cursor: pointer;
  width: 36px;
  height: 36px;
  background-image: url("../assets/home-img/myinfo-img1.png");
  background-repeat: no-repeat;
  background-position: 0 0;
}
.youxiang:hover {
  background-color: #32b16c;
}
.bindmore {
  color: #32b16c;
  float: left;
  margin: 72px 7px 0 0;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
}
.infowapper {
  height: 120px;
  float: left;
  margin: 22px 0;
}
.infowapper > img {
  width: 30px;
  height: auto;
  float: left;
  margin-right: 4px;
}
.infowapper > p {
  font-size: 13px;
  color: #707070;
  line-height: 16.35px;
  float: left;
}
.bankcard {
  width: 1106px;
  height: 143px;
  margin: 0 auto;
  padding: 10px 0 32px;
  border-top: #d2d2d2 1px solid;
  position: relative;
  text-align: left;
}
.bankcard > h4 {
  padding-top: 42px;
  font-size: 28px;
  height: 32px;
  color: #000;
  line-height: 32px;
  font-weight: 400;
  letter-spacing: 2px;
}
.addcard {
  width: 150px;
  height: 40px;
  line-height: 40px;
  border: 2px solid #000;
  border-radius: 40px;
  font-size: 16px;
  color: #000;
  cursor: pointer;
  text-align: center;
  margin-top: 15px;
}
.addcard:hover {
  background-color: #000;
  color: #fff;
}
.address {
  width: 100%;
  /* height: 300px; */
  min-height: 400px;
  background: url("../assets/home-img/myinfo-img3.jpg") no-repeat center;
  /* background-size: cover; */
  position: relative;
}
.address-con {
  width: 82%;
  /* height: 100%; */
  margin: 0 auto;
}
.address-con > h4 {
  color: #fff;
  padding-bottom: 39px;
  padding-top: 70px;
  letter-spacing: 2px;
  height: 45px;
  line-height: 45px;
  text-align: left;
  font-size: 32px;
  font-weight: 400;
}
.add-address {
  float: left;
  font-weight: 400;
  display: block;
  padding-top: 0;
  width: 200px;
  height: 44px;
  line-height: 44px;
  border-radius: 44px;
  font-size: 15px;
  color: #fff;
  cursor: pointer;
  text-align: center;
  margin-bottom: 40px;
  opacity: 0.95;
  background: #5bb688;
}
</style>
