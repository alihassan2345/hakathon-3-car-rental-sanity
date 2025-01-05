
import { defineField , defineType } from "sanity";

export default defineType({
    name:'blog',
    title:'Blog',
    type:'document',
    fields:[
        defineField({
            name:'heading',
            title:'Title',
            type:'string',
        }),
        defineField({
            name:'description',
            title:'Description',
            type:'string',
        }),
        defineField({
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'heading',
                maxLength:96
            }
        }),
        defineField({
            name:'image',
            title:'Image',
            type:'image',
            options:{
                hotspot:true
            }
        }),
        defineField({
            name:'fuel',
            title:'Fuel',
            type:'string',
            
        }),
        defineField({
            name : 'cartype',
            title: 'Cartype',
            type:'string',
        }),
        defineField({
            name : 'transmission',
            title: 'Transmission',
            type:'string',
        }),
        defineField({
            name : 'capacity',
            title: 'Capacity',
            type:'string',
        }),


    ],
})

























// export default {
//     name:'blog',
//     title:'Blog',
//     type:'document',
//     fields:[
//         {
//             name:'title',
//             title:'Title',
//             type:'string',
           
//         },
//         {
//             name:'description',
//             title:'Description',
//             type:'string',
//         },
//         {
//             name:'slug',
//             title:'Slug',
//             type:'slug',
//             options:{
//                 source:'title',
//                 maxLength:96
//             }
//         },
//         {
//             name:'image',
//             title:'Image',
//             type:'image',
//             options:{
//                 hotspot:true
//             }
//         }

//     ],
// }