import Axios from 'axios';
var obj = {};
obj.install = function(vue) {
//   方法一：直接将axios放到vue对象中。给所有的axios设置默认地址
//   vue.prototype.$http = Axios;
//   axios.defaults.baseURL = 'http://localhost:3000/';
// 方法二：使用axios创建一个对象并设置默认地址
  var instance = Axios.create({
    baseURL: 'http://localhost:3000'
  });
  vue.prototype.$http = instance;
};
export default obj;
