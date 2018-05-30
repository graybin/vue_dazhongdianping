<template>
    <div class="homeredbag">
        <div class="border"></div>
        <div class="redbag">
            <div class="redbag-left">
                <a href="">
                    <div class="title tl">88元红包</div>
                    <div class="sub sl">新人见面礼</div>
                    <img src="//op.meituan.net/oppkit_pic/20160310032241-1e027deb-2/a3a31fff2e047a907a53d6488877f7fe.png" alt="">
                </a>
            </div>
            <div class="redbag-right">
                <a href="">
                    <div class="title tr">六一亲子大促</div>
                    <div class="sub sr">速抢无门槛</div>
                    <img src="//op.meituan.net/oppkit_pic/20160310032241-1e027deb-2/a8acc049f4b77f9137619b7161cb18f8.png" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'redbag',
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
    .homeredbag{
        height: 7.132rem;

        .border{
            height: 0.7rem;
            background: #f0f0f0;
        }

        .redbag{
            height:5.86rem;
            margin:0.286rem;
            display: flex;
            

                a{
                    text-decoration: none;
                    color:#fff;
                    display: block;
                    padding-left: 8px;
                }

                .redbag-left{
                    position: relative;
                    height: 100%;
                    flex: 1;
                    background-color:#ffa383;
                    margin-right:2px;

                        .sub{
                            background-color: #f97e54;
                        }

                }

                .redbag-right{
                    position: relative;
                    background-color: #44d0cd;
                    height:100%;
                    flex: 1;
                    margin-left: 2px;

                        .sub{
                            background-color: #22bab7;
                        }
                }
                
                img{
                        position: absolute;
                        right: 6px;
                        top: 7px;
                        width:4.3rem;
                        height: 4.3rem;
                }
                .title{
                    font-size: 16px;
                    padding: 12px 0 2px;
                    position: relative;
                    z-index: 1;
                }
                .sub{
                    font-size: 12px;
                    width: 75px;
                    text-align: center;
                    padding: 2px;
                    border-radius: 12px;
                    position: relative;
                    z-index: 1;
                    transform: scale(.9);
                    margin-left: -4px;
                }
        }
            
    }
</style>


