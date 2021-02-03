<template>
  <div class="container">
	  <div class="chats-layout">
		  <messages :messages="messages" />
	  </div>
	  <div class="input-layout">
		  <chat-form />
	  </div>
  </div>
</template>

<script>
	import { db } from '~/plugins/firebase'
	import Messages from '~/components/Messages.vue'
	import ChatForm from '~/components/ChatForm.vue'

	export default {
		components: {
			Messages,
			ChatForm
		},
		data () {
			return {
				messages: []
			}
		},
		mounted () {
			const channelId = this.$route.params.id;
			db.collection('channels').doc(channelId).collection('messages').orderBy('createdAt')
				.onSnapshot((snapshot) => {
					//'onSnapshotmessages' → collection に変更があったら何か処理を実行しますよ
					//snapshotはDBのコピーなのでDBの変更点も取得できる→'snapshot.docChanges()'
					snapshot.docChanges().forEach((change) => {
						const doc = change.doc;
						if (change.type === 'added') {
							this.messages.push({id: doc.id, ...doc.data()})

						}
					});
				});
		},
		// 次は前回チャンネル一覧を取得したように実際にデータを取得してみましょう。
		// propでid→messageの受け渡しができない
	}
</script>

<style scoped>
	.container {
		height: 100%;
	}

	.chats-layout {
		overflow: scroll;
		height: 90%;
	}

	.input-layout {
		height: 10%;
	}
</style>
