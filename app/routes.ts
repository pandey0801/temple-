import { type RouteConfig, index, route } from "@react-router/dev/routes";

// export default [
//   // index("routes/home.tsx"),
//   // route("/contact", "routes/contact.tsx"),
//    {
//     path: "/",
//     components: () => import("./routes/home"),
//   },
//   {
//     path: "/contact",
//     components: () => import("./routes/contact"),
//   },
//   {
//     path: "/services/:slug",
//     components: () => import("./routes/services/[slug]"),
//   },
// ] satisfies RouteConfig;


// import { type RouteConfig } from "@react-router/dev/routes";

export default [
   index("routes/home.tsx"), // for "/"
  route("/contact", "routes/contact.tsx"), // for "/contact"
  route("/services/:slug", "routes/services/[slug].tsx"), // for dynamic
] satisfies RouteConfig;
