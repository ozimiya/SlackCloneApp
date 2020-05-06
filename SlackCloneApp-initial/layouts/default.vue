<template>
	<div class="app-layout">
		<div class="sidebar">
			<p class="channel-head">チャンネル一覧</p>
			<ul class="channel-list">
				<li>#general</li>
				<li>#rondom</li>
			</ul>
		</div>
		<div class="main-content">
			<nuxt />
		</div>
	</div>
</template>

<style>

* {
	margin: 0;
	padding: 0;
}
ul {
	padding-left: 0;
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
