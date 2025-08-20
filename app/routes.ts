import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // for "/"
  route("/contact", "routes/contact.tsx"), // for "/contact"
  route("/services/:slug", "routes/services/[slug].tsx"), // for dynamic
  route("/blog","pages/blog/BlogList.jsx"), // for "/blog"
] satisfies RouteConfig;

