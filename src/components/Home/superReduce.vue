<template>
    <div class="home-reduce">
        <div class="border"></div>
        <div class="reduce-sale">
            <a id="alink">
                <span class="one">超值优惠</span>
                <span class="two">更多优惠></span>
            </a>
            <div class="sale">
                <a href="" class="saleitem" v-for="item of saleList" :key="item.id">
                    <div class="sale-img">
                        <img :src="item.url" alt="">
                    </div>
                    <div class="sale-name">
                        {{item.name}}
                    </div>
                    <div class="price">
                        <span class="rmb">￥</span><span class="nprice">{{item.nprice}}</span>
                        <span class="dprice">{{item.dprice}}</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'superReduce',
    props: {
        saleList: Array
    },
    data() {
        return{
        }
    }
}
</script>

<style lang="scss" scoped>
    .home-reduce{
        height: 13.8rem;
        
        .border{
            height: 0.7rem;
            background: #f0f0f0;
        }

        .reduce-sale{
            height:13.1rem;
            padding:7px 6px 10px;

            #alink{
                display: block;
                text-decoration: none;
                color:#bbb;
                font-size: 12px;
                height: 2.5rem;
                line-height: 2.5rem;
                width: 100%;

                    .one{
                        color:#ff524b;
                        font-size:18px;
                        font-weight: 800;
                    }

                    .two{
                        float:right;
                    }
            }

            .sale{
                display: flex;

                a{
                    flex:1;
                    border-radius: 3px;
                    padding: 0 4px;
                    display: inline-block;
                    box-sizing: border-box;
                    text-decoration: none;
                    color: #000;
                }

                .sale-img{
                    height: 6rem;
                    width: 100%;

                    img{
                        height: 6rem;
                        width: 100%;
                    }
                    
                }
                .sale-name{
                    color: #333;
                    font-size: 14px;
                    padding-top: 5px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .price{
                    line-height: 16px;
                    height: 16px;
                    padding-top: 5px;
                    position: relative;
                    color: #f63;
                    
                    .rmb{
                        font-size: 14px;
                        font-weight: 900;
                    }

                    .nprice{
                        font-size: 20px;
                    }
                    
                    .dprice{
                        font-size:12px;
                        color:#999;
                        text-decoration: line-through;
                        margin-left: 2px;
                    }
                }
            }
        }
    }
</style>

