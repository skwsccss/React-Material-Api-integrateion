export const anchorTable = [
    {
        name: 'id',
        label: 'Id',
        type: 'static',
        initialValue: '',
        hidden: true
    }, {
        name: 'category',
        label: 'Category',
        type: 'selection',
        initialValue: 'Electronics',
        options: ['Electronics', 'Sporting Goods', 'Apparels', 'Other'],
        width: 'auto',
        hidden: false
    }, {
        name: 'price',
        label: 'Price',
        type: 'number',
        initialValue: 0,
        width: '100',
        hidden: false
    }, {
        name: 'date',
        label: 'Date Updated',
        type: 'date',
        initialValue: new Date(),
        width: 'auto',
        hidden: false
    }, {
        name: 'time',
        label: 'Time Updated',
        type: 'time',
        initialValue: new Date(),
        width: 'auto',
        hidden: false
    }, {
        name: 'name',
        label: 'Name',
        type: 'text',
        initialValue: '',
        width: 'auto',
        hidden: false
    }, {
        name: 'available',
        label: 'Available',
        type: 'toggle',
        initialValue: true,
        width: '100',
        hidden: false
    }, {
        name: 'edited',
        label: '',
        type: 'static',
        initialValue: '',
        hidden: true
    }, {
        name: 'action',
        label: 'Action',
        type: 'static',
        initialValue: '',
        hidden: false
    },
];
export const dataApi = [
    {
        id: 1,
        category: 'Sporting Goods',
        price: '49.99',
        date: '4/3/2018',
        time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
        name: 'football',
        available: true,
        edited: false,
    }, {
        id: 2,
        category: 'Other',
        price: '9.99',
        date: '4/2/2018',
        time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
        name: 'baseball',
        available: true,
        edited: false,
    }, {
        id: 3,
        category: 'Sporting Goods',
        price: '29.99',
        date: '4/1/2018',
        time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
        name: 'basketball',
        available: false,
        edited: false,
    }, {
        id: 4,
        category: 'Electronics',
        price: '99.99',
        date: '3/30/2018',
        time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
        name: 'iPod Touch',
        available: true,
        edited: false,
    }, {
        id: 5,
        category: 'Electronics',
        price: '399.99',
        date: '3/29/2018',
        time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
        name: 'iPhone 5',
        available: false,
        edited: false,
    }, {
        id: 6,
        category: 'Electronics',
        price: '199.99',
        date: '3/28/2018',
        time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
        name: 'nexus 7',
        available: true,
        edited: false,
    }
];
export const UserData = [
    ['Gabby George', 'Business Analyst', 30, 'active', 100000],
    ['Aiden Lloyd', 'Business Consultant', 55, 'active', 200000],
    ['Jaden Collins', 'Attorney', 27, 'non-active', 500000],
    ['Franky Rees', 'Business Analyst', 90, 'active', 50000],
    ['Aaren Rose', 'Business Consultant', 28, 'unknown', 75000],
    ['Blake Duncan', 'Business Management Analyst', 65, 'active', 94000],
    ['Frankie Parry', 'Agency Legal Counsel', 71, 'non-active', 210000],
    ['Lane Wilson', 'Commercial Specialist', 19, 'active', 65000],
    ['Robin Duncan', 'Business Analyst', 20, 'unknown', 77000],
    ['Mel Brooks', 'Business Consultant', 89, 'active', 135000],
    ['Harper White', 'Attorney', 52, 'non-active', 420000],
    ['Kris Humphrey', 'Agency Legal Counsel', 80, 'active', 150000],
    ['Frankie Long', 'Industrial Analyst', 31, 'active', 170000],
    ['Brynn Robbins', 'Business Analyst', 22, 'active', 90000],
    ['Justice Mann', 'Business Consultant', 76, 'non-active', 33000],
    ['Addison Navarro', 'Business Management Analyst', 50, 'non-active', 295000],
    ['Jesse Welch', 'Agency Legal Counsel', 28, 'active', 100000],
    ['Eli Mejia', 'Commercial Specialist', 65, 'active', 400000],
    ['Gene Leblanc', 'Industrial Analyst', 100, 'active', 110000],
    ['Danny Leon', 'Computer Scientist', 60, 'non-active', 220000],
    ['Lane Lee', 'Corporate Counselor', 52, 'unknown', 180000],
    ['Jesse Hall', 'Business Analyst', 44, 'active', 99000],
    ['Danni Hudson', 'Agency Legal Counsel', 37, 'active', 90000],
    ['Terry Macdonald', 'Commercial Specialist', 39, 'active', 140000],
    ['Justice Mccarthy', 'Attorney', 26, 'active', 330000],
    ['Silver Carey', 'Computer Scientist', 10, 'active', 250000],
    ['Franky Miles', 'Industrial Analyst', 49, 'active', 190000],
    ['Glen Nixon', 'Corporate Counselor', 15, 'non-active', 80000],
    ['Gabby Strickland', 'Business Process Consultant', 26, 'unknown', 45000],
    ['Mason Ray', 'Computer Scientist', 39, 'active', 142000]
]
