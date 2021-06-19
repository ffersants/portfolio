<template>
	<Header />
	<Index id="info" />
</template>

<script>
import Header from "./components/Header";
import Index from "./views/Index.vue";
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
	background-color: var(--bg-global);
	width: 100%;
	height: 100vh;
}

.appVue {
	height: 100vh;
}

@media (max-width: 768px) {
	#app {
		padding: 0.8em;
	}
}
</style>
