<template>
    <div class="headline">
        <div class="headlinetitle">
            <img src="../../assets/images/headline.jpg" alt="">
        </div>
        <swiper class="headlinewindow" :options="swiperOption">
            <swiper-slide  v-for="item of news" :key="item.id">
                <div class="headlinenews">
                    <a href="">
                        <div class="newscontent">
                            <span>{{item.content}}</span>
                        </div>
                        <div class="newsimg">
                            <img :src="item.imgurl" alt="jdla" />
                        </div>   
                    </a>              
                </div>           
            </swiper-slide>
        </swiper>       
    </div>
</template>
<script>
export default {
    name: 'headline',
    props: {
        news: Array
    },
    data() {
        return {
            swiperOption: {
                direction:'vertical',
                loop:true,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false, 
                },
            }    
        }
    }
}
</script>
<style lang="scss" scoped>
    .headline{
        height: 4.65rem;
        display: flex;

        .headlinetitle{
            width: 3.57rem;

        }
        .headlinewindow{
            flex: 1;

            .headlinenews{
                position: relative;
                top:2.325rem;
                margin-top: -1.36rem;

                a{
                    display: flex;
                    text-decoration: none;
                }

                .newscontent{
                    flex: 1;
                    height: 2.72rem;
                    color:#111;
                    font-weight: 700;
                    line-height: 1.43rem;
                    overflow: hidden;
                    -webkit-box-pack: center;
                    padding:0 0.714rem;
                }

                .newsimg{
                    width: 4rem;
                    height: 2.72rem;
                    text-align: center;
                    float:right;

                        img{
                            width:4rem;
                            height: 2.72rem;
                        }
                }
            }
        }
    }
</style>

