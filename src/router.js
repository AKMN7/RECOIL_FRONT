import { createRouter, createWebHistory } from "vue-router";

import TheLandingPage from "./views/TheLandingPage.vue";
import TheDetectionPage from "./views/TheDetectionPage.vue";
import TheGenerationPage from "./views/TheGenerationPage.vue";
import DetectionMain from "./components/DetectionMain.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", component: TheLandingPage },
		{ path: "/detection", component: TheDetectionPage },
		{ path: "/detection/:service", component: DetectionMain },
		{ path: "/generation", component: TheGenerationPage },
	],
	scrollBehavior() {
		return { top: 0 };
	},
});

//Function called before the user enter each route (page)
router.beforeEach(function (to, _, next) {
	// Redirect user to sign in page if not authenticated
	if (to.meta.requiresAuth && !store.isAuthenticated) {
		console.log("Attempt to access URL is Unauthorized!");
		next("/signin");
	} else {
		next();
	}
});

export default router;
