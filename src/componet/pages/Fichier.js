import React, { useEffect, useState } from 'react'
import Hader from '../commonComponet/layout/hader/Hader';
import '../../styles/Fichier.css';
import Select from 'react-select';

const Fichier = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedDepartmentOption, setSelectedDepartmentOption] = useState(null);
    const [selectSubDepartment, setSelectSubDepartment] = useState(null);
    const [selectImageUrl, setSelectImageUrl] = useState([]);
    const [selectPhoneImageUrl, setSelectPhoneImageUrl] = useState()

    const DepartmentName = [
        {
            value: 'Chief Executive Officer',
            label: 'Chief Executive Officer',
            subDepartment: [
                {
                    value: 'Field Insights Management',
                    label: 'Field Insights Management'
                },
                {
                    value: 'Field Order Management',
                    label: 'Field Order Management',
                },
                {
                    value: 'Field Sales Management',
                    label: 'Field Sales Management',

                }
            ]
        },
        {
            value: 'Chief Finance Officer',
            label: 'Chief Finance Officer',
            subDepartment: [
                {
                    value: 'Field Audit',
                    label: 'Field Audit',

                }
            ]
        },
        {
            value: 'Strategy Officer',
            label: 'Chief Strategy Officer',
            subDepartment: [
                {
                    value: 'Field Data',
                    label: 'Field Data',

                },
                {
                    value: 'Field Management',
                    label: 'Field Management',

                }
            ]
        },
        {
            value: 'Data Analyst Manager',
            label: 'Data Analyst Manager',
            subDepartment: [
                {
                    value: 'Field Data Collection',
                    label: 'Field Data Collection',

                }
            ]
        },
        {
            value: 'Finance Manager',
            label: 'Finance Manager',
            subDepartment: [
                {
                    value: 'Finance Field Audit',
                    label: 'Field Audit',

                }
            ]
        },
        {
            value: 'Human Resources Head',
            label: 'Human Resources Head',
            subDepartment: [
                {
                    value: 'bleck',
                    label: 'bleck choklet',


                },
                {
                    value: 'white',
                    label: 'white choklet',

                }
            ]
        },
        {
            value: 'Human Resources Manager',
            label: 'Human Resources Manager',
            subDepartment: [
                {
                    value: 'bleck',
                    label: 'bleck choklet',

                },
                {
                    value: 'white',
                    label: 'white choklet',

                }
            ]
        },
        {
            value: 'Marketing Head',
            label: 'Marketing Head',
            subDepartment: [
                {
                    value: 'Head  choklet',
                    label: 'Head  choklet',

                },
                {
                    value: 'white Marketing Head',
                    label: 'white Marketing Head',

                }
            ]
        },
        {
            value: 'Marketing Manager',
            label: 'Marketing Manager',
            subDepartment: [
                {
                    value: 'Marketing Manager choklet',
                    label: 'Marketing Manager choklet',

                },
                {
                    value: 'white Marketing Manager',
                    label: 'white Marketing Manager',


                }
            ]
        },
        {
            value: 'Operations Head',
            label: 'Operations Head',
            subDepartment: [
                {
                    value: 'Operations Head',
                    label: 'Operations Head',


                },
                {
                    value: 'Head choklet',
                    label: 'Head choklet',

                }
            ]
        },


    ];

    const subtreackMenu = [
        {
            subDepartmentName: 'Defulet',
            menu: [
                {
                    menuName: "Map data layer",
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Ftrack.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fmockup.png&w=384&q=75'
                },
                {
                    menuName: "Blacklisting",
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fgeo.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fgps.png&w=384&q=75'
                }, {
                    menuName: 'Data layer changes',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fbook-order.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Forders.png&w=384&q=75'
                }, {
                    menuName: 'Priority index',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fbook-order.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-target.png&w=384&q=75'
                }, {
                    menuName: 'Economic data',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fbilling.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fview-bill.png&w=384&q=75'
                }
            ]
        },
        {

            subDepartmentName: 'Field Insights Management',
            menu: [
                {
                    menuName: "Map data layer",
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1020.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1016-main.png&w=384&q=75'
                },
                {
                    menuName: "Blacklisting",
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1019.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1020-main.png&w=384&q=75'
                }, {
                    menuName: 'Data layer changes',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1016.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1017-main.png&w=384&q=75'
                }, {
                    menuName: 'Priority index',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1017.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1019-main.png&w=384&q=75'
                }, {
                    menuName: 'Economic data',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1018.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1018-main.png&w=384&q=75'
                }
            ]
        },
        {
            subDepartmentName: 'Field Order Management',
            menu: [
                {
                    menuName: 'Admin permissions',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1024.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1021-main.png&w=384&q=75'
                },
                {
                    menuName: 'Custom admin boundaries',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1022.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1022-main.png&w=384&q=75'
                },
                {
                    menuName: 'Unique id',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1023.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1023-main.png&w=384&q=75'
                },
                {
                    menuName: 'Authorization',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1025.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Fau-Group-1024-main.png&w=384&q=75'
                },
                {
                    menuName: 'Order management',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1021.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Fau-Group-1022-main.png&w=384&q=75'
                },
            ]
        },
        {
            subDepartmentName: 'Field Sales Management',
            menu: [
                {
                    menuName: 'Reporting structure',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-sales-management%2FICON%2Ffa-Group-1030.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-sales-management%2Ffa-Group-1026-main.png&w=384&q=75'
                },
                {
                    menuName: 'Data verification',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-sales-management%2FICON%2Ffa-Group-1026.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-sales-management%2Ffa-Group-1027-main.png&w=384&q=75'
                },
                {
                    menuName: 'Auto fill feature',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-sales-management%2FICON%2Ffa-Group-1026.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-sales-management%2Ffa-Group-1028-main.png&w=384&q=75'
                },
                {
                    menuName: 'Default location',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-sales-management%2FICON%2Ffa-Group-1026.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-sales-management%2Ffa-Group-1029-main.png&w=384&q=75'
                },
                {
                    menuName: 'Data security',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-sales-management%2FICON%2Ffa-Group-1029.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-sales-management%2Ffa-Group-1030-main.png&w=384&q=75'
                },
            ]
        },
        {

            subDepartmentName: 'Field Audit',
            menu: [
                {
                    menuName: 'Signature',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Audit%2FICON%2Ffa-Group-105.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Audit%2Ffa-Group-101-main.png&w=384&q=75'
                },
                {
                    menuName: 'Geofence alert',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-sales-management%2FICON%2Ffa-Group-1029.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Audit%2Ffa-Group-104-main.png&w=384&q=75'
                },
                {
                    menuName: 'Gallery restriction',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Audit%2FICON%2Ffa-Group-102.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Audit%2Ffa-Group-103-main.png&w=384&q=75'
                },
                {
                    menuName: 'Dual location',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Audit%2FICON%2Ffa-Group-103.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Audit%2Ffa-Group-102-main.png&w=384&q=75'
                },
                {
                    menuName: 'OTP verification',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Audit%2FICON%2Ffa-Group-104.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Audit%2Ffa-Group-105-main.png&w=384&q=75'
                },
            ]
        },
        {
            subDepartmentName: 'Field Data',
            menu: [
                {
                    menuName: 'Map Editing',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-data-collection%2FICON%2Ffa-Group-106.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-data-collection%2Ffa-Group-106-main.png&w=384&q=75'
                },
                {
                    menuName: 'Forms',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-data-collection%2FICON%2Ffa-Group-107.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-data-collection%2Ffa-Group-108-main.png&w=384&q=75'
                },
                {
                    menuName: 'Special forms',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-data-collection%2FICON%2Ffa-Group-108.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-data-collection%2Ffa-Group-1010-main.png&w=384&q=75'
                },
                {
                    menuName: 'Forms content',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-data-collection%2FICON%2Ffa-Group-109.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-data-collection%2Ffa-Group-107-main.png&w=384&q=75'
                },
                {
                    menuName: 'Two way entry',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-data-collection%2FICON%2Ffa-Group-1010.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-data-collection%2Ffa-Group-109-main.png&w=384&q=75'
                },
            ]
        },
        {
            subDepartmentName: 'Field Management',
            menu: [
                {
                    menuName: 'Map data layer',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1020.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1016-main.png&w=384&q=75'
                },
                {
                    menuName: 'Blacklisting',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1019.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1020-main.png&w=384&q=75'
                },
                {
                    menuName: 'Data layer changes',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1016.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1017-main.png&w=384&q=75'
                },
                {
                    menuName: 'Priority index',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1017.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1019-main.png&w=384&q=75'
                },
                {
                    menuName: 'Economic data',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1018.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1018-main.png&w=384&q=75'
                },
            ]
        },
        {

            subDepartmentName: 'Field Data Collection',
            menu: [
                {
                    menuName: 'Admin permissions',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1024.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1021-main.png&w=384&q=75'
                },
                {
                    menuName: 'Custom admin boundaries',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1022.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1022-main.png&w=384&q=75'
                },
                {
                    menuName: 'Unique id',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1023.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1023-main.png&w=384&q=75'
                },
                {
                    menuName: 'Authorization',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1025.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Fau-Group-1024-main.png&w=384&q=75'
                },
                {
                    menuName: 'Order management',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1021.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Fau-Group-1022-main.png&w=384&q=75'
                },
            ]
        },
        {

            subDepartmentName: 'Field Audit',
            menu: [
                {
                    menuName: 'Admin permissions',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1024.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1021-main.png&w=384&q=75'
                },
                {
                    menuName: 'Custom admin boundaries',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1022.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1022-main.png&w=384&q=75'
                },
                {
                    menuName: 'Unique id',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1023.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1023-main.png&w=384&q=75'
                },
                {
                    menuName: 'Authorization',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1025.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Fau-Group-1024-main.png&w=384&q=75'
                },
                {
                    menuName: 'Order management',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1021.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Fau-Group-1022-main.png&w=384&q=75'
                },
            ]
        },
        {

            subDepartmentName: 'bleck choklet',
            menu: [
                {
                    menuName: "Map data layer",
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1020.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1016-main.png&w=384&q=75'
                },
                {
                    menuName: "Blacklisting",
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1019.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1020-main.png&w=384&q=75'
                }, {
                    menuName: 'Data layer changes',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1016.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1017-main.png&w=384&q=75'
                }, {
                    menuName: 'Priority index',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1017.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1019-main.png&w=384&q=75'
                }, {
                    menuName: 'Economic data',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1018.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1018-main.png&w=384&q=75'
                }]
        },

        {
            subDepartmentName: 'white choklet',
            menu: [
                {
                    menuName: 'Signature',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Audit%2FICON%2Ffa-Group-105.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Audit%2Ffa-Group-101-main.png&w=384&q=75'
                },
                {
                    menuName: 'Geofence alert',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-sales-management%2FICON%2Ffa-Group-1029.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Audit%2Ffa-Group-104-main.png&w=384&q=75'
                },
                {
                    menuName: 'Gallery restriction',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Audit%2FICON%2Ffa-Group-102.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Audit%2Ffa-Group-103-main.png&w=384&q=75'
                },
                {
                    menuName: 'Dual location',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Audit%2FICON%2Ffa-Group-103.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Audit%2Ffa-Group-102-main.png&w=384&q=75'
                },
                {
                    menuName: 'OTP verification',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Audit%2FICON%2Ffa-Group-104.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Audit%2Ffa-Group-105-main.png&w=384&q=75'
                },
            ]
        }, {

            subDepartmentName: 'bleck choklet',
            menu: [
                {
                    menuName: 'Admin permissions',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1024.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1021-main.png&w=384&q=75'
                },
                {
                    menuName: 'Custom admin boundaries',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1022.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1022-main.png&w=384&q=75'
                },
                {
                    menuName: 'Unique id',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1023.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1023-main.png&w=384&q=75'
                },
                {
                    menuName: 'Authorization',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1025.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Fau-Group-1024-main.png&w=384&q=75'
                },
                {
                    menuName: 'Order management',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1021.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Fau-Group-1022-main.png&w=384&q=75'
                },
            ]
        },
        {

            subDepartmentName: 'white choklet',
            menu: [
                {
                    menuName: 'Admin permissions',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1024.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1021-main.png&w=384&q=75'
                },
                {
                    menuName: 'Custom admin boundaries',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1022.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1022-main.png&w=384&q=75'
                },
                {
                    menuName: 'Unique id',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1023.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1023-main.png&w=384&q=75'
                },
                {
                    menuName: 'Authorization',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1025.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Fau-Group-1024-main.png&w=384&q=75'
                },
                {
                    menuName: 'Order management',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1021.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Fau-Group-1022-main.png&w=384&q=75'
                },
            ]
        },
        {

            subDepartmentName: 'Head  choklet',
            menu: [
                {
                    menuName: 'Admin permissions',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1024.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1021-main.png&w=384&q=75'
                },
                {
                    menuName: 'Custom admin boundaries',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1022.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1022-main.png&w=384&q=75'
                },
                {
                    menuName: 'Unique id',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1023.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1023-main.png&w=384&q=75'
                },
                {
                    menuName: 'Authorization',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1025.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Fau-Group-1024-main.png&w=384&q=75'
                },
                {
                    menuName: 'Order management',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1021.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Fau-Group-1022-main.png&w=384&q=75'
                },
            ]
        },
        {

            subDepartmentName: 'white Marketing Head',
            menu: [
                {
                    menuName: 'Admin permissions',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1024.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1021-main.png&w=384&q=75'
                },
                {
                    menuName: 'Custom admin boundaries',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1022.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1022-main.png&w=384&q=75'
                },
                {
                    menuName: 'Unique id',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1023.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1023-main.png&w=384&q=75'
                },
                {
                    menuName: 'Authorization',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1025.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Fau-Group-1024-main.png&w=384&q=75'
                },
                {
                    menuName: 'Order management',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1021.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Fau-Group-1022-main.png&w=384&q=75'
                },
            ]
        },
        {

            subDepartmentName: 'Marketing Manager choklet',
            menu: [
                {
                    menuName: 'Admin permissions',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1024.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1021-main.png&w=384&q=75'
                },
                {
                    menuName: 'Custom admin boundaries',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1022.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1022-main.png&w=384&q=75'
                },
                {
                    menuName: 'Unique id',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1023.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1023-main.png&w=384&q=75'
                },
                {
                    menuName: 'Authorization',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1025.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Fau-Group-1024-main.png&w=384&q=75'
                },
                {
                    menuName: 'Order management',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1021.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Fau-Group-1022-main.png&w=384&q=75'
                },
            ]
        },
        {

            subDepartmentName: 'white Marketing Manager',
            menu: [
                {
                    menuName: "Map data layer",
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1020.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1016-main.png&w=384&q=75'
                },
                {

                    menuName: "Blacklisting",
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1019.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1020-main.png&w=384&q=75'
                }, {
                    menuName: 'Data layer changes',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1016.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1017-main.png&w=384&q=75'
                }, {
                    menuName: 'Priority index',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1017.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1019-main.png&w=384&q=75'
                }, {
                    menuName: 'Economic data',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1018.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1018-main.png&w=384&q=75'
                }]
        },
        {

            subDepartmentName: 'Operations Head',
            menu: [
                {
                    menuName: "Map data layer",
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1020.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1016-main.png&w=384&q=75'
                },
                {
                    menuName: "Blacklisting",
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1019.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1020-main.png&w=384&q=75'
                }, {
                    menuName: 'Data layer changes',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1016.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1017-main.png&w=384&q=75'
                }, {
                    menuName: 'Priority index',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1017.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1019-main.png&w=384&q=75'
                }, {
                    menuName: 'Economic data',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2FICON%2Ffa-Group-1018.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-Insight-Management%2Ffa-Group-1018-main.png&w=384&q=75'
                }]
        },
        {

            subDepartmentName: 'Head choklet',
            menu: [
                {
                    menuName: 'Admin permissions',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1024.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1021-main.png&w=384&q=75'
                },
                {
                    menuName: 'Custom admin boundaries',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1022.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1022-main.png&w=384&q=75'
                },
                {
                    menuName: 'Unique id',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1023.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Ffa-Group-1023-main.png&w=384&q=75'
                },
                {
                    menuName: 'Authorization',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1025.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Fau-Group-1024-main.png&w=384&q=75'
                },
                {
                    menuName: 'Order management',
                    imageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2FICON%2Ffa-Group-1021.png&w=64&q=75',
                    PhoneImageUrl: 'https://www.intelomatic.ai/_next/image?url=%2Fimages%2Fsuccess-icons%2FField-order-Mangement%2Fau-Group-1022-main.png&w=384&q=75'
                },
            ]
        },
    ]

    useEffect(() => {
        setSelectImageUrl(subtreackMenu[0].menu)
        setSelectPhoneImageUrl(subtreackMenu[0].menu[0].PhoneImageUrl)
    }, [])
    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: "#000", height: '45px', width: "290px", borderRadius: "21px", padding: "1px", textAlign: 'start' }),
        option: (styles, { isFocused, isSelected }) => {
            return {
                ...styles,
                color: isSelected ? 'transparent' : '#fff',
                background: isSelected ? 'linear-gradient(90deg, #b721ff, #21d4fd)' : isFocused ? '#fff' : "#000",
                'WebkitBackgroundClip': 'text',
                'WebkitTextFillColor': isSelected ? 'transparent' : '#fff',
                ':hover': {
                    'WebkitBackgroundClip': isSelected ? 'text' : 'unset',
                    'WebkitTextFillColor': isSelected ? 'transparent' : 'unset',
                    backgroundColor: "#fff",
                    color: "#000"
                },
                height: '40px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                zIndex: '1',
            };
        },
        menu: (styles) => ({ ...styles, backgroundColor: "#000" }),
        menuList: (styles) => ({
            ...styles,
            backgroundColor: "#000",
            maxHeight: '240px', // Set the max-height to enable scrolling
            overflowY: 'auto',  // Enable vertical scrolling
            '::-webkit-scrollbar': {
                width: '8px'
            },
            '::-webkit-scrollbar-thumb': {
                background: '#888',
                borderRadius: '4px'
            },
            '::-webkit-scrollbar-thumb:hover': {
                background: '#555'
            }
        }),
        singleValue: (styles) => ({ ...styles, color: '#fff', padding: '8px' }),
        noOptionsMessage: (styles) => ({ ...styles, backgroundColor: '#000', color: '#fff' }),
        placeholder: (styles) => ({ ...styles, padding: '0px 10px' })
    };

    const handelselect = (value) => {
        // console.log(value.submenu)
        setSelectedDepartmentOption(value.subDepartment);
        setSelectSubDepartment(value.subDepartment[0]);

        // select treack menu
        const submenu = subtreackMenu.filter((item) => item.subDepartmentName === value.subDepartment[0].label)
        // console.log(submenu[0].menu)
        setSelectImageUrl(submenu[0].menu);
        setSelectPhoneImageUrl(submenu[0].menu[0].PhoneImageUrl);
        setActiveIndex(0);
    }

    const handelSubmenu = (value) => {
        // console.log(value)
        if (value) {
            setSelectSubDepartment(value);
            // select treack menu
            const submenu = subtreackMenu.filter((item, i) => {
                // return item.id !== index;
                if (item.subDepartmentName === value.label) {
                    return true
                }
                return false
            })

            // console.log(submenu[0].menu)
            setSelectImageUrl(submenu[0].menu);

            //select phoneImage Url
            console.log(submenu[0].menu[0].PhoneImageUrl)
            setSelectPhoneImageUrl(submenu[0].menu[0].PhoneImageUrl);
            setActiveIndex(0);
        }
    }

    const handelPhoneImage = (item, index) => {
        // console.log(item)
        setSelectPhoneImageUrl(item.PhoneImageUrl)
        setActiveIndex(index);
    }
    return (
        <div>
            <div className='Hader'>
                <Hader />
            </div>
            <div className='container'>
                <div className='heding'>
                    <h2>When you <span className='text-color'>map your journey</span>  with us, you map <span className='text-color'>your success.</span></h2>
                </div>
                <div className='user-select-text'>

                    <span>If you are</span>
                    <div className='select-input'>
                        <div className='dropdwon-selection'>
                            <Select
                                defaultValue={selectedDepartmentOption}
                                onChange={handelselect}
                                options={DepartmentName}
                                styles={colourStyles}
                                placeholder={DepartmentName[0].value}
                                isSearchable={false}
                            />
                        </div>
                    </div>
                    <span>looking for</span>
                    <div className='select-input'>
                        <div className='dropdwon-selection'>
                            <Select
                                defaultValue={selectedDepartmentOption}
                                onChange={handelSubmenu}
                                value={selectSubDepartment}
                                options={selectedDepartmentOption || []}
                                styles={colourStyles}
                                placeholder="Choose frome below"
                                isSearchable={false}
                            />
                        </div>
                    </div>
                    <span>we got you!</span>
                </div>
                <div className='Department-info'>
                    <div className='track-info'>
                        {
                            selectPhoneImageUrl ? <>
                                {
                                    <img src={selectPhoneImageUrl} alt="images" />
                                }
                            </> : null
                        }
                        <div className='track-bottom-border'>
                        </div>
                    </div>
                    <div className='Department-track-menu'>
                        {
                            selectImageUrl ? <>{
                                selectImageUrl.map((item, index) => {
                                    return (
                                        <div
                                            className={`Department-image  ${activeIndex === index ? 'active' : 'false'}`}
                                            key={index}
                                            onClick={() => {
                                                handelPhoneImage(item, index)
                                            }}>
                                            <div className='image'>
                                                <img src={item.imageUrl} alt="images" />
                                            </div>
                                            <h5>{item.menuName}</h5>
                                        </div>
                                    )
                                })
                            }
                            </> : null
                        }

                    </div>
                </div>
                <div className='extrea-detail'>
                    <h4>learn more</h4>
                </div>
            </div>
        </div >
    )
}

export default Fichier;
