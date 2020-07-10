/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  apis: [
    {
      type: "doc",
      id: "index"
    },
    {
      type: "category",
      label: "Prisma Cloud",
      items: [
        "rql_aws",
      ]
    },
    {
      type: "category",
      label: "Prisma Cloud Compute",
      items: [
        "compute_api",
        "twistcli_gs",
        "policy_samples",
    ]
    },
    {
      type: "category",
      label: "IaC Scan",
      items: [
        "iac_api",
    ]
    },
  ],
  about :[
    {
      type: "category",
      label: "About Prisma",
      items: [
        "whatisprisma"
      ]
    }
  ]
};
