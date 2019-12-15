<template>
    <div class="index-board-list">
      <div
        class="index-board-item"
        v-for="item in Products"  :key="item.id"
      >
        <div class="index-board-item-inner" :data="Products">
          <h2>Product:     {{ item.name}}</h2>
          <h2>price:     € {{ item.price}}</h2>
          <h2 class="fa fa-heart" @click="upvote(item._id)" >  likes:{{ item.likes}}</h2>

<!--          <span @click=" activeLike(index)">-->
<!-- <span><i class="fa fa-heart" :class="{'red':'active'}[item.color]"></i></span>-->
<!--</span>-->
          <h2><el-button  type="primary" @click="submitOrder(item.name)">Just Buy</el-button></h2>

        </div>
      </div>
    </div>
</template>

<script>
/* eslint-disable */
import ProductService from '@/services/ProductService'
import OrderService from '@/services/OrderService'

import axios from 'axios'
export default {


    name: 'Products',
    data() {
        return {
            errors: [],
            Products: [],
        }
    },
    created () {
        this.loadProducts()
    },

    methods: {
        loadProducts :function(){
            ProductService.fetchProducts()
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.Products = response.data
                    console.log(this.Products)
                })
                .catch(error => {
                    this.errors.push(error)
                    console.log(error)
                })
        },
        upvote: function (id) {
            ProductService.upvoteProduct(id)
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.loadProducts()
                    console.log(response)
                })
                .catch(error => {
                    this.errors.push(error)
                    console.log(error)
                })
        },
        submitOrder: function (name) {
             let order = {
                product: name,
            }
            OrderService.postOrder(order)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    this.errors.push(error)
                    console.log(error)
                })

        },

    }
}
</script>

<style>
  .index-board-list{
    position:relative;
    margin-left: 300px;
  }

  .index-board-item-inner{
    font-size: x-small;

  }

  .index-left-block .hr {
    margin-bottom: 20px;
  }
  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }
  .index-left-block ul {
    padding: 10px 15px;
  }
  .index-left-block li {
    padding: 5px;
  }
  .index-board-list {
    overflow: hidden;
    padding-top: 3px;
  }
  .index-board-item {
    float: left;
    width: 35%;
    background:#35495e;
    box-shadow: #ddd;
    padding: 2%;
    margin-right: 2%;
    margin-bottom: 10px;
    border-radius: 20px 20px 20px 20px;
    text-align-all: left;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 10px;
    line-height: 1.6;
  }

  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
    margin-right: 100px;
  }

  .VueCarousel-slide img {
    width: 100%;
  }

</style>
