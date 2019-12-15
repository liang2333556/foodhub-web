<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="foods" :options="options">
        <a slot="upvote" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="upvote(props.row._id)"></a>
<!--        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteFood(props.row._id)"></a>-->
      </v-client-table>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
    import FoodService from '@/services/FoodService'
    import Vue from 'vue'
    import VueTables from 'vue-tables-2'

    Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

    export default {
        name: 'Foods',
        data () {
            return {
                messagetitle: 'View the foods people like',
                foods: [],
                props: ['_id'],
                errors: [],
                columns: ['type', 'likes','upvote'],
                options: {
                    perPage: 10,
                    filterable: ['type', 'likes',],
                    sortable: ['likes'],
                    headings: {
                        _id: 'ID',
                        type: 'type',
                        likes: 'likes'
                    }
                }
            }
        },
        // Fetches Foods when the component is created.
        created () {
            this.loadFoods()
        },
        methods: {
            loadFoods: function () {
                FoodService.fetchFoods()
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.foods = response.data
                        console.log(this.foods)
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            },
            upvote: function (id) {
                FoodService.upvoteFood(id)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.loadFoods()
                        console.log(response)
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            },


            deleteFood: function (id) {
                this.$swal({
                    title: 'Are you totaly sure?',
                    text: 'You can\'t Undo this action',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'OK Delete it',
                    cancelButtonText: 'Cancel',
                    showCloseButton: true
                    // showLoaderOnConfirm: true
                }).then((result) => {
                    console.log('SWAL Result : ' + result.value)
                    if (result.value === true) {
                       FoodService.deleteFood(id)
                            .then(response => {
                                // JSON responses are automatically parsed.
                                this.message = response.data
                                console.log(this.message)
                                this.loadFoods()
                                // Vue.nextTick(() => this.$refs.vuetable.refresh())
                                this.$swal('Deleted', 'You successfully deleted this Donation ' + JSON.stringify(response.data, null, 5), 'success')
                            })
                            .catch(error => {
                                this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
                                this.errors.push(error)
                                console.log(error)
                            })
                    } else {
                        console.log('SWAL Else Result : ' + result.value)
                        this.$swal('Cancelled', 'Your Food still Counts!', 'info')
                    }
                })
            }
        }
    }
</script>

<style scoped>
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>

