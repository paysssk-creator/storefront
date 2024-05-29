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

import {
    ApplicationExecutorStorefront
} from "@selldone/core-js/models/application/executor/storefront/ApplicationExecutorStorefront.ts";
import {Store} from "vuex";
import {Router} from "vue-router";
import {Map} from "@selldone/core-js";

declare global {
  interface Window {
    $cookies: {
      set: (
        key: string,
        value: string,
        expiration: string,
        path: string,
        domain?: string | null,
        secure?: boolean,
      ) => void;
      get: (key: string) => string | undefined;
      remove: (keyName: string, path: string, domain?: string | null) => void;
    };

    sms_agreement?: string; // The SMS agreement in HTML code (for SMS provider to show to the user)

    /**
     * Default location calculated based on user IP. This location receive on {@see XAPI.GET_SHOP_INFO}
     */
    initial_location: Map.ILocation;
    AppInterface: ApplicationExecutorStorefront;

    SetToken: (token: string, expire_date: Date | null,cookie_key:string='access_token'|'vendor_access_token') => void;

    OverrideShopLanguagePacks: { [local: string]: any };

    $global_store: Store<any>;
    $global_router: Router;
  }
}
