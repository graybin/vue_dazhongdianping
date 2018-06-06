<template>
    <div class="icons">
        <div class="placeholder" v-if="!iconsList.length"><p>Loading...</p></div>
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page , index) of pages" :key="index">
                <div class="iconsFix">
                    <a class="icon" v-for="item of page" :key="item.id">
                        <div>
                            <img class="iconImg" :src="item.url" alt='图标'>
                            <span>{{item.desc}}</span>
                        </div>              
                    </a>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'homeIcons',
    props:{
        iconsList: Array
    },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                }
            },
        }
    },
    computed: {
        pages(){
            const pages = []
            this.iconsList.forEach((item,index) => {
                const page = Math.floor(index/10)
                if(!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="scss" scoped>
    .icons{
        position: relative;
        height: 14.9rem;
        text-align: center;
        overflow: hidden;

        .placeholder{
            height: 14.9rem;
            font-size: 40px;
            color: #f63;
            line-height: 14.9rem;
        }

        .iconsFix{
            display: flex;
            height: 13.5rem;
            margin: 0 0.714rem;
            background-color: #fff;
            flex-wrap: wrap;
　
            .icon{
                display: block;
                width: 20%;
                height: 6.95rem;
             

                .iconImg{
                    width: 3.143rem;
                    height: 3.143rem;
                    margin-top: 1rem;
                }
                
                span{
                    font-size: 13px;
                    line-height: 1.4rem;
                    display: block;

                }
            }
        }
        .swiper-pagination{          
            position: relative;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
            bottom: 0;
        }
    }
</style>


