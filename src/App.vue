<template>

	<Header />

	<Index />
	<Projects />
	
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
	width: 100%;
	height: 100vh;
}

#app{
	overflow-y: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
}

@media (max-width: 768px) {
	#app {
		padding: 0.8em;
	}
}
</style>
