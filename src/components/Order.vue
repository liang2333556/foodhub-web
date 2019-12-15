<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="order" :options="options">
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteOrder(props.row._id)"></a>
      </v-client-table>

    </div>
  </div>
</template>

<script>
/* eslint-disable */
    import FoodService from '@/services/OrderService'
    import Vue from 'vue'
    import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

    export default {
        name: 'order',
        data () {
            return {
                messagetitle: ' Order List ',
                order: [],
                props: ['_id'],
                errors: [],
                columns: ['_id', 'product','remove',],
                options: {
                    perPage: 10,
                    headings: {
                        _id: 'ID',
                        product: 'product',
                    }
                }
            }
        },
        // Fetches Foods when the component is created.
        created () {
            this.loadOrder()
        },
        methods: {
            loadOrder: function () {
                FoodService.fetchOrders()
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.order = response.data
                        console.log(this.order)
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            },
            deleteOrder: function (id) {
                this.$swal({
                    title: 'Are you totaly sure?',
                    text: 'You can\'t Undo this action',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'OK Delete it',
                    cancelButtonText: 'Cancel',
                    // showCloseButton: true,
                    // showLoaderOnConfirm: true
                }).then((result) => {
                    console.log('SWAL Result : ' + result.value)
                    if (result.value === true) {
                        FoodService.deleteOrder(id)
                            .then(response => {
                                // JSON responses are automatically parsed.
                                this.message = response.data
                                console.log(this.message)
                                this.loadOrder()
                                // Vue.nextTick(() => this.$refs.vuetable.refresh())
                                this.$swal('Deleted', 'You successfully deleted this Order ')
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

