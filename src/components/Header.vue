<template>
	<div class="header">
		<a class="city">
			<span>广州</span>
			<span class="iconfont">&#xe642;</span>
		</a>
		<div class="search">
			<span class="iconfont">&#xe60b;</span>
			<span>输入商户名、地点</span>
		</div>
		<a class="self">
			<span class="iconfont">&#xe6b0;</span>
		</a>
	</div>
</template>

<script>
export default {
	name: 'homeHeader'
}
</script>

<style lang='scss' scoped>
	.header{
		width: 100%;
		position: fixed;
		height: 3.57rem;
		line-height: 3.57rem;
		background-color: #f63;
		text-align: center;
		color: #fff;
		display: flex;

		.city{
			float: left;
			display: block;
			width: 3.3rem;
			margin-left: 0.72rem;
		}

		.search{
			flex: 1;
			-webkit-flex: 1;
			background-color: #fff;
			color:#b8b8b8;
			border-radius: 1.785rem;
			margin: 0.643rem 0.429rem 0.643rem 0.714rem;
			text-align: left;
			height:2.143rem;
			line-height: 2.286rem;
			font-size: 0.929rem;
			
			.iconfont{
				font-size:1.1rem;
				margin-left: 1rem;
			}
		}

		.self{
			float: right;
			display: block;
			width: 2rem;
			margin-right: 0.72rem;

			.iconfont{
				font-size:1.7rem;
			}
		}
		
	}	
</style>