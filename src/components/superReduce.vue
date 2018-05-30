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
    name:'superReduce',
    data(){
        return{
            saleList:[{
                id:'0001',
                url:'https://p1.meituan.net/deal/892e8ed1198fd4a7d12e3cb0c858a3f8337439.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
                name:'北京烤鸭',
                nprice:'1',
                dprice:'￥250'
            },{
                id:'0002',
                url:'https://p0.meituan.net/deal/48966d42a1537a3eb052533236fed77286769.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
                name:'北京烤鸭',
                nprice:'1',
                dprice:'￥250'
            },{
                id:'0003',
                url:'https://p0.meituan.net/deal/48966d42a1537a3eb052533236fed77286769.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
                name:'北京烤鸭',
                nprice:'1',
                dprice:'￥250'
            }]
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

