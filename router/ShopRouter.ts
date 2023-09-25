/*
 * Copyright (c) 2023. Selldone® Business OS™
 *
 * Author: M.Pajuhaan
 * Web: https://selldone.com
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * All rights reserved. In the weave of time, where traditions and innovations intermingle, this content was crafted.
 * From the essence of thought, through the corridors of creativity, each word, and sentiment has been molded.
 * Not just to exist, but to inspire. Like an artist's stroke or a sculptor's chisel, every nuance is deliberate.
 * Our journey is not just about reaching a destination, but about creating a masterpiece.
 * Tread carefully, for you're treading on dreams.
 */

import Vue from "vue";
import Router from "vue-router";
import store from "../store/ShopStore";
import LayoutStorefront from "../layouts/LayoutStorefront.vue";

//――――――――――――――――――――――――― Shop ―――――――――――――――――――――――――

import ShopPage from "../pages/ShopPage.vue";

import ProductPage from "../pages/product/ProductPage.vue";

//――――――――――――――――――――――――― Basket ―――――――――――――――――――――――――
import BasketPage from "../pages/basket/BasketPage.vue";

//――――――――――――――――――――――――― Orders ―――――――――――――――――――――――――

const OrdersPage = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../pages/orders/OrdersPage.vue"
  );
const MyPhysicalOrderInfoPage = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../pages/orders/basket/physical/MyPhysicalOrderInfoPage.vue"
  );
const MyVirtualOrderInfoPage = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../pages/orders/basket/virtual/MyVirtualOrderInfoPage.vue"
  );
const AvocadoOrderDetailPage = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../pages/orders/avocado/avocado/AvocadoOrderDetailPage.vue"
  );
const AvocadoOrderDetailMaster = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../pages/orders/avocado/AvocadoOrderDetailMaster.vue"
  );
const MyServiceOrderInfoPage = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../pages/orders/basket/service/MyServiceOrderInfoPage.vue"
  );
const MySubscriptionOrderInfoPage = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../pages/orders/basket/subscription/MySubscriptionOrderInfoPage.vue"
  );

const MyPOSOrderInfoPage = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../pages/orders/pos/pos/MyPOSOrderInfoPage.vue"
  );
const MyPOSOrderInfoPageMaster = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../pages/orders/pos/MyPOSOrderInfoPageMaster.vue"
  );
const MyFileOrderInfoPage = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../pages/orders/basket/file/MyFileOrderInfoPage.vue"
  );
const MyOrderInfoPageMaster = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../pages/orders/basket/MyOrderInfoPageMaster.vue"
  );
const HistoryOrdersAvocado = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../pages/orders/avocado/avocado/HistoryOrdersAvocado.vue"
  );
const HistoryOrdersPhysical = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../pages/orders/basket/physical/HistoryOrdersPhysical.vue"
  );
const HistoryOrdersVirtual = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../pages/orders/basket/virtual/HistoryOrdersVirtual.vue"
  );
const HistoryOrdersFile = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../pages/orders/basket/file/HistoryOrdersFile.vue"
  );
const HistoryOrdersService = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../pages/orders/basket/service/HistoryOrdersService.vue"
  );

const HistoryOrdersSubscription = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../pages/orders/basket/subscription/HistoryOrdersSubscription.vue"
  );

const HistoryOrdersPOS = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../pages/orders/pos/pos/HistoryOrdersPOS.vue"
  );
const PageRender = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../../PageBuilder/PageRender.vue"
  );
const UserReturnRequests = () =>
  import(
    /* webpackChunkName: "shop-profile" */ "../pages/user/return-orders/UserReturnRequests.vue"
  );

//――――――――――――――――――――――――― Insta ―――――――――――――――――――――――――

const InstagramPage = () =>
  import(
    /* webpackChunkName: "shop-insta" */ "../pages/instagram/InstagramPage.vue"
  );

//――――――――――――――――――――――――― Avocado ―――――――――――――――――――――――――

const AvocadoOrderPage = () =>
  import(
    /* webpackChunkName: "shop-avocado" */ "../pages/avocado/AvocadoOrderPage.vue"
  );
const AvocadoPage = () =>
  import(
    /* webpackChunkName: "shop-avocado" */ "../pages/avocado/AvocadoPage.vue"
  );

//――――――――――――――――――――――――― Hyper ―――――――――――――――――――――――――

const HyperOrderPage = () =>
  import(
    /* webpackChunkName: "shop-hyper" */ "../pages/hyper/HyperOrderPage.vue"
  );
const HyperPage = () =>
  import(
    /* webpackChunkName: "shop-hyper" */ "../pages/hyper/HyperPage.vue"
  );

//――――――――――――――――――――――――― POS ―――――――――――――――――――――――――

const ShopPOSPage = () =>
  import(/* webpackChunkName: "shop-pos" */ "../pages/pos/ShopPOSPage.vue");

//――――――――――――――――――――――――― Custom Home Page ―――――――――――――――――――――――――

const SHOP_PREFIX_ADDRESS = SetupService.GetMetaValue(
  "shop-prefix-address",
  ""
);
const CUSTOM_HOME = SetupService.GetMetaValue("custom-home") as Shop.Home;

//――――――――――――――――――――――――― Article ―――――――――――――――――――――――――
import LoginRedirect from "../pages/login/LoginRedirect.vue";
import ComparisonPage from "../pages/comparison/ComparisonPage.vue";
import UserPagesLayout from "../pages/user/UserPagesLayout.vue";
import UserProfilePage from "../pages/user/profile/UserProfilePage.vue";
import UserAddressesPage from "@/Applications/Storefront/pages/user/address/UserAddressesPage.vue";
import UserFavoritesPage from "../pages/user/favorites/UserFavoritesPage.vue";
import UserCommentsPage from "../pages/user/comment/UserCommentsPage.vue";
import UserGiftCardsPage from "../pages/user/giftcard/UserGiftCardsPage.vue";
import ShopProfilePage_AboutUs from "@/Applications/Storefront/pages/official/about-us/ShopProfilePage_AboutUs.vue";
import ShopProfilePage_Terms from "../pages/official/terms/ShopProfilePage_Terms.vue";
import ShopProfilePage_Privacy from "../pages/official/privacy/ShopProfilePage_Privacy.vue";
import ShopProfilePage from "../pages/official/ShopProfilePage.vue";
import ShopBlogPage from "../pages/blog/ShopBlogPage.vue";
import ShopBlogsPage from "../pages/blog/ShopBlogsPage.vue";
import ShopFAQ from "@/Applications/Storefront/pages/official/faq/ShopFAQ.vue";
import ShopContactUs from "@/Applications/Storefront/pages/official/contact-us/ShopContactUs.vue";

import ShopInfoPageMobile from "@/Applications/Storefront/pages/official/info/ShopInfoPageMobile.vue";
import { ShopOptionsHelper } from "../../../../core/helper/shop/ShopOptionsHelper";
import SetupService from "../../../../core/server/SetupService";
import { Shop } from "../../../../core/models/shop/shop.model";
import type { Route} from "vue-router/types/router.d.ts";
import  type {RouteConfigSingleView} from "vue-router/types/router.d.ts";

//――――――――――――――――――――――――― Social network ―――――――――――――――――――――――――

const CommunityLayout = () =>
  import(
    /* webpackChunkName: "community" */ "@/Components/community/layout/CommunityLayout.vue"
  );

const CommunityHomePage = () =>
  import(
    /* webpackChunkName: "community" */ "@/Components/community/pages/CommunityHomePage.vue"
  );

const CommunityCategoryPage = () =>
  import(
    /* webpackChunkName: "community" */ "@/Components/community/pages/CommunityCategoryPage.vue"
  );

const CommunityTopicPage = () =>
  import(
    /* webpackChunkName: "community" */ "@/Components/community/pages/CommunityTopicPage.vue"
  );

const CommunityFeedPage = () =>
  import(
    /* webpackChunkName: "community" */ "@/Components/community/pages/CommunityFeedPage.vue"
  );

const CommunityMyCommentsPage = () =>
  import(
    /* webpackChunkName: "community" */ "@/Components/community/pages/CommunityMyCommentsPage.vue"
  );

//――――――――――――――――――――――――― Map ―――――――――――――――――――――――――
const ShopMap = () =>
  import(/* webpackChunkName: "shop-map" */ "../pages/map/products/ShopMap.vue");
const ShopMapVendors = () =>
  import(/* webpackChunkName: "shop-map" */ "../pages/map/vendors/ShopMapVendors.vue");

function getRouteForHome(): IVueRoute {
  switch (CUSTOM_HOME) {
    /*▃▃▃▃▃▃▃▃▃▃▃ Home ➤ Blog ▃▃▃▃▃▃▃▃▃▃▃*/
    case Shop.Home.BLOG:
      return {
        path: "",
        name: "Blogs",
        component: ShopBlogsPage,
      };
    /*▃▃▃▃▃▃▃▃▃▃▃ Home ➤ Avocado ▃▃▃▃▃▃▃▃▃▃▃*/

    case Shop.Home.AVOCADO:
      return {
        path: "",
        name: "AvocadoPage",
        component: AvocadoPage,
      };
    /*▃▃▃▃▃▃▃▃▃▃▃ Home ➤ Hyper ▃▃▃▃▃▃▃▃▃▃▃*/

    case Shop.Home.HYPER:
      return {
        path: "",
        name: "HyperPage",
        component: HyperPage,
      };
    /*▃▃▃▃▃▃▃▃▃▃▃ Home ➤ Community ▃▃▃▃▃▃▃▃▃▃▃*/
    case Shop.Home.COMMUNITY:
      return {
        meta: {
          card: true,
        },
        path: "",
        component: CommunityLayout,
        children: [
          {
            path: "",
            name: "CommunityHomePage",
            component: CommunityHomePage,
          },
        ],
      };
    /*▃▃▃▃▃▃▃▃▃▃▃ Home ➤ Shop ▃▃▃▃▃▃▃▃▃▃▃*/
    case Shop.Home.SHOP:
      return {
        path: "",
        name: "ShopPage",
        component: ShopPage,
        meta: {
          search: true,
        },
      };
    /*▃▃▃▃▃▃▃▃▃▃▃ Home ➤ Map ▃▃▃▃▃▃▃▃▃▃▃*/
    case Shop.Home.MAP:
      return {
        path: "",
        name: "ShopMap",
        component: ShopMap,
        meta: {
          fullscreen: true,
        },
      };

    default:
      /*▃▃▃▃▃▃▃▃▃▃▃ Home ➤ Landing Page ▃▃▃▃▃▃▃▃▃▃▃*/
      if (Shop.Home.LANDING_PAGE)
        // Landing page ID!
        return {
          path: "",
          name: "CustomHomePage", // Landing page loader!
          component: PageRender,
          meta: {
            fullscreen: true,
          },
        };

      /*▃▃▃▃▃▃▃▃▃▃▃ Home ➤ Default (Shop) ▃▃▃▃▃▃▃▃▃▃▃*/
      return {
        path: "",
        name: "ShopPage",
        component: ShopPage,
        meta: {
          search: true,
        },
      };
  }
}

Vue.use(Router);
const routes :  IVueRoute[]= [
  //█████████████████████████████████████████████████████████████
  //――――――――――――――――――――― Shop General Layout ―――――――――――――――――――――――
  //█████████████████████████████████████████████████████████████

  {
    path: "",
    component: LayoutStorefront,
    meta: {
      footer: true, // Show Footer
      comparison: true, // Show Product Comparison
      support: true, // Show Support (If enabled)
    },

    children: [
      // ▶ ▶ ⬬⬬⬬⬬⬬⬬⬬⬬ Shop Page ⬬⬬⬬⬬⬬⬬⬬⬬
      // Important: This route selection must be first!
      // + Add new pages on shop.js > getCustomHomePage & GetDomainHomeIcon & GetDomainHomeName
      getRouteForHome(),

      // ▶ ▶ ⬬⬬⬬⬬⬬⬬⬬⬬ Shop Page ⬬⬬⬬⬬⬬⬬⬬⬬
      {
        // Order important! first route to ShopPage consider as ShopPage!
        path: "shop",
        name: CUSTOM_HOME === "shop" ? "ShopPage-shop" : "ShopPage", // Prevent duplicated route name 'ShopPage'
        component: ShopPage,
        meta: {
          search: true,
        },
      },

      // ▶ ▶ ⬬⬬⬬⬬⬬⬬⬬⬬ Category ⬬⬬⬬⬬⬬⬬⬬⬬
      {
        path: ":category_name-category",
        name: "ShopCategoryPage",
        component: ShopPage,
        meta: {
          search: true,
        },
      },

      // ⬬⬬⬬⬬⬬⬬⬬⬬ Vendors ⬬⬬⬬⬬⬬⬬⬬⬬

      {
        path: "/@:slug-:vendor_id(\\d+)",
        component: ShopPage,
        name: "VendorPublicPage",
        meta: {
          search: true,
        },
      },

      // ⬬⬬⬬⬬⬬⬬⬬⬬ Pages ⬬⬬⬬⬬⬬⬬⬬⬬

      {
        path: "pages/:page_name",
        name: "PageRender",
        component: PageRender,
        meta: {
          fullscreen: true,
        },
      },

      // ⬬⬬⬬⬬⬬⬬⬬⬬ Include Dynamic Profiles ⬬⬬⬬⬬⬬⬬⬬⬬

      {
        path: "in/:path-:include_id(\\d+)",
        name: "IncludePageRender",
        component: PageRender,
        meta: {
          fullscreen: true,
        },
      },

      // ▶ ▶ ⬬⬬⬬⬬⬬⬬⬬⬬ product Page ⬬⬬⬬⬬⬬⬬⬬⬬
      {
        path: "product/:product_id",
        name: "ProductPage",
        component: ProductPage,
        meta: {
          search: true, // SHow search bar
          fullscreen: true,
          bg_color: "#f0f0f0", // Page background color | Set as --background root style variable
        },
      },
      // ▶ ▶ ⬬⬬⬬⬬⬬⬬⬬⬬ product Page ⬬⬬⬬⬬⬬⬬⬬⬬
      {
        path: "comparison",
        name: "ComparisonPage",
        component: ComparisonPage,
        meta: {
          bg_color: "#f0f0f0", // Page background color | Set as --background root style variable
        },
      },

      // ▶ ▶ ⬬⬬⬬⬬⬬⬬⬬⬬ Shop info page (Instead of footer in mobile) ⬬⬬⬬⬬⬬⬬⬬⬬
      {
        path: "info",
        name: "ShopInfoPageMobile",
        component: ShopInfoPageMobile,
      },

      // ▶ ▶ ⬬⬬⬬⬬⬬⬬⬬⬬ basket Page  ⬬⬬⬬⬬⬬⬬⬬⬬
      {
        path: "basket/:type",
        name: "BasketPage",
        component: BasketPage,
      },

      {
        path: "user",
        component: UserPagesLayout,

        meta: {
          requiresAuth: true,
        },

        children: [
          // ▶ ▶ ⬬⬬⬬⬬⬬⬬⬬⬬ My Orders Page (Virtual, Physical ...) ⬬⬬⬬⬬⬬⬬⬬⬬
          {
            path: "orders",
            name: "OrdersPage",
            component: OrdersPage,

            children: [
              // ⬬⬬⬬⬬⬬⬬⬬⬬ History ▶ Physical ⬬⬬⬬⬬⬬⬬⬬⬬
              {
                path: "physical",
                name: "HistoryOrdersPhysical",
                component: HistoryOrdersPhysical,
              },
              // ⬬⬬⬬⬬⬬⬬⬬⬬ History ▶ Virtual ⬬⬬⬬⬬⬬⬬⬬⬬
              {
                path: "virtual",
                name: "HistoryOrdersVirtual",
                component: HistoryOrdersVirtual,
              },

              // ⬬⬬⬬⬬⬬⬬⬬⬬ History ▶ File ⬬⬬⬬⬬⬬⬬⬬⬬
              {
                path: "file",
                name: "HistoryOrdersFile",
                component: HistoryOrdersFile,
              },

              // ⬬⬬⬬⬬⬬⬬⬬⬬ History ▶ Service ⬬⬬⬬⬬⬬⬬⬬⬬
              {
                path: "service",
                name: "HistoryOrdersService",
                component: HistoryOrdersService,
              },

              // ⬬⬬⬬⬬⬬⬬⬬⬬ History ▶ Subscription ⬬⬬⬬⬬⬬⬬⬬⬬
              {
                path: "subscription",
                name: "HistoryOrdersSubscription",
                component: HistoryOrdersSubscription,
              },
              // ⬬⬬⬬⬬⬬⬬⬬⬬ History ▶ POS ⬬⬬⬬⬬⬬⬬⬬⬬
              {
                path: "pos",
                name: "HistoryOrdersPOS",
                component: HistoryOrdersPOS,
              },
              // ⬬⬬⬬⬬⬬⬬⬬⬬ History ▶ Avocado ⬬⬬⬬⬬⬬⬬⬬⬬
              {
                path: "avocado",
                name: "HistoryOrdersAvocado",
                component: HistoryOrdersAvocado,
              },
            ],
          },

          // ▶ ▶ ⬬⬬⬬⬬⬬⬬⬬⬬ User Profile ⬬⬬⬬⬬⬬⬬⬬⬬
          {
            path: "profile",
            name: "UserProfilePage",
            component: UserProfilePage,
          },

          // ▶ ▶ ⬬⬬⬬⬬⬬⬬⬬⬬ User Addresses ⬬⬬⬬⬬⬬⬬⬬⬬
          {
            path: "addresses",
            name: "UserAddressesPage",
            component: UserAddressesPage,
          },

          // ▶ ▶ ⬬⬬⬬⬬⬬⬬⬬⬬ User order returns ⬬⬬⬬⬬⬬⬬⬬⬬
          {
            path: "orders-return",
            name: "UserReturnRequests",
            component: UserReturnRequests,
          },

          // ▶ ▶ ⬬⬬⬬⬬⬬⬬⬬⬬ User Favorites ⬬⬬⬬⬬⬬⬬⬬⬬
          {
            path: "favorites",
            name: "UserFavoritesPage",
            component: UserFavoritesPage,
          },

          // ▶ ▶ ⬬⬬⬬⬬⬬⬬⬬⬬ User Comments ⬬⬬⬬⬬⬬⬬⬬⬬
          {
            path: "comments",
            name: "UserCommentsPage",
            component: UserCommentsPage,
          },

          // ▶ ▶ ⬬⬬⬬⬬⬬⬬⬬⬬ User gift cards ⬬⬬⬬⬬⬬⬬⬬⬬
          {
            path: "gift-cards",
            name: "UserGiftCardsPage",
            component: UserGiftCardsPage,
          },
        ],
      },

      // ▶ ▶ ⬬⬬⬬⬬⬬⬬⬬⬬ Redirect login ⬬⬬⬬⬬⬬⬬⬬⬬
      {
        path: "selldone-callback",
        name: "LoginRedirect",
        component: LoginRedirect,
      },

      //█████████████████████████████████████████████████████████████
      //――――――――――――――――――――――――― Article ―――――――――――――――――――――――――――
      //█████████████████████████████████████████████████████████████

      // ⬬⬬⬬⬬⬬⬬⬬⬬ Blog ▶ Blogs List ⬬⬬⬬⬬⬬⬬⬬⬬
      {
        path: "blog",
        name: "Blogs",
        component: ShopBlogsPage,
      },
      {
        // Old version!
        path: "blog",
        name: "ShopBlogsPage",
        component: ShopBlogsPage,
      },

      {
        path: "/team/:author-:author_id(\\d+)",
        name: "AuthorPage",
        component: ShopBlogsPage,
        meta: {
          title: "Team | {author}",
          dark: true,
          //light:true, // Light header
        },
      },

      // ▶ ▶ ⬬⬬⬬⬬⬬⬬⬬⬬ Blog ▶ Blog View ⬬⬬⬬⬬⬬⬬⬬⬬

      {
        path: "blog/:slug-:blog_id(\\d+)",
        name: "ShopBlogPageSlug",
        component: ShopBlogPage,
      },
      {
        path: "blog/:blog_id",
        name: "ShopBlogPage",
        component: ShopBlogPage,
      },
      {
        path: "",
        component: ShopProfilePage,

        children: [
          // ⬬⬬⬬⬬⬬⬬⬬⬬ Profile ▶ About Us ⬬⬬⬬⬬⬬⬬⬬⬬
          {
            path: "about-us",
            name: "ShopProfilePage_AboutUs",
            component: ShopProfilePage_AboutUs,
          },
          // ⬬⬬⬬⬬⬬⬬⬬⬬ Profile ▶ Terms ⬬⬬⬬⬬⬬⬬⬬⬬
          {
            path: "terms",
            name: "ShopProfilePage_Terms",
            component: ShopProfilePage_Terms,
          },

          // ⬬⬬⬬⬬⬬⬬⬬⬬ Profile ▶ Privacy ⬬⬬⬬⬬⬬⬬⬬⬬
          {
            path: "privacy",
            name: "ShopProfilePage_Privacy",
            component: ShopProfilePage_Privacy,
          },
          // ⬬⬬⬬⬬⬬⬬⬬⬬ Contact US ⬬⬬⬬⬬⬬⬬⬬⬬
          {
            path: "contact-us",
            name: "ShopContactUs",
            component: ShopContactUs,
          },
        ],
      },

      // ⬬⬬⬬⬬⬬⬬⬬⬬ FAQ ⬬⬬⬬⬬⬬⬬⬬⬬
      {
        path: "faq/:tag?",
        name: "ShopFAQ",
        component: ShopFAQ,
      },

      // ⬬⬬⬬⬬⬬⬬⬬⬬ Order info ⬬⬬⬬⬬⬬⬬⬬⬬
      {
        path: "orders",
        component: MyOrderInfoPageMaster,
        meta: {
          requiresAuth: true,
        },

        children: [
          // ⬬⬬⬬⬬⬬⬬⬬⬬ Order info ▶ Physical ⬬⬬⬬⬬⬬⬬⬬⬬

          {
            path: "physical/SM-:basket_id",
            name: "MyPhysicalOrderInfoPage",
            component: MyPhysicalOrderInfoPage,
          },
          // ⬬⬬⬬⬬⬬⬬⬬⬬ Order info ▶ Virtual ⬬⬬⬬⬬⬬⬬⬬⬬

          {
            path: "virtual/SV-:basket_id",
            name: "MyVirtualOrderInfoPage",
            component: MyVirtualOrderInfoPage,
          },
          // ⬬⬬⬬⬬⬬⬬⬬⬬ Order info ▶ File ⬬⬬⬬⬬⬬⬬⬬⬬

          {
            path: "file/SF-:basket_id",
            name: "MyFileOrderInfoPage",
            component: MyFileOrderInfoPage,
          },
          // ⬬⬬⬬⬬⬬⬬⬬⬬ Order info ▶ Service ⬬⬬⬬⬬⬬⬬⬬⬬

          {
            path: "service/SS-:basket_id",
            name: "MyServiceOrderInfoPage",
            component: MyServiceOrderInfoPage,
          },

          // ⬬⬬⬬⬬⬬⬬⬬⬬ Order info ▶ Subscription ⬬⬬⬬⬬⬬⬬⬬⬬

          {
            path: "subscription/SN-:basket_id",
            name: "MySubscriptionOrderInfoPage",
            component: MySubscriptionOrderInfoPage,
          },
        ],
      },

      // ⬬⬬⬬⬬⬬⬬⬬⬬ POS Order info ⬬⬬⬬⬬⬬⬬⬬⬬
      {
        path: "orders",
        component: MyPOSOrderInfoPageMaster,
        meta: {
          requiresAuth: true,
        },

        children: [
          // ⬬⬬⬬⬬⬬⬬⬬⬬ Order info ▶ POS ⬬⬬⬬⬬⬬⬬⬬⬬

          {
            path: "pos/POS-:basket_id",
            name: "MyPOSOrderInfoPage",
            component: MyPOSOrderInfoPage,
          },
        ],
      },

      // ⬬⬬⬬⬬⬬⬬⬬⬬ POS Order info ⬬⬬⬬⬬⬬⬬⬬⬬
      {
        path: "orders",
        component: AvocadoOrderDetailMaster,
        meta: {
          requiresAuth: true,
        },
        children: [
          // ⬬⬬⬬⬬⬬⬬⬬⬬ Order info ▶ POS ⬬⬬⬬⬬⬬⬬⬬⬬

          {
            path: "avocado/AVO-:basket_id",
            name: "AvocadoOrderDetailPage",
            component: AvocadoOrderDetailPage,
          },
        ],
      },
    ],
  },
  //█████████████████████████████████████████████████████████████
  //――――――――――――――――― Map - Find products/vendors on the map ―――――――――――――――――
  //█████████████████████████████████████████████████████████████

  {
    path: "",
    component: LayoutStorefront,
    meta: {}, // No footer mode!
    children: [
      {
        path: "/map",
        component: ShopMap,
        meta: {
          fullscreen: true,
        },
      },

      {
        path: "/map-vendors",
        component: ShopMapVendors,
        meta: {
          fullscreen: true,
        },
      },
    ],
  },

  //█████████████████████████████████████████████████████████████
  //――――――――――――――――――――――――― Simple Mode ―――――――――――――――――――――――――――
  //█████████████████████████████████████████████████████████████
  {
    path: "",
    component: LayoutStorefront,
    meta: {
      footer: false, // Show Footer
      comparison: false, // Show Product Comparison
      support: false, // Show Support (If enabled)
      light_header: true, // Header is light!
    },

    children: [
      //―――――――――――――― Instagram ――――――――――――――
      {
        path: "instagram",
        name: "InstagramPage",
        component: InstagramPage,
        meta: {
          channel: "instagram", // To save channel entry
        },
      },
    ],
  },

  //█████████████████████████████████████████████████████████████
  //――――――――――――――――――――― Simple pages layout ―――――――――――――――――――――――
  //█████████████████████████████████████████████████████████████

  {
    path: "",
    component: LayoutStorefront,
    meta: {},
    children: [
      //█████████████████████████████████████████████████████████████
      //――――――――――――――――――――――――― Avocado ―――――――――――――――――――――――――――
      //█████████████████████████████████████████████████████████████

      // ⬬⬬⬬⬬⬬⬬⬬⬬ Avocado ▶ Page ⬬⬬⬬⬬⬬⬬⬬⬬
      {
        path: "/avocado/:hash",
        name: "AvocadoOrderPage",
        component: AvocadoOrderPage,
        meta: {
          page_background: `background-image: linear-gradient(60deg, #9eb644, #e8db8e)`,
          transparent_header: true,
          title: "Avocado | Order",
        },
      },

      // ⬬⬬⬬⬬⬬⬬⬬⬬ Avocado ▶ Form ⬬⬬⬬⬬⬬⬬⬬⬬
      {
        path: "/avocado",
        name: "AvocadoPage",
        component: AvocadoPage,
        meta: {
          page_background: `background-image: linear-gradient(60deg, #9eb644, #e8db8e)`,
          transparent_header: true,
          title: "Avocado | Inquiry",
        },
      },

      //█████████████████████████████████████████████████████████████
      //――――――――――――――――――――――――― Hyper ―――――――――――――――――――――――――――
      //█████████████████████████████████████████████████████████████

      // ⬬⬬⬬⬬⬬⬬⬬⬬ Hyper ▶ Page ⬬⬬⬬⬬⬬⬬⬬⬬
      {
        path: "/hyper/:basket_id",
        name: "HyperOrderPage",
        component: HyperOrderPage,
        meta: {
          page_background: `background-image: linear-gradient(60deg, #C2185B, #FF5722)`,
          transparent_header: true,
          title: "Hyper | Order",
        },
      },

      // ⬬⬬⬬⬬⬬⬬⬬⬬ Hyper ▶ Form ⬬⬬⬬⬬⬬⬬⬬⬬
      {
        path: "/hyper",
        name: "HyperPage",
        component: HyperPage,
        meta: {
          page_background: `background-image: linear-gradient(60deg, #C2185B, #FF5722)`,
          transparent_header: true,
          title: "Hyper | Inquiry",
        },
      },

      //█████████████████████████████████████████████████████████████
      //――――――――――――――――――――― POS ―――――――――――――――――――――――
      //█████████████████████████████████████████████████████████████
      // ⬬⬬⬬⬬⬬⬬⬬⬬ POS ▶ Customer View Scan Result ⬬⬬⬬⬬⬬⬬⬬⬬
      {
        path: "pos/:basket_id",
        name: "ShopPOSPage",
        component: ShopPOSPage,
        meta: {
          transparent_header: true,
          page_background: `background-image: linear-gradient(60deg, #0288D1, #0097A7)`,
          title: "POS | Order",
        },
      },
    ],
  },

  //█████████████████████████████████████████████████████████████
  //――――――――――――――――――――――――― Community  ――――――――――――――――――――――――――
  //█████████████████████████████████████████████████████████████

  {
    path: "/community",
    component: LayoutStorefront,
    meta: {
      card: true,
    },
    children: [
      {
        path: "",
        name: "CommunityLayout",
        component: CommunityLayout,

        children: [
          // ⬬⬬⬬⬬⬬⬬⬬⬬ Categories (Home)  ⬬⬬⬬⬬⬬⬬⬬⬬
          {
            path: "",
            name: "CommunityHomePage",
            component: CommunityHomePage,
          },

          // ⬬⬬⬬⬬⬬⬬⬬⬬ Feed  ⬬⬬⬬⬬⬬⬬⬬⬬
          {
            path: "feed",
            name: "CommunityFeedPage",
            component: CommunityFeedPage,
          },
          // ⬬⬬⬬⬬⬬⬬⬬⬬ Feed  ⬬⬬⬬⬬⬬⬬⬬⬬
          {
            path: "comments",
            name: "CommunityMyCommentsPage",
            component: CommunityMyCommentsPage,
          },

          // ⬬⬬⬬⬬⬬⬬⬬⬬ Category (Topics list)  ⬬⬬⬬⬬⬬⬬⬬⬬
          {
            path: ":category_id-:category_slug",
            name: "CommunityCategoryPage",
            component: CommunityCategoryPage,
          },

          // ⬬⬬⬬⬬⬬⬬⬬⬬ Topic  ⬬⬬⬬⬬⬬⬬⬬⬬
          {
            path: ":category_id-:category_slug/:topic_id-:topic_slug",
            name: "CommunityTopicPage",
            component: CommunityTopicPage,
          },
        ],
      },
    ],
  },

  //█████████████████████████████████████████████████████████████
  //―――――――――――――― Shop User Layout (Global - for all shops) ―――――――――――――――――
  //█████████████████████████████████████████████████████████████
]




const router = new Router(
{
  mode: "history",
      base: SHOP_PREFIX_ADDRESS, //process.env.BASE_URL
    routes:routes

});

let FIRST_LOAD = true; // Detect first load of app to solve multi-language page title problem! (Because of async load)
//―――――――――――――――――――――― Prototypes ――――――――――――――――――――
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function ToPageName(str: string | any) {
  if (!str || !(typeof str === "string" || str instanceof String)) return str;
  return capitalizeFirstLetter(str.replace(/-/g, " "));
}

router.beforeEach((to, from, next) => {
  //---------------- Set Title ----------------
  if (to.meta && to.meta.title && !FIRST_LOAD) {
    let title = window.$i18n_global.t(to.meta.title);
    //console.log('to:',to,'title:',title)
    if (title) {
      if (to.params) {
        Object.keys(to.params).forEach((key) => {
          title = title.replace(`{${key}}`, ToPageName(to.params[key]));
        });
      }

      title = title.replace(/{[^}]*}/g, "");
      document.title = title;
    }
  }
  FIRST_LOAD = false;
  //-------------------------------------------

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const user = store.getters.getUser;
    const busy = store.getters.getBusyUser;
    const shop = store.getters.getShop;
    const has_guest_checkout = ShopOptionsHelper.HasGuestCheckout(shop);

    if (!user && !busy && !has_guest_checkout) {
      next({
        name: "ShopPage",
      });
    }
  }

  next();
});

router.afterEach((to: Route, from: Route) => {
  // Update the current location in header:
  window.axios.defaults.headers.common["S-Location"] = window.location.href;
});

export default router;

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

interface IVueRoute extends RouteConfigSingleView {
  meta?: IRouteMeta; // Metadata associated with the route.
  children?: IVueRoute[]; // Nested child routes.
};

type IRouteMeta = {
  footer?: boolean; // Indicates if a footer should be displayed. Default is `false`.
  comparison?: boolean; // Indicates if product comparison should be shown. Default is `false`.
  support?: boolean; // If set to `true`, shows the support. Default is `false`.
  search?: boolean; // If set to `true`, displays the search bar. Default is `false`.
  fullscreen?: boolean; // Determines if the view should be in fullscreen mode. Default is `false`.
  bg_color?: string; // Sets the background color of the page. Default is not set.
  requiresAuth?: boolean; // If `true`, the route requires authentication. Default is `false`.
  title?:string;
  dark?:boolean;
  light_header?:boolean;
  page_background?:string;
  transparent_header?:boolean;
  channel?:string;// Force to set channel entry e,g: instagram (override auto-detection from previous url)
  card?:boolean; // Show card mode
};
