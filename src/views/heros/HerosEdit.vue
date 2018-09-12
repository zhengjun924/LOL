<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">修改英雄</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">姓名</label>
            <input type="text" class="form-control" v-model="name">
          </div>
          <div class="form-group">
            <input type="radio" value="男" name="gender" v-model="gender">男
            <input type="radio" value="女" name="gender" v-model="gender">女
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
      id: '',
      name: '',
      gender: ''
    };
  },
  methods: {
    submit() {
      this.$http.patch('heroes/' + this.id, {
        name: this.name,
        gender: this.gender
      }).then(res => {
        var {status} = res;
        if (status === 200) {
          alert('修改成功');
          this.$router.push({'name': 'root'});
        }
      });
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.$http.get('heroes/' + this.id)
      .then(res => {
        var {status, data} = res;
        if (status === 200) {
          this.name = data.name;
          this.gender = data.gender;
        }
      });
  }
};
</script>

<style>

</style>
