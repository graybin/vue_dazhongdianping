<template>
    <div>
        <div class="border"></div>
        <div class="recommand-shop">
            <div class="recommand-title">猜你喜欢</div>
            <ul>
                <li v-for="item of recommandList" :key="item.id" class="shopitem">
                    <a>
                        <div class="recommand-img">
                            <img :src="item.url"/>
                        </div>
                        <div class="recommand-descript">
                            <div class="recommand-name">
                                <span>{{item.name}}</span>
                            </div>
                            <div class="recommand-desc">
                                <span>{{item.desc}}</span>
                            </div>
                            <div>
                                <div class="recommand-price">
                                    <span><span class="rmb">￥</span>{{item.price}}</span>
                                </div>
                                <div class="recommand-lprice">
                                    <span>￥{{item.lprice}}</span>
                                </div>
                                <div class="recommand-people">
                                    <span>已售{{item.people}}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'recommand',
    props: {
        recommandList: Array
    },
    data() {
        return {
        }
    }  
}
</script>

<style lang="scss" scoped>
    .border{
            height: 0.7rem;
            background: #f0f0f0;
    }
    .recommand-shop{
        .recommand-title{
            height: 30px;
            line-height: 40px;
            padding-left: 15px;
            font-size: 14px;
            color: #777;
        }

        .shopitem{
            margin: 1.5rem 1rem;
            a{
                text-decoration: none;
                display: flex;

                .recommand-img{
                    width: 100px;
                    height: 90px;

                    img{
                        width: 90px;
                        height: 90px;
                    }
                }
                .recommand-descript{
                    flex: 1;

                    .recommand-name{
                        font-size: 17px;
                        font-weight: 700;
                        color: #111;
                        overflow: hidden;
                        height: 1.7rem;
                        line-height: 1.7rem;
                    }
                    .recommand-desc{
                        font-size: 13px;
                        color: #777;
                        height: 2.65rem;
                        line-height: 2.65rem;
                    }
                    .recommand-price{
                        display: inline-block;
                        line-height: 24px;
                        overflow: hidden;
                        color: #f63;
                        font-size: 21px;
                        text-decoration: none;
                        font-weight: 700;

                        .rmb{
                            color: #f63;
                            font-weight: 700;
                            font-size: 15px;
                        }
                    }
                    .recommand-lprice{
                        display: inline-block;
                        line-height: 24px;
                        overflow: hidden;
                        font-size: 13px;
                        color: #777;
                        text-decoration: line-through;
                        vertical-align: 1px;
                        margin-left: 3px;
                    }
                    .recommand-people{
                        display: inline-block;
                        overflow: hidden;
                        text-align: right;
                        float: right;
                        font-size: 13px;
                        color: #777;
                        line-height: 24px;
                    }
                }
            }
        }    
    }
    
</style>


