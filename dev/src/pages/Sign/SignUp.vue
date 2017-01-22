<style lang="stylus" scopde>
	$orange=#ff6932
	.box 
		margin 1.125rem 0 2.375rem
		padding 0 .625rem
		background-color white
		border-top 1px solid #ddd
		border-bottom 1px solid #ddd
		overflow hidden
		div
			padding .75rem 0
			border-bottom 1px solid #ddd
			&.noborder 
				border 0
			svg
				padding-top .2rem
				width 1rem
				height 1rem	
			label
				font-size .9rem
				vertical-align middle
			input
				border none
				font-size .75rem
			vertical-align middle
	.a
		display block
		margin 1.25rem auto
		width 18.75rem
		height 2.375rem
		background-color #c7c7c7
		color white
		text-align center
		line-height @height
		border-radius .1875rem
		font-size .875rem
</style>
<template>
	<div>
		<my-header hasBack="1" title="注册" />
		<div class="box">
			<div>
				<svg class="icon" aria-hidden="true">
					<use :xlink:href="`#icon-iconfontdenglu`"></use>
				</svg>
				<label>账号：</label>
				<input v-model="user" placeholder="请输入您的手机号" />
			</div>
			<div>
				<svg class="icon" aria-hidden="true">
					<use :xlink:href="`#icon-yaoshi`"></use>
				</svg>
				<label>验证码：</label>
				<input v-model="user" placeholder="请输入验证码" />
			</div>
			<div>
				<svg class="icon" aria-hidden="true">
				<use :xlink:href="`#icon-iconfontsuo`"></use>
				</svg>
				<label>密码：</label>
				<input type="password" v-model="password" placeholder="请输入您的账号密码" />	
			</div>
			<div>
				<svg class="icon" aria-hidden="true">
				<use :xlink:href="`#icon-iconfontsuo`"></use>
				</svg>
				<label>密码：</label>
				<input type="password" v-model="password" placeholder="请输入您的账号密码" />	
			</div>	
			<div class="noborder">
				<svg class="icon" aria-hidden="true">
				<use :xlink:href="`#icon-i`"></use>
				</svg>
				<label>身份：</label>
				<input type="password" v-model="password" placeholder="经纪人" />	
			</div>		
		</div>
		<a class="a" @click="signUp">注册</a>
		<modal ref="modal" type="fixed" />
	</div>
</template>
<script>
	import MyHeader from "../../components/Header";
	import Modal from "../../components/Modal";
	export default {
		data(){
			return {
				user: "",
				password: ""
			};
		},
		methods: {
			async signUp(){
				const {modal} = this.$refs;
				if((await (await fetch("/api/sign_up", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					body: `user=${this.user}&password=${this.password}`,
					credentials: "include"
				})).json()).code){
					modal.toast({
						message: "注册失败",
						duration: 800,
					});
				}else{
					modal.toast({
						message: "注册成功",
						duration: 800,
					});
				}
			}
		},
		components: {
			MyHeader,
			Modal
		},
		beforeCreate(){
			this.$parent.footer = 0;
		}
	};
</script>