<style lang="stylus" scoped>
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
	.signother
		display flex
		justify-content space-between
		padding 0 1.3125rem
		.up
		.forgot
			font-size .75rem
		.forgot
			color #666
		.up	
			color $orange	
</style>
<template>
	<div>
		<my-header hasBack="1" title="登录" />
		<div class="box">
			<div>
				<svg class="icon" aria-hidden="true">
					<use :xlink:href="`#icon-iconfontdenglu`"></use>
				</svg>
				<label>账号：</label>
				<input v-model="user" placeholder="请输入您的手机号" />
			</div>
			<div class="noborder">
				<svg class="icon" aria-hidden="true">
				<use :xlink:href="`#icon-iconfontsuo`"></use>
				</svg>
				<label>密码：</label>
				<input type="password" v-model="password" placeholder="请输入您的账号密码" />	
			</div>	
		</div>
		<a class="a" @click="signIn">登录</a>
		<div class="signother">
			<router-link class="up" to="/sign_up" v-text="'注册'" /><router-link class="forgot" to="/forgotpassword" v-text="'忘记密码'" />
		</div>
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
			async signIn(){
				const {modal} = this.$refs;
				const {
					data,
					code
				} = await (await fetch("/api/sign_in", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					body: `user=${this.user}&password=${this.password}`,
					credentials: "include"
				})).json();
				if(code){
					modal.toast({
						message: "登录失败",
						duration: 800,
					});
				}else{
					modal.toast({
						message: "登录成功",
						duration: 800,
					});
					this.$router.push("/me");
					this.$parent.user = data;
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