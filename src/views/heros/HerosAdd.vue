<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">姓名</label>
            <input type="text" class="form-control" v-model="name" placeholder="请输入英雄姓名
            ">
          </div>
          <div class="form-group">
            <input type="radio" name="gender" v-model="gender" value="男">男
            <input type="radio" name="gender" v-model="gender" value="女">女
          </div>
          <button type="submit" class="btn btn-success" @click.prevent="submit">Submit</button>
        </form>
      </div>
</template>

<script>
// import Axios from 'axios';
export default {
  data() {
    return {
      name: '',
      gender: ''
    };
  },
  methods: {
    submit() {
      this.$http.post('heroes', {
        name: this.name,
        gender: this.gender
      }).then(res => {
        var {status} = res;
        if (status === 201) {
          alert('添加成功');
          this.$router.push({'name': 'root'});
        }
      });
    }
  }
};
</script>

<style>

</style>
