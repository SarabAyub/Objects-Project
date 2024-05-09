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

const defaultOption = "<option value=\"\" disabled selected style=\"display:none;\">Select an option...</option>";
let userData = [{}];
const parent = document.getElementById('parent');

const label = document.createElement('label');
label.innerText = "Choose an Option  ";
parent.appendChild(label);

function createSelect() {
    const select = document.createElement('select');
    select.innerHTML = defaultOption;
    return select;
}

const select = createSelect();
const select1 = createSelect();
const select2 = createSelect();
const select3 = createSelect();
const input = document.createElement('input');
const button = document.createElement('button');
button.innerText = 'Submit';
const clearValuesButton = document.createElement('button');
clearValuesButton.innerText = 'Clear All';
const restoreValuesButton = document.createElement('button');
restoreValuesButton.innerText = 'Restore All';


for (i = 0; i < data.length; i++) {
    const option = document.createElement('option');
    option.value = data[i].property_name;
    option.innerText = data[i].property_name;
    select.appendChild(option);
    parent.appendChild(select);
}

select.addEventListener('change', () => {

    if (parent.contains(select1)) {
        select1.innerHTML = defaultOption;
        parent.removeChild(select1);
    }
    if (parent.contains(select2)) {
        select2.innerHTML = defaultOption;
        parent.removeChild(select2);
    }
    if (parent.contains(select3)) {
        select3.innerHTML = defaultOption;
        parent.removeChild(select3)
    }
    if (parent.contains(input)) {
        parent.removeChild(input)
    }
    if (parent.contains(button)) {
        parent.removeChild(button);
    }
    if (parent.contains(clearValuesButton)) {
        parent.removeChild(clearValuesButton);
    }
    if (parent.contains(restoreValuesButton)) {
        parent.removeChild(restoreValuesButton);
    }

    userData[0].property_name = select.value;

    for (j = 0; j < data.length; j++) {
        if (select.value === data[j].property_name) {
            for (i = 0; i < data[j].rules.fields.length; i++) {
                const option = document.createElement('option');
                option.value = data[j].rules.fields[i].name;
                option.innerText = data[j].rules.fields[i].label;
                select1.appendChild(option);
                parent.appendChild(select1);
            }
        }
    }
})


select1.addEventListener('change', () => {

    if (parent.contains(select2)) {
        select2.innerHTML = defaultOption;
        parent.removeChild(select2);
    }
    if (parent.contains(select3)) {
        select3.innerHTML = defaultOption;
        parent.removeChild(select3)
    }
    if (parent.contains(input)) {
        parent.removeChild(input)
    }
    if (parent.contains(button)) {
        parent.removeChild(button);
    }
    if (parent.contains(clearValuesButton)) {
        parent.removeChild(clearValuesButton);
    }
    if (parent.contains(restoreValuesButton)) {
        parent.removeChild(restoreValuesButton);
    }

    userData[0].rules = {};
    userData[0].rules.fields = [{}]
    userData[0].rules.fields[0].name = select1.value;

    for (j = 0; j < data.length; j++) {
        for (i = 0; i < data[j].rules.fields.length; i++) {
            if (select1.value === data[j].rules.fields[i].name) {
                userData[0].rules.fields[0].label = data[j].rules.fields[i].label; //storing value of user choices
                userData[0].rules.fields[0].dataType = data[j].rules.fields[i].dataType;
                for (k = 0; k < data[j].rules.fields[i].operators.length; k++) {
                    const option = document.createElement('option');
                    option.value = data[j].rules.fields[i].operators[k].name;
                    option.innerText = data[j].rules.fields[i].operators[k].label;
                    select2.appendChild(option);
                    parent.appendChild(select2);
                }
            }
        }
    }
})

select2.addEventListener('change', () => {
    if (parent.contains(input)) {
        parent.removeChild(input)
    }
    if (parent.contains(select3)) {
        select3.innerHTML = defaultOption;
        parent.removeChild(select3)
    }
    if (parent.contains(button)) {
        parent.removeChild(button);
    }
    if (parent.contains(clearValuesButton)) {
        parent.removeChild(clearValuesButton);
    }
    if (parent.contains(restoreValuesButton)) {
        parent.removeChild(restoreValuesButton);
    }

    userData[0].rules.fields[0].operators = [{}];
    userData[0].rules.fields[0].operators[0].name = select2.value;
    if (userData[0].rules.fields[0].hasOwnProperty('operatorOptions')) {
        delete userData[0].rules.fields[0].operatorOptions;
    }

    if (select2.value === 'isInTheBest') {
        userData[0].rules.fields[0].operatorOptions = { isInTheBest: [{ name: '' }] };
        for (i = 0; i < data[0].rules.fields[2].operatorOptions.isInTheBest.length; i++) {
            const option = document.createElement('option');
            option.value = data[0].rules.fields[2].operatorOptions.isInTheBest[i].name;
            option.innerText = data[0].rules.fields[2].operatorOptions.isInTheBest[i].label;
            select3.appendChild(option);
            parent.appendChild(select3);
        }
    } else if (select2.value === 'isInTheWorst') {
        userData[0].rules.fields[0].operatorOptions = { isInTheWorst: [{ name: '' }] };
        for (i = 0; i < data[0].rules.fields[2].operatorOptions.isInTheWorst.length; i++) {
            const option = document.createElement('option');
            option.value = data[0].rules.fields[2].operatorOptions.isInTheWorst[i].name;
            option.innerText = data[0].rules.fields[2].operatorOptions.isInTheWorst[i].label;
            select3.appendChild(option);
            parent.appendChild(select3);
        }
    }

    for (i = 0; i < data.length; i++) {
        if (data[i].property_name === select.value) {
            for (j = 0; j < data[i].rules.fields.length; j++) {
                if (data[i].rules.fields[j].name === select1.value) {
                    const type = data[i].rules.fields[j].dataType;
                    if (type === 'number') {
                        input.type = type;
                        input.value = '';
                        input.placeholder = 'Enter Only Number Value'
                    } else {
                        input.type = 'text';
                        input.value = '';
                        input.placeholder = 'Enter Only String Value';
                    }
                    parent.appendChild(input);
                }
            }
        }
    }
})

input.addEventListener('input', () => {
    if (input.value.length !== 0) {
        parent.appendChild(button);
        userData[0].inputFieldValue = input.value;
    } else if (parent.contains(button)) {
        parent.removeChild(button);
        parent.removeChild(clearValuesButton);        
        parent.removeChild(restoreValuesButton);
    }
})

button.addEventListener('click', () => {
    if (userData[0].rules.fields[0].hasOwnProperty('operatorOptions'))
        if (userData[0].rules.fields[0].operatorOptions.hasOwnProperty('isInTheBest')) {
            userData[0].rules.fields[0].operatorOptions.isInTheBest[0].name = select3.value;
        } else if (userData[0].rules.fields[0].operatorOptions.hasOwnProperty('isInTheWorst')) {
            userData[0].rules.fields[0].operatorOptions.isInTheWorst[0].name = select3.value;
        }
    parent.appendChild(clearValuesButton);

    console.log('your data is');
    console.log(userData)
})

clearValuesButton.addEventListener('click', ()=> {
    select.value = '';
    select1.value = '';
    select2.value = '';
    select3.value = '';
    input.value = '';

    parent.appendChild(restoreValuesButton);
})

restoreValuesButton.addEventListener('click', ()=> {
    select.value = userData[0].property_name;
    select1.value = userData[0].rules.fields[0].name;
    select2.value = userData[0].rules.fields[0].operators[0].name;
    input.value = userData[0].inputFieldValue;

    if (userData[0].rules.fields[0].hasOwnProperty('operatorOptions'))
        if (userData[0].rules.fields[0].operatorOptions.hasOwnProperty('isInTheBest')) {
            select3.value=userData[0].rules.fields[0].operatorOptions.isInTheBest[0].name ;
        } else if (userData[0].rules.fields[0].operatorOptions.hasOwnProperty('isInTheWorst')) {
            select3.value=userData[0].rules.fields[0].operatorOptions.isInTheWorst[0].name;
        }
})