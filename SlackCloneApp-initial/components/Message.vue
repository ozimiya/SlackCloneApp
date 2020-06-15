<template>
	<div class="chat-container">
<!--		<div class="thumbnail-container">-->
<!--			<img v-bind:src="user.thumbnail" />-->
<!--		</div>-->
		<div class="message-container">
<!--			<div class="user-name">{{ displayName }}</div>-->
			<div class="message">{{message.text}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['message'],
		// data() {
		// 	return {
		// 		user: {
		// 			name: 'note',
		// 			thumbnail: 'https://pbs.twimg.com/profile_images/1131882065337602049/0JRUGd3S_400x400.jpg',
		// 		},
		// 		message: {
		// 			text: '今日も良い天気ですね',
		// 		}
		// 	}
		// },
		computed: {
			displayName() {
				return '@' + this.user.name
			}
		}
	}
</script>

<style scoped>

	.chat-container {
		display: flex;
		padding: 8px;
	}

	.thumbnail-container {
		margin-right: 16px;
	}

	.thumbnail-container img {
		width: 50px;
		height: 50px;
		border-radius: 10px;
	}

	.user-name {
		font-weight: bold;
	}
</style>
