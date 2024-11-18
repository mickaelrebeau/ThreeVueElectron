import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Landing",
		component: () => import("../layouts/NoHeader.vue"),
		children: [
			{
				path: "",
				name: "Landing",
				component: () => import("../views/LandingView.vue"),
			},
		],
	},
	{
		path: "/",
		component: () => import("../layouts/Default.vue"),
		children: [
			{
				path: "home",
				name: "Home",
				component: () => import("../views/HomeView.vue"),
			},
			{
				path: "about",
				name: "About",
				component: () => import("../views/AboutView.vue"),
			},
			{
				path: "convert",
				name: "Convert",
				component: () => import("../views/ConvertView.vue"),
			},
		],
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: () => import("../views/NotFound.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
