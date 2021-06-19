<template>
	<div class="container">
		<Header />
		<div class="content">
			<Index id="info" />
			<Projects id="projects" />
		</div>
	</div>
</template>

<script>
import Header from "./components/Header";
import Index from "./views/Index.vue";
import Projects from "./views/Projects.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
	name: "App",
	data() {
		return {};
	},
	components: {
		Header,
		Index,
		Projects
	},
	mounted() {
		AOS.init();
	},
};
</script>

<style>
body,
html,
#app {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	background-color: var(--bg-global);
	width: 100vw;
	height: 100vh;
}


.content{
	border: 1px solid yellow;
	padding-top: 80px;
	display: flex;
	flex-direction:column;
	justify-content:center;
}

@media (max-width: 768px) {
	#app {
		padding: 0.8em;
	}
}
</style>
