import config from "../config/config.json";
import Cta from "../layouts/components/Cta";
import SeoMeta from "../layouts/SeoMeta";

import HomeBanner from "../layouts/partials/HomeBanner";
import Clients from "../layouts/partials/Clients";
import NewServices from "../layouts/partials/NewServices";
import HomeFeatures from "../layouts/partials/HomeFeatures";
import FeaturedProjects from "../layouts/partials/FeaturedProjects";
import ProfileSection from "../layouts/partials/ProfileSection";
import Testimonials from "../layouts/partials/Testimonials";
import HomeNews from "../layouts/partials/HomeNews";
import { getListPage, getSinglePage } from "../lib/contentParser";

const Home = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  const { banner, clients, new_services, feature, featured_projects, profile_section, call_to_action } = frontmatter;
  const { title } = config.site;
  const description = banner?.content || config.metadata?.meta_description;
  const image = Array.isArray(banner?.images) && banner.images.length > 0 ? banner.images[0] : config.metadata?.meta_image;

  // Lấy danh sách bài viết mới nhất
  let posts = [];
  try {
    posts = getSinglePage("content/blogs");
    posts.sort((a, b) => new Date(b?.frontmatter?.date || 0) - new Date(a?.frontmatter?.date || 0));
  } catch {}

  return (
    <>
      <SeoMeta title={title} description={description} image={image} />

      {/* Banner */}
      <HomeBanner banner={banner} />

      {/* Clients */}
      <Clients clients={clients} />

      {/* Testimonials */}
      <Testimonials />

      {/* New Services */}
      <NewServices new_services={new_services} />

      {/* Features */}
      <HomeFeatures feature={feature} />

      {/* Featured Projects */}
      <FeaturedProjects featured_projects={featured_projects} />

      {/* News */}
      <HomeNews posts={posts} />

      {/* Profile Section */}
      <ProfileSection profile_section={profile_section} />

      {/* Cta */}
      <Cta cta={call_to_action} />
    </>
  );
};

export default Home;
