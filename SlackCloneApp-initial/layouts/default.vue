<template>
	<div class="app-layout">
		<div class="sidebar">
			<p class="channel-head">チャンネル一覧</p>
			<p v-for="channel in channels">
				<nuxt-link :to="`/channels/${channel.id}`">{{ channel.name }}</nuxt-link>
			</p>
<!--			<ul class="channel-list">-->
<!--				<li v-for="channel in channels">-->
<!--					<nuxt-link :to="`/channels/${channel.id}`">{{ channel.name }}</nuxt-link>-->
<!--				</li>-->
<!--			</ul>-->
		</div>
		<div class="main-content">
			<nuxt />
		</div>
	</div>
</template>

<script>
	import { db } from '~/plugins/firebase'

	export default {
		data() {
			return {
				channels: []
			}
		},
		mounted() {
			// 全てのドキュメントを取得
			db.collection('channels').get().then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					this.channels.push({id: doc.id, ...doc.data()})
				});
			});
		}
	}
</script>

<style>

* {
	margin: 0;
	padding: 0;
}
ul {
	padding-left: 0;
}
a {
	color: #FFF;
	text-decoration: none;
}

.app-layout {
	display: flex;
}

.sidebar {
	width: 300px;
	height: 100vh;
	padding: 16px;
	background: #4A4141;
}

.main-content {
	width: 100%;
	background: #F1F1F1;
	height: 100vh;
}

.channel-head {
	margin-top: 10px;
	color: #FFF;
}

.channel-list > li {
	color: #FFF;
	list-style: none;
}

</style>
