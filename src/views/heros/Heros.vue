<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">英雄列表</h2>
        <router-link :to="{'name': 'HerosAdd'}" class="btn btn-success">Add</router-link>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>name</th>
                <th>gender</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in datalist" :key="index">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.gender}}</td>
                <td><a href="javascript:;" @click="edit(item.id)">edit</a>
                <a href="javascript:;" @click="del(item.id)">del</a></td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
// import Axios from 'axios';
export default {
  data() {
    return {
      datalist: []
    };
  },
  methods: {
    getdatalist() {
      this.$http.get('heroes')
        .then(res => {
          var {status, data} = res;
          if (status === 200) {
            this.datalist = data;
          }
        });
    },
    edit(id) {
      this.$router.push({'name': 'HerosEdit', params: {id: id}});
    },
    del(id) {
      if (confirm('您确定删除吗')) {
        this.$http.delete('heroes/' + id)
          .then(res => {
            var {status} = res;
            if (status === 200) {
              this.getdatalist();
            }
          });
      }
    }
  },
  created() {
    this.getdatalist();
  }
};
</script>

<style>
</style>
