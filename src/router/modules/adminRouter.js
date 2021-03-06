export default [
  {
    path: "/admin/register",
    name: "adminRegister",
    component: () => import("../../views/adminPanel/auth/Register.vue"),
  },
  // {
  //   path: "/admin/login",
  //   name: "adminLogin",
  //   component: () => import("../../views/adminPanel/auth/Login.vue"),
  // },
  {
    path: "/adminpanel",
    name: "adminPanel",
    component: () => import("../../layout/adminPanel/index.vue"),
    children: [
      //Product
      {
        path: "product/create",
        name: "createProduct",
        component: () => import("../../views/adminPanel/product/Create.vue"),
      },
      {
        path: "product/index",
        name: "indexProduct",
        component: () => import("../../views/adminPanel/product/Index.vue"),
      },
      {
        path: "product/update",
        name: "updateProduct",
        component: () => import("../../views/adminPanel/product/Update.vue"),
      },

      // Role
      {
        path: "role/create",
        name: "createrole",
        component: () => import("../../views/adminPanel/role/Create.vue"),
      },
      {
        path: "role/index",
        name: "indexrole",
        component: () => import("../../views/adminPanel/role/Index.vue"),
      },
      {
        path: "role/update",
        name: "updaterole",
        component: () => import("../../views/adminPanel/role/Update.vue"),
      },

      // Permission
      {
        path: "permission/create",
        name: "createPermission",
        component: () => import("../../views/adminPanel/permission/Create.vue"),
      },
       {
        path: "permission/index",
        name: "indexPermission",
        component: () => import("../../views/adminPanel/permission/Index.vue"),
      },
      {
        path: "permission/update",
        name: "updatePermission",
        component: () => import("../../views/adminPanel/permission/Update.vue"),
      },

      //User
      
      {
        path: "user/index",
        name: "indexCustomer",
        component: () => import("../../views/adminPanel/user/Index.vue"),
      },
      {
        path: "/user/info/:id",
        name: "userInfo",
        component: () => import("../../views/adminPanel/user/Info.vue"),
      },

      //Seller
      {
        path: "seller/index",
        name: "indexSeller",
        component: () => import("../../views/adminPanel/seller/Index.vue"),
      },
      {
        path: "seller/info",
        name: "indexSeller",
        component: () => import("../../views/adminPanel/seller/Info.vue"),
      },

      //Category
      {
        path: "category/create",
        name: "createCategory",
        component: () => import("../../views/adminPanel/category/Create.vue"),
      },
      {
        path: "category/index",
        name: "indexCategory",
        component: () => import("../../views/adminPanel/category/Index.vue"),
      },
      {
        path: "category/update",
        name: "updateCategory",
        component: () => import("../../views/adminPanel/category/Update.vue"),
      },

      //Orders

      {
        path: "order/index",
        name: "indexOrder",
        component: () => import("../../views/adminPanel/order/Index.vue"),
      },

      //Admin
      {
        path: "admin/create",
        name: "createAdmin",
        component: () => import("../../views/adminPanel/admin/Create.vue"),
      },
      {
        path: "admin/index",
        name: "indexAdmin",
        component: () => import("../../views/adminPanel/admin/Index.vue"),
      },
      {
        path: "admin/update",
        name: "updateAdmin",
        component: () => import("../../views/adminPanel/admin/Update.vue"),
      },
    ],
  },
];
