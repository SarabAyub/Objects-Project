const data = [{
    "property_name": "Customers who have",
    "rules": {
        "fields": [{
                "name": "billing_zip",
                "label": "ZIP Code",
                "dataType": "string",
                "operators": [{
                        "name": "equal",
                        "label": "exactly"
                    },
                    {
                        "name": "in",
                        "label": "one of"
                    },
                    {
                        "name": "notIn",
                        "label": "none of"
                    },
                    {
                        "name": "startsWith",
                        "label": "starts with"
                    }
                ]
            },
            {
                "name": "30day_value",
                "label": "30 Days Value",
                "dataType": "number",
                "operators": [{
                        "name": "equal",
                        "label": "exactly"
                    },
                    {
                        "name": "greaterThan",
                        "label": "greater than"
                    },
                    {
                        "name": "greaterThanOrEqual",
                        "label": "greater than or equal to"
                    },
                    {
                        "name": "lessThan",
                        "label": "less than"
                    },
                    {
                        "name": "lessThanOrEqual",
                        "label": "less than or equal to"
                    },
                    {
                        "name": "notEqual",
                        "label": "not exactly"
                    }
                ]
            },
            {
                "name": "average_order_value",
                "label": "Average Order Value",
                "dataType": "number",
                "operators": [{
                        "name": "equal",
                        "label": "exactly"
                    },
                    {
                        "name": "greaterThan",
                        "label": "greater than"
                    },
                    {
                        "name": "greaterThanOrEqual",
                        "label": "greater than or equal to"
                    },
                    {
                        "name": "lessThan",
                        "label": "less than"
                    },
                    {
                        "name": "lessThanOrEqual",
                        "label": "less than or equal to"
                    },
                    {
                        "name": "isInTheBest",
                        "label": "in the best"
                    },
                    {
                        "name": "isInTheWorst",
                        "label": "in the worst"
                    },
                    {
                        "name": "notEqual",
                        "label": "not exactly"
                    }
                ],
                "operatorOptions": {
                    "isInTheBest": [{
                            "name": "0.1",
                            "label": "10 %"
                        },
                        {
                            "name": "0.2",
                            "label": "20 %"
                        },
                        {
                            "name": "0.3",
                            "label": "30 %"
                        },
                        {
                            "name": "0.4",
                            "label": "40 %"
                        },
                        {
                            "name": "0.5",
                            "label": "50 %"
                        },
                        {
                            "name": "0.6",
                            "label": "60 %"
                        },
                        {
                            "name": "0.7",
                            "label": "70 %"
                        },
                        {
                            "name": "0.8",
                            "label": "80 %"
                        },
                        {
                            "name": "0.9",
                            "label": "90 %"
                        },
                        {
                            "name": "1",
                            "label": "100 %"
                        }
                    ],
                    "isInTheWorst": [{
                            "name": "0.1",
                            "label": "10 %"
                        },
                        {
                            "name": "0.2",
                            "label": "20 %"
                        },
                        {
                            "name": "0.3",
                            "label": "30 %"
                        },
                        {
                            "name": "0.4",
                            "label": "40 %"
                        },
                        {
                            "name": "0.5",
                            "label": "50 %"
                        },
                        {
                            "name": "0.6",
                            "label": "60 %"
                        },
                        {
                            "name": "0.7",
                            "label": "70 %"
                        },
                        {
                            "name": "0.8",
                            "label": "80 %"
                        },
                        {
                            "name": "0.9",
                            "label": "90 %"
                        },
                        {
                            "name": "1",
                            "label": "100 %"
                        }
                    ]
                }
            }
        ]
    }
},
{
    "property_name": "Customers who did",
    "rules": {
        "fields": [{
                "name": "shipping_zip",
                "label": "Shipping ZIP Code",
                "dataType": "string",
                "operators": [{
                        "name": "equal",
                        "label": "exactly"
                    },
                    {
                        "name": "in",
                        "label": "one of"
                    },
                    {
                        "name": "notIn",
                        "label": "none of"
                    },
                    {
                        "name": "startsWith",
                        "label": "starts with"
                    }
                ],
                "suggestions": true
            },
            {
                "name": "60day_value",
                "label": "60 Days Value",
                "dataType": "number",
                "operators": [{
                        "name": "equal",
                        "label": "exactly"
                    },
                    {
                        "name": "greaterThan",
                        "label": "greater than"
                    },
                    {
                        "name": "greaterThanOrEqual",
                        "label": "greater than or equal to"
                    },
                    {
                        "name": "lessThan",
                        "label": "less than"
                    },
                    {
                        "name": "lessThanOrEqual",
                        "label": "less than or equal to"
                    },
                    {
                        "name": "notEqual",
                        "label": "not exactly"
                    }
                ]
            },
            {
                "name": "average_cart_value",
                "label": "Average Cart Value",
                "dataType": "number",
                "operators": [{
                        "name": "equal",
                        "label": "exactly"
                    },
                    {
                        "name": "greaterThan",
                        "label": "greater than"
                    },
                    {
                        "name": "greaterThanOrEqual",
                        "label": "greater than or equal to"
                    },
                    {
                        "name": "lessThan",
                        "label": "less than"
                    },
                    {
                        "name": "lessThanOrEqual",
                        "label": "less than or equal to"
                    },
                    {
                        "name": "isInTheBest",
                        "label": "in the best"
                    },
                    {
                        "name": "isInTheWorst",
                        "label": "in the worst"
                    },
                    {
                        "name": "notEqual",
                        "label": "not exactly"
                    }
                ],
                "operatorOptions": {
                    "isInTheBest": [{
                            "name": "0.1",
                            "label": "10 %"
                        },
                        {
                            "name": "0.2",
                            "label": "20 %"
                        },
                        {
                            "name": "0.3",
                            "label": "30 %"
                        },
                        {
                            "name": "0.4",
                            "label": "40 %"
                        },
                        {
                            "name": "0.5",
                            "label": "50 %"
                        },
                        {
                            "name": "0.6",
                            "label": "60 %"
                        },
                        {
                            "name": "0.7",
                            "label": "70 %"
                        },
                        {
                            "name": "0.8",
                            "label": "80 %"
                        },
                        {
                            "name": "0.9",
                            "label": "90 %"
                        },
                        {
                            "name": "1",
                            "label": "100 %"
                        }
                    ],
                    "isInTheWorst": [{
                            "name": "0.1",
                            "label": "10 %"
                        },
                        {
                            "name": "0.2",
                            "label": "20 %"
                        },
                        {
                            "name": "0.3",
                            "label": "30 %"
                        },
                        {
                            "name": "0.4",
                            "label": "40 %"
                        },
                        {
                            "name": "0.5",
                            "label": "50 %"
                        },
                        {
                            "name": "0.6",
                            "label": "60 %"
                        },
                        {
                            "name": "0.7",
                            "label": "70 %"
                        },
                        {
                            "name": "0.8",
                            "label": "80 %"
                        },
                        {
                            "name": "0.9",
                            "label": "90 %"
                        },
                        {
                            "name": "1",
                            "label": "100 %"
                        }
                    ]
                }
            }
        ]
    }
}
];

export default data;
