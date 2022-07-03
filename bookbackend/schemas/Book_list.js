export default{
    name:'booklist',
    title:'BookList',
    type:'document',
    fields :[
        {
            name:'bookTitle',
            title:'BookTitle',
            type:'string'
        }, 
        {
            name:'bookDes',
            title:'BookDes',
            type:'string'
        },
        {
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
    ]
}